import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const updateProfile = () => {
    const {updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        updateUserProfile(name, photoURL).then(() => {
        alert("Profile Updated Successfully")
        navigate("/");
        }).catch((error) => {
            console.log(error);
            alert("Something Error")
        });
      }

  return (
    <div className='flex items-center justify-center h-screen '>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <h3 className='font-bold'>Update your Profile</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Name</span>
          </label>
          <input {...register("name")} type="name" placeholder="Enter name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload photo</span>
          </label>
          <input {...register("photoURL")} type="text" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default updateProfile