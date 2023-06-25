import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export const Header = ({ navigation, newGame }: any) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate("Game")}>
        <Text style={styles.textNewGame}>New Game</Text>
      </Pressable>
    </View>
  );
};
