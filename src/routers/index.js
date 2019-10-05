import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '@/pages/Home';
import PersonalCenter from '@/pages/PersonalCenter';
import BookKeepingIndexPage from '@/pages/BookKeeping/IndexPage';

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
                tabBarIcon: ({ focused }) => (
                    <Text
                        style={ [
                            styles.icon,
                            { color: focused ? '#069BFF' : '#B2B2B2' }
                        ] }
                    >
                        &#xe600;
                    </Text>
                )
            }
        },
        BookKeeping: {
            screen: BookKeepingIndexPage,
            navigationOptions: {
                tabBarIcon: () => (
                    <View
                        style={{
                            position: 'relative',
                            top: -20,
                            backgroundColor: '#f00',
                            padding: 10,
                            width: 70,
                            height: 70,
                            borderRadius: 35
                        }}
                    >
                        <Text
                            style={ [
                                styles.icon,
                                {
                                    fontSize: 40,
                                    color: '#fff'
                                }
                            ] }
                        >
                        &#xe601;
                        </Text>
                    </View>

                )
            }
        },
        PersonalCenter: {
            screen: PersonalCenter,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Text
                        style={ [
                            styles.icon,
                            { color: focused ? '#069BFF' : '#B2B2B2' }
                        ] }
                    >
                        &#xe607;
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
                backgroundColor: '#f0f0f0'
            }
        }
    }
);

const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;
