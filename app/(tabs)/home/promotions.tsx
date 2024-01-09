import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeGlobal } from "../../../styles/themeGlobal";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/reduxState/ReduxState";
import ProductCardPromo from "../../../components/productCard/ProductCardPromo";
import { router } from "expo-router";

const promotions = () => {
  const products = useSelector((state: RootState) => state.product.products);
  return (
    <View style={themeGlobal.baseStyles.container}>
      <ScrollView>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeTextGlobal.h5}>
            Recommended for you
          </Text>
        </View>
        <View style={styles.productCardsWrapper}>
          {products.map((product, index: number) => (
            <View key={index} style={styles.columnWrapper}>
              <View key={product.id} style={styles.productCardWrapper}>
                <ProductCardPromo
                  title={product.title ?? ""}
                  image={product.image ?? ""}
                  promotion={product.promotion ?? 0}
                  price={product.price ?? 0}
                  ratings={product.ratings ?? 4.8}
                  onClick={()=>router.push(`/products/${product.id}`)}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default promotions;

const styles = StyleSheet.create({
  productCardsWrapper: {
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  columnWrapper: {
    gap: 24,
  },
  productCardWrapper: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  titleSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom:20
  },
});
