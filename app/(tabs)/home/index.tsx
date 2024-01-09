import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { RootState } from "../../../types/reduxState/ReduxState";
import PromotionCarousel from "../../../components/carousel/PromotionCarousel";
import ButtonViewMore from "../../../components/button/ButtonViewMore";
import { themeGlobal } from "../../../styles/themeGlobal";
import FullImageCard from "../../../components/productCard/FullImageCard";
import FullImageCardArrow from "../../../components/productCard/FullImageCardArrow";
import { ProductCard } from "../../../components/productCard/ProductCardComponent";

const Home = () => {
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.carouselWrapper}>
          <PromotionCarousel
            backgroundImage="https://loremflickr.com/640/480"
            promotionTitle="Christmas Sale"
            discountPercentage={70}
            buttonLink="/products"
          />
        </View>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeTextGlobal.h5}> Room ideas</Text>
          <ButtonViewMore title="View more" buttonLink="/products" />
        </View>
        <ScrollView horizontal={true} style={styles.fullImageCardsWrapper}>
          {products.map &&
            products.map((product, index: number)  => (
              <View style={styles.fullImageCardWrapper} key={index}>
                <FullImageCard
                  orientation="Horizontal"
                  title={product.title ?? ""}
                  image={product.image ?? ""}
                  subtitle="12 Items"
                  buttonLink={`/products/${product.id}`}
                />
              </View>
            ))}
        </ScrollView>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeTextGlobal.h5}>Shop by room</Text>
        </View>
        <ScrollView horizontal={true} style={styles.fullImageCardsWrapper}>
          {products.map &&
            products.map((product, index: number) => (
              <View style={styles.fullImageCardWrapper} key={index}>
                <FullImageCardArrow
                  orientation="Vertical"
                  title={product.title ?? ""}
                  image={product.image ?? ""}
                  subtitle="12 Items"
                  buttonLink={`/products/${product.id}`}
                />
              </View>
            ))}
        </ScrollView>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeTextGlobal.h5}>
            Recommended for you
          </Text>
        </View>
        <View style={styles.productCardsWrapper}>
          {products.map((product, index: number) => (
            <View key={index} style={styles.columnWrapper}>
              <View key={product.id} style={styles.productCardWrapper}>
                <ProductCard 
                  orientation="Vertical"
                  title={product.title ?? ""}
                  image={product.image ?? ""}
                  promotion={product.promotion ?? 0}
                  price={product.price ?? 0}
                  ratings={product.ratings ?? 5.0}
                  onClickFavoris={()=>{}}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  carouselWrapper: {
    marginBottom: 20,
    width: "100%",
    height: 188,
    paddingHorizontal: 24,
  },
  titleSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  fullImageCardsWrapper: {
    marginBottom: 20,
  },
  fullImageCardWrapper: {
    marginLeft: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  productCardsWrapper: {
    marginBottom: 20,
    paddingHorizontal: 20,
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
});
