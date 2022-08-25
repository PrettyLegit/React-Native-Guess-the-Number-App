import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NumberContainer = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({});
