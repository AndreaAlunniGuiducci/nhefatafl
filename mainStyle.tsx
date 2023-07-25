import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const windowsHeight = Dimensions.get("screen").height;
export const windowsWidth = Dimensions.get("screen").width;
export const headerFontSize = 20;
export const bgColorHeader = "#ffff";

export const mainStyles = StyleSheet.create({
  mainView: {
    borderBottomWidth: 1,
    backgroundColor: bgColorHeader,
    height: windowsHeight,
  },
  page:{
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});
