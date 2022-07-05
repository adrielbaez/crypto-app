import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ActionsScreen,
  HomeScreen,
  PortFolioScreen,
  PricesScreen,
  SettingsScreen,
} from '../screens';
import { TabBarUI } from '../components/layout';

const TabBarNavigator = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <TabBarNavigator.Navigator tabBar={props => <TabBarUI {...props} />}>
      <TabBarNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <TabBarNavigator.Screen
        name="PortfolioScreen"
        component={PortFolioScreen}
      />
      <TabBarNavigator.Screen name="ActionsScreen" component={ActionsScreen} />
      <TabBarNavigator.Screen name="PricesScreen" component={PricesScreen} />
      <TabBarNavigator.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </TabBarNavigator.Navigator>
  );
};
