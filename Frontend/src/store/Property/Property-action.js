//import {propertyAction} from "./Propte-slice.js";
//import {axiosInstance} from "../../utils/axios";
import { propertyAction } from "./Property-slice.js";
import { axiosInstance } from "../../utils/axios.js";

// get all properties
//get all properties
//1.start api req
//2.tell redux loading
//3.get search parms
//4.call backend
//5.wait for response
//6.get property dat
//7.send data to redux store
//8.if error occuurs send error to redux
export const getAllProperties=()=>async(dispatch,getState)=>{//dispatch means send prop to redux getstate for redux give me current data
    try{
        console.log("api call started");
        dispatch(propertyAction.getRequest())
        const {searchParams}=getState().properties
        console.log(searchParams)
        const response=await axiosInstance.get('/v1/rent/listing',{
        params:{...searchParams}
        })
        if(!response){
            throw new Error("could not fetch properties")
        }
        const{data}=response;
        console.log(data);
        dispatch(propertyAction.getProperties(data))

    }catch(error){
        dispatch(propertyAction.getErrors(error.message))
    }
}