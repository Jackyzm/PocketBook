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

const styles = StyleSheet.create({
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

    return (
        <View
            style={ [
                {
                    flexDirection: 'row',
                    backgroundColor: '#f0f0f0',
                    height: 48
                },
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
                        { color: !navigation.state.index ? '#069BFF' : '#B2B2B2' }
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
                onPress={ () => navigation.navigate('BookKeepingIndex') }
            >
                <View
                    style={{
                        position: 'relative',
                        top: -30,
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
                                color: '#fff',
                                lineHeight: 50
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
                onPress={ () => navigation.navigate('PersonalCenter') }
            >
                <Text
                    style={ [
                        styles.icon,
                        { color: navigation.state.index ? '#069BFF' : '#B2B2B2' }
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
