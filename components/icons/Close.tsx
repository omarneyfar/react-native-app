import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Close() {
  return (
    <View style={styles.iconright}>
      <View style={styles.boundingbox} />
      <Svg
        style={styles.vector}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <Path
          d="M6 7.16671L1.91667 11.25C1.76389 11.4028 1.56945 11.4792 1.33334 11.4792C1.09722 11.4792 0.90278 11.4028 0.750003 11.25C0.597225 11.0973 0.520836 10.9028 0.520836 10.6667C0.520836 10.4306 0.597225 10.2362 0.750003 10.0834L4.83334 6.00004L0.750003 1.91671C0.597225 1.76393 0.520836 1.56949 0.520836 1.33337C0.520836 1.09726 0.597225 0.902819 0.750003 0.750041C0.90278 0.597263 1.09722 0.520874 1.33334 0.520874C1.56945 0.520874 1.76389 0.597263 1.91667 0.750041L6 4.83337L10.0833 0.750041C10.2361 0.597263 10.4306 0.520874 10.6667 0.520874C10.9028 0.520874 11.0972 0.597263 11.25 0.750041C11.4028 0.902819 11.4792 1.09726 11.4792 1.33337C11.4792 1.56949 11.4028 1.76393 11.25 1.91671L7.16667 6.00004L11.25 10.0834C11.4028 10.2362 11.4792 10.4306 11.4792 10.6667C11.4792 10.9028 11.4028 11.0973 11.25 11.25C11.0972 11.4028 10.9028 11.4792 10.6667 11.4792C10.4306 11.4792 10.2361 11.4028 10.0833 11.25L6 7.16671Z"
          fill="#4C5970"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  iconright: {
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
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
    overflow: "visible",
  },
});
