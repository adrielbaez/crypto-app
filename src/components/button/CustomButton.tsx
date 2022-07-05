import React, { FC } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { COLORS } from '../../constants/theme';
import { useAnimatedSpring } from '../hooks/useAnimatedSpring';

interface Props {
  title: string;
}
export const CustomButton: FC<Props> = ({ title }) => {
  const { onPressIn, onPressOut, animatedStyle } = useAnimatedSpring();
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableHighlight
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => console.log('pressed')}
      >
        <View style={styles.button}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.cbBlue,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
