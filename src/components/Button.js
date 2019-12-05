import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import { commonBlue } from '@/utils/style';

const styles = StyleSheet.create({
    text_style: {
        width: 142,
        height: 30,
        lineHeight: 30,
        backgroundColor: commonBlue,
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden'
    }
});

const Button = ({
    style = {},
    onPress,
    activeOpacity = 0.6,
    children,
    zIndex,
    boxStyle = {}
}) => (
    <TouchableOpacity
        style={ [boxStyle, zIndex ? { position: 'relative', zIndex } : {}] }
        activeOpacity={ activeOpacity }
        onPress={ onPress }
    >
        <Text
            style={{ ...styles.text_style, ...style }}
        >
            { children }
        </Text>
    </TouchableOpacity>
);

Button.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func.isRequired,
    activeOpacity: PropTypes.number,
    children: PropTypes.any,
    zIndex: PropTypes.number,
    boxStyle: PropTypes.object
};
export default Button;
