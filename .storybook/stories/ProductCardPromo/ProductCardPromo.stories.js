import React from 'react';
import { View } from 'react-native';
import ProductCardPromo from '../../../components/productCard/ProductCardPromo';
const ProductCardPromoMeta = {
  title: 'Product Card ',
  component: ProductCardPromo,
  argTypes: {
    onClick: { action: 'pressed the button' },
  },
  args: {
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 1000,
    title: "Product 1",
    promotion: 50
  },
  decorators: [
    (Story) => (
      <View style={{ backgroundColor : "white" ,  alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ProductCardPromoMeta;

export const Promotion = {
  args : {
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 10002,
    title: "Product 1",
    promotion: 50,
    ratings:4.5,
    onClick : () => console.log("test")
  }
 
};


