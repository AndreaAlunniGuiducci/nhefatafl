import {Pressable} from 'react-native';
import {darkPiece, lightPiece, styles} from './styles';
import { move } from '../../utils/move';

export const Piece = ({isDark, isKing, position}: any) => {
  const bgColor = isDark || isKing ? darkPiece : lightPiece;
 
  return (
    <Pressable
      onPress={e => {
        e.preventDefault();
        move(position)
      }}
      style={[
        styles.piece,
        {backgroundColor: bgColor, borderRadius: isKing ? 1 : 25},
      ]}></Pressable>
  );
};
