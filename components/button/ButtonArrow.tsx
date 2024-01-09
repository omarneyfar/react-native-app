import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Svg, Path } from 'react-native-svg';

type ButtonArrowProps = {
    buttonLink: string;
    title: string;
}

const ButtonArrow: React.FC<ButtonArrowProps> = ({ buttonLink ,title}) => {

    const router = useRouter();

    return (
        <TouchableOpacity style={styles.button} onPress={() => router.push(buttonLink)}>
            <View >
                <Text style={styles.shopnow}>
                    {title}
                </Text>
            </View>
            <View style={styles.iconsOutlineArrow_forward}>
                <View style={styles.boundingbox} />
                <Svg style={styles.vector} width="8" height="7" viewBox="0 0 8 7" fill="none" >
                    <Path d="M3.70835 6.74755C3.63196 6.67116 3.59203 6.57394 3.58856 6.45589C3.58509 6.33783 3.62155 6.24061 3.69794 6.16422L5.7396 4.12255H1.08335C0.965298 4.12255 0.86634 4.08262 0.786479 4.00276C0.706618 3.9229 0.666687 3.82394 0.666687 3.70589C0.666687 3.58783 0.706618 3.48887 0.786479 3.40901C0.86634 3.32915 0.965298 3.28922 1.08335 3.28922H5.7396L3.69794 1.24755C3.62155 1.17116 3.58509 1.07394 3.58856 0.955887C3.59203 0.837831 3.63196 0.740609 3.70835 0.66422C3.78474 0.587831 3.88196 0.549637 4.00002 0.549637C4.11808 0.549637 4.2153 0.587831 4.29169 0.66422L7.04169 3.41422C7.08335 3.44894 7.11287 3.49235 7.13023 3.54443C7.14759 3.59651 7.15627 3.65033 7.15627 3.70589C7.15627 3.76144 7.14759 3.81353 7.13023 3.86214C7.11287 3.91075 7.08335 3.95589 7.04169 3.99755L4.29169 6.74755C4.2153 6.82394 4.11808 6.86214 4.00002 6.86214C3.88196 6.86214 3.78474 6.82394 3.70835 6.74755Z" fill="#09111F" />
                </Svg>
            </View>
        </TouchableOpacity>

    )
}

export default ButtonArrow

const styles = StyleSheet.create({

    button: {
        flexShrink: 0,
        width: 66,
        paddingLeft: 8,
        paddingRight: 6,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 2,
        paddingVertical: 4,
        borderRadius: 4
    },
    _text: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 1.4117647409439087,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    shopnow: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 8.470588684082031,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 9.411765098571777
    },
    iconsOutlineArrow_forward: {
        flexShrink: 0,
        height: 10,
        width: 10,
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
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    }
})