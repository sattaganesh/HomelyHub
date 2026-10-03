import { propertyDetailsAction } from "./propertyDetails-slice";
import { axiosInstance } from "../../utils/axios.js";

export const getPropertyDetails = (id) => async (dispatch) => {
    try {
        // Start loading
        dispatch(propertyDetailsAction.getListRequest());

        // Call backend
        const response = await axiosInstance.get(
            `/v1/rent/listing/${id}`
        );

        console.log("Response:", response);

        // Get data
        const { data } = response.data;

        // Save data in Redux
        dispatch(
            propertyDetailsAction.getPropertyDetails(data)
        );

    } catch (error) {
        console.log("Error:", error);

        // Save error in Redux
        dispatch(
            propertyDetailsAction.getErrors(
                error.response?.data?.error || error.message
            )
        );
    }
};