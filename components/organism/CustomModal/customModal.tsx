import {View, Modal, Text, Pressable} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export const CustomModal = ({modalIsVisible, closeModal, text}: any) => {
  return (
    <Modal
      visible={modalIsVisible}
      animationType="slide"
      onRequestClose={closeModal}
      transparent={true}>
      <View style={styles.innerModal}>
        <Text style={styles.textModal}>{text}</Text>
        <Text></Text>
        <Pressable onPress={closeModal}>
          <Icon name={'closecircleo'} size={30} />
        </Pressable>
      </View>
    </Modal>
  );
};
