import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import { Tabs, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Navtop from "../../components/nav/NavTop";
import { getHeaderTitle } from "../../utils/getHeaderTitle";
import NavTopRightIcon from "../../components/nav/NavTopRightIcon";
import Notification from "../../components/icons/Notification";
import NavTopLogo from "../../components/nav/NavTopLogo";
import { useDispatch } from "react-redux";
import { service } from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavExam from "../../components/nav/NavExam";

type CustomTabBarButtonProps = {
  label: string;
  icon: string;
  focused: boolean;
};

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  label,
  icon,
  focused,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: focused ? "#F0F2F5" : "none",
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 15,
      }}
    >
      <FontAwesome name={icon} color="black" size={15} />
      {focused && (
        <Text style={{ marginLeft: 8, fontWeight: "600", fontSize: 15 }}>
          {label}
        </Text>
      )}
    </View>
  );
};

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const retriveUserData = async () => {
    //   const token = await AsyncStorage.getItem("cookie");
    //   if (token) {
    //     let Req = {
    //       token,
    //     };
    //     let res = await service.getUserByToken.getUserByTokenCreate(Req);
    //     console.log(res);

    //     // dispatch({ type: "SET_USER", payload: data?.user });
    //   }
    // };
    const retriveUserData = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        dispatch({ type: "SET_USER", payload: JSON.parse(userData) });
      }
    };
    const retrieveProducts = async () => {
      const { data } = await service.products.productsList({
        skip: "0",
        take: "10",
      });

      dispatch({ type: "SET_PRODUCTS", payload: data.paginatedResult });
      return data;
    };
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
    retriveUserData();
    retrieveProducts();
  }, []);
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={({ route }) => {
        const title = getHeaderTitle(route.name);
        return {
          header: () => {
            if (title == "Home")
              return (
                <View style={{ backgroundColor: "white" }}>
                  {/* <NavTopLogo icon={<Notification badge={true} />} /> */}
                  <NavExam titleButton="Promo" onClickButton={()=>{router.push('/home/promotions')}}/>
                </View> 
              );
            else if (title != "Search")
              return (
                <View style={{ backgroundColor: "white" }}>
                  <NavTopRightIcon
                    title={title}
                    icon={<Notification badge={true} />}
                  />
                </View>
              );
          },
          tabBarStyle: { paddingHorizontal: 15 },
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            let iconName = "";
            if (route.name === "profile") {
              iconName = "user";
            } else if (route.name === "home") {
              iconName = "home";
            } else if (route.name === "search") {
              iconName = "search";
            } else if (route.name === "wishlist") {
              iconName = "heart";
            } else if (route.name === "cart") {
              iconName = "shopping-basket";
            }
            return (
              <CustomTabBarButton
                label={title}
                icon={iconName}
                focused={focused}
              />
            );
          },
        };
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="wishlist" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
