import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData=createAsyncThunk("dataslice/fetchData",
async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData=await res.json();
    console.log(jsonData);
    return jsonData;
    
});

 export const dataSlice=createSlice({
    name:'dataslice',
    initialState:{data:null,loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.error ? action.error.message : 'Unknown error occurred';

        });
    },


 });
 export default dataSlice.reducer;