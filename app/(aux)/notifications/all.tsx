import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeGlobal } from "../../../styles/themeGlobal";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/reduxState/ReduxState";
import { ScrollView } from "react-native-gesture-handler";
import { Notification } from "../../../components/notifications/NotificationsComponent";

const All = () => {
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications
  );
  return (
    <View style={themeGlobal.baseStyles.container}>
      <ScrollView style={styles.notificationsWrapper}>
        {notifications.map((notification, index: number) => (
          <View style={styles.notificationWrapper} key={index}>
            <Notification
              type={notification.typeNotification}
              title={notification.value}
              date={notification.createdAt}
              subTitle="Dictumst aliquam placerat praesent nibh. Id aenean mauris pulvinar adipiscing mi."
              {...notifications}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  notificationsWrapper: {
    paddingTop: 20,
  },
  notificationWrapper: {
    marginBottom: 20,
  },
});
