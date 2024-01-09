import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Slot, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const _layout = () => {
  useEffect(() => {
    const isAuth = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        const parsedUserData = userData ? JSON.parse(userData) : null;

        if (!parsedUserData) {
          router.replace("/auth/signin");
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
