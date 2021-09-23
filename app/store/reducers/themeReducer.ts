/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ThemeState } from 'app/models/reducers/theme';
import { IThemeToggleAction } from 'app/models/actions/theme';

const initialState: ThemeState = {
    isDark: false,
};

export const themeReducer = createReducer(initialState, {
    [types.TOGGLE_THEME](state: ThemeState, action: IThemeToggleAction) {
        return { ...state, isDark: action.isDark };
    },
});
