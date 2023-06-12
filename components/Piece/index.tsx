import { View } from "react-native";
import { darkPiece, lightPiece, styles } from "./styles";
import Draggable from "react-native-draggable";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { movePiece } from "../../store/slices/boardSlice";
import { pieceColor } from "../../utils/utils";

export const Piece = ({ isDark, isKing, position }: any) => {
  const dispatch = useAppDispatch();
  const pieceMeasure = 25;
  const bgColor = isDark || isKing ? darkPiece : lightPiece;
  const board = useAppSelector((state) => state.board.board);

  const move = (oldPosition: any, newPosition: any) => {
    const oldRow = oldPosition.row;
    const oldCol = oldPosition.col;
    const newRow = oldRow + Math.trunc(newPosition.y / 25);
    const newCol = oldCol + Math.trunc(newPosition.x / 25);

    const newBoard = board.map((col) =>
      col.map((row: any) => {
        if (oldCol === row.col && oldRow === row.row) {
          return { ...row, piece: null };
        }
        if (newCol === row.col && newRow === row.row) {
          return { ...row, piece: isDark ? pieceColor.dark : pieceColor.light };
        }
        return row;
      })
    );
    dispatch(movePiece(newBoard));
    console.log(newBoard);
  };

  return (
    <View style={styles.dragPiece}>
      <Draggable
        x={-pieceMeasure / 2}
        y={-pieceMeasure / 2}
        isCircle={!isKing}
        renderSize={pieceMeasure}
        renderColor={bgColor}
        renderText=""
        onDragRelease={(e, gestureState) => {
          move(position, { x: gestureState.dx, y: gestureState.dy });
        }}
      />
    </View>
    // <Pressable
    //   onPress={e => {
    //     e.preventDefault();
    //     move(position)
    //   }}
    //   style={[
    //     styles.piece,
    //     {backgroundColor: bgColor, borderRadius: isKing ? 1 : 25},
    //   ]}></Pressable>
  );
};
