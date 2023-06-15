import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export const Header = ({ newGame }: any) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={newGame}>
        <Text style={styles.textNewGame}>New Game</Text>
      </Pressable>
    </View>
  );
};
