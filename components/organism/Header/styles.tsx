import { StyleSheet } from "react-native";
import { headerFontSize, bgColorHeader } from "../../../mainStyle";

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: bgColorHeader,
    padding: 15,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  headerTitle: {
    fontSize: headerFontSize,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
  },
  textMenu: {
    fontSize: headerFontSize,
  },
});
