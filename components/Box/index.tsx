import {Pressable} from 'react-native';
import {styles} from './styles';
import {startGame} from '../../utils/startGame';
import {Piece} from '../Piece';
import {pieceColor} from '../../utils/utils';

export const Box = ({style, piece}: any) => {
  const pieces = () => {
    if (piece === pieceColor.dark) {
      return <Piece isDark={true} />;
    }
    if (piece === pieceColor.light) {
      return <Piece isDark={false} />;
    }
    if (piece === pieceColor.king) {
      return <Piece isKing={true} />;
    } else {
      return piece;
    }
  };
  return (
    <Pressable style={[styles.box, style]}>
      {/* {startGame(position.row, position.col)} */}
      {pieces}
    </Pressable>
  );
};
