import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "../components/form/Form";
import { createUser } from "../services/api";

function Signup(props) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log(formData);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    

    if(!passwordRegex.test(formData.password)){
        setMessage("Password should contain an Uppercase letter, a lowercase letter, a number and a special character. It should be a minimum of 8 characters")
    }else{

        if(formData.confirmPassword !== formData.password){
            setMessage("Passwords do not match")
        }else{
            setMessage("")
        }
    }


    // try {
    //   const res = await createUser(formData);

    //   if (res.status == 400) {
    //     setMessage(res.data.detail);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="w-screen h-screen flex relative">
      <div className="flex login__container signup">
        <div className="login__container--left w-1/2"></div>
        <div className="login__container--right relative w-1/2 flex flex-col">
          <h1>Sign Up</h1>
          {message && <div className="message__container">{message}</div>}
          <form onSubmit={handleSignup} className="flex flex-col">
            <div className="signup__row flex">
              <Input
                handleChange={handleInputChange}
                name="first_name"
                label="First Name"
                placeholder="Duncan"
                required={true}
              />
              <Input
                handleChange={handleInputChange}
                name="last_name"
                label="Last Name"
                placeholder="Musumari"
                required={true}
              />
            </div>
            <div className="signup__row flex">
              <Input
                handleChange={handleInputChange}
                name="username"
                label="Username"
                placeholder="Kenyunyu"
                required={true}
              />
              <Input
                handleChange={handleInputChange}
                name="email"
                label="Email"
                placeholder="joe@gmail.com"
                required={true}
                type="email"
              />
            </div>
            <div className="signup__row flex">
              <Input
                handleChange={handleInputChange}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter password"
                required={true}
              />
              <Input
                handleChange={handleInputChange}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm password"
                required={true}
              />
            </div>

            <div className="forgot__password">
              <NavLink to="/login">Already have an Account? Login</NavLink>
            </div>

            <button type="submit" className="main__btn">
              Signup
            </button>
          </form>

          {/* <div className='need__help'>
                        <NavLink to="/">Need help?</NavLink>
                    </div> */}
        </div>
      </div>

      <div className="curtain">
        <img src="/logo.jpg" alt="Ajabu" />
      </div>
    </div>
  );
}

export default Signup;
