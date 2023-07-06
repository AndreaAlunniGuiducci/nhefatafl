import { Pressable, Text, View } from "react-native";
import { Board } from "../../components/organism/Board";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { setNewGame } from "../../store/slices/boardSlice";
import { startGame } from "../../utils/startGame";
import { useEffect, useState } from "react";
import { CustomModal } from "../../components/organism/CustomModal/customModal";
import { pieceType } from "../../utils/utils";
import { styles } from "./styles";
import { Header } from "../../components/organism/Header";
import { passTurn } from "../../store/slices/gameAction";

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
    dispatch(passTurn(false))
  };

  return (
    <View>
      <CustomModal
        modalIsVisible={modalIsVisible}
        closeModal={() => {
          setModalIsVisible(false);
          // newGame(); // TODO: quando si chiude la modale si riavvia subito una partita???
        }}
        text={`Fine partita \n Ha vinto il giocatore ${
          winner === pieceType.light ? "attaccante" : "in difesa"
        } `}
      />
      <View style={styles.board}>
        <Board />
      </View>
      <View>
        <Text style={styles.turnText}>
          È il turno {darkTurn ? "dei difensori" : "degli attaccanti"}
        </Text>
      </View>
    </View>
  );
};
