import { Pressable, ScrollView, Text, View } from "react-native";
import { Board } from "../../components/organism/Board";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { setNewGame } from "../../store/slices/boardSlice";
import { startGame } from "../../utils/startGame";
import { useEffect, useState } from "react";
import { CustomModal } from "../../components/organism/CustomModal/customModal";
import { letter, pieceType } from "../../utils/utils";
import { styles } from "./styles";
import { passTurn } from "../../store/slices/gameAction";
import { mainStyles } from "../../mainStyle";
import { MovesHistory } from "../../components/organism/MovesHistory";

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
    <View style={mainStyles.page}>
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
      <MovesHistory moves={moves} darkTurn={darkTurn}/>
    </View>
  );
};
