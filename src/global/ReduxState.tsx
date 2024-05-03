
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import {user} from "../types/interface"


const initialState = {
    currentUser: {} as user | null,
};

const ReduxState = createSlice({
    name: "volatic",
    initialState,
    reducers: {
        User: (state, { payload } : PayloadAction<user>) => 
        {
            state.currentUser = payload
        }
    },
});

export const { User } = ReduxState.actions;

export default ReduxState.reducer;


