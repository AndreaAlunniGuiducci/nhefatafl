import { View } from "react-native";
import { Box } from "../Box";
import { styles } from "./styles";
import { useAppSelector } from "../../customHooks/reduxHooks";
import { useEffect } from "react";
import { startGame } from "../../utils/startGame";

export const Board = () => {
  const boardState = useAppSelector((state) => state.board.board);
  const colorTheme = useAppSelector((state) => state.board.colorTheme);

  startGame(boardState);
  useEffect(() => {}, [boardState]);

  return (
    <View style={styles.board}>
      {boardState.map((col, index) => (
        <View key={index}>
          {col.map((row: any) => {
            if (row.row === 5 && row.col === 5) {
              return (
                <Box
                  key={`row_${row.row}-col_${row.col}`}
                  position={{ row: row.row, col: row.col }}
                  piece={row.piece}
                  style={{ backgroundColor: colorTheme.throne }}
                />
              );
            }
            if (
              (row.row === 0 && row.col === 0) ||
              (row.row === col.length - 1 && row.col === 0) ||
              (row.row === col.length - 1 && row.col === col.length - 1) ||
              (row.row === 0 && row.col === col.length - 1)
            ) {
              return (
                <Box
                  key={`row_${row.row}-col_${row.col}`}
                  position={{ row: row.row, col: row.col }}
                  piece={row.piece}
                  style={{ backgroundColor: colorTheme.exitBox }}
                />
              );
            }
            if (
              (row.row % 2 === 0 && row.col % 2 === 0) ||
              (row.row % 2 === 1 && row.col % 2 === 1)
            ) {
              return (
                <Box
                  key={`row_${row.row}-col_${row.col}`}
                  position={{ row: row.row, col: row.col }}
                  piece={row.piece}
                  style={{ backgroundColor: colorTheme.darkBox }}
                />
              );
            } else {
              return (
                <Box
                  key={`row_${row.row}-col_${row.col}`}
                  position={{ row: row.row, col: row.col }}
                  piece={row.piece}
                  style={{ backgroundColor: colorTheme.lightBox }}
                />
              );
            }
          })}
        </View>
      ))}
      {/* {col.map((colItem, index) => (
        <View key={index}>
          {row.map((rowItem, index) => {
            if (
              (rowItem === 0 && colItem === 0) ||
              (rowItem === row.length - 1 && colItem === 0) ||
              (rowItem === row.length - 1 && colItem === col.length - 1) ||
              (rowItem === 0 && colItem === col.length - 1)
            ) {
              return (
                <Box
                  key={`row_${rowItem}-col_${colItem}`}
                  position={{row: rowItem + 1, col: colItem + 1}}
                  style={{backgroundColor: exitBox}}
                />
              );
            }
            if (
              (rowItem % 2 === 0 && colItem % 2 === 0) ||
              (rowItem % 2 === 1 && colItem % 2 === 1)
            ) {
              return (
                <Box
                  key={`row_${rowItem}-col_${colItem}`}
                  position={{row: rowItem + 1, col: colItem + 1}}
                  style={{backgroundColor: darkBox}}
                />
              );
            } else {
              return (
                <Box
                  key={`row_${rowItem}-col_${colItem}`}
                  position={{row: rowItem + 1, col: colItem + 1}}
                  style={{backgroundColor: lightBox}}
                />
              );
            }
          })}
        </View>
      ))} */}
    </View>
  );
};
