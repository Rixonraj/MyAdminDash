import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function CreateUser(editValues) {
    const navigate = useNavigate()
    useEffect(() => {
        if(editValues.data)
        formik.setValues(editValues.data)
    }, [])


    const formik = useFormik({
        initialValues: {

            name: "",
            dob: "",
            email: "",
            country: "",
            state: "",
            city: "",
            phone: "",
            gender: "",
            id: ""
        },
        validate: (values) => {
            let error = {};
            if (values.name === "") {
                error.name = "please enter a value"
            }

            if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
                error.name = "Number of Characters should be between 2 - 15"
            }
            if (values.email === "") {
                error.email = "please enter email"
            }
            if (values.email && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))) {
                error.email = "Please enter a valid email address"
            }
            if (values.country === "") {
                error.country = "please select a country"
            }
            if (values.state === "") {
                error.state = "please select a state"
            }
            if (values.city === "") {
                error.city = "please select a city"
            }
            if (values.gender === "") {
                error.gender = "please select gender"
            }
            if (values.phone.toString() === "") {
                error.phone = "please enter Phone Number"
            }
            if (values.phone.toString() && values.phone.toString().length !== 10) {
                error.phone = "please enter a valid Phone Number"
            }
            // console.log(values.dob, "TYPEOF", typeof values.dob)
            if (values.dob) {
                let today = new Date();
                let birthDate = new Date(values.dob);
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if (age > 18) {
                    error.dob = "User should be below 18"
                }
            } else {
                error.dob = "Enter DOB"
            }

            return error;
        },
        onSubmit: async (values) => {
            try {
                if(editValues.data)
                await axios.put(`https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents/${editValues.data.id}`, values);
                else
                await axios.post("https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents", values);
                alert("Success")
                navigate("/portal/teacher")
                
            } catch (error) {
                alert("Error")
            }
        }
    });
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label for="">User Name</label>
                            <input
                                name='name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                type={'text'}
                                className={`form-control ${formik.touched.name && formik.errors.name ? "error-box" : ""} ${formik.touched.name && !formik.errors.name ? "success-box" : ""}`}></input>
                            {
                                formik.touched.name && formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label for="">Email</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='email'
                                value={formik.values.email}
                                type={'text'}
                                className={`form-control ${formik.touched.email && formik.errors.email ? "error-box" : ""} ${formik.touched.email && !formik.errors.email ? "success-box" : ""}`}>
                            </input>
                            {
                                formik.touched.email && formik.errors.email ? <span style={{ color: 'red' }}>{formik.errors.email}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label for="">Country</label>
                            <select
                                name='country'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.country}
                                className={`form-control ${formik.touched.country && formik.errors.country ? "error-box" : ""} ${formik.touched.country && !formik.errors.country ? "success-box" : ""}`}>
                                <option disabled> </option>
                                <option>India</option>
                                <option>America</option>
                                <option>China</option>
                            </select>
                            {
                                formik.touched.country && formik.errors.country ? <span style={{ color: 'red' }}>{formik.errors.country}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label for="">State</label>
                            <select
                                name='state'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.state}
                                className={`form-control ${formik.touched.state && formik.errors.state ? "error-box" : ""} ${formik.touched.state && !formik.errors.state ? "success-box" : ""}`}>
                                <option disabled> </option>
                                <option>India</option>
                                <option>America</option>
                                <option>China</option>
                            </select>
                            {
                                formik.touched.state && formik.errors.state ? <span style={{ color: 'red' }}>{formik.errors.state}</span> : null
                            }                    </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label for="">City</label>
                            <select
                                name='city'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}
                                className={`form-control ${formik.touched.city && formik.errors.city ? "error-box" : ""} ${formik.touched.city && !formik.errors.city ? "success-box" : ""}`}>
                                <option disabled> </option>
                                <option>India</option>
                                <option>America</option>
                                <option>China</option>
                            </select>
                            {
                                formik.touched.city && formik.errors.city ? <span style={{ color: 'red' }}>{formik.errors.city}</span> : null
                            }                    </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label for="">Phone</label>
                            <input
                                name='phone'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                type={'number'}
                                className={`form-control ${formik.touched.phone && formik.errors.phone ? "error-box" : ""} ${formik.touched.phone && !formik.errors.phone ? "success-box" : ""}`}>
                            </input>
                            {
                                formik.touched.phone && formik.errors.phone ? <span style={{ color: 'red' }}>{formik.errors.phone}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label for="">Date of Birth</label>
                            <input
                                name='dob'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                type={'date'}
                                className={`form-control ${formik.touched.dob && formik.errors.dob ? "error-box" : ""} ${formik.touched.dob && !formik.errors.dob ? "success-box" : ""}`}>
                            </input>
                            {
                                formik.touched.dob && formik.errors.dob ? <span style={{ color: 'red' }}>{formik.errors.dob}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label for="">Gender</label>
                            <select
                                name='gender'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.gender}
                                className={`form-control ${formik.touched.gender && formik.errors.gender ? "error-box" : ""} ${formik.touched.gender && !formik.errors.gender ? "success-box" : ""}`}>
                                <option disabled> </option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {
                                formik.touched.gender && formik.errors.gender ? <span style={{ color: 'red' }}>{formik.errors.gender}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <input type={'submit'} className='btn btn-primary'></input>

                        </div>
                    </div>



                </div>
            </form>
        </div>
    )
}

export default CreateUser