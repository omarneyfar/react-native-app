import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function ArrowRight() {
  return (
    <View style={styles.icon}>
      <View style={styles.boundingbox} />
      <Svg
        style={styles.vector}
        width="7"
        height="10"
        viewBox="0 0 7 10"
        fill="none"
      >
        <Path
          d="M1.08329 9.41663C0.930515 9.26385 0.854126 9.0694 0.854126 8.83329C0.854126 8.59718 0.930515 8.40274 1.08329 8.24996L4.33329 4.99996L1.08329 1.74996C0.930515 1.59718 0.854126 1.40274 0.854126 1.16663C0.854126 0.930515 0.930515 0.73607 1.08329 0.583293C1.23607 0.430515 1.43051 0.354126 1.66663 0.354126C1.90274 0.354126 2.09718 0.430515 2.24996 0.583293L6.08329 4.41663C6.16663 4.49996 6.22565 4.59024 6.26038 4.68746C6.2951 4.78468 6.31246 4.88885 6.31246 4.99996C6.31246 5.11107 6.2951 5.21524 6.26038 5.31246C6.22565 5.40968 6.16663 5.49996 6.08329 5.58329L2.24996 9.41663C2.09718 9.5694 1.90274 9.64579 1.66663 9.64579C1.43051 9.64579 1.23607 9.5694 1.08329 9.41663Z"
          fill="#09111F"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
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
    top: 5,
    right: 7,
    bottom: 5,
    left: 8,
    overflow: "visible",
  },
});
