import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  password: '',
  isLoggedIn: false,
  cartMovies: [],
  cartTotal: 0,
  cartChanged: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addMovieToCart (state, action) {
      const newMovie = action.payload;
      state.cartChanged = true;
      state.cartMovies.push(newMovie);
      state.cartTotal += action.payload.price;
    },
    userLogin (state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
      console.log(state.email);
      console.log(state.password);
      //if login is true v App potem fetchamoCart
      //če nismo loggedIn potem je rent disabled
    },
    setCart (state, action) {
      if (state.email === action.payload.email) {
        state.cartMovies = action.payload.cartMovies;
        state.cartTotal = action.payload.cartTotal;
      }
      //else ne naredimo nič
    }
  }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;