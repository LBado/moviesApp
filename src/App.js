import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './store/api-actions';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import { fetchFromDB, sendToDb } from './store/db-actions';
import Notification from './components/UI/Notification';

let isInitial = true;
let isInitial2 = true;

function App() {
  const [page, setPage] = useState(1);

  const cartIsShown = useSelector((state) => state.ui.showCart);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Fetching movies!');
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (user.cartChanged) {
      console.log('Dispatching data to DB');
      dispatch(
        sendToDb({
          email: user.email,
          password: user.password,
          cartMovies: user.cartMovies,
          cartTotal: user.cartTotal,
        })
      );
    }
  }, [user, dispatch]);

  //če je loggedIn in je email isti kot v db
  //potem dobi od db data drugače naredi novega
  //če je isLoggedIn false potem prikaži login drugače cart

  useEffect(() => {
    if (isInitial2) {
      isInitial2 = false;
      return;
    }

    if (isLoggedIn) {
      dispatch(fetchFromDB());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className="App">
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          description={notification.description}
        />
      )}
      {cartIsShown ? isLoggedIn ? <Cart /> : <Login /> : ''}
      <Header />
      <Main />
      <div>
        <button
          onClick={() => {
            console.log(page);
            if (page === 1) {
              return;
            }
            setPage((prev) => prev - 1);
          }}
        >
          Prev page
        </button>
        <button
          onClick={() => {
            console.log(page);
            setPage((prev) => prev + 1);
          }}
        >
          Next page
        </button>
      </div>
    </div>
  );
}

export default App;
