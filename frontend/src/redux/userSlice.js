import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : "",
    firstName : "",
    lastName : "",
    id :"",
    // user: {}
};

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            console.log(action.payload.data)
            // state.user = action.payload.data
            state.id = action.payload.data.id;
            state.firstName = action.payload.data.firstName;
            state.lastName = action.payload.data.lastName;
            state.email = action.payload.data.email;

        },
        logoutRedux : (state,action) =>{
            state.id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
        }
    },
});
export const {loginRedux,logoutRedux} = userSlice.actions
export default userSlice.reducer