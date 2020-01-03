import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import App from './App';
import { GetAsyncStorage } from '@/utils/AsyncStorage';
import { changeLogin } from '@/actions/user';

const AppNavigator = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function setLogin() {
            const authInfo = await GetAsyncStorage('authInfo');
            if (authInfo) dispatch(changeLogin(true));
        }
        setLogin();
    }, []);
    return (<App />);
};

export default AppNavigator;
