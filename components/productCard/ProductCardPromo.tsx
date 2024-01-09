import React, { ReactElement, useMemo } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Star from "../icons/Star";
type ProductCardPromoProps = {
  image: string;
  price: number;
  title: string;
  promotion: number;
  ratings: number | object;
  onClick: () => void;
};

const ProductCardPromo: React.FC<ProductCardPromoProps> = ({
  image,
  title,
  promotion,
  price,
  onClick,
  ratings,
}) => {
  const currentPriceMemo = useMemo(() => {
    if (price && promotion)
      return (price * ((100 - promotion) / 100)).toFixed(3);
  }, [price, promotion]);

  return (
    <TouchableOpacity style={styles.cardstyle3} onPress={onClick}>
      <View style={styles.frame26080035}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.frame26080036}>
          <Text style={styles.initialprice}>{`Rp ${currentPriceMemo}`}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.label}>{`${promotion}%`}</Text>
        </View>
      </View>
      <View style={styles.cardbody}>
        <View style={styles.frame26080030}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingProduct}>
            {/* Vigma RN:: can be replaced with <IconsFilledStar  /> */}
            <Star />
            <Text style={styles._label}>{`${
              ratings?.toFixed(1)  ?? "4.8"
            }`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCardPromo;
const styles = StyleSheet.create({
  cardstyle3: {
    flexShrink: 0,
    width: 312,
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 12,
  },
  frame26080035: {
    flexShrink: 0,
    height: 125,
    width: 312,
    alignItems: "flex-start",
    rowGap: 0,
  },
  image: {
    position: "absolute",
    flexShrink: 0,
    width: 312,
    height: 125,
    borderRadius: 10,
    overflow:"hidden"
  },
  frame26080036: {
    position: "absolute",
    flexShrink: 0,
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  initialprice: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 16,
  },
  badge: {
    position: "absolute",
    flexShrink: 0,
    top: 94,
    left: 260,
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
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
  },
  cardbody: {
    alignSelf: "stretch",
    flexShrink: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: "flex-start",
    rowGap: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  frame26080030: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 2,
  },
  title: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  ratingProduct: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
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
    backgroundColor: "rgba(217, 217, 217, 1)",
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
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
  },
});
