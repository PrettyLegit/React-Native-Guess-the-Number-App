import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Title from "@/components/Title/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState();

  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponent's Guess</Title>
        <Text></Text>
      </View>
      <View></View>
      <View>{/* log rounds */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
