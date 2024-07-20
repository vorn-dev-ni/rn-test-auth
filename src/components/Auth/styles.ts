import { StyleSheet } from "react-native";
import appTheme from "../../utils/theme";
import responsive from "../../utils/responsive_util";


const styles = StyleSheet.create({
     spaceY:{ marginVertical: responsive.moderateScale(15) },
      innerContainer:{
        marginHorizontal:responsive.moderateScale(10),
      },
      forgetpassword:{
        alignItems:'center',
        marginVertical:responsive.moderateScale(10),

      },
      textForgetPassword:{
        fontFamily:"Poppins_400Regular",
        color:appTheme.colors.primary,
        fontSize:responsive.moderateScale(14)
      },
      buttonConfirm:{
        backgroundColor:appTheme.colors.primary,
        paddingVertical:10,
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
   
   
       
      }
})

export default styles