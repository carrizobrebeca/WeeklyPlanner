import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFood = createAsyncThunk('food/fetchFood', async () => {
  const response = await axios.get(`http://localhost:3001/food`);
  return response.data;
});

export const fetchNewFood = createAsyncThunk('food/fetchNewFood', async (foodData) => {
  const {hour,  meal } = foodData;
  const response = await axios.post('http://localhost:3001/food', { hour,  meal  });
  return response.data;
});

const foodSlice = createSlice({
  name: 'food',
  initialState: {
    allfood: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFood.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allfood = action.payload; 
      })
      .addCase(fetchFood.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewFood.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewFood.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allfood.push(action.payload); 
      })
      .addCase(fetchNewFood.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
