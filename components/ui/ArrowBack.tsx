import { useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function ArrowBack() {
    const router = useRouter()
    return (
        <TouchableOpacity style={styles.itemleft} onPress={()=> router.back()}>
            <View style={styles.iconsOutlineArrow_back}>
                <View style={styles.boundingbox} />
                <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                    <Path d="M6.0625 13.0833L0.562495 7.58333C0.479162 7.5 0.420134 7.40972 0.385412 7.3125C0.350689 7.21528 0.333328 7.11111 0.333328 7C0.333328 6.88889 0.350689 6.78472 0.385412 6.6875C0.420134 6.59028 0.479162 6.5 0.562495 6.41667L6.0625 0.916666C6.21527 0.763889 6.40625 0.684027 6.63541 0.677083C6.86458 0.670138 7.0625 0.75 7.22916 0.916666C7.39583 1.06944 7.48263 1.26042 7.48958 1.48958C7.49652 1.71875 7.41666 1.91667 7.25 2.08333L3.16666 6.16667H12.4792C12.7153 6.16667 12.9132 6.24653 13.0729 6.40625C13.2326 6.56597 13.3125 6.76389 13.3125 7C13.3125 7.23611 13.2326 7.43403 13.0729 7.59375C12.9132 7.75347 12.7153 7.83333 12.4792 7.83333H3.16666L7.25 11.9167C7.40277 12.0694 7.48263 12.2639 7.48958 12.5C7.49652 12.7361 7.41666 12.9306 7.25 13.0833C7.09722 13.25 6.90277 13.3333 6.66666 13.3333C6.43055 13.3333 6.22916 13.25 6.0625 13.0833Z" fill="#09111F" />
                </Svg>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemleft: {
        flexShrink: 0,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        borderRadius: 9999
    },
    iconsOutlineArrow_back: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 4,
        right: 4,
        bottom: 4,
        left: 3,
        overflow: "visible"
    }
})