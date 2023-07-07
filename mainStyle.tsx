import {Dimensions, StyleSheet} from 'react-native';

export const windowsHeight = Dimensions.get('screen').height;
export const windowsWidth = Dimensions.get('screen').width;
export const headerFontSize = 20;
export const bgColorHeader = '#ffff';

export const mainStyles = StyleSheet.create({
    mainView: {
        // paddingTop: StatusBar.currentHeight,
        borderBottomWidth: 1,
        // backgroundColor: bgColorHeader,
        height: windowsHeight,
      },
});
