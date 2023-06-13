import { View } from "react-native";
import { darkPiece, lightPiece, styles } from "./styles";
import Draggable from "react-native-draggable";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { movePiece } from "../../store/slices/boardSlice";
import { pieceColor } from "../../utils/utils";
import { useState } from "react";

export const Piece = ({ isDark, isKing, position }: any) => {
  const dispatch = useAppDispatch();
  const pieceMeasure = 25;
  const bgColor = isDark || isKing ? darkPiece : lightPiece;
  const board = useAppSelector((state) => state.board.board);
  const [reverse, setReverse] = useState(false);

  const takePiece = () => {
    const newBoard = board.map((col) =>
      col.map((row: any) => {
        if (position.row === row.row && position.col === row.col) {
          return { ...row, piece: null };
        }
        return row;
      })
    );
    return newBoard;
  };

  const move = (oldPosition: any, newPosition: any) => {
    const oldRow = oldPosition.row;
    const oldCol = oldPosition.col;
    const newRow = oldRow + Math.trunc(newPosition.y / pieceMeasure);
    const newCol = oldCol + Math.trunc(newPosition.x / pieceMeasure);

    if (oldRow === newRow) {
      const rowToMove = takePiece()
        .map((col) => col.filter((row: any) => oldRow === row.row))
        .map((box) => box[0]);
      const startColLimit = rowToMove
        .slice(0, oldCol)
        .findLast((box: any) => box.piece);
      const endColLimit = rowToMove.slice(oldCol).find((box) => box.piece);
    }
    if (oldCol === newCol) {
      const colToMove = takePiece()[oldCol];
      const startRowLimit = colToMove
        .slice(0, oldRow)
        .findLast((box: any) => box.piece);
      const endRowLimit = colToMove.slice(oldRow).find((box: any) => box.piece);
    }

    if (
      (newRow !== oldRow || newCol !== oldCol) &&
      ((newRow === oldRow && newCol !== oldCol) ||
        (newRow !== oldRow && newCol === oldCol))
    ) {
      const newBoard = board.map((col) =>
        col.map((row: any) => {
          if (oldCol === row.col && oldRow === row.row) {
            return { ...row, piece: null };
          }
          if (newCol === row.col && newRow === row.row && !row.piece) {
            return {
              ...row,
              piece: isKing
                ? pieceColor.king
                : isDark
                ? pieceColor.dark
                : pieceColor.light,
            };
          }
          return row;
        })
      );
      dispatch(movePiece(newBoard));
    }
    setReverse(true);
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
        shouldReverse={reverse}
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
