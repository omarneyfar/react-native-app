import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {} from "react-native-svg";
type ButtonTagProps = {
    title: string;
    action: ()=>void;
  };
  
  const ButtonTag: React.FC<ButtonTagProps> = ({ title, action }) => {
  
  return (
    <TouchableOpacity style={styles.item} onPress={action}>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default ButtonTag
const styles = StyleSheet.create({
  item: {
    flexShrink: 0,
    backgroundColor: "rgba(240, 242, 245, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    padding: 6,
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
