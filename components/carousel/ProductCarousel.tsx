import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, FlatList, Dimensions } from "react-native";
import Pagination from "../pagination/PaginationDots";

const { width } = Dimensions.get("window");

type ProductCarouselProps = {
  images: string[] | [];
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCarouselItem = ({ item }: { item: string }) => (
    <ImageBackground
      style={styles.image}
      source={{
        uri: item || "https://dummyimage.com/360x360/000/fff.jpg",
      }}
    />
  );
  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    const currentIndex = index % images.length;
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.carousel}>
      <FlatList
        horizontal
        data={images}
        renderItem={renderCarouselItem}
        keyExtractor={(item, index) => `${index}`}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={"fast"}
        onScroll={onScroll}

      />
      <View style={styles.paginationWrapper}>
        <Pagination totalItems={images.length} activeIndex={activeIndex} />
      </View>
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  carousel: {
    height: 360,
  },
  image: {
    width,
    height: 360,
  },
  paginationWrapper: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    marginBottom: 12,
  },
});
