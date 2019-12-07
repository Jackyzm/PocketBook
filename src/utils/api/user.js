import request from '../request';

// 登陆 获取token
export const _getToken = async (params) =>
    request('/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        body: params
    });

// 注册
export const _register = async (params) =>
    request('/register', {
        method: 'POST',
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        body: params
    });
