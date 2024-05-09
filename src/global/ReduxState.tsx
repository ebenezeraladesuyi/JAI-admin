/* eslint-disable react-refresh/only-export-components */

import { createSlice } from "@reduxjs/toolkit";
import {user} from "../types/interface"
import { PayloadAction } from "@reduxjs/toolkit"


interface ReduxState {
    currentUser: user | null; // Use the User interface
}

const initialState: ReduxState = {
    currentUser: null,
};

const ReduxSlice = createSlice({
    name: "jai",
    initialState,
    reducers: {
        User: (state, action : PayloadAction<user>) => 
        {
            state.currentUser = action.payload
        }
    },
});

export const { User } = ReduxSlice.actions;

export default ReduxSlice.reducer;


