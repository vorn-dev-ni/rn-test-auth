
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
const appTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
    colors: {
    primary: "#6ED3F6",
    secondary: "#ffffff",
    background: "#F5F5FA",
    surface: "#ffffff",
    error: "#B00020",
    textPrimary: "#333333",
    textSecondary: "#757575",
      gray:"#B0B1B3",
     graydarker:"#686D76",
}


}

export default appTheme;
