import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {} from "react-native-svg";

type ButtonSubmitProps = {
  title: string;
  onClick: () => void;
};

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ onClick, title }) => {
  return (
    <TouchableOpacity style={styles.buttonsignup} onPress={onClick}>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonSubmit;
const styles = StyleSheet.create({
  buttonsignup: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(9, 17, 31, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderRadius: 12,
    marginBottom: 24,
  },
  textwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 4,
  },
  text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
});
