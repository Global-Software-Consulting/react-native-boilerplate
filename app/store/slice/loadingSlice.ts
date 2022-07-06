/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { LoadingState } from 'app/models/reducers/loading';
import { createSlice } from '@reduxjs/toolkit';
const initialState: LoadingState = {
    loading: false,
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        enableLoader: (state: LoadingState) => {
            return {
                ...state,
                loading: true,
            };
        },
        disableLoader: (state: LoadingState) => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});

export const { enableLoader, disableLoader } = loadingSlice.actions;
export default loadingSlice.reducer;
