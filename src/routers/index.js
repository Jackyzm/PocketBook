// import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabRoute from './TabNavigator';
import BookKeepingIndex from '@/pages/BookKeeping/IndexPage';
import Login from '@/pages/User/Login';
import Registered from '@/pages/User/Registered';

const StackNavigator = createStackNavigator(
    {
        TabRoute,
        BookKeepingIndex,
        Login,
        Registered
    },
    {
        initialRouteName: 'TabRoute',
        headerMode: 'none'
    }
);

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;
