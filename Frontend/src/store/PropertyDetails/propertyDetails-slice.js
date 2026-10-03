import { createSlice } from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
    name: "propertyDetails",

    initialState: {
        propertydetails: null,
        loading: false,
        error: null
    },

    reducers: {

        // Request started
        getListRequest(state) {
            state.loading = true;
            state.error = null;
        },

        // Property details received
        getPropertyDetails(state, action) {
            state.propertydetails = action.payload;
            state.loading = false;
            state.error = null;
        },

        // Error occurred
        getErrors(state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const propertyDetailsAction = propertyDetailsSlice.actions;

export default propertyDetailsSlice;