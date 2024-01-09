import React, { ReactElement, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Promotion from "../icons/Promotion";
import Info from "../icons/Info";
import Order from "../icons/Order";
import { formatDate } from "../../utils/formatDate";

type NotificationProps = {
  type?: string;
  title?: string;
  subTitle?: string;
  date?: string;
};

export const Notification: React.FC<NotificationProps> = ({
  type,
  title,
  subTitle,
  date,
}) => {


  const typeTest = [
    {
      icon: <Promotion />,
      label: "promotion",
      color: "#EBFBF1",
    },
    {
      icon: <Info />,
      label: "info",
      color: "#EBF1FC",
    },
    {
      icon: <Order />,
      label: "order",
      color: "#FEF6E2",
    },
  ];

  const infoNotification = typeTest.filter((e) => e.label === type);

  return (
    <View style={styles.notification}>
      <View
        style={[styles.icon, { backgroundColor: infoNotification[0]["color"] }]}
      >
        {infoNotification[0]["icon"]}
      </View>
      <View style={styles.text}>
        <View style={styles.labeltype}>
          <View style={styles.left}>
            <Text style={styles.label}>{type}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.labelright}>
              {formatDate(date || new Date().toISOString())}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    flexShrink: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12,
  },
  icon: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    padding: 10,
    borderRadius: 8,
  },
  iconsOutlineInfo: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 2,
    bottom: 2,
    left: 2,
    overflow: "visible",
  },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 4,
  },
  labeltype: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    columnGap: 12,
  },
  left: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
    textTransform:"capitalize"
  },
  right: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 4,
  },
  labelright: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
    
  },
  content: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 0,
  },
  title: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
    textTransform:"capitalize"
  },
  subtitle: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
  },
});
