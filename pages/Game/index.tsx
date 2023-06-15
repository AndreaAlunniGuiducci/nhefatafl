import { Pressable, Text, View } from "react-native";
import { Board } from "../../components/Board";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { setNewGame } from "../../store/slices/boardSlice";
import { startGame } from "../../utils/startGame";
import { useEffect, useState } from "react";
import { CustomModal } from "../../components/customModal";
import { pieceType } from "../../utils/utils";

export const Game = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.board);
  const darkTurn = useAppSelector((state) => state.gameState.darkTurn);
  const winner = useAppSelector((state) => state.gameState.winner);

  useEffect(() => {
    if (winner) {
      setModalIsVisible(true);
    }
  }, [winner]);

  const newGame = () => {
    dispatch(setNewGame(startGame(board)));
  };

  return (
    <View>
      <Pressable onPress={newGame}>
        <Text>New Game</Text>
      </Pressable>
      <CustomModal
        modalIsVisible={modalIsVisible}
        closeModal={() => {
          setModalIsVisible(false);
          newGame();
        }}
        text={`Fine partita \n Ha vinto il giocatore ${
          winner === pieceType.light ? "attaccante" : "in difesa"
        } `}
      />
      <View style={{ flexDirection: "row" }}>
        <Board />
      </View>
      <View>
        <Text>
          È il turno {darkTurn ? "dei difensori" : "degli attaccanti"}
        </Text>
      </View>
    </View>
  );
};
