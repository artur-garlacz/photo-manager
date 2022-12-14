import {createSlice} from '@reduxjs/toolkit';
import {usersApi} from 'store/actions/users';
import {RootState} from 'store/store';
import {User} from 'types';

type AuthState = {user: User | null; isAuthenticated: boolean; isLoading: boolean};

const initialState = {user: null, isAuthenticated: false, isLoading: false} as AuthState;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: builder => {
        builder
            .addMatcher(usersApi.endpoints.loginUser.matchPending, (state, action) => {
                state.isLoading = true;
                console.log('pending', action.payload, state.isLoading);
            })
            .addMatcher(usersApi.endpoints.loginUser.matchFulfilled, (state, action) => {
                console.log('fulfilled', action);
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addMatcher(usersApi.endpoints.loginUser.matchRejected, (state, action) => {
                console.log('rejected', action);
                state.isLoading = false;
                state.isAuthenticated = false;
            });
    }
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
