/*
 * Reducer actions related with login
 */
import * as types from './types';
import { createAction } from '@reduxjs/toolkit';

export const requestLogin = createAction(
    types.LOGIN_REQUEST,
    function prepare(username: string, password: string) {
        return {
            payload: {
                username,
                password,
            },
        };
    },
);
