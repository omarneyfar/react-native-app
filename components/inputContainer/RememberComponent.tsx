import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function RememberComponent() {
  return (
    <View style={styles.checkboxrememberme}>
      <View style={styles.icon}>
        <View style={styles.boundingbox} />
        <Svg style={styles.vector} width="16" height="16" viewBox="0 0 16 16" fill="none" >
          <Path d="M2.16667 15.5C1.70833 15.5 1.31597 15.3368 0.989583 15.0104C0.663194 14.684 0.5 14.2917 0.5 13.8333V2.16667C0.5 1.70833 0.663194 1.31597 0.989583 0.989583C1.31597 0.663194 1.70833 0.5 2.16667 0.5H13.8333C14.2917 0.5 14.684 0.663194 15.0104 0.989583C15.3368 1.31597 15.5 1.70833 15.5 2.16667V13.8333C15.5 14.2917 15.3368 14.684 15.0104 15.0104C14.684 15.3368 14.2917 15.5 13.8333 15.5H2.16667ZM2.16667 13.8333H13.8333V2.16667H2.16667V13.8333Z" fill="#09111F" />
        </Svg>

      </View>
      <Text style={styles.label}>
        {`Remember me`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxrememberme: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4
  },
  icon: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
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
    overflow: "visible"
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  }
})