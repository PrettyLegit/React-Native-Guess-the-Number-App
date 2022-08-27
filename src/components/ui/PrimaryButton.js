import Colors from "@/utils/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  function pressHandler() {
    onPress();
  }

  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerButtonContainer: { borderRadius: 28, margin: 4, overflow: "hidden" },
  innerButtonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
