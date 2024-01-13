
    import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaEdit, FaUsers } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../context/AuthProvider'
import useAxiosSecure from '../../../hooks/useAxiosSecure'


const usersPage = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();
  const {deleteUser} = useContext(AuthContext);

  const handleDeleteHacker = async (item) => {
  try {
    await axiosSecure.delete(`/users/${item._id}`);
    await deleteUser(item._id); // Pass the user's ID to the deleteUser function
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Error!",
      text: "An error occurred while deleting the user.",
      icon: "error",
    });
  }
};

const handleMakeAdmin = async (item) => {
  await axiosSecure.patch(`/users/admin/${item._id}`)
  .then( res => {
    alert(`${item.name} is now admin`)
    
  })
}



  useEffect(() => {
    axiosSecure
      .get("/users")
      .then((result) => {
        setUsers(result.data)
        console.log(result);

      }).catch((error) => {
        console.log(error);
      });
  },[]);


  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
    <div className="overflow-x-auto">
    <h5>Total Users: {users.length}</h5>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((item, index) => (
            <tr key={item._id}>
              <td>
                <label>
                  <p>{index + 1}</p>
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {item.name}
                    </div>
                  </div>
                </div>
              </td>
             <td>{item.email}</td>
             <td>{
              item.role === 'admin' ? "Admin" : (
                <button
                onClick={() => handleMakeAdmin(item)}
                 className=' btn btn-circle btn-xs bg-blue-950'>
                    <FaUsers className="text-2xl text-green-800" />
                  </button>)
              }</td>
              <th>
                          <button onClick={() => handleDeleteHacker(item)}>
                    <MdDelete className="text-2xl text-red-800" />
                  </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default usersPage

