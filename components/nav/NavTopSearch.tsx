import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";
import ArrowBack from "../ui/ArrowBack";
import InputComponent from "../inputContainer/InputComponent";
import SearchGray from "../icons/SearchGray";

type NavtopSearchProps = {
    rightIcon: ReactElement;
    value:string;
    onChangeText:(
      text:string
    )=>void,
    onClickEnter:()=>void
};

const NavtopSearch: React.FC<NavtopSearchProps> = ({rightIcon,value,onChangeText,onClickEnter}) => {
  return (
    <View style={styles.navtop}>
      <ArrowBack />
      <Text style={styles.input}>
        <InputComponent placeholder="Search" icon={<SearchGray />} value={value}onChangeText={onChangeText} type="web-search" onClickEnter={onClickEnter}/>
      </Text>
      {rightIcon}
    </View>
  ); 
};
export default NavtopSearch;

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
    gap:20,
  },

  input: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
    flex:1
  },


});
