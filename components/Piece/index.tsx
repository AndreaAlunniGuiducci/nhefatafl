import { View } from "react-native";
import { darkPiece, lightPiece, styles } from "./styles";
import Draggable from "react-native-draggable";
import { useAppDispatch, useAppSelector } from "../../customHooks/reduxHooks";
import { movePiece } from "../../store/slices/boardSlice";
import { pieceColor } from "../../utils/utils";
import { useEffect, useState } from "react";

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

  const limitParam = (oldRow: any, newRow: any, oldCol: any, newCol: any) => {
    if (oldRow === newRow) {
      const rowToMove = takePiece().map(
        (col) => col.filter((row: any) => oldRow === row.row)[0]
      );
      const startColLimit = rowToMove
        .slice(0, oldCol)
        .findLast((box: any) => box.piece);
      const endColLimit = rowToMove.slice(oldCol).find((box) => box.piece);
      return {
        start: startColLimit ?? { row: -1, col: -1 },
        end: endColLimit ?? {
          row: rowToMove.length + 1,
          col: rowToMove.length + 1,
        },
      };
    }
    if (oldCol === newCol) {
      const colToMove = takePiece()[oldCol];
      const startRowLimit = colToMove
        .slice(0, oldRow)
        .findLast((box: any) => box.piece);
      const endRowLimit = colToMove.slice(oldRow).find((box: any) => box.piece);
      return {
        start: startRowLimit ?? { row: -1, col: -1 },
        end: endRowLimit ?? {
          row: colToMove.length + 1,
          col: colToMove.length + 1,
        },
      };
    }
  };

  const eatingPiece = (board: any, newRow: any, newCol: any) => {
    const rows = board[newCol];
    const rowToCheck = [
      rows[newRow - 2],
      rows[newRow - 1],
      rows[newRow],
      rows[newRow + 1],
      rows[newRow + 2],
    ];
    const columns = board.map(
      (col: any) => col.filter((row: any) => row.row === newRow)[0]
    );
    const colToCheck = [
      columns[newCol - 2],
      columns[newCol - 1],
      columns[newCol],
      columns[newCol + 1],
      columns[newCol + 2],
    ];

    const pieceEated = (arrayToChek: any, index: number) => {
      return board.map((col: any) =>
        col.map((row: any) => {
          if (
            row.row === arrayToChek[index].row &&
            row.col === arrayToChek[index].col
          ) {
            return { ...arrayToChek[index], piece: null };
          }
          return row;
        })
      );
    };

    if (
      (rowToCheck[2].piece === rowToCheck[0]?.piece ||
        rowToCheck[0]?.row === 0) &&
      rowToCheck[1].piece &&
      rowToCheck[3].piece !== pieceColor.king &&
      rowToCheck[2].piece !== rowToCheck[1].piece
    ) {
      return pieceEated(rowToCheck, 1);
    }
    if (
      (rowToCheck[2].piece === rowToCheck[4]?.piece ||
        rowToCheck[4]?.row === 10) &&
      rowToCheck[3].piece &&
      rowToCheck[3].piece !== pieceColor.king &&
      rowToCheck[2].piece !== rowToCheck[3].piece
    ) {
      return pieceEated(rowToCheck, 3);
    }
    if (
      (colToCheck[2].piece === colToCheck[0]?.piece ||
        colToCheck[0]?.row === 0) &&
      colToCheck[1].piece &&
      colToCheck[3].piece !== pieceColor.king &&
      colToCheck[2].piece !== colToCheck[1].piece
    ) {
      return pieceEated(colToCheck, 1);
    }
    if (
      (colToCheck[2].piece === colToCheck[4]?.piece ||
        colToCheck[4]?.row === 10) &&
      colToCheck[3].piece &&
      colToCheck[3].piece !== pieceColor.king &&
      colToCheck[2].piece !== colToCheck[3].piece
    ) {
      return pieceEated(colToCheck, 3);
    }

    return board;
  };

  const move = (oldPosition: any, newPosition: any) => {
    const oldRow = oldPosition.row;
    const oldCol = oldPosition.col;
    const newRow = oldRow + Math.trunc(newPosition.y / pieceMeasure);
    const newCol = oldCol + Math.trunc(newPosition.x / pieceMeasure);
    const limit = limitParam(oldRow, newRow, oldCol, newCol);

    if (
      (newRow !== oldRow || newCol !== oldCol) &&
      ((newRow === oldRow && newCol !== oldCol) ||
        (newRow !== oldRow && newCol === oldCol)) &&
      ((limit?.start.col < newCol && limit?.end.col > newCol) ||
        (limit?.start.row < newRow && limit?.end.row > newRow))
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
      dispatch(movePiece(eatingPiece(newBoard, newRow, newCol)));
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
  );
};
