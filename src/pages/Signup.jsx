import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from '../components/form/Form';
import { createUser } from '../services/api';

function Signup(props) {

    const [formData, setFormData] = useState({})

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name]:value}))
    }

    const [message, setMessage] = useState("")

    const handleSignup = async (e)=>{
        e.preventDefault();

        console.log(formData);

        try {
            const res = await createUser(formData); 
             
            if(res.status == 400){
                setMessage(res.data.detail)
            }

            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='w-screen h-screen flex relative'>
            
            <div className='flex login__container'>
                <div className='login__container--left w-1/2'></div>
                <div className='login__container--right relative w-1/2 flex flex-col'>
                    <h1>Sign Up</h1>
                    {message && <div className='my-1'>{message}</div>}
                    <form onSubmit={handleSignup} className='flex flex-col'>
                        <Input handleChange={handleInputChange} name="first_name" label="First Name" placeholder="Duncan"/>
                        <Input handleChange={handleInputChange} name="last_name" label="Last Name" placeholder="Musumari"/>
                        <Input handleChange={handleInputChange} name="username" label="Username" placeholder="duncamus"/>
                        <Input handleChange={handleInputChange} name="email" label="Email" placeholder="joe@gmail.com"/>
                        <Input handleChange={handleInputChange} name="password" label="Password" type="password" placeholder="Enter password"/>
                        <Input handleChange={handleInputChange} name="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm password"/>

                        <div className='forgot__password'>
                            <NavLink to="/login">Already have an Account? Login</NavLink>
                        </div>

                        <button type='submit' className="main__btn">
                            Signup
                        </button>

                    </form>


                    {/* <div className='need__help'>
                        <NavLink to="/">Need help?</NavLink>
                    </div> */}

                </div>


            </div>

            <div className="curtain">
                <img src="/logo.jpg" alt='Ajabu'/>
            </div>

        </div>
    );
}

export default Signup;