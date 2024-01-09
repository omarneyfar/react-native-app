import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArrowBack from '../ui/ArrowBack';

type NavTopProps = {
  title:string
}

const Navtop:React.FC<NavTopProps> = ({title}) => {
  return (
    <View style={styles.navtop}>
      <ArrowBack/>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.itemrightwrapper} />
    </View>
  )
}
export	default Navtop
const styles = StyleSheet.create({
  navtop: {
    paddingTop:20,
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 0,
    paddingVertical: 12,
    paddingHorizontal: 24
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
    paddingRight: 40
  },

  itemrightwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0
  }
})