import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const row = Array.from(Array(11).keys());
const col = Array.from(Array(11).keys());
const board = col.map((colItem, index) =>
  row.map((rowItem, index) => {
    return {row: rowItem, col: colItem, piece: null};
  }),
);

interface boardState {
  board: any[];
}

const initialState: boardState = {
  board: board,
};

const boardSlice = createSlice({
  name: 'boardPosition',
  initialState,
  reducers: {
    setNewGame(state, action: PayloadAction<any>) {
      state.board = action.payload
    },
  },
});

export default boardSlice.reducer;
export const {setNewGame} = boardSlice.actions;
