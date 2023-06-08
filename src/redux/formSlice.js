import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        firstName: '',
        lastName: '',
        startDate: '',
        department: '',
        dateOfBirth: '',
        street: '',
        city: '',
        state: '',
        zipCode: ''
    },

    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload
        },
        updateStartDate: (state, action) => {
            state.startDate = action.payload
        },
        updateDepartment: (state, action) => {
            state.department = action.payload
        },
        updateDateOfBirth: (state, action) => {
            state.dateOfBirth = action.payload
        },
        updateStreet: (state, action) => {
            state.street = action.payload
        },
        updateCity: (state, action) => {
            state.city = action.payload
        },
        updateState: (state, action) => {
            state.state = action.payload
        },
        updateZipCode: (state, action) => {
            state.zipCode = action.payload
        },
    },
})

// exports dispatches

export const { updateFirstName, updateLastName, updateStartDate, updateDepartment, updateDateOfBirth, updateStreet, updateCity, updateState, updateZipCode } = formSlice.actions

export default formSlice.reducer

