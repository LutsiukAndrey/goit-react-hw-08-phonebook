import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { getToken } from 'redux/auth/authSelectors';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const setToken = token => {
//   if (token) {
//     return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
//   }
//   instance.defaults.headers.common.authorization = '';
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      // setToken(useSelector(getToken));
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      console.log('asdfasdf');
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContacts = createAsyncThunk(
  'contacts/addNewContacts',
  async (data, { rejectWithValue }) => {
    try {
      // setToken(useSelector(getToken));

      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteApiContact = createAsyncThunk(
  'contacts/deleteApiContact',
  async (id, { rejectWithValue }) => {
    try {
      // setToken(useSelector(getToken));

      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
