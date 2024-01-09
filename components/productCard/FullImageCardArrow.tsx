import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type FullImageCard = {
    orientation: 'Vertical' | 'Horizontal';
    title: string;
    subtitle: string,
    buttonLink: string,
    image: string
}

  const FullImageCardArrow: React.FC<FullImageCard> = ({orientation,title,image,subtitle,buttonLink})=> {
    let styles = orientation === 'Vertical' ? stylesVertical : stylesHorizontal;
    const router = useRouter()

    return (
    		<ImageBackground style={styles.card} source={{uri: image}}>
      			<View style={styles.text}>
        				<Text style={styles.title}>
          					{title}
        				</Text>
        				<Text style={styles.subtitle}>
          					{subtitle}
        				</Text>
      			</View>
      			{/* RN-Flow:: can be replaced with <Buttonfloating type={"filledCircle"} color={"light"} size={"small"} state={"default"} /> */}
      			<TouchableOpacity style={styles.buttonfloating} onPress={() => router.push(buttonLink)}>
        				<View style={styles.icon}>
          					<View style={styles.boundingbox}/>
                      <Svg style={styles.vector} width="12" height="12" viewBox="0 0 12 12" fill="none" >
                      <Path d="M5.53341 10.8669C5.41119 10.7446 5.3473 10.5891 5.34175 10.4002C5.33619 10.2113 5.39453 10.0558 5.51675 9.93353L8.78341 6.66686H1.33341C1.14453 6.66686 0.986192 6.60297 0.858415 6.4752C0.730637 6.34742 0.666748 6.18908 0.666748 6.0002C0.666748 5.81131 0.730637 5.65297 0.858415 5.5252C0.986192 5.39742 1.14453 5.33353 1.33341 5.33353H8.78341L5.51675 2.06686C5.39453 1.94464 5.33619 1.78908 5.34175 1.6002C5.3473 1.41131 5.41119 1.25575 5.53341 1.13353C5.65564 1.01131 5.81119 0.950195 6.00008 0.950195C6.18897 0.950195 6.34453 1.01131 6.46675 1.13353L10.8667 5.53353C10.9334 5.58908 10.9806 5.65853 11.0084 5.74186C11.0362 5.8252 11.0501 5.91131 11.0501 6.0002C11.0501 6.08908 11.0362 6.17242 11.0084 6.2502C10.9806 6.32797 10.9334 6.4002 10.8667 6.46686L6.46675 10.8669C6.34453 10.9891 6.18897 11.0502 6.00008 11.0502C5.81119 11.0502 5.65564 10.9891 5.53341 10.8669Z" fill="#09111F"/>
                      </Svg>
        				</View>
      			</TouchableOpacity>
    		</ImageBackground>
    )
}

const stylesVertical = StyleSheet.create({
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
export default FullImageCardArrow;