import { StyleSheet } from "react-native";
import appTheme from "../../../utils/theme";
import responsive from "../../../utils/responsive_util";



const styles = StyleSheet.create({
      container:{
          backgroundColor: appTheme.colors.secondary,
          flex:1,
      
      },
      spaceY:{
        marginTop:responsive.moderateScale(20)
      },
      innerContainer:{
        marginHorizontal:responsive.moderateScale(10),
        marginTop:responsive.moderateScale(15)
      }
})

export default styles