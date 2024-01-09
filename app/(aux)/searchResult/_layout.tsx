import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, {  useEffect, useState } from "react";
import { Tabs, router, useLocalSearchParams } from "expo-router";
import { getHeaderTitle } from "../../../utils/getHeaderTitle";
import NavtopSearch from "../../../components/nav/NavTopSearch";
import { themeGlobal } from "../../../styles/themeGlobal";
import Filter from "../../../components/icons/Filter";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TopNavigationProps = {
  label: string;
  focused: boolean;
};

const TopNavigation: React.FC<TopNavigationProps> = ({ label, focused }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
      }}
    >
      <Text
        style={{
          marginLeft: 8,
          fontWeight: "600",
          color: `${focused ? "black" : "#4C5970"}`,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

const Layout = () => {
  const { search } = useLocalSearchParams();
  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    if (search) {
      let searchQuery = Array.isArray(search) ? search[0] : search;
      setSearchValue(searchQuery);
    }
  }, [search]);
  useEffect(() => {
    const isAuth = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        const parsedUserData = userData ? JSON.parse(userData) : null;

        if (!parsedUserData) {
          router.replace('/auth/signin');
        }
      } catch (error) {
        console.error("Error checking user authentication:", error);
      }
    };

    isAuth();
  }, []); 
  return (
    <Tabs
      initialRouteName="relevance"
      screenOptions={({ route }) => {
        const title = getHeaderTitle(route.name);
        return {
          header: () => {
            return (
              <View
                style={[
                  themeGlobal.baseStyles.container,
                  {
                    marginBottom: 50,
                    height: 65,
                  },
                ]}
              >
                <NavtopSearch
                  rightIcon={
                    <TouchableOpacity onPress={()=>console.log('open Filter')}>
                      <Filter />
                    </TouchableOpacity>
                  }
                  value={searchValue}
                  onChangeText={(text: string) => setSearchValue(text)}
                  onClickEnter={() => {
                    router.push(`/searchResult?search=${searchValue}`);
                  }}
                />
              </View>
            );
          },
          tabBarStyle: {
            paddingHorizontal: 15,
            position: "absolute",
            top: 85,
            height: 50,
            borderTopWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(225, 229, 235, 1)",
            backgroundColor: "white",
          },
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            return <TopNavigation label={title} focused={focused} />;
          },
        };
      }}
    >
      <Tabs.Screen name="relevance" />
      <Tabs.Screen name="latest" />
      <Tabs.Screen name="topSales" />
      <Tabs.Screen name="price" />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
