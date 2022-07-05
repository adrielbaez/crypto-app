import { Animated } from 'react-native';

export const useAnimatedSpring = (
  value: number = 1,
  toValueIn: number = 0.9,
  toValueOn: number = 1,
) => {
  const animatedValue = new Animated.Value(value);

  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: toValueIn,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: toValueOn,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return { animatedValue, animatedStyle, onPressIn, onPressOut };
};
