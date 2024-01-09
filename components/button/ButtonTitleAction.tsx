import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";

type ButtonTitleActionProps = {
  title: string;
  action: () => void;
};

const ButtonTitleAction: React.FC<ButtonTitleActionProps> = ({
  title,
  action,
}) => {
  const router = useRouter();

  return (
    <View style={styles.buttonTitleAction}>
      <TouchableOpacity onPress={action}>
        <View style={styles.textwrapper}>
          <Text style={styles.text}>{title ?? `View more`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTitleAction;

const styles = StyleSheet.create({
  buttonTitleAction: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 0,
    paddingVertical: 1,
    paddingHorizontal: 0,
  },
  textwrapper: {
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingHorizontal: 0,
  },
  text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },


});
