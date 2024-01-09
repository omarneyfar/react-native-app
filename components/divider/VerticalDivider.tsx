import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Line } from "react-native-svg";

export default function VerticalDivider() {
  return (
    <View style={styles.divider}>
      <View style={styles.linewrapper}>
        <Svg
          style={styles.line}
          width="1"
          height="10"
          viewBox="0 0 1 10"
          fill="none"
        >
          <Line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#E1E5EB" />
        </Svg>
      </View>
      <View style={styles._linewrapper}>
        <Svg
          style={styles._line}
          width="1"
          height="10"
          viewBox="0 0 1 10"
          fill="none"
        >
          <Line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#E1E5EB" />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexShrink: 0,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0,
  },
  linewrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 6,
  },
  line: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 10,
    overflow: "visible",
  },
  _linewrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 6,
  },
  _line: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 10,
    overflow: "visible",
  },
});
