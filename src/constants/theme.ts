import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  cbBlue: '#0053f8',
  subtitle: 'rgb(92, 98, 110)',
  border: 'rgb(223, 225, 226)',
  positiveGreen: 'rgb(11, 130, 82)',
  negativeRed: 'rgb(204, 26, 46)',
  secondarySubtitle: 'rgb(79, 85, 102)',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
