import React from 'react'
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://codehacker-mern.onrender.com',
})

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic



