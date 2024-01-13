import React, { useState } from 'react'
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

const deleteHacker = () => {
    const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .delete(`https://codehacker-mern.onrender.com/delete/hackerlist/${id}`)
      .then(()=> {
        setLoading(false);
        alert("Deleted Successfully")
        navigate("/");
      })
      .catch ((error) => {
        setLoading(false);
        alert('Error')
      });

 
  };

  return (
    <div className="max-w-md m-60 mx-auto bg-white rounded-md overflow-hidden shadow-md border border-gray-300">
    
      <div className="p-4 flex flex-col border-red-500">
        <h2 className="text-xl font-semibold mb-5 text-center">Are you sure</h2>
       <button onClick={handleSubmit} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded self-center">
          Delete Now
        </button>
      </div>
    
    </div>
  )
}

export default deleteHacker