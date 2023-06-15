import { Pressable } from "react-native";
import { styles } from "./styles";
import { Piece } from "../Piece";
import { pieceType } from "../../utils/utils";

export const Box = ({ style, piece, position }: any) => {
  const pieces = () => {
    if (piece === pieceType.dark) {
      return <Piece isDark={true} position={position} />;
    }
    if (piece === pieceType.light) {
      return <Piece isDark={false} position={position} />;
    }
    if (piece === pieceType.king) {
      return <Piece isKing={true} isDark={true} position={position} />;
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
