import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../constants';
import { useAnimatedSpring } from '../hooks/useAnimatedSpring';
interface TabBarProps {
  route: any; // TODO: type this
  isActions: boolean;
  onPress: () => void;
  iconName: string;
  itemColor: string;
}
export const TabItem = ({
  route,
  isActions,
  onPress,
  iconName,
  itemColor,
}: TabBarProps) => {
  const { onPressIn, onPressOut, animatedStyle } = useAnimatedSpring(1, 0.9, 1);

  return (
    <Animated.View
      style={[
        styles.tabItem,
        animatedStyle,
        isActions ? { marginTop: 7 } : { marginTop: 10 },
      ]}
      key={route.name}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {isActions ? (
          <View style={styles.actionButton}>
            <Icon name="swap-horizontal" size={20} color="white" />
          </View>
        ) : (
          <View style={{ alignItems: 'center' }}>
            <Icon
              name={iconName as any}
              size={20}
              color={itemColor}
              style={{ marginBottom: 2 }}
            />
            <Text style={[{ color: itemColor }, styles.tabItemText]}>
              {route.name}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 85,
    borderColor: 'white',
    borderTopColor: COLORS.border,
    borderWidth: 1,
  },
  tabItem: {
    width: 60,
  },
  tabItemText: {
    fontSize: 10,
    fontWeight: '700',
  },
  actionButton: {
    width: 42,
    height: 42,
    backgroundColor: COLORS.cbBlue,
    borderRadius: 21,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
