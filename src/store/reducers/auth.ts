import {createSlice} from '@reduxjs/toolkit';
import {usersApi} from 'store/actions/users';
import {RootState} from 'store/store';
import {User} from 'types';

type AuthState = {user: User | null; isAuthenticated: boolean};

const initialState = {user: null, isAuthenticated: false} as AuthState;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: builder => {
        builder
            .addMatcher(usersApi.endpoints.loginUser.matchPending, (state, action) => {
                console.log('pending', action.payload);
            })
            .addMatcher(usersApi.endpoints.loginUser.matchFulfilled, (state, action) => {
                console.log('fulfilled', action);
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addMatcher(usersApi.endpoints.loginUser.matchRejected, (state, action) => {
                console.log('rejected', action);
            });
    }
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
