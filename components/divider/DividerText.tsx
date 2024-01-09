import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Line } from 'react-native-svg';

type DividerProps = {
    title:string;
}

const DividerText:React.FC<DividerProps> = ({title})=> {
    return (
        <View style={styles.divider}>
            <View style={styles.leftLine}>
                <Svg style={styles.line} height="1" viewBox="0 0 142 1" fill="none" >
                    <Line y1="0.5" x2="142" y2="0.5" stroke="#E1E5EB" />
                </Svg>

            </View>
            <View style={styles.textwrapper}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
            <View style={styles.rightLine}>
                <Svg style={styles._line} height="1" viewBox="0 0 142 1" fill="none" >
                    <Line y1="0.5" x2="142" y2="0.5" stroke="#E1E5EB" />
                </Svg>

            </View>
        </View>
    )
}

export default DividerText

const styles = StyleSheet.create({
    divider: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 24,
        marginBottom: 24
    },
    leftLine: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 0
    },
    line: {
        alignSelf: "stretch",
        flexShrink: 0,
        minHeight: 0.001,
        overflow: "visible"
    },
    textwrapper: {
        flexShrink: 0,
        paddingTop: 2,
        paddingBottom: 6,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 8
    },
    text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    rightLine: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 0
    },
    _line: {
        alignSelf: "stretch",
        flexShrink: 0,
        minHeight: 0.001,
        overflow: "visible"
    }
})