import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchtodo = createAsyncThunk('todo/fetchtodo', async () => {
  const response = await axios.get(`http://localhost:3001/todo`);
  return response.data;
});

export const fetchNewtodo = createAsyncThunk('todo/fetchNewtodo', async (todoData) => {
  const {title, isCompleted, isFavorite  } = todoData;
  const response = await axios.post('http://localhost:3001/todo', { title, isCompleted, isFavorite  });
  return response.data;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    alltodo: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchtodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.alltodo = action.payload; 
      })
      .addCase(fetchtodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewtodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewtodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.alltodo.push(action.payload); 
      })
      .addCase(fetchNewtodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
