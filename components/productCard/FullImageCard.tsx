import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

type FullImageCard = {
    orientation: 'Vertical' | 'Horizontal',
    title: string,
    subtitle: string,
    buttonLink: string,
    image: string
}

const FullImageCard: React.FC<FullImageCard> = ({ orientation, title, subtitle, buttonLink, image }) => {
    let styles = orientation === 'Vertical' ? stylesVertical : stylesHorizontal;
    const router = useRouter()
    return (
        <TouchableOpacity style={styles.componentWrapper} onPress={() => router.push(buttonLink)}>
            <ImageBackground style={styles.card} source={{ uri: image }}>
                <View style={styles.text}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {subtitle}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const stylesVertical = StyleSheet.create({
    componentWrapper: {
    },
    card: {
        flexShrink: 0,
        height: 154,
        width: 116,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    text: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    subtitle: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        bottom: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 3,
        bottom: 3,
        left: 3,
        overflow: "visible"
    }
})
const stylesHorizontal = StyleSheet.create({
    componentWrapper: {
    },
    card: {
        flexShrink: 0,
        height: 154,
        width: 256,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    text: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    subtitle: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        bottom: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 3,
        bottom: 3,
        left: 3,
        overflow: "visible"
    }
})
export default FullImageCard;