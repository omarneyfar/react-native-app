import { useRouter } from "expo-router";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

type BasketProps = {
  badge: boolean;
};

const Basket: React.FC<BasketProps> = ({ badge }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.basket}
      onPress={() => router.push("/basket")}
    >
       <View style={styles.icon}>
      <View style={styles.boundingbox} />
      <Svg
        style={styles.vector}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <Path
          d="M5.83337 17.3333C5.37504 17.3333 4.98268 17.1701 4.65629 16.8437C4.3299 16.5173 4.16671 16.125 4.16671 15.6666C4.16671 15.2083 4.3299 14.8159 4.65629 14.4895C4.98268 14.1632 5.37504 14 5.83337 14C6.29171 14 6.68407 14.1632 7.01046 14.4895C7.33685 14.8159 7.50004 15.2083 7.50004 15.6666C7.50004 16.125 7.33685 16.5173 7.01046 16.8437C6.68407 17.1701 6.29171 17.3333 5.83337 17.3333ZM14.1667 17.3333C13.7084 17.3333 13.316 17.1701 12.9896 16.8437C12.6632 16.5173 12.5 16.125 12.5 15.6666C12.5 15.2083 12.6632 14.8159 12.9896 14.4895C13.316 14.1632 13.7084 14 14.1667 14C14.625 14 15.0174 14.1632 15.3438 14.4895C15.6702 14.8159 15.8334 15.2083 15.8334 15.6666C15.8334 16.125 15.6702 16.5173 15.3438 16.8437C15.0174 17.1701 14.625 17.3333 14.1667 17.3333ZM5.12504 3.99996L7.12504 8.16663H12.9584L15.25 3.99996H5.12504ZM5.83337 13.1666C5.20837 13.1666 4.73615 12.8923 4.41671 12.3437C4.09726 11.7951 4.08337 11.25 4.37504 10.7083L5.50004 8.66663L2.50004 2.33329H1.64587C1.40976 2.33329 1.21532 2.25343 1.06254 2.09371C0.909763 1.93399 0.833374 1.73607 0.833374 1.49996C0.833374 1.26385 0.913235 1.06593 1.07296 0.906209C1.23268 0.746487 1.4306 0.666626 1.66671 0.666626H3.02087C3.17365 0.666626 3.31949 0.708293 3.45837 0.791626C3.59726 0.874959 3.70143 0.993015 3.77087 1.14579L4.33337 2.33329H16.625C17 2.33329 17.257 2.47218 17.3959 2.74996C17.5348 3.02774 17.5278 3.3194 17.375 3.62496L14.4167 8.95829C14.2639 9.23607 14.0625 9.45135 13.8125 9.60413C13.5625 9.7569 13.2778 9.83329 12.9584 9.83329H6.75004L5.83337 11.5H15.0209C15.257 11.5 15.4514 11.5798 15.6042 11.7395C15.757 11.8993 15.8334 12.0972 15.8334 12.3333C15.8334 12.5694 15.7535 12.7673 15.5938 12.927C15.4341 13.0868 15.2362 13.1666 15 13.1666H5.83337Z"
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

export default Basket;

const styles = StyleSheet.create({
  basket: {
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
    left: 30,
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
