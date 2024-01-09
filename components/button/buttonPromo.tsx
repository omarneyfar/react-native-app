import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
import Promo from "../icons/Promo";

type ButtonPromoProps = {
  onclick: () => void;
  title: string;
};
const ButtonPromo: React.FC<ButtonPromoProps> = ({ onclick, title }) => {
  return (
    <TouchableOpacity style={styles.notification} onPress={onclick}>
      <Promo />
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonPromo;
const styles = StyleSheet.create({
  notification: {
    flexShrink: 0,
    paddingLeft: 10,
    paddingRight: 14,
    backgroundColor: "rgba(240, 242, 245, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 10,
    borderRadius: 9999,
    width: 100,
  },
  iconfilled: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
  },
  vectorStroke: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 2,
    bottom: 2,
    left: 3,
    overflow: "visible",
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
  },
});
