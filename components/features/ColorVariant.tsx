import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

type ColorVariantProps = {
  color: string;
  title: string;
};

const ColorVariant: React.FC<ColorVariantProps> = ({ color,title }) => {
  return (
    <View style={styles.black}>
      {/* Vigma RN:: can be replaced with <Iconleft  /> */}
      <View style={styles.iconleft}>
        <View style={styles.boundingbox} />
        <Svg
          style={styles.vector}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <Path
            d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z"
            fill={color}
          />
        </Svg>
      </View>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};
export default ColorVariant;

const styles = StyleSheet.create({
  black: {
    flexShrink: 0,
    backgroundColor: "rgba(240, 242, 245, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    padding: 6,
    borderRadius: 8,
  },
  iconleft: {
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
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
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
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
});
