import { StyleSheet } from "react-native";
import { gameDimension } from "../../../utils/gameSetting";

export const styles = StyleSheet.create({
  box: {
    borderWidth: 0.5,
    height: gameDimension["classic"].boxDimension,
    width: gameDimension["classic"].boxDimension,
    alignItems: "center",
    justifyContent: "center",
  },
});
