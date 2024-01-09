export default () => {
    return {
        "expo": {
          "name": "my-app-ts",
          "slug": "my-app-ts",
          "version": "1.0.0",
          "orientation": "portrait",
          "icon": "./assets/logo.png",
          "userInterfaceStyle": "light",
          "splash": {
            "image": "./assets/logo.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff",
          },
          "assetBundlePatterns": [
            "**/*"
          ],
          "ios": {
            "supportsTablet": true
          },
          "android": {
            "adaptiveIcon": {
              "foregroundImage": "./assets/adaptive-icon.png",
              "backgroundColor": "#ffffff"
            }
          },
          "web": {
            "favicon": "./assets/favicon.png",
            "bundler": "metro"
          },
          "extra": {
            "storybookEnabled" : process.env.storybookEnabled,
            "eas": {
              "projectId": "e57193fe-fce1-46fa-be20-41662434cfd9"
            }
          },
          "runtimeVersion": {
            "policy": "appVersion"
          },
          "updates": {
            "url": "https://u.expo.dev/e57193fe-fce1-46fa-be20-41662434cfd9"
          },
          "plugins": [
            "expo-router"
          ],
          "scheme": "your-app-scheme",
          
        }
      }
      
}