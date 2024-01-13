import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/hackerdetail/${item._id}`}>
                
    <div key={item._id} className="card  w-76 glass shadow-xl ">
        <figure>
          <img
            src={item.image}
            alt="car!"
          />
        </figure>
        <div className="card-body p-1.5 m-1.5 flex flex-col md:flex-row" >
        <div className="md:w-1/2">
        <p className="text-md">{item.name}, <span className="">{item.age}</span></p>
        </div>
        <div className="md:w-1/2"><p className="text-right text-sm">{item.address}</p></div>
           
          
        </div>
      </div>
      </Link>
  )
}

export default Card
