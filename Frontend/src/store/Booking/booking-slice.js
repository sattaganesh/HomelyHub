// managing booking
//store all booking
//store individual bokingdetails
//api loading status
//updating the booking data when we rec it from backend
import {createSlice} from "@reduxjs/toolkit";
const initialState={
    bookings:[],
    bookingDetails:{},
    loading:false
}
const bookingSlice =createSlice({
    name:"booking",
    initialState,
    reducers:{
        setBookingRequest(state){
            state.loading=true;

        },
        //stores the bookings recd from api
        setBookings(state,action){
            state.bookings=action.payload;
            state.loading=false
        },
        addBooking:(state,action)=>{
            state.bookings.push(action.payload);

        },
        setBookingDetails:(state,action)=>{
            state.bookingDetails=action.payload;
             state.loading = false;
        }
    }
})
export const{setBookings,addBooking,setBookingDetails,setBookingRequest}=bookingSlice.actions;
export default bookingSlice;