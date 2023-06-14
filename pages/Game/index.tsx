import { Pressable, Text, View } from "react-native";
import { Board } from "../../components/Board";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { setNewGame } from "../../store/slices/boardSlice";
import { startGame } from "../../utils/startGame";
import { useEffect } from "react";

export const Game = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.board);
  const turn = useAppSelector((state) => state.board.turn);

  const newGame = () => {
    dispatch(setNewGame(startGame(board)));
  };

  return (
    <View>
      <Pressable onPress={newGame}>
        <Text>New Game</Text>
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <Board />
      </View>
      <View>
        <Text>È il turno {!turn ? "degli attaccanti" : "dei difensori"} </Text>
      </View>
    </View>
  );
};
