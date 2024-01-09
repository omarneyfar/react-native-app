import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import ArrowBack from "../ui/ArrowBack";

type NavTopRightIconProps = {
  title: string;
  icon: ReactElement;
};

const NavTopRightIcon: React.FC<NavTopRightIconProps> = ({ title, icon }) => {
  return (
    <View style={styles.navtop}>
      <View style={styles.itemleftwrapper}>
        <ArrowBack />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemrightwrapper}>
      {icon}
      </View>
    </View>
  );
};
export default NavTopRightIcon;
const styles = StyleSheet.create({
  navtop: {
    paddingTop:20,
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 0,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  itemleftwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
  },
  itemrightwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: 0,
  },
  title: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
  },
});
