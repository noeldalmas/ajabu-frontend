import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from '../components/form/Form';

function Login(props) {

    const handleLogin = (e)=>{
        e.preventDefault();

    }

    return (
        <div className='w-screen h-screen flex relative'>
            
            <div className='flex login__container'>
                <div className='login__container--left w-1/2'></div>
                <div className='login__container--right relative w-1/2 flex flex-col'>
                    <h1>Login</h1>

                    <form onChange={handleLogin} className='flex flex-col'>
                        
                        <Input name="email" label="Email" placeholder="joe@gmail.com"/>
                        <Input name="password" label="Password" type="password" placeholder="Enter password"/>

                        <div className='forgot__password'>
                            <NavLink to="/">Forgot password?</NavLink>
                        </div>
                    </form>

                    <button type='submit' className="main__btn">
                        Login
                    </button>

                    <div className='need__help'>
                        <NavLink to="/">Need help?</NavLink>
                    </div>

                </div>


            </div>

            <div className="curtain">
                <img src="/logo.jpg" alt='Ajabu'/>
            </div>

        </div>
    );
}

export default Login;