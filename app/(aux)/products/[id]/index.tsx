import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { service } from "../../../../service";
import { Product } from "../../../../types/product/Product";
import ProductCarousel from "../../../../components/carousel/ProductCarousel";
import NavTopRightIcon from "../../../../components/nav/NavTopRightIcon";
import Basket from "../../../../components/icons/Basket";
import { ScrollView } from "react-native-gesture-handler";
import { themeGlobal } from "../../../../styles/themeGlobal";
import VerticalDivider from "../../../../components/divider/VerticalDivider";
import Star from "../../../../components/icons/Star";
import Share from "../../../../components/icons/Share";
import Wishlist from "../../../../components/icons/Wishlist";
import ArrowRight from "../../../../components/icons/ArrowRight";
import ColorVariant from "../../../../components/features/ColorVariant";
import TextCollapse from "../../../../components/collapse/TextCollapse";
import ProductReview from "../../../../components/productReview/ProductReview";
import { Rating } from "../../../../types/rating/Rating";
import ButtonViewMore from "../../../../components/button/ButtonViewMore";
import { useSelector } from "react-redux";
import { RootState } from "../../../../types/reduxState/ReduxState";
import { ProductCard } from "../../../../components/productCard/ProductCardComponent";
import ButtonIcon from "../../../../components/button/ButtonIcon";
import AddToCart from "../../../../components/icons/AddToCart";
import ButtonSubmit from "../../../../components/button/ButtonSubmit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ratings] = useState<Rating[]>([
    {
      id: "1",
      username: "Leslie Alexander",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      images: [
        "https://dummyimage.com/24x24/000/fff.jpg",
        "https://dummyimage.com/24x24/000/fff.jpg",
        "https://dummyimage.com/24x24/000/fff.jpg",
        "https://dummyimage.com/24x24/000/fff.jpg",
      ],
      value: 5,
    },
    {
      id: "2",
      username: "Username",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      value: 5,
    },
    {
      id: "3",
      username: "Username",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      value: 4,
    },
  ]);
  const relatedProducts = useSelector(
    (state: RootState) => state.product.products
  ).filter(
    (relatedProduct, index) => product?.id != relatedProduct.id && index <= 6
  );

  useEffect(() => {
    const retrieveProductDetails = async () => {
      try {
        if (id) {
          let productId = Array.isArray(id) ? id[0] : id;
          const { data } = await service.products.productsDetail(productId);
          setProduct(data);
          if (!data) {
            setError("Error retrieving product details");
          }
        } else {
          Redirect({ href: "/products" });
        }
      } catch (err) {
        setError(`Error retrieving product details: ${err}`);
      }
    };

    retrieveProductDetails();
  }, []);
 
  const currentPriceMemo = useMemo(() => {
    if (product && product.price && product.promotion) {
      return (product.price * ((100 - product.promotion) / 100)).toFixed(3);
    } else if (product && product.price) {
      return product.price.toFixed(3);
    }
    return "";
  }, [product]);
  if (product) {
    return (
      <View style={styles.productDetailScreen}>
        <View style={styles.navTopWrapper}>
          <NavTopRightIcon title="" icon={<Basket badge={true} />} />
        </View>
        {product.image ? (
          <ProductCarousel
            images={[
              product.image,
              "https://dummyimage.com/360x360/000/fff.jpg",
              product.image,
              "https://dummyimage.com/360x360/000/fff.jpg",
            ]}
          />
        ) : (
          <ProductCarousel
            images={[
              "https://dummyimage.com/360x360/000/fff.jpg",
              "https://dummyimage.com/360x360/000/fff.jpg",
              "https://dummyimage.com/360x360/000/fff.jpg",
              "https://dummyimage.com/360x360/000/fff.jpg",
            ]}
          />
        )}
        <View style={themeGlobal.baseStyles.container}>
          <ScrollView style={styles.productDetailInfos}>
            <Text style={themeGlobal.themeTextGlobal.h4}>{product.title}</Text>
            <Text
              style={themeGlobal.themeTextGlobal.h5}
            >{`Rp ${currentPriceMemo}`}</Text>
            <View style={styles.initialpricewrapper}>
              <Text style={styles.initialprice}>{`Rp ${product.price?.toFixed(
                3
              )}`}</Text>
              <View style={styles.badge}>
                <Text style={styles.label}>{`${product.promotion}%`}</Text>
              </View>
            </View>
            <View style={styles.ratingsAndActionsWrapper}>
              <View style={styles.ratingsAndBadgeWrapper}>
                <Text style={styles.label_}>{`1.200 sold`}</Text>
                <VerticalDivider />
                <View style={styles.ratingsWrapper}>
                  <Star />
                  <Text style={styles.label_}>{`4.8`}</Text>
                </View>
              </View>
              <View style={styles.ratingsWrapper}>
                <View style={styles.iconWrapper}>
                  <Wishlist />
                </View>
                <View style={styles.iconWrapper}>
                  <Share />
                </View>
              </View>
            </View>
            <View style={styles.variationWrapper}>
              <View style={styles.topSide}>
                <View style={styles.titleWrapper}>
                  <Text style={themeGlobal.themeTextGlobal.h5}>
                    Select variation
                  </Text>
                  <Text style={themeGlobal.themeTextGlobal.labelAlt}>
                    (3 colors)
                  </Text>
                </View>
                <View style={styles.iconWrapper}>
                  <ArrowRight />
                </View>
              </View>
              <View style={styles.bottomSide}>
                <ColorVariant color="#000000" title="Black" />
                <ColorVariant color="#919BAD" title="Gray" />
                <ColorVariant color="#FFFFFF" title="White" />
              </View>
            </View>
            <View style={styles.descriptionWrapper}>
              <TextCollapse />
            </View>
            <View style={styles.productReviewsWrapper}>
              <Text style={themeGlobal.themeTextGlobal.h5}>{`Reviews`}</Text>
              {ratings.map((rating, index: number) => {
                return (
                  <View style={styles.productReviewWrapper} key={index}>
                    <ProductReview {...rating} />
                  </View>
                );
              })}
              <View style={styles.viewMoreButtonWrapper}>
                <ButtonViewMore
                  title="View all reviews"
                  buttonLink="/ratings"
                />
              </View>
            </View>
            <View style={styles.relatedProductsWrapper}>
              <Text
                style={[themeGlobal.themeTextGlobal.h5, { marginBottom: 10 }]}
              >{`Related products`}</Text>
              <View style={styles.productCardsWrapper}>
                {relatedProducts.map((product, index: number) => (
                  <View key={index} style={styles.columnWrapper}>
                    <View key={product.id} style={styles.productCardWrapper}>
                      <ProductCard
                        orientation="Vertical"
                        title={product.title ?? ""}
                        image={product.image ?? ""}
                        promotion={product.promotion ?? 0}
                        price={product.price ?? 0}
                        ratings={product.ratings ?? 5.0}
                        onClickFavoris={() => {}}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.addToCartWrapper}>
              <View style={styles.ButtonIconWrapper}>
                <ButtonIcon icon={<AddToCart />} />
              </View>
              <View style={styles.ButtonSubmitWrapper}>
                <ButtonSubmit title={"Buy Now"} onClick={() => {}} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  } else if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>loading ....</Text>
      </View>
    );
  }
};

export default ProductDetail;

const styles = StyleSheet.create({
  productDetailScreen: {
    position: "relative",
  },
  navTopWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
  },
  productDetailInfos: {
    paddingVertical: 20,
  },
  initialpricewrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  initialprice: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
    textDecorationLine: "line-through",
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
  ratingsAndBadgeWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignContent: "center",
  },
  ratingsAndActionsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignContent: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  label_: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  ratingsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  ratingProduct: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 4,
  },
  iconsFilledStar: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
  },

  iconWrapper: {
    padding: 10,
  },
  variationWrapper: {
    marginBottom: 20,
  },
  topSide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bottomSide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    height: "auto",
  },
  descriptionWrapper: {
    marginBottom: 20,
  },
  productReviewsWrapper: {
    marginBottom: 20,
  },
  productReviewWrapper: {
    marginBottom: 20,
  },
  viewMoreButtonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  relatedProductsWrapper: {},
  productCardsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  columnWrapper: {
    gap: 20,
  },
  productCardWrapper: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  ButtonIconWrapper: {
    width: 40,
  },
  ButtonSubmitWrapper: {
    flex: 1,
  },
  addToCartWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
