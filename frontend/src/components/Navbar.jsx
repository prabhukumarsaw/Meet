import React, { useContext, useEffect, useState } from 'react'
import ModalAuth from './ModalAuth';
import Profile from './Profile';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const {user, loading} = useAuth();

  console.log(user);

  useEffect(()=> {
    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 0)
      {
        setSticky(true);
      } else {
        setSticky(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [])


  return (
    <div>
    {
      loading ? <p>loading...</p> : (

     
    <header className='max-w-screen-2xl container mx-auto  top-0 left-0 right-0 transition-all duration-300 ease-in-out' >
  <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      ><div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a  href='/'>Home</a></li>
        
        <li><a href='/hacker'>Hacker List</a></li>
        
        <li><a href='/contact'>About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CodeHacker</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/'>Home</a></li>
   
      <li><a href='/hacker'>Hacker List</a></li>
      <li><a href='/contact'>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ? <Profile user={user}/> : <> <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Login</button>
</>
   }
    <ModalAuth/>
  </div>
  
   
   
</div>
</header>
 )
}
</div>
  )
}

export default Navbar