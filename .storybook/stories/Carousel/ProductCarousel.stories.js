import React from "react";
import { View } from "react-native";
import  ProductCarousel  from "../../../components/carousel/ProductCarousel";

export default {
  title: "Product Carousel",
  component: ProductCarousel,
  argTypes: {},
  args: {
    images: [
      "https://dummyimage.com/360x360/000/fff.jpg",
      "https://dummyimage.com/360x360/000/fff.jpg",
      "https://dummyimage.com/360x360/000/fff.jpg",
      "https://dummyimage.com/360x360/000/fff.jpg",
    ],
  },
  decorators: [
    (Story) => (
     <View style={{
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      flex:1
    }}>
       <View
        style={{
          width:300,
        }}
      >
        <Story />
      </View>
     </View>
    ),
  ],
};

export const Carousel = {
  args: {
    images: [
      "https://dummyimage.com/360x360/000/fff.jpg",
      "https://dummyimage.com/360x360/000/fff.jpg",
      "https://dummyimage.com/360x360/000/fff.jpg",
      "https://dummyimage.com/360x360/000/fff.jpg",
    ],
  },
};
