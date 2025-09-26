import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';  
import noteReducer from './noteSlice';
import gastoReducer from './gastoSlice';
import reminderReducer from './reminderSlice';
import reminderRowReducer from './reminderRowSlice';
import todoReducer from './todoSlice';
import todoRowReducer from './todoRowSlice';
import weeklyReducer from './weeklySlice';
const store = configureStore({
  reducer: {
     weekly: weeklyReducer,
    todoRow: todoRowReducer,
      todo: todoReducer,
          reminderRow: reminderRowReducer,
      reminder: reminderReducer,
    gasto: gastoReducer,
    note: noteReducer,
    food: foodReducer,
  },
});

export default store;