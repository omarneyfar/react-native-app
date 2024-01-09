import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";

type NotificationProps = {
  badge: boolean;
};

const Notification: React.FC<NotificationProps> = ({ badge }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.notification}
      onPress={() => router.push("/notifications")}
    >
      <View style={styles.icon}>
        <View style={styles.boundingbox} />
        <Svg
          style={styles.vector}
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
        >
          <Path
            d="M1.16671 14.8333C0.930596 14.8333 0.73268 14.7535 0.572957 14.5937C0.413235 14.434 0.333374 14.2361 0.333374 14C0.333374 13.7639 0.413235 13.566 0.572957 13.4062C0.73268 13.2465 0.930596 13.1667 1.16671 13.1667H2.00004V7.33332C2.00004 6.18055 2.34726 5.15624 3.04171 4.26041C3.73615 3.36457 4.63893 2.77777 5.75004 2.49999V1.91666C5.75004 1.56943 5.87157 1.2743 6.11462 1.03124C6.35768 0.788184 6.65282 0.666656 7.00004 0.666656C7.34726 0.666656 7.6424 0.788184 7.88546 1.03124C8.12851 1.2743 8.25004 1.56943 8.25004 1.91666V2.49999C9.36115 2.77777 10.2639 3.36457 10.9584 4.26041C11.6528 5.15624 12 6.18055 12 7.33332V13.1667H12.8334C13.0695 13.1667 13.2674 13.2465 13.4271 13.4062C13.5868 13.566 13.6667 13.7639 13.6667 14C13.6667 14.2361 13.5868 14.434 13.4271 14.5937C13.2674 14.7535 13.0695 14.8333 12.8334 14.8333H1.16671ZM7.00004 17.3333C6.54171 17.3333 6.14935 17.1701 5.82296 16.8437C5.49657 16.5174 5.33337 16.125 5.33337 15.6667H8.66671C8.66671 16.125 8.50351 16.5174 8.17712 16.8437C7.85074 17.1701 7.45837 17.3333 7.00004 17.3333ZM3.66671 13.1667H10.3334V7.33332C10.3334 6.41666 10.007 5.63193 9.35421 4.97916C8.70143 4.32638 7.91671 3.99999 7.00004 3.99999C6.08337 3.99999 5.29865 4.32638 4.64587 4.97916C3.9931 5.63193 3.66671 6.41666 3.66671 7.33332V13.1667Z"
            fill="#09111F"
          />
        </Svg>
      </View>
      {badge && (
        <View style={styles.badge}>
          <Svg
            style={styles.dot}
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <Circle cx="3" cy="3" r="3" fill="#E50D24" />
          </Svg>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notification: {
    flexShrink: 0,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderRadius: 9999,
  },
  icon: {
    flexShrink: 0,
    height: 20,
    width: 20,
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
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 3,
    bottom: 2,
    left: 3,
    overflow: "visible",
  },
  badge: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    height: 6,
    left: 27,
    width: 6,
    alignItems: "flex-start",
    rowGap: 0,
  },
  dot: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible",
  },
});
