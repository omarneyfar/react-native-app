import React, { ReactElement } from "react";
import { View,  StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../ui/Logo";
import { useRouter } from "expo-router";

type NavTopLogoProps = {
  icon: ReactElement;
};

const NavTopLogo: React.FC<NavTopLogoProps> = ({ icon }) => {
  const router=useRouter();
  return (
    <View style={styles.navtop}>
      <TouchableOpacity onPress={()=>router.push("/")}>
        <Logo />
      </TouchableOpacity>
      {icon}
    </View>
  );
};
export default NavTopLogo;
const styles = StyleSheet.create({
  navtop: {
    paddingTop:20,
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
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
