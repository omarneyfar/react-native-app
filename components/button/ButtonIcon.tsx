import React, { ReactElement } from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

type ButtonIconProps = {
  icon: ReactElement;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon }) => {
  return (
    <View style={styles.buttonleft}>
      {icon}
    </View>
  );
};
export default ButtonIcon;
const styles = StyleSheet.create({
  buttonleft: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(225, 229, 235, 1)",
    borderRadius: 12,
  },

});
