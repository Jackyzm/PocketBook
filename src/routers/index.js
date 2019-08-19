import React from 'react';
import { Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '@/pages/Home';
import PersonalCenter from '@/pages/PersonalCenter';
import { commonBlue } from '@/utils/style';

const styles = StyleSheet.create({
    icon: {
        fontFamily: 'iconfont',
        textAlign: 'center',
        fontSize: 28
    }
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarOnPress: ({ defaultHandler }) => {
                    StatusBar.setBarStyle('light-content', false);
                    if (Platform.OS === 'android') {
                        StatusBar.setBackgroundColor(commonBlue, false);
                    }
                    return defaultHandler();
                },
                tabBarIcon: ({ focused }) => (
                    <Text
                        style={ [
                            styles.icon,
                            { color: focused ? '#069BFF' : '#B2B2B2' }
                        ] }
                    >
                        &#xe61e;
                    </Text>
                )
            }
        },
        PersonalCenter: {
            screen: PersonalCenter,
            navigationOptions: {
                tabBarOnPress: ({ defaultHandler }) => {
                    StatusBar.setBarStyle('dark-content', false);
                    if (Platform.OS === 'android') {
                        StatusBar.setBackgroundColor('#fff', false);
                    }
                    return defaultHandler();
                },
                tabBarIcon: ({ focused }) => (
                    <Text
                        style={ [
                            styles.icon,
                            { color: focused ? '#069BFF' : '#B2B2B2' }
                        ] }
                    >
                        &#xe60d;
                    </Text>
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#069BFF',
            tabStyle: {
                justifyContent: 'center'
            },
            style: {
                borderTopColor: '#F1F1F1',
                backgroundColor: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;
