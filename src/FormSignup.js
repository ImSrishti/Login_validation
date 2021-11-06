import React from 'react'
import useForm  from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = () => {
    const {handleChange , values,handleSubmit,errors} = useForm(validate);


    return (
        <div className='form-content-right'>
            <form className='form' onSubmit = {handleSubmit}> 
                <h1>Get Started with us today! Create your account by filling the information below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='username'
                        className='form-label'>
                        Username
                    </label>
                    <input type='text'
                        id='username'
                        name='username'
                        className='form-label'
                        placeholder='Enter your username'
                        value = {values.username}
                        onChange = {handleChange}
                    />
                    {errors.username && <p>{errors.username}</p> }
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email'
                        className='form-label'>
                        Email
                    </label>
                    <input type='email'
                        id='email'
                        name='email'
                        className='form-label'
                        placeholder='Enter your email'
                        value = {values.email}
                        onChange = {handleChange}
                    />
                    { errors.email && <p>{errors.email}</p> }
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password'
                        className='form-label'>
                        Password
                    </label>
                    <input type='password'
                        id='password'
                        name='password'
                        className='form-label'
                        placeholder='Enter your password'
                        value = {values.password}
                        onChange = {handleChange}
                    />
                    { errors.password && <p>{errors.password}</p> }
                </div>
                <div className='form-inputs'>
                    <label
                        htmlFor='password2'
                        className='form-label'>
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        id='password2'
                        name='password2'
                        className='form-label'
                        placeholder='Enter your password2'
                        value = {values.password2}
                        onChange = {handleChange}
                    />
                   {  errors.password2 && <p>{errors.password2}</p> }
                </div>
                <button
                    type="submit"
                    className='form-input-btn'>
                    Sign Up
                </button>
                <span
                    className='form-input-login' >
                    Already have an account? Login
                    <a href='#'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup


