import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeGlobal } from "../../../styles/themeGlobal";
import { RootState } from "../../../types/reduxState/ReduxState";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Notification } from "../../../components/notifications/NotificationsComponent";

const Orders = () => {
  const notificationsOrder = useSelector(
    (state: RootState) => state.notification.notifications
  ).filter((notification) => notification.typeNotification === "order");
  return (
    <View style={themeGlobal.baseStyles.container}>
      <ScrollView style={styles.notificationsWrapper}>
        {notificationsOrder.map((notification, index: number) => {
          return (
            <View style={styles.notificationWrapper} key={index}>
              <Notification
                type={notification.typeNotification}
                title={notification.value}
                date={notification.createdAt}
                subTitle="Dictumst aliquam placerat praesent nibh. Id aenean mauris pulvinar adipiscing mi."
                {...notification}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  notificationsWrapper: {
    paddingTop: 20,
  },
  notificationWrapper: {
    marginBottom: 20,
  },
});
