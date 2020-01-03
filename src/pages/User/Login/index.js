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
import { NavBar, Button } from '@/components';
import { getTimeTips, ShowToast } from '@/utils/utils';
import { SetAsyncStorage } from '@/utils/AsyncStorage';
import { _login } from '@/utils/api/user';
import { changeLogin } from '@/actions/user';
import styles from './styles';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const tips = getTimeTips();

    const login = () => {
        if (!mobile) return ShowToast('请输入手机号');
        if (!password) return ShowToast('请输入密码');
        if (!/^1[3456789]\d{9}$/.test(mobile)) return ShowToast('请输入正确的手机号');
        if (!/^.{6,18}$/.test(password)) return ShowToast('请输入6-18位的密码');
        _login({ mobile, password }).then(async (res = {}) => {
            SetAsyncStorage('authInfo', res);
            navigation.navigate('Home');
            dispatch(changeLogin(true));
        }).catch(() => { });
    };
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <SafeAreaView style={ styles.safe_area_view }>
                <NavBar
                    title="登陆"
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
                                autoCompleteType="off"
                                maxLength={ 11 }
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
                            style={ styles.registered_forget_row }
                        >
                            <Button
                                style={ styles.registered_btn }
                                onPress={ () => navigation.navigate('Registered') }
                            >
                                忘记密码
                            </Button>
                            <View style={ styles.registered_row }>
                                <Text>没有账号？</Text>
                                <Button
                                    style={ styles.registered_btn }
                                    onPress={ () => navigation.navigate('Registered') }
                                >
                                    立即注册
                                </Button>
                            </View>
                        </View>
                        <View
                            style={ styles.login_row }
                        >
                            <Button
                                boxStyle={{ flex: 1 }}
                                style={ styles.login_btn }
                                onPress={ () => {
                                    Keyboard.dismiss();
                                    login();
                                } }
                            >
                                登陆
                            </Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    );
};

Login.propTypes = { navigation: PropTypes.object };

export default Login;
