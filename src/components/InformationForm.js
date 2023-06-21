import React, {useState} from 'react';
import Select from 'react-select';
import { states } from '../data/states'
import { staffDepartment } from '../data/department'
import { updateFirstName, updateLastName, updateDateOfBirth, updateDepartment, updateStartDate, updateStreet, updateCity, updateState, updateZipCode } from '../redux/formSlice';
import { addRow } from '../redux/tableSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';

const InformationForm = () => {

    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)

    const { firstName, lastName, dateOfBirth, department, startDate, street, city, state, zipCode } = useSelector((state) => state.form)

    const handleFirstName = (e) => {
        dispatch(updateFirstName(e.target.value))
    }

    const handleLastName = (e) => {
        dispatch(updateLastName(e.target.value))
    }

    const handleDateOfBirth = (e) => {
        dispatch(updateDateOfBirth(e.target.value))
    }

    const handleDepartment = (selectedDepartment) => {
        dispatch(updateDepartment(selectedDepartment.value))
    }

    const handleStartDate = (e) => {
        dispatch(updateStartDate(e.target.value))
    }

    const handleStreet = (e) => {
        dispatch(updateStreet(e.target.value))
    }

    const handleCity = (e) => {
        dispatch(updateCity(e.target.value))
    }

    const handleState = (selectedState) => {
        dispatch(updateState(selectedState.value))
    }

    const handleZipCode = (e) => {
        dispatch(updateZipCode(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // form validation

        if ( !firstName || !lastName || !dateOfBirth || !department || !startDate || !street || !city || !state || !zipCode ) {
            setIsFormValid(true)
            return;
        }
        setIsFormValid(false)
        dispatch(addRow({firstName, lastName, dateOfBirth, department, startDate, street, city, state, zipCode}))
        setModalIsOpen(true)
    }

    const closeModal = () =>{
        setModalIsOpen(false)
    }

    const selectedState = states.find((option) => option.value === state)
    const selectedDepartment = staffDepartment.find((option) => option.value === department)

    return (
        <section>
            {isFormValid && <div className='error'>Please fill in all required fields</div>}
            <form className='form' onSubmit={handleSubmit}>
                <p className='formTitle'>Information</p>
                <div className="inputWrapper">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text"
                        value={firstName}
                        onChange={handleFirstName}
                        className='input'
                        required
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={handleLastName}
                        className='input'
                        required
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input 
                        type="date" 
                        value={dateOfBirth}
                        onChange={handleDateOfBirth}
                        className='input'
                        required
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="startDate">Start Date</label>
                    <input 
                        type="date" 
                        value={startDate}
                        onChange={handleStartDate}
                        className='input'
                        required
                    />
                </div>
                <p className='formTitle'>Address</p>   
                <div className="inputWrapper">
                    <label htmlFor="street">Street</label>
                    <input 
                        type="text"
                        value={street}
                        onChange={handleStreet}
                        className='input'
                        required
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="city">City</label>
                    <input 
                        type="text" 
                        value={city}
                        onChange={handleCity}
                        className='input'
                        required
                    />
                </div>
                <div className="inputWrapper">
                    <label htmlFor='state' >State</label>
                    <Select options={states} value={selectedState} onChange={handleState} className='dropdown' />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input 
                        type="number" 
                        value={zipCode}
                        onChange={handleZipCode}
                        className='input'
                        required
                    />
                </div>         
                <p className='formTitle'>Department</p>
                <Select options={staffDepartment} value={selectedDepartment} onChange={handleDepartment} className='dropdown' />
                <div>
                    {modalIsOpen && <Modal closeModal={closeModal} />}
                    <button type='submit' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </section>
    );
};

export default InformationForm;