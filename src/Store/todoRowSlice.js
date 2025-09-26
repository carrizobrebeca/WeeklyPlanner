import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchtodoRow = createAsyncThunk('todoRow/fetchtodoRow', async () => {
  const response = await axios.get(`http://localhost:3001/todorow`);
  return response.data;
});

export const fetchNewtodoRow = createAsyncThunk('todoRow/fetchNewtodoRow', async (todoRowData) => {
  const {idToDo, name, trimeEnd } = todoRowData;
  const response = await axios.post('http://localhost:3001/todorow', { idToDo, name, trimeEnd   });
  return response.data;
});

export const fetchNewtodoRowId = createAsyncThunk('todoRow/fetchNewtodoRowId', async (idToDo) => {
    const response = await axios.get(
      `http://localhost:3001/todorow/${idToDo}`
    );
    return { idToDo, rows: response.data };
  });

const todoRowSlice = createSlice({
  name: 'todoRow',
 initialState: {
    byTodoId: {}, // en vez de un array global
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtodoRow.pending, (state) => {
        state.status = 'loading';
      })  
      .addCase(fetchtodoRow.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchtodoRow.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // rearmamos el objeto byTodoId
        state.byTodoId = {};
        action.payload.forEach((row) => {
          if (!state.byTodoId[row.idToDo]) {
            state.byTodoId[row.idToDo] = [];
          }
          state.byTodoId[row.idToDo].push(row);
        });
      })
      // traer rows por idToDo
      .addCase(fetchNewtodoRowId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.byTodoId[action.payload.idToDo] = action.payload.rows;
      })
      // crear un nuevo row
      .addCase(fetchNewtodoRow.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const row = action.payload;
        if (!state.byTodoId[row.idToDo]) {
          state.byTodoId[row.idToDo] = [];
        }
        state.byTodoId[row.idToDo].push(row);
      })
 
      .addCase(fetchNewtodoRowId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewtodoRow.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewtodoRow.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoRowSlice.reducer;
