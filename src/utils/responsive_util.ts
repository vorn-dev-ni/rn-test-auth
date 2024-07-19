// src/utils/responsive.js
import { Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const responsive = {
  width: (widthPercent:string) => {
    const screenWidth = width;
    return (screenWidth * parseFloat(widthPercent)) / 100;
  },
  height: (heightPercent:string) => {
    const screenHeight = height;
    return (screenHeight * parseFloat(heightPercent)) / 100;
  },
  scale: (size:number) => scale(size),
  verticalScale: (size:number) => verticalScale(size),
  moderateScale: (size:number, factor = 0.5) => moderateScale(size, factor),
};

export default responsive;
