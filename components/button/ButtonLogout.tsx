import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

type ButtonlogoutProps = {
  onclick:()=>void
};
const Buttonlogout: React.FC<ButtonlogoutProps> = ({onclick}) => {
  return (
    <TouchableOpacity style={styles.buttonlogout} onPress={onclick}>
      <View style={styles.iconleft}>
        <View style={styles.boundingbox} />
        <Svg
          style={styles.vector}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <Path
            d="M2.16667 15.5C1.70833 15.5 1.31597 15.3368 0.989583 15.0104C0.663194 14.684 0.5 14.2917 0.5 13.8333V2.16667C0.5 1.70833 0.663194 1.31597 0.989583 0.989583C1.31597 0.663194 1.70833 0.5 2.16667 0.5H8V2.16667H2.16667V13.8333H8V15.5H2.16667ZM11.3333 12.1667L10.1875 10.9583L12.3125 8.83333H5.5V7.16667H12.3125L10.1875 5.04167L11.3333 3.83333L15.5 8L11.3333 12.1667Z"
            fill="#09111F"
          />
        </Svg>
      </View>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>{`Logout`}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Buttonlogout;

const styles = StyleSheet.create({
  buttonlogout: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(225, 229, 235, 1)",
    borderRadius: 12,
    marginBottom:20
  },
  iconleft: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
  },
  boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 3,
    bottom: 3,
    left: 2,
    overflow: "visible",
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
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
});
