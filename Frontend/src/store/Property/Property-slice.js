//state manager
//all list properties
//count
//search filters
//error
import {createSlice} from "@reduxjs/toolkit";
const propertySlice=createSlice({
    name:"property",
    initialState:{
        properties:[],
        totalProperties:0,
        searchParams:{},
        error:null,
        loading:false


    },
    reducers:{
         // allowed to change state
         getRequest(state){
            state.loading=true;
         },
         getProperties(state,action){
            state.properties=action.payload.data;
            state.totalProperties=action.payload.all_properties;
            state.loading=false;//req finshed hide loader
         },
         updateSearchParams:(state,action)=>{
            state.searchParams=Object.keys(action.payload).length===0 ?{}:{
                ...state.searchParams,
                ...action.payload
            }

         },
         getErrors(state,action){
            state.error=action.payload
         }

    }

})
export const propertyAction=propertySlice.actions
export default propertySlice;