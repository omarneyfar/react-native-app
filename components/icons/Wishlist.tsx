import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Wishlist() {
  return (
    <View style={styles.icon}>
      <View style={styles.boundingbox} />
      <Svg
        style={styles.vector}
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
      >
        <Path
          d="M7.87496 14.3333L6.43746 13.0208C4.96524 11.6736 3.63538 10.3368 2.44788 9.01038C1.26038 7.68399 0.666626 6.22218 0.666626 4.62496C0.666626 3.3194 1.10413 2.22913 1.97913 1.35413C2.85413 0.479126 3.9444 0.041626 5.24996 0.041626C5.98607 0.041626 6.68052 0.197876 7.33329 0.510376C7.98607 0.822876 8.54163 1.24996 8.99996 1.79163C9.45829 1.24996 10.0138 0.822876 10.6666 0.510376C11.3194 0.197876 12.0138 0.041626 12.75 0.041626C14.0555 0.041626 15.1458 0.479126 16.0208 1.35413C16.8958 2.22913 17.3333 3.3194 17.3333 4.62496C17.3333 6.22218 16.743 7.68746 15.5625 9.02079C14.3819 10.3541 13.0416 11.6944 11.5416 13.0416L10.125 14.3333C9.80552 14.6388 9.43052 14.7916 8.99996 14.7916C8.5694 14.7916 8.1944 14.6388 7.87496 14.3333ZM8.20829 3.45829C7.80552 2.88885 7.37496 2.45482 6.91663 2.15621C6.45829 1.8576 5.90274 1.70829 5.24996 1.70829C4.41663 1.70829 3.72218 1.98607 3.16663 2.54163C2.61107 3.09718 2.33329 3.79163 2.33329 4.62496C2.33329 5.34718 2.59024 6.11454 3.10413 6.92704C3.61802 7.73954 4.2326 8.52774 4.94788 9.29163C5.66315 10.0555 6.39927 10.7708 7.15621 11.4375C7.91315 12.1041 8.52774 12.6527 8.99996 13.0833C9.47218 12.6527 10.0868 12.1041 10.8437 11.4375C11.6007 10.7708 12.3368 10.0555 13.052 9.29163C13.7673 8.52774 14.3819 7.73954 14.8958 6.92704C15.4097 6.11454 15.6666 5.34718 15.6666 4.62496C15.6666 3.79163 15.3888 3.09718 14.8333 2.54163C14.2777 1.98607 13.5833 1.70829 12.75 1.70829C12.0972 1.70829 11.5416 1.8576 11.0833 2.15621C10.625 2.45482 10.1944 2.88885 9.79163 3.45829C9.6944 3.59718 9.57635 3.70135 9.43746 3.77079C9.29857 3.84024 9.15274 3.87496 8.99996 3.87496C8.84718 3.87496 8.70135 3.84024 8.56246 3.77079C8.42357 3.70135 8.30552 3.59718 8.20829 3.45829Z"
          fill="#09111F"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
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
    right: 2,
    bottom: 2,
    left: 2,
    overflow: "visible",
  },
});
