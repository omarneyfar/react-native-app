import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import ButtonArrow from "../button/ButtonArrow";
import Pagination from "../pagination/PaginationDots";

type PromotionCarouselProps = {
  backgroundImage: string;
  promotionTitle: string;
  discountPercentage: number;
  buttonLink: string;
};

const PromotionCarousel: React.FC<PromotionCarouselProps> = ({
  backgroundImage,
  promotionTitle,
  discountPercentage,
  buttonLink,
}) => {
  return (
    <View style={styles.banner1}>
      <ImageBackground style={styles.image} source={{ uri: backgroundImage }}>
        <View style={styles.text}>
          <Text style={styles.christmasSale}>{promotionTitle}</Text>
          <View style={styles.discount}>
            <Text style={styles.upto}>{`Up to`}</Text>
            <Text style={styles.myVar}>{`${discountPercentage}%`}</Text>
          </View>
          <ButtonArrow buttonLink={buttonLink} title="Shop Now" />
        </View>
      </ImageBackground>
      <View style={styles.paginationWrapper}>
        <Pagination  totalItems={4} activeIndex={0} />
      </View>
    </View>
  );
};

export default PromotionCarousel;

const styles = StyleSheet.create({
  banner1: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    width: "100%",
    height: 188,

    borderRadius: 12,
    overflow: "hidden",
  },
  text: {
    position: "absolute",
    flexShrink: 0,
    top: 39,
    height: 109,
    left: 29,
    width: 129,
    alignItems: "flex-start",
    rowGap: 10,
    borderRadius: 12,
  },
  christmasSale: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 16.941177368164062,
  },
  discount: {
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 4,
  },
  upto: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 11.29411792755127,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 11.29411792755127,
  },
  myVar: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 30.117647171020508,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 30.117647171020508,
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
  paginationWrapper: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    bottom:0,
    width: "100%",
    marginBottom:12
  },
});
