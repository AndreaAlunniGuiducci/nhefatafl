import { StyleSheet } from "react-native";
import { windowsHeight } from "../../../mainStyle";

export const styles = StyleSheet.create({
  historyView: {
    height: windowsHeight / 2.4,
  },
  movesList: {
    flexDirection: "column-reverse",
    backgroundColor: '#b00b'
  },
  turnText: {
    textAlign: "center",
    fontSize: 16,
  },
  piecePosition: {
    fontWeight: "bold",
  },
});
