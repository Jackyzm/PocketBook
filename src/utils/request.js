import qs from 'qs';
import { ShowToast } from '@/utils/utils';
import { GetAsyncStorage } from './AsyncStorage';
import config from '../../config';
// import { reLogin, refreshToken } from './user'; // eslint-disable-line

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '请求超时，请稍后重试～'
};

// 后台错误统一拦截
async function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const result = await response.json()
        .then((res) => Promise.resolve(res))
        .catch(() => Promise.resolve({}));

    result.status = response.status;
    if (result.status === 401
        && (result.error === 'invalid_token'
        || result.error === 'token_expired')
    ) {
        return Promise.reject(result);
    }
    const message = result.msg || result.error_description || codeMessage[response.status] || '网络异常，请稍后重试～';
    ShowToast(message);
    return Promise.reject(result);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default async function request(url, options) {
    // 用于添加超时判断
    // 详细查看
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FetchController
    // https://github.com/react-native-community/releases/blob/master/CHANGELOG.md  [0.60]
    const controller = new AbortController(); // eslint-disable-line
    const { signal } = controller;

    // const defaultOptions = { credentials: 'include' };
    const newOptions = {
        ...options,
        signal
    };

    const authInfo = await GetAsyncStorage('authInfo');

    if (authInfo && url !== '/login') {
        newOptions.headers = {
            ...newOptions.headers,
            Authorization: `Bearer ${authInfo.access_token}`
        };
    }

    if (newOptions.method === 'POST' || newOptions.method === 'PUT' || newOptions.method === 'DELETE') {
        if (!(newOptions.body instanceof FormData)) { // eslint-disable-line
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...newOptions.headers
            };

            if (newOptions.headers['Content-Type'].indexOf('x-www-form') > -1) {
                newOptions.body = qs.stringify(newOptions.body);
            } else {
                newOptions.body = JSON.stringify(newOptions.body);
            }
        } else {
            // newOptions.body is FormData
            newOptions.headers = {
                Accept: 'application/json',
                ...newOptions.headers
            };
        }
    }

    const newUrl = `${config.url}${url}`;
    // 添加超时判断
    const timeoutPromise = (timeout) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response('timeout', { status: 504, statusText: 'timeout' })); // eslint-disable-line
            controller.abort();
        }, timeout);
    });

    // 使用 Promise.race 判断超时
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
    return Promise.race([timeoutPromise(5000), fetch(newUrl, newOptions)]) // eslint-disable-line
        .then(checkStatus)
        .then((response) => {
            if (newOptions.method === 'DELETE' || response.status === 204) {
                return Promise.resolve(response.text());
            }
            // post put类接口可能没有返回值
            return response
                .json()
                .then((res) => (res.data ? Promise.resolve(res.data) : Promise.resolve(res)))
                .catch(() => Promise.resolve({}));
        })
        .catch((error) => {
            const { status } = error;
            if (status === 401) {
                console.log(error);
                // if ((error.error === 'invalid_token' || error.error === 'token_expired') && authInfo) {
                //     if (url === '/oauth/token') {
                //         return reLogin();
                //     }
                //     return refreshToken(authInfo).then((res) => {
                //         if (res && res.error) {
                //             return reLogin();
                //         }
                //         return request(url, options).then((response) => Promise.resolve(response));
                //     }).catch(() => {
                //         reLogin();
                //     });
                // }
                // return reLogin();
            }

            // Network request failed 在上面无法被拦截 添加特殊处理
            // eslint-disable-next-line
            if (error == 'TypeError: Network request failed') {
                // console.log('网络异常，请稍后重试～');
                ShowToast('网络异常，请稍后重试～');
            }
            return Promise.reject(error);
        });
}
