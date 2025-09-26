import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchreminderRow = createAsyncThunk('reminderRow/fetchreminderRow', async () => {
  const response = await axios.get(`http://localhost:3001/reminderrow`);
  return response.data;
});

export const fetchNewreminderRow = createAsyncThunk('reminderRow/fetchNewreminderRow', async (reminderRowData) => {
  const {date,  isFavorite  } = reminderRowData;
  const response = await axios.post('http://localhost:3001/reminderrow', { date,  isFavorite  });
  return response.data;
});

export const fetchNewreminderRowId = createAsyncThunk('reminderRow/fetchNewreminderRowId', async (idReminder) => {
  const response = await axios.get(`http://localhost:3001/reminderrow?idReminder=${idReminder}`);
  return response.data;
});

const reminderRowSlice = createSlice({
  name: 'reminderRow',
  initialState: {
    allreminderRow: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchreminderRow.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchreminderRow.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allreminderRow = action.payload; 
      })
      .addCase(fetchreminderRow.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewreminderRowId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewreminderRowId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allreminderRow = action.payload; 
      })
      .addCase(fetchNewreminderRowId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewreminderRow.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewreminderRow.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allreminderRow.push(action.payload); 
      })
      .addCase(fetchNewreminderRow.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reminderRowSlice.reducer;
