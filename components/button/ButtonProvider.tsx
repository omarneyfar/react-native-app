import { useNavigation, useRouter } from 'expo-router';
import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Svg, Path } from 'react-native-svg';

type ButtonProviderProps = {
    provider: {
        name: string;
        title: string;
        icon: ReactElement
    }
}

const ButtonProvider: React.FC<ButtonProviderProps> = ({ provider }) => {
    const navigation = useNavigation(); // Use useNavigation hook from React Navigation

  const handleSignUpProvider = (provider: string) => {
    // navigation.navigate('authPage', { provider: provider }) 
  };
    return (
        <TouchableOpacity style={styles.buttonBtnregular} onPress={()=>handleSignUpProvider(provider.name)}>
            <View style={styles.iconWrapper}>{provider.icon}</View>
            <View style={styles.textwrapper}>
                <Text style={styles.text}>{` ${provider.title}`}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ButtonProvider;

const styles = StyleSheet.create({
    buttonBtnregular: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: 'rgba(225, 229, 235, 1)',
      borderRadius: 12,
      marginBottom: 24,
    },
    iconWrapper: {
      marginRight: 8, // Adjust spacing between icon and text as needed
    },
    textwrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: 4,
    },
    text: {
      textAlign: 'left',
      color: 'rgba(9, 17, 31, 1)',
      fontFamily: 'Satoshi Variable',
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 20,
    },
  });