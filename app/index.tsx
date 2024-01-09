import { Redirect } from "expo-router"
import { default as StoryBookDefault } from '../.storybook'
import Constants from 'expo-constants';

const StartPage = () => {
  return <Redirect href="/home"/>
}
let APP_FINAL =  null
APP_FINAL = StartPage;

// console.log(Constants?.expoConfig?.extra?.storybookEnabled)
// console.log(typeof Constants?.expoConfig?.extra?.storybookEnabled)
// if(Constants?.expoConfig?.extra?.storybookEnabled === "true")
// {
  // APP_FINAL = StoryBookDefault;
// }

export default APP_FINAL
