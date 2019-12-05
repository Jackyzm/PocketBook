import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { Button } from '@/components';
import styles from './styles';

const PersonalCenter = ({ navigation }) => {
    const title = 'PersonalCenter';
    // if (title) return navigation.navigate('Login');
    return (
        <>
            <SafeAreaView style={ styles.safe_area_view }>
                <View style={ styles.container }>
                    <Text>{ title }</Text>
                    <Button onPress={ () => navigation.navigate('Login') }>登陆</Button>
                </View>
            </SafeAreaView>
        </>
    );
};

PersonalCenter.propTypes = { navigation: PropTypes.object };

export default PersonalCenter;
