import { CHANGE_LOGIN } from '@/constant/ACTION_TYPE';

const changeLogin = (login) => (dispatch) => {
    dispatch({ type: CHANGE_LOGIN, payload: { login }});
};

export { changeLogin };
