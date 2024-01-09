import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

type FeatureItemProps = {
  title: string;
  icon: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => {
  return (
    <View style={styles.topay}>
      <View style={styles.buttonBtnregular}>
        <View style={styles.icon}>
          <View style={styles.boundingbox} />
          <Svg
            style={styles.vector}
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <Path d={icon} fill="#4C5970" />
          </Svg>
        </View>
      </View>
      <Text style={styles._topay}>{title}</Text>
    </View>
  );
};
export default FeatureItem;
const styles = StyleSheet.create({
  topay: {
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0,
  },
  buttonBtnregular: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 9999,
  },
  icon: {
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
    right: 2,
    bottom: 3,
    left: 2,
    overflow: "visible",
  },
  _topay: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
});
