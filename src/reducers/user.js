import { CHANGE_LOGIN } from '@/constant/ACTION_TYPE';

const initialState = { login: false };

const user = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return Object.assign(state, action.payload);
        default:
            // A reducer must always return a valid state.
            // Alternatively you can throw an error if an invalid action is dispatched.
            return state;
    }
};

export default user;
