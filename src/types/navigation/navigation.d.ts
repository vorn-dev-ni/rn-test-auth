import { StackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
 Profile: { userId: number };
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, '/auth'>;

export default RootStackParamList;
 