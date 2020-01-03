import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar
} from 'react-native';
import { useDispatch } from 'react-redux';
import { SetAsyncStorage } from '@/utils/AsyncStorage';
import { NavBar, Button } from '@/components';
import { getTimeTips, ShowToast } from '@/utils/utils';
import { changeLogin } from '@/actions/user';
import { _register } from '@/utils/api/user';

import styles from './styles';

const Registered = ({ navigation }) => {
    const dispatch = useDispatch();

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const tips = getTimeTips();

    const register = () => {
        if (!mobile) return ShowToast('请输入手机号');
        if (!password) return ShowToast('请输入密码');
        if (!/^1[3456789]\d{9}$/.test(mobile)) return ShowToast('请输入正确的手机号');
        if (!/^.{6,18}$/.test(password)) return ShowToast('请输入6-18位的密码');
        _register({ mobile, password }).then((res = {}) => {
            SetAsyncStorage('authInfo', res);
            navigation.navigate('Home');
            dispatch(changeLogin(true));
        }).catch(() => {});
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <SafeAreaView style={ styles.safe_area_view }>
                <NavBar
                    title="注册"
                    bgColor="#fff"
                    color="#333"
                />
                <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } accessible={ false }>
                    <View
                        style={ styles.container }
                    >
                        <Text style={ styles.tips }>
                            Hi，
                            { tips }
                        </Text>
                        <View
                            style={ styles.input_view }
                        >
                            <TextInput
                                placeholder="请输入手机号"
                                maxLength={ 11 }
                                autoCompleteType="off"
                                dataDetectorTypes="phoneNumber"
                                keyboardType="number-pad"
                                style={{ width: '100%', fontSize: 18 }}
                                onChangeText={ (value) => setMobile(value) }
                            />
                        </View>
                        <View
                            style={ [styles.input_view, { marginTop: 20 }] }
                        >
                            <TextInput
                                placeholder="请输入密码"
                                autoCompleteType="off"
                                style={{ width: '100%', fontSize: 18 }}
                                secureTextEntry
                                onChangeText={ (value) => setPassword(value) }
                            />
                            { /* <View>
                            <Button>获取验证码</Button>
                        </View> */ }
                        </View>
                        <View
                            style={ styles.register_row }
                        >
                            <Button
                                boxStyle={{ flex: 1 }}
                                style={ styles.register_btn }
                                onPress={ () => {
                                    Keyboard.dismiss();
                                    register();
                                } }
                            >
                                立即注册
                            </Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    );
};

Registered.propTypes = { navigation: PropTypes.object };
export default Registered;
