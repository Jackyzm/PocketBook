import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '@/components';
import { ClearAllAsyncStorage } from '@/utils/AsyncStorage';
import { changeLogin } from '@/actions/user';
import styles from './styles';

const PersonalCenter = ({ navigation }) => {
    const dispatch = useDispatch();
    const title = 'PersonalCenter';
    return (
        <>
            <SafeAreaView style={ styles.safe_area_view }>
                <View style={ styles.container }>
                    <Text>{ title }</Text>
                    <Button
                        onPress={ () => {
                            ClearAllAsyncStorage();
                            dispatch(changeLogin(false));
                            navigation.navigate('Home');
                        } }
                    >
                        登陆
                    </Button>
                </View>
            </SafeAreaView>
        </>
    );
};

PersonalCenter.propTypes = { navigation: PropTypes.object };

export default PersonalCenter;
