import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ButtonPromo from "../button/buttonPromo";
import Notification from "../icons/Notification";
import BackHome from "../ui/BackHome";

type NavExamProps = {
  titleButton: string;
  onClickButton: () => void;
};

const NavExam: React.FC<NavExamProps> = ({ titleButton, onClickButton }) => {
  return (
    <View style={styles.navtop}>
      <BackHome />
      <View style={styles.buttonWrapper}>
        <ButtonPromo onclick={onClickButton} title={titleButton}/>
      </View>
      <View style={styles.itemrightwrapper} >
        <Notification badge={true}/>
      </View>
    </View>
  );
};
export default NavExam;
const styles = StyleSheet.create({
  navtop: {
    paddingTop: 20,
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 0,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap:10
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
    paddingRight: 40,
  },

  itemrightwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
  },
  buttonWrapper:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    
  }
});
