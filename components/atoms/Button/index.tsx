import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export const Button = ({ buttonContent, buttonAction }: any) => {
  return (
    <Pressable style={styles.mainButton} onPress={buttonAction}>
      <Text style={styles.buttonContent}>{buttonContent}</Text>
    </Pressable>
  );
};
