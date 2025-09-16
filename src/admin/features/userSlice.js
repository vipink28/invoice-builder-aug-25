import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: {
        status: "idle",
        data: null,
        error: null
    },
    greetings: ""
}

export const fetchUsers = createAsyncThunk(
    'fetchUsers/adminusers',
    async () => {
        const response = await axios.get("http://localhost:5000/users")
        return response.data;
    }
);


export const userSlice = createSlice({
    name: "adminusers",
    initialState,
    reducers: {
        greeting: (state, action) => {
            state.greetings = "Hello Admin"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.users.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users.status = "success";
                state.users.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.users.status = "failed";
                state.users.error = action.error;
            })
    }
});


export const { greeting } = userSlice.actions;
export default userSlice.reducer;