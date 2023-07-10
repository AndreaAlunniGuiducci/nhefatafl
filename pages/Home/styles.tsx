import { StatusBar, StyleSheet } from "react-native";
import { windowsHeight } from "../../mainStyle";

export const styles = StyleSheet.create({
  homepage: {
    paddingVertical: 20,
    height: windowsHeight / 1.12,
    alignItems: "center",
  },
  title: {
    fontFamily: "Unbounded-Bold",
    fontSize: 50,
  },
  wrapperMenuVoices: {
    alignItems: "center",
    justifyContent: "space-around",
    height: windowsHeight / 1.5,
  },
  menuVoice:{
    fontFamily: 'Unbounded-Light',
    fontSize: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 20

  }
});
