import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Slot, router } from "expo-router";
import { useDispatch } from "react-redux";

const _layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isAuth = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        const parsedUserData = userData ? JSON.parse(userData) : null;

        if (parsedUserData) {
          router.replace("/home");
          dispatch({ type: "LOGIN" });
        }
      } catch (error) {
        console.error("Error checking user authentication:", error);
      }
    };

    isAuth();
  }, []);

  return <Slot />;
};

export default _layout;

const styles = StyleSheet.create({});
