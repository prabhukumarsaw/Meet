import React, { useEffect, useState } from 'react'


const Slider = () => {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                console.log(data)
                setSlider(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


  return (

  
    
    <div className="carousel max-w-screen-2xl container mx-auto  top-0 left-0 right-0 m-4 p-4 space-x-4 bg-neutral rounded-box">
    {slider.map((item)=> 
  <div key={item._id} className="carousel-item ">
    <img src={item.image} className="rounded-box w-96" />
  </div> 
)}
</div>
  )
}

export default Slider