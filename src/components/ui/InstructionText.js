import Colors from "@src/utils/colors";
import { StyleSheet, Text } from "react-native";

const InstructionText = ({ children, customStyle }) => {
  return <Text style={[customStyle, styles.instructionText]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
