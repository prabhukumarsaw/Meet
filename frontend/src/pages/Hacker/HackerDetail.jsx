import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FunCard from "../../components/funCard";

const HackerDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/hackerlist/${id}`)
      .then((result) => {
        setData(result.data);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      
        <div className="flex flex-col">
          <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {data.name}, {data.age}
              </h2>
              <p className="text-gray-600">{data.title}</p>
            </div>
          </div>
          <div className="bg-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 px-4">
                <img
                  src={data.image}
                  alt="Blog Featured Image"
                  className="mb-8 rounded-xl"
                />
                <div className="prose max-w-none ">
                  <div className="bg-gray-100 p-4 mt-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Quick Facts
                    </h2>
                    <ul className="list-none">
                      <li className="mb-2">
                        <a
                          href="#"
                          className="text-gray-700 hover:text-gray-900"
                        >
                          <b>Hometown: </b>{data.address}
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#"
                          className="text-gray-700 hover:text-gray-900"
                        >
                        <b></b>Favorite Coding Language:{data.code}
                          
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#"
                          className="text-gray-700 hover:text-gray-900"
                        >
                          <b>Publish Year :</b> {data.publishYear}
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#"
                          className="text-gray-700 hover:text-gray-900"
                        >
                          <b>Hackathon:</b> {data.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/4 px-4">
                <div className="prose max-w-none ">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.desc }}
                    className="appearance-none block w-full  rounded py-3 px-4 mb-3 leading-tight"
                  ></div>
                </div>
                {/* <div className="bg-gray-100 p-4 mt-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 1</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 2</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 3</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 4</a>
                        </li>
                    </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <FunCard />
      </div>
    </>
  );
};

export default HackerDetail;
