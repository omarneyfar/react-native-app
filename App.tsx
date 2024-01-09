import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import FirstComponent from './components/FirstComponent';

import { ProductCard } from './components/productCard/ProductCardComponent';
import { useState } from 'react';
import FullImageCardArrow from './components/productCard/FullImageCardArrow';
import ProductReview from './components/productReview/ProductReview';
import { default as StoryBookDefault } from './.storybook'
import Constants from 'expo-constants';
import { Notification } from './components/notifications/NotificationsComponent';

const  App = () => {
  const [products,] = useState([{
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 1000,
    title: "Product 1",
    promotion: 50
  }, {
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 2000,
    title: "Product 2",
    promotion: 30
  }



  ])
  const [notifications,] = useState([{
    type: `Type 1`,
    dateTime: `01-12-2023 17:00`,
    title: `Title`,
    subTitle: `Subtitle`
  }, 
  {
    type: `Type 2`,
    dateTime: `29-10-2023 20:00`,
    title: `Title`,
    subTitle: `Subtitle`
  }
  ])
  const [productReviews,] = useState([{
    username: `Username 1`,
    dateTime: `01-12-2023 17:00`,
    color: `White`,
    description: `Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.`,
    images:[
      "https://dummyimage.com/72x72/000/fff.jpg",
      "https://dummyimage.com/72x72/000/fff.jpg",
      "https://dummyimage.com/72x72/000/fff.jpg",
      "https://dummyimage.com/72x72/000/fff.jpg",

    ]
  }, 
  {
    username: `Username 2`,
    dateTime: `01-12-2023 17:00`,
    color: `Black`,
    description: `Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.`,
    images:[
      "https://dummyimage.com/72x72/000/fff.jpg",
      "https://dummyimage.com/72x72/000/fff.jpg",
      "https://dummyimage.com/72x72/000/fff.jpg",
      "https://dummyimage.com/72x72/000/fff.jpg",

    ]
  }, 
  ])

  const clickFavoris = (title: string) => {
    console.log(title)
    if (title == "Product 1") {
      console.log("ok ")
    }
  }

  return (

    <View style={styles.container}>

  <Text>Horizontal</Text>
      {
        products.map((product) =>
          <ProductCard orientation='Horizontal' {...product} onClickFavoris={clickFavoris} icon={<Text>Icon Example</Text>}></ProductCard>
        )
      }
  <Text>Vertical</Text>

      {
        products.map((product) =>
          <ProductCard orientation='Vertical' {...product} onClickFavoris={clickFavoris}></ProductCard>
        )
      }
    <Text>Full Image Card Vertical</Text>

    {
      products.map((product) =>
      <FullImageCardArrow orientation='Vertical' title={product.title} />
      )
    }
    <Text>Full Image Card Horizontal</Text>

    {
      products.map((product) =>
      <FullImageCardArrow orientation='Horizontal' title={product.title} />
      )
    }
    <Text>Notifications</Text>
    
     {
        notifications.map((notification) => {
          return (
            <>
              <Notification {...notification} />
            </>
          )
        }
        )
      }
       {
        productReviews.map((productReview) => {
          return (
            <>
              <ProductReview {...productReview} />
            </>
          )
        }
        )
      }

      {/* <ProductCard title='test' price='dddd'  ></ProductCard> */}
      <StatusBar style="auto" />
    </View>
  );
}

let APP_FINAL =  null
APP_FINAL = App

console.log(Constants?.expoConfig?.extra?.storybookEnabled)
console.log(typeof Constants?.expoConfig?.extra?.storybookEnabled)
if(Constants?.expoConfig?.extra?.storybookEnabled === "true")
{
   APP_FINAL = StoryBookDefault;
}

export default APP_FINAL
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
