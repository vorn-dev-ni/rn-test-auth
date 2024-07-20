import "react-native-gesture-handler";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { useFonts } from "expo-font";
import { LogBox } from 'react-native';
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react";
import RootNavigation from "./src/navigations/Root";
import { AuthContextProvider } from "./src/context/Auth/AuthContextProvider";
import { PaperProvider } from "react-native-paper";
import appTheme from "./src/utils/theme";

LogBox.ignoreAllLogs();

export default function App() {
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
  const prepare = async () => {
    await SplashScreen.preventAutoHideAsync();

  };
  useEffect(() => {

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }




  return (
    <PaperProvider theme={appTheme}>
      <AuthContextProvider >
        <AlertNotificationRoot>
          <RootNavigation />
        </AlertNotificationRoot>
      </AuthContextProvider>
    </PaperProvider>
  );
}

