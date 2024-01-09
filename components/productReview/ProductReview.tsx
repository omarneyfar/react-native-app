import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";
import Star from "../icons/Star";
import EmptyStar from "../icons/EmptyStar";
import { formatDate } from "../../utils/formatDate";

type ProductReviewProps = {
  username?: string;
  createdAt?: string;
  color?: string;
  description?: string;
  images?: string[];
  value: number;
};

const ProductReview: React.FC<ProductReviewProps> = ({
  username,
  createdAt,
  color,
  description,
  images,
  value,
}) => {
  const renderRatingStars = (rating: number) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const remainingStars = totalStars - filledStars;
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<Star key={i} />);
    }
    for (let j = 0; j < remainingStars; j++) {
      stars.push(<EmptyStar key={filledStars + j} />);
    }
    return <View style={{ flexDirection: "row" }}>{stars}</View>;
  };

  return (
    <View style={styles.review}>
      <View style={styles.header}>
        <View style={styles.user}>
          <ImageBackground
            style={styles.avatar}
            source={{
              uri: "https://dummyimage.com/24x24/000/fff.jpg",
            }}
          />
          <Text style={styles.name}>{username}</Text>
        </View>
        <Text style={styles.date}>
          {formatDate(createdAt || new Date().toISOString())}
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.ratingUser}>{renderRatingStars(value)}</View>
        <View style={styles.badge}>
          <Text style={styles.label}>{`Color: ${color}`}</Text>
        </View>
        <Text style={styles.content}>{description}</Text>
        <View style={styles.photos}>
          {images?.map &&
            images.map((image,index:number) => (
              <ImageBackground style={styles.image} source={{ uri: image }} key={index} />
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    flexShrink: 0,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 8,
  },
  header: {
    alignSelf: "stretch",
    flexShrink: 0,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 0,
  },
  user: {
    flexShrink: 0,
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  avatar: {
    flexShrink: 0,
    width: 24,
    height: 24,
    borderRadius: 9999,
    overflow: "hidden",
  },
  name: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  date: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
  },
  body: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 4,
  },
  ratingUser: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
  },

  badge: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    borderRadius: 4,
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
  },
  content: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
  },
  photos: {
    alignSelf: "stretch",
    flexShrink: 0,
    paddingTop: 4,
    paddingBottom: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 8,
    paddingHorizontal: 0,
  },
  image: {
    flexShrink: 0,
    width: 72,
    height: 72,
    borderRadius: 8,
    overflow: "hidden",
  },
  
});
export default ProductReview;
