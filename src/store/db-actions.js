import { uiActions } from "./ui-slice";
import { userActions } from "./user-slice";

const url =
  'https://react-movie-db-6eecd-default-rtdb.europe-west1.firebasedatabase.app/user.json';

export const sendToDb = (user) => {
  return async (dispatch) => {
    console.log('Sending data to DB');
    const sendData = async () => {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          cartMovies: user.cartMovies,
          cartTotal: user.cartTotal,
        }),
      });

      if (!response.ok) {
        throw new Error('Putting data failed!');
      }
    };

    try {
      await sendData();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'SUCCESS',
          description: 'User data sent successfuly',
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'ERROR',
          description: 'User data sending failed',
        })
      );
    }
  };
};

export const fetchFromDB = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Fetching data failed');
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await fetchData();
      console.log(userData);
      dispatch(userActions.setCart(userData));
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'SUCCESS',
          description: 'User data fetched successfully',
        })
      );
    } catch(err) {
      console.log(err);
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'ERROR',
          description: 'Fetching user data failed',
        })
      );
    }
  }
};
