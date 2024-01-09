import React, { ReactElement, useMemo } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { themeGlobal } from "../../styles/themeGlobal";

type ProductCardProps = {
  orientation: "Vertical" | "Horizontal";
  image: string;
  price: number;
  title: string;
  promotion: number;
  ratings: number | object;
  onClickFavoris: (title: string) => void;
  onClick: () => void;
  icon?: ReactElement;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  orientation,
  image,
  title,
  promotion,
  price,
  onClickFavoris,
  onClick,
  icon,
  ratings,
}) => {
  const currentPriceMemo = useMemo(() => {
    if (price && promotion)
      return (price * ((100 - promotion) / 100)).toFixed(2);
  }, [price, promotion]);

  let styles = orientation === "Vertical" ? stylesVertical : stylesHorizontal;
  return (
    <TouchableOpacity style={[styleGlobal.card, styleGlobal[`card${orientation}`]]} onPress={onClick}>
      <ImageBackground style={styles.image} source={{ uri: image }} />
      <View style={styles.cardbody}>
        <Text style={themeGlobal.themeTextGlobal.h5}>{title}</Text>
        <View style={styles.price}>
          <Text style={styles.currentprice}>{`${currentPriceMemo} $`}</Text>
          <View style={styles.initialpricewrapper}>
            <Text
              style={[themeGlobal.themeTextGlobal.bodySm, styles.initialprice]}
            >
              {`${price.toFixed(2)} $`}
            </Text>
            <View style={styles.badge}>
              <Text style={styles.label}>{promotion} %</Text>
            </View>
          </View>
        </View>
        {orientation === "Vertical" && (
          <View style={styles.ratingProduct}>
            <View style={styles.iconsFilledStar}>
              <View style={styles.boundingbox} />
              <Svg
                style={styles.vector}
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <Path
                  d="M6.04 9.66508L3.11226 11.4288C2.98292 11.5111 2.8477 11.5464 2.7066 11.5346C2.56551 11.5228 2.44205 11.4758 2.33623 11.3935C2.2304 11.3112 2.1481 11.2083 2.08931 11.0849C2.03052 10.9614 2.01876 10.8232 2.05403 10.6704L2.83006 7.337L0.237421 5.0971C0.119841 4.99128 0.0463537 4.87076 0.0169587 4.73554C-0.0124364 4.60032 -0.00361785 4.46804 0.0434142 4.33871C0.0904462 4.20937 0.160994 4.10355 0.255058 4.02124C0.349122 3.93893 0.478461 3.88602 0.643073 3.86251L4.06465 3.56268L5.38743 0.423288C5.44622 0.282192 5.53735 0.17637 5.6608 0.105822C5.78426 0.035274 5.91066 0 6.04 0C6.16934 0 6.29574 0.035274 6.4192 0.105822C6.54266 0.17637 6.63378 0.282192 6.69257 0.423288L8.01535 3.56268L11.4369 3.86251C11.6015 3.88602 11.7309 3.93893 11.8249 4.02124C11.919 4.10355 11.9896 4.20937 12.0366 4.33871C12.0836 4.46804 12.0924 4.60032 12.063 4.73554C12.0336 4.87076 11.9602 4.99128 11.8426 5.0971L9.24994 7.337L10.026 10.6704C10.0612 10.8232 10.0495 10.9614 9.99069 11.0849C9.9319 11.2083 9.8496 11.3112 9.74377 11.3935C9.63795 11.4758 9.51449 11.5228 9.3734 11.5346C9.2323 11.5464 9.09708 11.5111 8.96775 11.4288L6.04 9.66508Z"
                  fill="#FAB30F"
                />
              </Svg>
            </View>
            <Text style={styles._label}>{ratings.toFixed(1)}</Text>
          </View>
        )}
      </View>
      {orientation == "Vertical" ? (
        <View style={styles.buttonfloating}>
          <TouchableOpacity style={styles.icon} onPress={onClickFavoris}>
            <View style={styles._boundingbox} />
            {icon ? (
              icon
            ) : (
              <Svg
                style={styles._vector}
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <Path
                  d="M6.09992 11.8664L4.94992 10.8164C3.77214 9.73866 2.70825 8.66922 1.75825 7.6081C0.808252 6.54699 0.333252 5.37755 0.333252 4.09977C0.333252 3.05533 0.683252 2.18311 1.38325 1.48311C2.08325 0.783105 2.95547 0.433105 3.99992 0.433105C4.58881 0.433105 5.14436 0.558105 5.66659 0.808105C6.18881 1.05811 6.63325 1.39977 6.99992 1.83311C7.36659 1.39977 7.81103 1.05811 8.33325 0.808105C8.85547 0.558105 9.41103 0.433105 9.99992 0.433105C11.0444 0.433105 11.9166 0.783105 12.6166 1.48311C13.3166 2.18311 13.6666 3.05533 13.6666 4.09977C13.6666 5.37755 13.1944 6.54977 12.2499 7.61644C11.3055 8.68311 10.2333 9.75533 9.03325 10.8331L7.89992 11.8664C7.64436 12.1109 7.34436 12.2331 6.99992 12.2331C6.65547 12.2331 6.35547 12.1109 6.09992 11.8664ZM6.36659 3.16644C6.04436 2.71088 5.69992 2.36366 5.33325 2.12477C4.96659 1.88588 4.52214 1.76644 3.99992 1.76644C3.33325 1.76644 2.7777 1.98866 2.33325 2.43311C1.88881 2.87755 1.66659 3.43311 1.66659 4.09977C1.66659 4.67755 1.87214 5.29144 2.28325 5.94144C2.69436 6.59144 3.18603 7.22199 3.75825 7.83311C4.33047 8.44422 4.91936 9.01644 5.52492 9.54977C6.13047 10.0831 6.62214 10.522 6.99992 10.8664C7.3777 10.522 7.86936 10.0831 8.47492 9.54977C9.08047 9.01644 9.66936 8.44422 10.2416 7.83311C10.8138 7.22199 11.3055 6.59144 11.7166 5.94144C12.1277 5.29144 12.3333 4.67755 12.3333 4.09977C12.3333 3.43311 12.111 2.87755 11.6666 2.43311C11.2221 1.98866 10.6666 1.76644 9.99992 1.76644C9.4777 1.76644 9.03325 1.88588 8.66659 2.12477C8.29992 2.36366 7.95547 2.71088 7.63325 3.16644C7.55547 3.27755 7.46103 3.36088 7.34992 3.41644C7.23881 3.47199 7.12214 3.49977 6.99992 3.49977C6.8777 3.49977 6.76103 3.47199 6.64992 3.41644C6.53881 3.36088 6.44436 3.27755 6.36659 3.16644Z"
                  fill="#09111F"
                />
              </Svg>
            )}
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styleGlobal = StyleSheet.create({
  card: {
    flexShrink: 0,
    alignItems: "flex-start",
    borderRadius: 12,
  },
  cardVertical: {
    width: 144,
    rowGap: 0,
  },
  cardHorizontal: {
    width: 238,
    flexDirection: "row",
    columnGap: 16,
  },
});

const stylesVertical = StyleSheet.create({
  image: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 144,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: "rgba(225, 229, 235, 1)",
  },
  cardbody: {
    alignSelf: "stretch",
    flexShrink: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: "rgba(225, 229, 235, 1)",
  },
  title: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 20,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  price: {
    alignSelf: "stretch",
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 4,
    alignItems: "flex-start",
    rowGap: 0,
    paddingHorizontal: 0,
  },
  currentprice: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
  initialpricewrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  initialprice: {
    textDecorationLine: "line-through",
    width: "auto",
  },
  badge: {
    flexShrink: 0,
    backgroundColor: "rgba(215, 246, 228, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(8, 199, 84, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
  ratingProduct: {
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 2,
    paddingHorizontal: 0,
  },
  iconsFilledStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
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
    top: 2,
    right: 2,
    bottom: 2,
    left: 2,
    overflow: "visible",
  },
  _label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
  buttonfloating: {
    position: "absolute",
    flexShrink: 0,
    top: 12,
    right: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 2,
    padding: 6,
    borderRadius: 9999,
  },
  icon: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 1,
    bottom: 2,
    left: 1,
    overflow: "visible",
  },
});

const stylesHorizontal = StyleSheet.create({
  image: {
    flexShrink: 0,
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  cardbody: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 4,
  },
  title: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 28,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28,
  },
  price: {
    alignSelf: "stretch",
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 2,
    alignItems: "flex-start",
    rowGap: 2,
    paddingHorizontal: 0,
  },
  currentprice: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
  },
  initialpricewrapper: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  initialprice: {
    textDecorationLine: "line-through",
    width: "auto",
  },
  badge: {
    flexShrink: 0,
    backgroundColor: "rgba(215, 246, 228, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(8, 199, 84, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
});
