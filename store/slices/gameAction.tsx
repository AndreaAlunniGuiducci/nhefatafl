import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface gameState {
  darkTurn: boolean;
  winner: any;
  moves: any[];
}

const initialState: gameState = {
  darkTurn: true,
  winner: null,
  moves: [],
};

const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    passTurn(state, action: PayloadAction<any>) {
      state.darkTurn = !action.payload;
    },
    setWinner(state, action: PayloadAction<any>) {
      state.winner = action.payload;
    },
    setMoves(state, action: PayloadAction<any>) {
      state.moves = [...state.moves, action.payload];
    },
    clearMoves(state) {
      state.moves = [];
    },
  },
});

export default gameStateSlice.reducer;
export const { passTurn } = gameStateSlice.actions;
export const { setWinner } = gameStateSlice.actions;
export const { setMoves } = gameStateSlice.actions;
export const { clearMoves } = gameStateSlice.actions;
