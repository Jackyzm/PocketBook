import React from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    Platform,
    View
} from 'react-native';
// https://zhuanlan.zhihu.com/p/46868724

const SafeAreaBottomView = ({ style }) => {
    // iPhoneX Xs
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
        isIphoneXOrXR() ? (
            <View
                style={{
                    width: '100%',
                    height: 34,
                    position: 'absolute',
                    bottom: 0,
                    zIndex: 9,
                    backgroundColor: '#fff',
                    ...style
                }}
            />
        ) : null
    );
};

SafeAreaBottomView.propTypes = { style: PropTypes.object };
export default SafeAreaBottomView;
