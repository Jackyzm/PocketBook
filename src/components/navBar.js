import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { commonBlue } from '@/utils/style';

const styles = StyleSheet.create({
    nav_bar: {
        width: '100%',
        height: 44,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 99
    },
    title: { flex: 1 },
    title_text: {
        color: '#333',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 44,
        fontWeight: 'bold'
    }
});

const NavBar = (props) => {
    const {
        title,
        bgColor,
        color,
        navigation,
        showBack = true,
        afterBack
    } = props;
    return (
        <View
            style={{
                ...styles.nav_bar,
                backgroundColor: bgColor || commonBlue
            }}
        >
            { showBack ? (
                <TouchableOpacity
                    activeOpacity={ 1 }
                    style={{
                        width: 100,
                        paddingLeft: 20,
                        justifyContent: 'center'
                    }}
                    onPress={ () => (afterBack ? afterBack() : navigation.goBack()) }
                >
                    <Text
                        style={{
                            fontFamily: 'iconfont',
                            fontSize: 16,
                            color: color || '#fff'
                        }}
                    >
                        &#xe618;
                    </Text>
                </TouchableOpacity>
            ) : <View style={{ width: 100 }} /> }
            <View style={ styles.title }>
                <Text style={{ ...styles.title_text, color: color || '#fff' }}>
                    { title }
                </Text>
            </View>
            <View style={{ width: 100 }} />
        </View>
    );
};

NavBar.propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    navigation: PropTypes.object,
    showBack: PropTypes.bool,
    afterBack: PropTypes.func
};

export default withNavigation(NavBar);
