import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      { loading ? <Spinner/> :
        <div>
        <Navbar />

        <Outlet />

        <Footer />
      </div>
      }
    </div>
  );
};

export default Main;
