import { Pressable, Text, View } from "react-native";
import { Board } from "../../components/organism/Board";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { setNewGame } from "../../store/slices/boardSlice";
import { startGame } from "../../utils/startGame";
import { useEffect, useState } from "react";
import { CustomModal } from "../../components/organism/CustomModal/customModal";
import { letter, pieceType } from "../../utils/utils";
import { styles } from "./styles";
import { passTurn } from "../../store/slices/gameAction";

export const Game = ({ navigation }: any) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.board);
  const darkTurn = useAppSelector((state) => state.gameState.darkTurn);
  const winner = useAppSelector((state) => state.gameState.winner);
  const moves = useAppSelector((state) => state.gameState.moves);

  useEffect(() => {
    if (winner) {
      setModalIsVisible(true);
    }
  }, [winner]);

  const newGame = () => {
    dispatch(setNewGame(startGame(board)));
    dispatch(passTurn(false));
  };

  return (
    <View>
      <CustomModal
        modalIsVisible={modalIsVisible}
        closeModal={() => {
          setModalIsVisible(false);
          navigation.navigate("Home");
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
        {moves.length > 0 &&
          moves.map((item, index) => {
            return (
              <Text key={index}>
                {item.piece ? "Difensore " : "Attaccante "}muove da{" "}
                {letter[item.oldRow]} {item.oldCol} a {letter[item.newRow]} {item.newCol}
              </Text>
            );
          })}
      </View>
    </View>
  );
};
