import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { LogBox } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from "expo-splash-screen"
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import RootNavigation from "./src/navigations/Root";

LogBox.ignoreAllLogs();

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState<AuthInitType | null>(null);
  const [fontsLoaded] = useFonts({
    "Poppins_100Thin": require('./assets/fonts/Poppins-Thin.ttf'),
    "Poppins_100Thin_Italic": require('./assets/fonts/Poppins-ThinItalic.ttf'),
    "Poppins_200ExtraLight": require('./assets/fonts/Poppins-ExtraLight.ttf'),
    "Poppins_200ExtraLight_Italic": require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    "Poppins_300Light": require('./assets/fonts/Poppins-Light.ttf'),
    "Poppins_300Light_Italic": require('./assets/fonts/Poppins-LightItalic.ttf'),
    "Poppins_400Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins_400Regular_Italic": require('./assets/fonts/Poppins-Italic.ttf'),
    "Poppins_500Medium": require('./assets/fonts/Poppins-Medium.ttf'),
    "Poppins_500Medium_Italic": require('./assets/fonts/Poppins-MediumItalic.ttf'),
    "Poppins_600SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins_600SemiBold_Italic": require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    "Poppins_700Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins_700Bold_Italic": require('./assets/fonts/Poppins-BoldItalic.ttf'),
    "Poppins_800ExtraBold": require('./assets/fonts/Poppins-ExtraBold.ttf'),
    "Poppins_800ExtraBold_Italic": require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    "Poppins_900Black": require('./assets/fonts/Poppins-Black.ttf'),
    "Poppins_900Black_Italic": require('./assets/fonts/Poppins-BlackItalic.ttf'),
  });
  const checkTokenAndPrepare = async () => {
    const token = await SecureStore.getItemAsync('session_id');
    await SplashScreen.preventAutoHideAsync();
    setInitialRouteName(token ? '/tab-home' : '/auth');

  };
  useEffect(() => {

    checkTokenAndPrepare();
  }, []);

  if (!fontsLoaded || initialRouteName === null) {
    return null;
  }
  else {
    SplashScreen.hideAsync();
  }


  return (

    <RootNavigation initRoute={initialRouteName!} />

  );
}

