import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

const ModalAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const {signUpWithGmail, login} = useAuth();


const navigate = useNavigate();
const axiosPublic = useAxiosPublic();


//google signin

const handleLogin = () => {
  signUpWithGmail().then((result) => {
    const user = result.user;
    const userInfo = {
      name:result?.user?.displayName,
      email: result?.user?.email,
    }
    axiosPublic.post('/users', userInfo)
    .then((result) => {
      console.log(result)
      alert("Login Successful");
      navigate("/");
    })
  document.getElementById("my_modal_5").close();
  }).catch((error) => {
        console.log(error);
    alert("Error")
  });

}

  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(email, password).then((result) => {
      const user = result.user;
      const userInfo = {
        name:result?.user?.displayName,
        email: result?.user?.email,
      }
      axiosPublic.post('/users', userInfo)
      .then((result) => {
        console.log(result)
        alert("Login Successful");
        navigate("/");
      })
    document.getElementById("my_modal_5").close();
    }).catch((err) => {
      console.log(err)
      alert("Login Error")
    });
  }


  return (
    <dialog id="my_modal_5" className="modal modal-center sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action">
          <div className="card shrink-0 w-full">
            <form className="card-body" method="dialog" onSubmit={handleSubmit}>
            <h3 className='font-bold'>Login to codeHacker</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
            onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
            onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <Link
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <div className="text-center space-x-3 mb-5">
              <button className="btn btn-circle hover:bg-red-700 hover:text-white" onClick={handleLogin}>Google</button>
              <button className="btn btn-circle hover:bg-red-700 hover:text-white">Github</button>
            </div>

            <p className="text-center">
              New to codeHacker Community?{" "}
              <Link className="text-red-600" to="/signup">
                Create account.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalAuth;
