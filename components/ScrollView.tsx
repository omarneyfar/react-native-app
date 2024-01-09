import { StyleSheet, Text, View, ScrollView  } from 'react-native'
import React from 'react'

const ScrollViewComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
                Scroll me!
            </Text>
            <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
                <ScrollView>
                    {/* This is our scrollable area */}
                    <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
                    <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
                    <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
                </ScrollView>
            </View>
        </View>
    )
}

export default ScrollViewComponent

const styles = StyleSheet.create({})