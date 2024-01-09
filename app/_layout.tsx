import React, { useEffect, useState } from "react";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";
import * as Font from 'expo-font';

const Layout = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Satoshi Variable': require('../assets/fonts/Satoshi-Variable.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
};

export default Layout;
