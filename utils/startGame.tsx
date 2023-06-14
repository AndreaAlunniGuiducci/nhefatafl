import {pieceType} from './utils';

export const startGame = (boardState: any[]) => {
  const newGameState = boardState.map(colItem =>
    colItem.map((rowItem: any) => {
      if (
        (rowItem.row === 0 &&
          (rowItem.col === 3 ||
            rowItem.col === 4 ||
            rowItem.col === 5 ||
            rowItem.col === 6 ||
            rowItem.col === 7)) ||
        (rowItem.row === 1 && rowItem.col === 5) ||
        (rowItem.col === 0 &&
          (rowItem.row === 3 ||
            rowItem.row === 4 ||
            rowItem.row === 5 ||
            rowItem.row === 6 ||
            rowItem.row === 7)) ||
        (rowItem.col === 1 && rowItem.row === 5) ||
        (rowItem.row === 10 &&
          (rowItem.col === 3 ||
            rowItem.col === 4 ||
            rowItem.col === 5 ||
            rowItem.col === 6 ||
            rowItem.col === 7)) ||
        (rowItem.row === 9 && rowItem.col === 5) ||
        (rowItem.col === 10 &&
          (rowItem.row === 3 ||
            rowItem.row === 4 ||
            rowItem.row === 5 ||
            rowItem.row === 6 ||
            rowItem.row === 7)) ||
        (rowItem.col === 9 && rowItem.row === 5)
      ) {
        return {row: rowItem.row, col: rowItem.col, piece: pieceType.light};
      }
      if (
        ((rowItem.col === 3 ||
          rowItem.col === 4 ||
          rowItem.col === 6 ||
          rowItem.col === 7) &&
          rowItem.row === 5) ||
        ((rowItem.col === 4 || rowItem.col === 5 || rowItem.col === 6) &&
          (rowItem.row === 4 || rowItem.row === 6)) ||
        (rowItem.col === 5 && (rowItem.row === 3 || rowItem.row === 7))
      ) {
        return {row: rowItem.row, col: rowItem.col, piece: pieceType.dark};
      }
      if (rowItem.row === 5 && rowItem.col === 5) {
        return {row: rowItem.row, col: rowItem.col, piece: pieceType.king};
      } else {
        return {row: rowItem.row, col: rowItem.col, piece: null};
      }
    }),
  );
  return newGameState;
};
