/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { LoginState } from 'app/models/reducers/login';
import { LoginRequestState, LoginResponseState } from 'app/models/actions/login';
const initialState: LoginState = {
    isLoggedIn: false,
    id: 0,
    username: '',
    password: '',
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state: LoginState, action: LoginRequestState) {
        return {
            ...state,
            username: action.username,
            password: action.password,
        };
    },
    [types.LOGIN_LOADING_ENDED](state: LoginState) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state: LoginState, action: LoginResponseState) {
        return {
            ...state,
            id: action.response.id,
            isLoggedIn: true,
        };
    },
    [types.LOGIN_FAILED](state: LoginState) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
    [types.LOG_OUT](state: LoginState) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
});
