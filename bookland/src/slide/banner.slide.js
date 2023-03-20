import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { domainUrl } from "../components/API/baseUrl";

export const fakeData= createAsyncThunk('fetchData', async()=>{
    const response = await domainUrl.get('book')
    let data= await response.data
    console.log(111);
    return data
});


const bannerSlices = createSlice({
    name: "banner",
    initialState: {status: 'waitting', value: []},
    reducers: {
        // fetchData: (state, action)=>{
        //     state.value= action.payload
        // },
    },
    extraReducers: {
    [fakeData.pending]: (state, action)=>{
        state.status= "waitting"
    },
    [fakeData.fulfilled]: (state, action)=>{
        state.status= "success"
        state.value= action.payload
    },
    [fakeData.rejected]: (state, action)=>{
        state.status= "error"
    },
    }
})
export default bannerSlices;
