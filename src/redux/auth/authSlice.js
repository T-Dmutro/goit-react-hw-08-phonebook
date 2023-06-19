import { createSlice } from '@reduxjs/toolkit';
import authOperetions from './authOperation';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(authOperetions.register.fulfilled, (state, {payload})=>{
            state.user =  payload.user
            state.token = payload.token
            state.isLoggedIn = true
        })
        .addCase(authOperetions.logIn.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
        })
        .addCase(authOperetions.logOut.fulfilled, (state) => {
            state.user = {name: null, email: null}
            state.token = null
            state.isLoggedIn = false
        })
        .addCase(authOperetions.fetchCurrentUser.pending,(state)=> {
            state.isFetchingCurrentUser = true
        })
        .addCase(authOperetions.fetchCurrentUser.fulfilled, (state, {payload})=>{
            state.user = payload
            state.isLoggedIn = true
            state.isFetchingCurrentUser = false
        })
        .addCase(authOperetions.fetchCurrentUser.rejected, (state) => {
            state.isFetchingCurrentUser = false
        })

    },
});

export default authSlice.reducer;
