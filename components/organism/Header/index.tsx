import {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './styles';
import {Menu} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';

export const Header = ({navigation, menuItem}: any) => {
  const routes = navigation.getState().routes;
  const title = routes.length > 0 ? routes[routes.length - 1].name : '';
  const instruction = menuItem.find((i: any) => i.title === title)?.description;

  const [modalIsVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.buttonWrapper}>
        <Text>
          <Icon name="info" size={30} onPress={openModal} />
        </Text>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Text style={styles.textMenu} onPress={openMenu}>
              Menu
            </Text>
          }>
          {menuItem.map((item: any, index: number) => (
            <Menu.Item
              key={index}
              onPress={() => {
                closeMenu();
                navigation.navigate(item.title);
              }}
              title={item.title}
            />
          ))}
        </Menu>
      </View>
    </View>
  );
};
