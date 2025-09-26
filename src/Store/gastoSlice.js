import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGasto = createAsyncThunk('food/fetchGasto', async () => {
  const response = await axios.get(`http://localhost:3001/gasto`);
  return response.data;
});

export const fetchGastoDate = createAsyncThunk('food/fetchGastoDate', async (month) => {
  const response = await axios.get(`http://localhost:3001/gasto?month=${month}`);
  return response.data;
});

export const fetchNewGasto = createAsyncThunk('gasto/fetchNewGasto', async (gastoData) => {
  const {category, description, date, price, detail } = gastoData;
  const response = await axios.post('http://localhost:3001/gasto', { category, description, date, price, detail  });
  return response.data;
});

const gastoSlice = createSlice({
  name: 'gasto',
  initialState: {
    allgasto: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGasto.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGasto.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allgasto = action.payload; 
      })
      .addCase(fetchGasto.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchGastoDate.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGastoDate.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allgasto = action.payload; 
      })
      .addCase(fetchGastoDate.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewGasto.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewGasto.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allgasto.push(action.payload); 
      })
      .addCase(fetchNewGasto.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default gastoSlice.reducer;
