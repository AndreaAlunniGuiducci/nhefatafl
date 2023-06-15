import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface gameState {
  darkTurn: boolean;
  winner: any;
}

const initialState: gameState = {
  darkTurn: true,
  winner: null,
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
  },
});

export default gameStateSlice.reducer;
export const { passTurn } = gameStateSlice.actions;
export const { setWinner } = gameStateSlice.actions;
