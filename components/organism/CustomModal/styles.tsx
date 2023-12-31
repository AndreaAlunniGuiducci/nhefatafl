import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  innerModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textModal:{
    fontSize: 16,
    textAlign: 'center'
  }
});
