import React from 'react';
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
import { NavBar, Button } from '@/components';
import { getTimeTips } from '@/utils/utils';
import styles from './styles';

const Login = ({ navigation }) => {
    const tips = getTimeTips();
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
                                dataDetectorTypes="phoneNumber"
                                keyboardType="number-pad"
                                style={{ width: '100%', fontSize: 18 }}
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
                            <Button boxStyle={{ flex: 1 }} style={ styles.login_btn } onPress={ () => Keyboard.dismiss() }>登陆</Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    );
};

Login.propTypes = { navigation: PropTypes.object };

export default Login;
