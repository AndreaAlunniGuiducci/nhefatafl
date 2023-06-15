import {configureStore} from '@reduxjs/toolkit';
import boardSlice from './slices/boardSlice';
import gameAction from './slices/gameAction';

export const store = configureStore({
  reducer: {
    board: boardSlice,
    gameState: gameAction
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
