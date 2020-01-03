import request from '../request';

// 登陆
export const _login = async (params) =>
    request('/login', {
        method: 'POST',
        body: params
    });

// 注册
export const _register = async (params) =>
    request('/register', {
        method: 'POST',
        body: params
    });
