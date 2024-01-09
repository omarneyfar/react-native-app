import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/reduxState/ReduxState";
import { themeGlobal } from "../../../styles/themeGlobal";
import { ScrollView } from "react-native-gesture-handler";
import { ProductCard } from "../../../components/productCard/ProductCardComponent";

const TopSales = () => {
  const { search } = useGlobalSearchParams();
  const products = useSelector((state: RootState) => state.product.products);
  const productsWithSalesCount = products.map((product) => {
    // Assuming 'orders' field exists in product data and represents an array of orders
    const salesCount = product.orders ? product.orders?.length : 0;
    return { ...product, salesCount };
  });
  const productsFromSearch = productsWithSalesCount
    .filter((product) => {
      if (search) {
        let searchQuery = Array.isArray(search) ? search[0] : search;
        searchQuery = searchQuery.toLowerCase();
        const title = product.title?.toLowerCase() ?? "";
        const description = product.description?.toLowerCase() ?? "";
        return title.includes(searchQuery) || description.includes(searchQuery);
      } else {
        return true;
      }
    })
    .sort((a, b) => b.salesCount - a.salesCount);

  return (
    <View style={[themeGlobal.baseStyles.container, { paddingTop: 20 }]}>
      <ScrollView>
        <View style={styles.relatedProductsWrapper}>
          {search && search.length != 0 && (
            <Text
              style={[themeGlobal.themeTextGlobal.h5, { marginBottom: 10 }]}
            >
              {`${productsFromSearch.length} ${
                productsFromSearch.length === 1 ? "result" : "results"
              } for ${search}`}
            </Text>
          )}
          <View style={styles.productCardsWrapper}>
            {productsFromSearch.map((product, index: number) => (
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
      </ScrollView>
    </View>
  );
};

export default TopSales;

const styles = StyleSheet.create({
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
});
