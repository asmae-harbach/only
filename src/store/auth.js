import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    initialState : {isLoggedIn : false},
    name : "auth",
    reducers : {
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer