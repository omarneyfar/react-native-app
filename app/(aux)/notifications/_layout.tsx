import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { getHeaderTitle } from "../../../utils/getHeaderTitle";
import NavTopRightIcon from "../../../components/nav/NavTopRightIcon";
import Notification from "../../../components/icons/Notification";
import Setting from "../../../components/icons/Setting";
import { useDispatch } from "react-redux";
import { service } from "../../../service";

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
  const dispatch = useDispatch();
  useEffect(() => {
    const retrieveNotifications = async () => {
      const { data } = await service.notifications.notificationsList({
        skip: "0",
        take: "10",
      });
      dispatch({ type: "SET_NOTIFICATIONS", payload: data.paginatedResult });
      return data;
    };
    retrieveNotifications();
  }, []);

  return (
    <Tabs
      initialRouteName="all"
      screenOptions={({ route }) => {
        const title = getHeaderTitle(route.name);
        return {
          header: () => {
            return (
              <View
                style={{
                  marginBottom: 50,
                  height: 65,
                  backgroundColor: "white",
                }}
              >
                <NavTopRightIcon title={"Notifications"} icon={<Setting />} />
              </View>
            );
          },
          tabBarStyle: {
            paddingHorizontal: 15,
            position: "absolute",
            top: 65,
            height: 50,
            borderTopWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(225, 229, 235, 1)",
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
      <Tabs.Screen name="all" />
      <Tabs.Screen name="orders" />
      <Tabs.Screen name="promotions" />
      <Tabs.Screen name="info" />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
