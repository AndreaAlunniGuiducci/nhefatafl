import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native-paper";
import { letter } from "../../../utils/utils";

export const MovesHistory = ({ darkTurn, moves }: any) => {
  return (
    <View style={styles.historyView}>
      <Text style={styles.turnText}>
        È il turno {darkTurn ? "dei difensori" : "degli attaccanti"}
      </Text>
      <ScrollView>
        {moves.length > 0 &&
          moves.map((item: any, index: number) => {
            return (
              <Text key={index}>
                {item.piece ? "Difensore " : "Attaccante "}muove da{" "}
                <Text style={styles.piecePosition}>
                  {letter[item.oldRow]} {item.oldCol + 1}
                </Text>{" "}
                a{" "}
                <Text style={styles.piecePosition}>
                  {letter[item.newRow]} {item.newCol + 1}
                </Text>{" "}
              </Text>
            );
          })}
      </ScrollView>
    </View>
  );
};
