import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const responsive = {
  width: (size: number) => scale(size), //width
  height: (size: number) => verticalScale(size), //height
  verticalScale: (size: number) => verticalScale(size), //font size
  moderateScale: (size: number, factor = 0.5) => moderateScale(size, factor),
   //use for padding, margin, and font size
};

export default responsive;