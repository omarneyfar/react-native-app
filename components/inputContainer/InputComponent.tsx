import React, { ReactElement } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  KeyboardTypeOptions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";

type InputComponentProps = {
  icon: ReactElement;
  type: KeyboardTypeOptions;
  onClickEnter:()=>void
} & TextInputProps;

const InputComponent: React.FC<InputComponentProps> = ({
  icon,
  type,
  onClickEnter,
  ...inputProps
}) => {
  
  return (
    <View style={styles.inputfield}>
      <View style={styles.iconleft}>
        <View style={styles.boundingbox} />
        {icon}
      </View>
      <View style={styles.inputvaluewrapper}>
        <TextInput
          style={styles.inputvalue}
          {...inputProps}
          keyboardType={type}
          onSubmitEditing={onClickEnter}
        ></TextInput>
      </View>
    </View>
  );
};
export default InputComponent;
const styles = StyleSheet.create({
  inputfield: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "rgba(225, 229, 235, 1)",
    borderRadius: 12,
    width: "100%",
  },
  iconleft: {
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
  },

  inputvaluewrapper: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  inputvalue: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(145, 155, 173, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: "100%",
  },
});
