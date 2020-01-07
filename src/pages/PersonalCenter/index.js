import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StatusBar,
    SafeAreaView
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, NavBar } from '@/components';
import { ClearAllAsyncStorage } from '@/utils/AsyncStorage';
import { changeLogin } from '@/actions/user';
import { commonBlue } from '@/utils/style';
import styles from './styles';

const PersonalCenter = ({ navigation }) => {
    const dispatch = useDispatch();
    const title = 'PersonalCenter';
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={ commonBlue } />
            <SafeAreaView style={ styles.safe_area_view }>
                <NavBar
                    title="个人中心"
                    showBack={ false }
                />
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
