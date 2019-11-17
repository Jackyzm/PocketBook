// import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabRoute from './TabNavigator';
import BookKeepingIndex from '@/pages/BookKeeping/IndexPage';

const StackNavigator = createStackNavigator(
    {
        TabRoute,
        BookKeepingIndex
    },
    {
        initialRouteName: 'TabRoute',
        headerMode: 'none'
    }
);

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;
