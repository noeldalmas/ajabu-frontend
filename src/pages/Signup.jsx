import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from '../components/form/Form';

function Signup(props) {

    const handleSignup = (e)=>{
        e.preventDefault();

    }

    return (
        <div className='w-screen h-screen flex relative'>
            
            <div className='flex login__container'>
                <div className='login__container--left w-1/2'></div>
                <div className='login__container--right relative w-1/2 flex flex-col'>
                    <h1>Sign Up</h1>

                    <form onChange={handleSignup} className='flex flex-col'>
                        
                        <Input name="username" label="Full Name" placeholder="Duncan Msumari"/>
                        <Input name="email" label="Email" placeholder="joe@gmail.com"/>
                        <Input name="password" label="Password" type="password" placeholder="Enter password"/>
                        <Input name="password" label="Confirm Password" type="password" placeholder="Confirm password"/>

                        <div className='forgot__password'>
                            <NavLink to="/login">Already have an Account? Login</NavLink>
                        </div>
                    </form>

                    <button type='submit' className="main__btn">
                        Signup
                    </button>

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