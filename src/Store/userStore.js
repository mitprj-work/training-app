import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1/';

const initialState = {
    userCounter: 500,
    userName: 'Rahul',
    loader: false,
    error: '',
    userInfo: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => { state.counter = state.counter + 1 },
        decrement: (state) => { state.counter = state.counter - 1 },
    }, extraReducers: (builder) => {
        builder
            .addCase(fatcheUserInfo.pending, (state) => {
                state.loader = true;
                console.log('pending');
            })
            .addCase(fatcheUserInfo.fulfilled, (state, action) => {
                state.loader = false;
                let { data } = action.payload
                state.userInfo = data;
                console.log('fulfilled', data);
            })
            .addCase(fatcheUserInfo.rejected, (state, action) => {
                console.log("THIS IS REJECTED STATE", action);
                state.loader = false;
                state.error = action.error.msg;
                console.log('pending');
            })
    }
})
console.log("userSlice.reducer", userSlice.reducer);
export default userSlice.reducer
export const { increment, decrement } = userSlice.actions;

export const fatcheUserInfo = createAsyncThunk("user/fatcheUserInfo", async (payload) => {
    return await getAllUser(payload);
})

const commanApiCall = async ({
    url, method, data
}) => {
    try {
        console.log("DATA IN AXIOZ", data);
        const apiurl = API_URL + url;
        const response = await axios.get(apiurl,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer dfnskjdnfkdsnfkjsdfnkdsjnvdksvvskdmvsdjfdsnfsdknfsdnfsdnfdsnkf'
                },
                params: data
            }
        )
        console.log("response", response);
        return response.data;
    } catch (error) {
        throw error
    }
};
export const getAllUser = async (city) => {
    return await commanApiCall({ url: 'employee/findAll', method: 'GET', data: { city: city } });

}