import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import ModalAuth from "./ModalAuth";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [registrationError, setRegistrationError] = useState(null);

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(result?.user?.email, result?.user?.photoURL).then(() => {
          const userInfo = {
            name:result?.user?.displayName,
            email: result?.user?.email,
          }
          axiosPublic.post('/users', userInfo)
          .then((result) => {
            console.log(result)
            alert("Registration Successful");
            navigate("/");
          })
        })
       
        // You might want to redirect the user to a different page after successful registration.
      })
      .catch((error) => {
        console.error(error);
        setRegistrationError("Registration Error. Please try again.");
      });
  };

  return (
    <div className="max-w-mad bg-white shadow modal-box w-full mx-auto flex items-center justify-center my-20">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form className="card-body" onSubmit={handleSubmit}>
        <h3 className='font-bold'>Signup to the community codeHacker</h3>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder="email"  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
               
              </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
        
        <p className="text-center">
              signin to codeHacker Community?{" "}
              <Link className="text-red-600" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                Signin.
              </Link>
              <ModalAuth/>
            </p>
        {registrationError && (
          <div className="text-red-500 mt-2">{registrationError}</div>
        )}
        <Link htmlFor="my_modal_5" to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      </div>
    </div>
  );
};

export default Signup;
