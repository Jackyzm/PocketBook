import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import { useSelector } from 'react-redux';
import { commonRed, commonBlue } from '@/utils/style';

const styles = StyleSheet.create({
    box_view: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        height: 48
    },
    add_btn: {
        position: 'relative',
        top: -20,
        backgroundColor: commonRed,
        width: 60,
        height: 60,
        borderRadius: 30
    },
    icon: {
        fontFamily: 'iconfont',
        textAlign: 'center',
        fontSize: 28,
        lineHeight: 48
    }
});

const TabBarComponent = ({ navigation }) => {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;

    // iPhoneXR XsMax
    const XR_WIDTH = 414;
    const XR_HEIGHT = 896;

    // screen
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;

    const isIphoneXOrXR = () => (
        Platform.OS === 'ios'
            && ((SCREEN_WIDTH === XR_WIDTH && SCREEN_HEIGHT === XR_HEIGHT)
            || (SCREEN_WIDTH === X_WIDTH && SCREEN_HEIGHT === X_HEIGHT))
    );

    const login = useSelector((state) => state.user.login);

    return (
        <View
            style={ [
                styles.box_view,
                isIphoneXOrXR() ? { paddingBottom: 34, height: 82 } : {}
            ] }
        >
            <TouchableOpacity
                activeOpacity={ 1 }
                style={{ flex: 1, height: 48 }}
                onPress={ () => navigation.navigate('Home') }
            >
                <Text
                    style={ [
                        styles.icon,
                        { color: !navigation.state.index ? commonBlue : '#B2B2B2' }
                    ] }
                >
                    &#xe600;
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
                onPress={ () => navigation.navigate('AddOrEditNotes') }
            >
                <View
                    style={ styles.add_btn }
                >
                    <Text
                        style={ [
                            styles.icon,
                            {
                                fontSize: 30,
                                color: '#fff',
                                lineHeight: 60
                            }
                        ] }
                    >
                        &#xe601;
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={{ flex: 1, height: 48 }}
                onPress={ () => (!login ? navigation.navigate('Login') : navigation.navigate('PersonalCenter')) }
            >
                <Text
                    style={ [
                        styles.icon,
                        { color: navigation.state.index ? commonBlue : '#B2B2B2' }
                    ] }
                >
                    &#xe607;
                </Text>
            </TouchableOpacity>
        </View>
    );
};


TabBarComponent.propTypes = { navigation: PropTypes.object };
export default TabBarComponent;
