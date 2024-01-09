import { useRouter } from "expo-router";
import React, { ReactElement } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

type ButtonParametersProps = {
  title: string;
  icon: string;
  iconRight: ReactElement;
  label: string;
  action: ()=>void;
};

const ButtonParameters: React.FC<ButtonParametersProps> = ({
  icon,
  label,
  title,
  action,
  iconRight,
}) => {
  const router = useRouter();
  return (
    <View style={styles.buttonParameters}>
      <View style={styles.titleWrapper}>
        {icon.length > 0 && (
          <View style={styles.iconsOutlineFavorite}>
            <Svg
              style={styles.vector}
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <Path d={icon} fill="#09111F" />
            </Svg>
          </View>
        )}
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.itemright}
        onPress={action}
      >
        <View style={styles.badgewrapper}>
          <View style={styles.badge}>
            <Text style={styles.label}>{label}</Text>
          </View>
        </View>
        <View style={styles.iconright}>
          <View style={styles._boundingbox} />
          {iconRight}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonParameters;
const styles = StyleSheet.create({
  buttonParameters: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  iconsOutlineFavorite: {
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
    // backgroundColor: "rgba(217, 217, 217, 1)"
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 2,
    bottom: 2,
    left: 2,
    overflow: "visible",
  },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 0,
  },
  title: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  itemright: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 0,
  },
  badgewrapper: {
    flexShrink: 0,
    paddingLeft: 0,
    paddingRight: 4,
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 0,
    paddingVertical: 0,
  },
  badge: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    borderRadius: 4,
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
  iconright: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: "rgba(217, 217, 217, 1)"
  },
  _vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 7,
    bottom: 5,
    left: 8,
    overflow: "visible",
  },
  buttonsignup: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(9, 17, 31, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderRadius: 12,
    marginBottom: 24,
  },
  textwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 4,
  },
});
