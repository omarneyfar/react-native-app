import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondComponents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SecondComponents</Text>
      <Image
      style={styles.logo} 
      source={{
        uri: 'https://static.vecteezy.com/system/resources/previews/000/599/759/original/wing-falcon-bird-logo-vector.jpg',
      }}
      />
    </View>
  )
}

export default SecondComponents

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    text: {
        fontSize: 16,
    },
    logo: {
        width: 66,
        height: 58,
      },
})