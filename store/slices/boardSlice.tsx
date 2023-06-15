import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { colorTheme } from "../../utils/gameSetting";
import { pieceType } from "../../utils/utils";

const row = Array.from(Array(11).keys());
const col = Array.from(Array(11).keys());
const board = col.map((colItem, index) =>
  row.map((rowItem, index) => {
    return { row: rowItem, col: colItem, piece: null };
  })
);

interface boardState {
  board: any[];
  colorTheme: any;
}

const initialState: boardState = {
  board: board,
  colorTheme: colorTheme.classic,
};

const boardSlice = createSlice({
  name: "boardPosition",
  initialState,
  reducers: {
    setNewGame(state, action: PayloadAction<any>) {
      state.board = action.payload;
    },
    movePiece(state, action: PayloadAction<any>) {
      state.board = action.payload;
    },
  },
});

export default boardSlice.reducer;
export const { setNewGame } = boardSlice.actions;
export const { movePiece } = boardSlice.actions;
