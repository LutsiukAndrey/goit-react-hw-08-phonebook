import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false,
  },
  reducers: {
    toggleDarkMode: state => {
      state.open ? (state.open = false) : (state.open = true);
    },
  },
});

export const { toggleDarkMode } = modalSlice.actions;

export default modalSlice.reducer;
