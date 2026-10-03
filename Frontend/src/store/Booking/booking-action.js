import { axiosInstance } from "../../utils/axios.js";
import {
    setBookingDetails,
    setBookings,
    setBookingRequest
} from "./booking-slice";

// Fetch one booking
export const fetchBookingDetails = (bookingId) => async (dispatch) => {
    try {

        console.log("STEP 1 - Booking ID:", bookingId);

        dispatch(setBookingRequest());

        const response = await axiosInstance.get(
            `/v1/rent/user/booking/${bookingId}`
        );

        dispatch(
            setBookingDetails(response.data.data.booking)
        );

        console.log("STEP 5 - Booking dispatched");

    } catch (error) {

        console.error("STEP ERROR:", error);
        console.error(
            "SERVER ERROR:",
            error.response?.data
        );
    }
};


// Fetch all user bookings
export const fetchUserBookings = () => async (dispatch) => {
    try {

        const response = await axiosInstance.get(
            "/v1/rent/user/booking"
        );

        dispatch(
            setBookings(response.data.data.bookings)
        );

    } catch (error) {

        console.error(
            "Error fetching bookings",
            error
        );
    }
};