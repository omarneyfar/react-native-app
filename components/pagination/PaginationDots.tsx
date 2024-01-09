import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";

type DotProps = {
  active: boolean;
};

const Dot: React.FC<DotProps> = ({ active }) => (
  <View style={styles.dot}>
    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <Circle cx="4" cy="4" r="4" transform="rotate(-90 4 4)" fill={active ? "#09111F" : "white"} />
    </Svg>
  </View>
);

type PaginationProps = {
  totalItems: number;
  activeIndex: number;
};

const Pagination: React.FC<PaginationProps> = ({ totalItems, activeIndex }) => {
  return (
    <View style={styles.pagination}>
      {[...Array(totalItems)].map((_, index) => (
        <Dot key={index} active={index === activeIndex} />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 12,
  },
  dot: {
    height: 8,
    width: 8,
  },
});
