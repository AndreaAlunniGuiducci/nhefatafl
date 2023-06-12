import { Pressable } from "react-native";
import { styles } from "./styles";
import { Piece } from "../Piece";
import { pieceColor } from "../../utils/utils";

export const Box = ({ style, piece, position }: any) => {
  const pieces = () => {
    if (piece === pieceColor.dark) {
      return <Piece isDark={true} position={position} />;
    }
    if (piece === pieceColor.light) {
      return <Piece isDark={false} position={position} />;
    }
    if (piece === pieceColor.king) {
      return <Piece isKing={true} position={position} />;
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
