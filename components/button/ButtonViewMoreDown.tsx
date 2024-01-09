import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

type ButtonViewMoreVerticalProps = {
  buttonOnclick: () => void;
  status: "down" | "up";
};

const ButtonViewMoreVertical: React.FC<ButtonViewMoreVerticalProps> = ({
  buttonOnclick,
  status,
}) => {
  return (
    <TouchableOpacity style={styles.buttonviewmore} onPress={buttonOnclick}>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>
          {status == "up" ? "View More" : "View Less"}
        </Text>
      </View>
      {/* Vigma RN:: can be replaced with <Icon  /> */}
      <View style={styles.icon}>
        <View style={styles.boundingbox} />
        <Svg
          style={[
            styles.vector,
            {
              transform: [
                {
                  rotateZ: status == "up" ? '0deg' : "-180.00deg" ,
                },
              ],
            },
          ]}
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <Path
            d="M3.72536 4.37536C3.63647 4.37536 3.55314 4.36147 3.47536 4.3337C3.39758 4.30592 3.32536 4.2587 3.2587 4.19203L0.175362 1.1087C0.0531401 0.986473 -0.00519324 0.833696 0.000362319 0.650362C0.00591788 0.467029 0.0698068 0.314251 0.192029 0.192029C0.314251 0.0698068 0.469807 0.00869565 0.658696 0.00869565C0.847585 0.00869565 1.00314 0.0698068 1.12536 0.192029L3.72536 2.79203L6.34203 0.175362C6.46425 0.0531401 6.61703 -0.00519324 6.80036 0.000362319C6.9837 0.00591788 7.13647 0.0698068 7.2587 0.192029C7.38092 0.314251 7.44203 0.469807 7.44203 0.658696C7.44203 0.847585 7.38092 1.00314 7.2587 1.12536L4.19203 4.19203C4.12536 4.2587 4.05314 4.30592 3.97536 4.3337C3.89758 4.36147 3.81425 4.37536 3.72536 4.37536Z"
            fill="#09111F"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonViewMoreVertical;
const styles = StyleSheet.create({
  buttonviewmore: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    paddingVertical: 1,
    paddingHorizontal: 0,
  },
  textwrapper: {
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingHorizontal: 0,
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
  icon: {
    flexShrink: 0,
    height: 16,
    width: 16,
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
    top: 6,
    right: 5,
    bottom: 6,
    left: 4,
    overflow: "visible",
  },
});
