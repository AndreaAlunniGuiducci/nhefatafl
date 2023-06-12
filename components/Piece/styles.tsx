import {StyleSheet} from 'react-native';

export const darkPiece = '#724f10';
export const lightPiece = '#f4d8a5';

export const styles = StyleSheet.create({
  piece: {
    borderWidth: 1,
    // borderRadius: 25,
    backgroundColor: lightPiece,
    width: 25,
    height: 25,
  },
  dragPiece:{
    zIndex: 999
  }
});
