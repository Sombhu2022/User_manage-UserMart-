
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isAuthenticated: false,
    message: '',
    status:''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
   
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.status = "setUserSuccess"
        },
        clearUser(state) {
            state.user = {};
            state.isAuthenticated = false;
            state.status = 'clearUserSuccess'
        },
        
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
