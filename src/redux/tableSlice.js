import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'table',
    initialState: [],
    reducers: {
        addRow: (state, action) => {
            state.push(action.payload)
        },
    },
})

// export dispatch

export const { addRow } = tableSlice.actions

export default tableSlice.reducer
