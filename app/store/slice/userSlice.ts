/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';

import { LoginState } from 'app/models/reducers/login';
const initialState: LoginState = {
    isLoggedIn: false,
    id: 0,
    username: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onLogin: (state, action) => {
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload,
            };
        },
        logOut: () => {
            return initialState;
        },
    },
});

export const { onLogin, logOut } = loginSlice.actions;
export default loginSlice.reducer;
