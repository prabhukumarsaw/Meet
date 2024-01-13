import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const hackerList = () => {
  const [hackerData, setHackerData] = useState([]);

  useEffect(() => {
    axios
      .get("https://codehacker-mern.onrender.com/hackerlist")
      .then((result) => {
        setHackerData(result.data.data);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteHacker = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( async(result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`https://codehacker-mern.onrender.com/hackerlist/${item._id}`);
         
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>Title</th>
              <th>Code</th>
              <th>Address</th>
              <th>Category</th>
              <th>Publish Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {hackerData.map((item, index) => (
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
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {item.name}, {item.age}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.code}</td>
                <td>{item.address}</td>
                <td>{item.categoy}</td>
                <td>{item.publishYear}</td>
                <th>
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/dashboard/update-hacker/${item._id}`}>
                      <FaEdit className="text-2xl text-green-800" />
                    </Link>

                    <button onClick={() => handleDeleteHacker(item)}>
                      <MdDelete className="text-2xl text-red-800" />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default hackerList;
