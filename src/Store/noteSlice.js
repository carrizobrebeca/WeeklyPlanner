import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNote = createAsyncThunk('note/fetchNote', async () => {
  const response = await axios.get(`http://localhost:3001/note`);
  return response.data;
});

export const fetchNewNote = createAsyncThunk('note/fetchNewNote', async (noteData) => {
  const {title, date, description } = noteData;
  const response = await axios.post('http://localhost:3001/note', { title, date, description  });
  return response.data;
});

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    allnote: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allnote = action.payload; 
      })
      .addCase(fetchNote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewNote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewNote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allnote.push(action.payload); 
      })
      .addCase(fetchNewNote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default noteSlice.reducer;
