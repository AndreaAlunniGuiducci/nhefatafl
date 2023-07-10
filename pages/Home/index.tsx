import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/atoms/Button";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { setNewGame } from "../../store/slices/boardSlice";
import { startGame } from "../../utils/startGame";
import { passTurn } from "../../store/slices/gameAction";

export const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.board);

  const goToRules = () => {
    navigation.navigate("Rules");
  };

  const newGame = () => {
    dispatch(setNewGame(startGame(board)));
    dispatch(passTurn(false));
    navigation.navigate("Game");
  };

  const resumeGame = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.homepage}>
      <Text style={styles.title}>HNEFATAFL</Text>
      <View style={styles.wrapperMenuVoices}>
        <Button buttonContent={"Rules"} buttonAction={goToRules} />
        <Button buttonContent={"New Game"} buttonAction={newGame} />
        <Button buttonContent={"Resume Game"} buttonAction={resumeGame} />
      </View>
    </View>
  );
};
