import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants';
import { TabItem } from './TabItem';

export const TabBarUI = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === 'ActionsScreen';
        const itemColor = focused ? COLORS.cbBlue : COLORS.subtitle;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        let iconName;
        switch (route.name) {
          case 'HomeScreen':
            iconName = 'home';
            break;
          case 'PortfolioScreen':
            iconName = 'pie-chart';
            break;
          case 'PricesScreen':
            iconName = 'cellular';
            break;
          default:
            iconName = 'person';
            break;
        }

        return (
          <TabItem
            key={route.name}
            route={route}
            iconName={iconName}
            itemColor={itemColor}
            isActions={isActions}
            onPress={onPress}
          />
        );
      })}
    </View>
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
});
