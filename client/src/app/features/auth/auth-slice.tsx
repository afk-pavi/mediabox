import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    isLoggedIn: boolean
    username: string
    id: string
}

const initialState: initialStateType = {
    isLoggedIn: false,
    username: '',
    id: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<{username: string, id: string}>) => {
            state.isLoggedIn = true
            state.username = action.payload.username
            state.id = action.payload.id
        },
        logOut: () => {
            return initialState
        }
    }
})

export const {logIn, logOut} = authSlice.actions
export default authSlice.reducer