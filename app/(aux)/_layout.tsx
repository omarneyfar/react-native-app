import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { service } from "../../service";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const retrieveProducts = async () => {
      const { data } = await service.products.productsList({
        skip: "0",
        take: "10",
      });
      dispatch({ type: "SET_PRODUCTS", payload: data.paginatedResult });
      return data;
    };
    retrieveProducts();
    
  }, []);
  return <Slot />;
};

export default Layout;

const styles = StyleSheet.create({});
