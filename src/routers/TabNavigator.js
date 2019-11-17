// import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '@/pages/Home';
import PersonalCenter from '@/pages/PersonalCenter';
import { TabBarComponent } from '@/components';

const TabNavigator = createBottomTabNavigator(
    {
        Home,
        PersonalCenter
    },
    {
        initialRouteName: 'Home',
        tabBarComponent: TabBarComponent,
        keyboardHidesTabBar: true,
        showLabel: false
    }
);

export default TabNavigator;
