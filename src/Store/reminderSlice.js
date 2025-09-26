import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReminder = createAsyncThunk('reminder/fetchReminder', async () => {
  const response = await axios.get(`http://localhost:3001/reminder`);
  return response.data;
});

export const fetchNewReminder = createAsyncThunk('reminder/fetchNewReminder', async (reminderData) => {
  const {date,  isFavorite  } = reminderData;
  const response = await axios.post('http://localhost:3001/reminder', { date,  isFavorite  });
  return response.data;
});

const reminderSlice = createSlice({
  name: 'reminder',
  initialState: {
    allreminder: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReminder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReminder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allreminder = action.payload; 
      })
      .addCase(fetchReminder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewReminder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewReminder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allreminder.push(action.payload); 
      })
      .addCase(fetchNewReminder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reminderSlice.reducer;
