import { Dimensions, StyleSheet } from "react-native";

export const windowsHeight = Dimensions.get("screen").height;

export const mainStyles = StyleSheet.create({
  page: {
    height: windowsHeight
  },
});
