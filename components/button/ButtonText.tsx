import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {} from "react-native-svg";

type ButtonTextProps = {
  title: string;
  buttonLink: string;
};

const ButtonText: React.FC<ButtonTextProps> = ({ title, buttonLink }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.buttoneditprofile}
      onPress={() => router.push(buttonLink)}
    >
      <View style={styles.textwrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  buttoneditprofile: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(225, 229, 235, 1)",
    borderRadius: 8,
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
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
});
