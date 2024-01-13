import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from 'axios';

const Hacker = () => {
  const [hackerData, setHackerData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  

  useEffect(() => {
    axios
      .get('http://localhost:5555/hackerlist')
      .then((result) => {
        setHackerData(result.data.data);
        setFilteredData(result.data.data);
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
      
  }, []);

  //filtering data

  const filterData = (category) => {
    const filtered =
      category == "all"
        ? hackerData
        : hackerData.filter((item) => item.year === category);
    setFilteredData(filtered);
    setSelectCategory(category);
    //pagination
    setCurrentPage(1);
  };

  //show all data
  const showAll = () => {
    setFilteredData(hackerData);
    setSelectCategory("all");
    //pagination
    setCurrentPage(1);
  };

  //pagination logic

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r mb-8 from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-40 flex flex-col  items-center justify-center gap-8">
          {/* text here */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug loading-snug">
              Meet the MLH Top 50 Class of 2021!
            </h2>
            <p className=" text-xl md:w-4/5 max-auto">
              In the last year, Major League Hacking (MLH) has reached more
              hackers than ever before through digital events.
            </p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="section-container">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap mb-4">
            <button
              onClick={showAll}
              className={selectCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterData("2024")}
              className={selectCategory === "2024" ? "active" : ""}
            >
              2024
            </button>
            <button onClick={() => filterData("2023")}>2023</button>
            <button onClick={() => filterData("2022")}>2022</button>
            <button onClick={() => filterData("2021")}>2021</button>
            <button onClick={() => filterData("2020")}>2020</button>
            
            
            
          </div>
        </div>

        <div className="section-container relative  grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
          {currentItems.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>

        {/* Pagination */}

        <div className="join flex justify-center my-5">
        {
            Array.from({length: Math.ceil(filteredData.length/itemsPerPage)}).map((_,index) => (
                <button 
                key={index + 1} 
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded-full ${currentPage === index+1 ? "bg-red-800 text-white" : "bg-gray-200"}`}
                >

                    {index +1}
                </button>
            ))
        }
          
        </div>
      </div>
    </>
  );
};

export default Hacker;
