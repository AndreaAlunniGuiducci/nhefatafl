import { StyleSheet } from "react-native";
import { windowsHeight } from "../../mainStyle";

export const styles = StyleSheet.create({
  homepage: {
    paddingVertical: 20,
    height: windowsHeight / 1.12,
    alignItems: "center",
  },
  title: {
    minWidth: 300,
    fontFamily: "Unbounded-Bold",
    fontSize: 50,
  },
  wrapperMenuVoices: {
    alignItems: "center",
    justifyContent: "space-around",
    height: windowsHeight / 1.5,
  },
});
