import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registration',
  async (form, { rejectWithValue }) => {
    try {
      const {
        data: { user, token },
      } = await axios.post(`/users/signup`, form);

      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/login',
  async (form, { rejectWithValue }) => {
    try {
      const {
        data: { user, token },
      } = await axios.post(`/users/login`, form);

      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    try {
      setAuthHeader(token);
      const { data } = await axios.get(`/users/current`, token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    try {
      setAuthHeader(token);
      const { data } = await axios.post(`/users/logout`, token);
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
