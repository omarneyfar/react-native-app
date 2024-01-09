import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/reduxState/ReduxState";
import { themeGlobal } from "../../../styles/themeGlobal";
import NavtopSearch from "../../../components/nav/NavTopSearch";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Filter from "../../../components/icons/Filter";
import { router } from "expo-router";
import { ProductCard } from "../../../components/productCard/ProductCardComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const [searchValue, setSearchValue] = useState<string>("");
 
  return (
    <View style={themeGlobal.baseStyles.container}>
      <NavtopSearch
        rightIcon={
          <TouchableOpacity onPress={() => console.log("open Filter")}>
            <Filter />
          </TouchableOpacity>
        }
        value={searchValue}
        onChangeText={(text: string) => setSearchValue(text)}
        onClickEnter={() => {
          router.push(`/searchResult?search=${searchValue}`);
        }}
      />
      <ScrollView>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeTextGlobal.h5}>
            Our Products
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
                  onClickFavoris={() => {}}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  navTopWrapper: {
    paddingHorizontal: 24,
  },
  titleSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
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
