import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import LabelComponent from './LabelComponent';
import InputComponent from './InputComponent';

type InputContainerProps = {
    input: {
        label: string;
        type: KeyboardTypeOptions;
        placeholder: string;
        icon: ReactElement;
    },
    value:string,
    onChangeText:(text: string)=>void
}

const InputContainer: React.FC<InputContainerProps> = ({ input ,value,onChangeText}) => {
    return (
        <View style={styles.input}>
            <LabelComponent label={input.label} />
            <InputComponent type={input.type} placeholder={input.placeholder} icon={input.icon} value={value} onChangeText={onChangeText} onClickEnter={()=>{}}/>
        </View>
    )
}
export default InputContainer;
const styles = StyleSheet.create({
    input: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 4,
        marginBottom: 24
    },
})