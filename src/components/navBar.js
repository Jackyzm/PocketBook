import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    nav_bar: {
        width: '100%',
        height: 44,
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        flex: 1
    },
    title_text: {
        color: '#333',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 44,
        fontWeight: 'bold'
    }
});

const NavBar = props => {
    const { title, bgColor, color } = props;
    return (
        <View
            style={{
                ...styles.nav_bar,
                backgroundColor: bgColor || '#fff'
            }}
        >
            <View style={{ width: 100 }} />
            <View style={ styles.title }>
                <Text style={{ ...styles.title_text, color: color || '#333' }}>
                    { title }
                </Text>
            </View>
            <View style={{ width: 100 }} />
        </View>
    );
};

export default NavBar;
