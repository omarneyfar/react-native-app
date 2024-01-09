import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { } from 'react-native-svg';

type LabelComponentProps = {
    label:string
}

const LabelComponent:React.FC<LabelComponentProps> = ({label}) => {
    return (
        <View style={styles.labeltop}>
            <View style={styles.left}>
                <Text style={styles.label} >
                   {label}
                </Text>
            </View>
            <View style={styles.right} />
        </View>
    )
}
export default LabelComponent

const styles = StyleSheet.create({
    labeltop: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },
    left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4
    }
})