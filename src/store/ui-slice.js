import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCart: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      console.log('toggling cart in dispatch');
      if (state.showCart) {
        state.showCart = false;
        return;
      }
      state.showCart = true;
      console.log(state.showCart);
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        description: action.payload.description,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
