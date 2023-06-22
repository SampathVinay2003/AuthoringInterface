import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./login_css.css"
import { NavLink } from "react-router-dom";
import {FaGoogle} from 'react-icons/fa'

import customAxios from "../axios";

import messages from '../constants/messages';



const Signup = () => {

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formTarget = event.target;
      const params = {
        author_name: formTarget.author_name.value,
        email: formTarget.email.value,
        password: formTarget.password.value,
        reviewer_role: formTarget.reviewer_role.value
      };

      const result = await customAxios.post('/signup', params);

      if (result.status === 200) {
        alert(messages.signupSuccessfully);
        return navigate('/login');
      }

      if (result.response?.status === 400) {
        return alert(messages.invalidEmailAddress);
      }

      if (result.response?.status === 409) {
        return alert(messages.userWithThisEmailAlreadyExists);
      }

      alert(messages.somethingWentWrong);

    } catch (exception) {
      console.log(exception);
    }
  }

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   fetch('api/signup/', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ "author_name": event.target.author_name.value, "email": event.target.email.value, 'password': event.target.password.value, 'reviewer_role': event.target.reviewer_role.value })
  //   })
  //     .then(response => {
  //       if (response.status === 200) {
  //         alert("Sign up Successfully!");
  //         navigate('/login');
  //       }
  //       else if (response.status === 400) {
  //         alert("Invalid Email address!");
  //         navigate('/signup');
  //       }
  //       else if (response.status === 409) {
  //         alert('User already exist!')
  //         navigate('/signup');
  //       }
  //     })
  //     .then(response => console.log(JSON.stringify(response)))
  //     .catch(error => console.error(error));
  // }

  return (
    <div class="container">
    <div class="adcontent">
      <form onSubmit={handleSubmit}>
        <button type="submit" id="google"><FaGoogle class="icons"/>Continue with Google</button>
         <input type="text" name="uname" id="uname" placeholder="Username"  />
          <input type="text" name="fname" placeholder="Firstname" id="uname" />
          <input type="text" name="lname" id="uname" placeholder="Lastname"  />
          <input type="text" name="Affiliation" placeholder="Affiliation" id="uname" />
          <input type="text" name="Purpose" placeholder="Purpose of Usage" id="uname"  />
          <br/>
         <br/>
         <br/>
         <NavLink to="/login" id="link">Forgot Password?</NavLink>
        <br/>
        <p id="noacc">
          Have an account?<NavLink to="/login" id="link"> Sign In</NavLink>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Signup;