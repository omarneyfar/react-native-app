import React from 'react';
import { View } from 'react-native';
import { ProductCard } from '../../../components/productCard/ProductCardComponent'
const ProductCardMeta = {
  title: 'Product Card ',
  component: ProductCard,
  argTypes: {
    onClickFavoris: { action: 'pressed the button' },
    orientation : {
      options: ['Vertical', 'Horizontal'],
      control: { type: 'radio' },
    }
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

export default ProductCardMeta;

export const Horizontal = {
  args : {
    orientation : 'Horizontal',
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 10002,
    title: "Product 1",
    promotion: 50,
    ratings:4.5,
    onClickFavoris : () => console.log("test")
  }
 
};

export const Vertical = {
  args: {
    orientation : 'Vertical',
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 10002,
    title: "Product 1",
    promotion: 50,
    ratings:4.5,
    onClickFavoris : () => console.log("test Vertical")
  },
}; 
