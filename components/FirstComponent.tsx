import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                The <Text style={styles.boldText}>quick brown </Text>fox jumps over the lazy dog
            </Text>
        </View>
    )
}

export default FirstComponent

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
    },
    boldText:{
        fontFamily: 'Cochin',
        fontWeight: 'bold'
    }

})