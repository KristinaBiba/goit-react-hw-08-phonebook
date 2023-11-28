import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      toast.success('You have successfully add new contact!');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('You have successfully delete contact!');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
