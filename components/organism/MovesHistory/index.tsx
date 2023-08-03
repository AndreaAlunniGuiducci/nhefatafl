import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { letter } from "../../../utils/utils";
import { FC } from "react";

interface Props {
  darkTurn: boolean;
  moves: any[];
}

export const MovesHistory: FC<Props> = ({ darkTurn, moves }) => {
  return (
    <View style={styles.historyView}>
      <Text style={styles.turnText}>
        È il turno {darkTurn ? "dei difensori" : "degli attaccanti"}
      </Text>
      <ScrollView>
        {moves.length > 0 &&
          moves.map((item: any, index: number) => {
            if (!item.pieceEated) {
              return (
                <Text key={index}>
                  {item.piece ? "Difensore " : "Attaccante "}muove da{" "}
                  <Text style={styles.piecePosition}>
                    {letter[item.oldRow]}
                    {item.oldCol + 1}
                  </Text>{" "}
                  a{" "}
                  <Text style={styles.piecePosition}>
                    {letter[item.newRow]}
                    {item.newCol + 1}
                  </Text>{" "}
                </Text>
              );
            } else {
              return (
                <Text key={index}>
                  {item.piece ? "Difensore " : "Attaccante "}mangia pedina in{" "}
                  <Text style={styles.piecePosition}>
                    {letter[item.pieceEated.row]}
                    {item.pieceEated.col}
                  </Text>
                </Text>
              );
            }
          }).reverse()}
      </ScrollView>
    </View>
  );
};
