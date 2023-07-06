import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../customHooks/reduxHooks";
import { startGame } from "../../../utils/startGame";
import { passTurn } from "../../../store/slices/gameAction";
import { setNewGame } from "../../../store/slices/boardSlice";

export const Header = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const board = useAppSelector((state) => state.board.board);

  const newGame = () => {
    navigation.navigate('Game')
    dispatch(setNewGame(startGame(board)));
    dispatch(passTurn(false));
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={newGame}>
        <Text style={styles.textNewGame}>New Game</Text>
      </Pressable>
      <Pressable onPress={()=>{navigation.navigate('Regole')}}>
        <Text style={styles.textNewGame}>Regole</Text>
      </Pressable>
    </View>
  );
};
