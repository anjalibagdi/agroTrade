import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { ADMIN_REQUESTED_URL } from '../urls.js';
import jscookie from 'js-cookie';
const initialState = {
    adminData:{}
}

const adminSlice = createSlice({
    name:"adminSlice",
    initialState,
    reducers:{
        setAdminData : (state,action)=>{
            const admin = action.payload;
            state.adminData = admin; 

        }
    }
});

export const adminLogin = async(payload)=>{
    try{
        console.log("inside adminLogin in userSlice : ",payload);
        var result  = await axios.post(ADMIN_REQUESTED_URL+"/adminLogin", payload);
        console.log("Result :" ,result);
        // if(result.data.message==="success"){
        //     jscookie.set('token',result.data.token,{expires:1});
        // }
        return result.data;
    }catch(error){
        console.log("Error in userLogin in userSlice : ",error);
    }
}

export const {setAdminData} = adminSlice.actions;
export default adminSlice.reducer;