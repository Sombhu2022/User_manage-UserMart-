
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isAuthenticated: false,
    message: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser(state) {
            state.user = {};
            state.isAuthenticated = false;
        },
        
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
