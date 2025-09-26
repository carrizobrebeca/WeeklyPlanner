import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchweekly = createAsyncThunk('weekly/fetchweekly', async () => {
  const response = await axios.get(`http://localhost:3001/weekly`);
  return response.data;
});

export const fetchNewweekly = createAsyncThunk('weekly/fetchNewweekly', async () => {
  const response = await axios.post('http://localhost:3001/weekly');
  return response.data;
});
export const fetchPutweekly = createAsyncThunk('weekly/fetchPutweekly', async (weeklyData) => {
  const {hour, day, task } = weeklyData;
  const response = await axios.put(`http://localhost:3001/weekly/${hour}`, { day, task });
  return response.data;
});

const weeklySlice = createSlice({
  name: 'weekly',
  initialState: {
    allweekly: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchweekly.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchweekly.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allweekly = action.payload; 
      })
      .addCase(fetchweekly.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewweekly.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewweekly.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allweekly.push(action.payload); 
      })
      .addCase(fetchNewweekly.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
         .addCase(fetchPutweekly.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPutweekly.fulfilled, (state, action) => {
        state.status = 'succeeded';
         const index = state.allweekly.findIndex(
    (item) => item.hour === action.payload.hour
  );
  if (index !== -1) {
    // Reemplaza el elemento existente con la nueva data
    state.allweekly[index] = action.payload;
  } else {
    // Si no lo encuentra, lo agrega (opcional)
    state.allweekly.push(action.payload);
  }
})
     
      .addCase(fetchPutweekly.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weeklySlice.reducer;
