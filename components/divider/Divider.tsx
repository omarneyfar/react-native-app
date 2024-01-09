import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Line } from "react-native-svg";

export default function Divider() {
  return (
    <View style={styles.divider}>
      <View style={styles.linewrapper}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexShrink: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    marginBottom:20
  },
  linewrapper: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0,
    paddingHorizontal: 0,
    borderBottomWidth:1,
    borderBottomColor:"#E1E5EB"
  },
  line: {
    alignSelf: "stretch",
    flexShrink: 0,
    minHeight: 0.001,
    overflow: "visible",
  },
  _linewrapper: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0,
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  _line: {
    alignSelf: "stretch",
    flexShrink: 0,
    minHeight: 0.001,
    overflow: "visible",
  },
});
