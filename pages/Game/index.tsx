import {Pressable, Text, View} from 'react-native';
import {Board} from '../../components/Board';
import {useAppDispatch, useAppSelector} from '../../customHooks/reduxHooks';
import {setNewGame} from '../../store/slices/boardSlice';
import {startGame} from '../../utils/startGame';

export const Game = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector(state => state.board.board);

  const newGame = () => {
    dispatch(setNewGame(startGame(board)));
  };
  return (
    <View>
      <Pressable onPress={newGame}>
        <Text>New Game</Text>
      </Pressable>
      <View style={{flexDirection: 'row'}}>
        <Board />
      </View>
    </View>
  );
};
