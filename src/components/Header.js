import React from 'react';
//images
import Logo from "../assets/logo.svg";
import { Link } from 'react-scroll';

const Header = () => {
  return (
<header className= 'py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="/" style={{cursor: 'pointer'}}> <span className='text-xl font-bold text-white'>Gridman's</span></a>
        <button className='btn btn-sm' type='button' onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
          Work with me
          </button>
      </div>
    </div>
    </header>
  );
};

export default Header;
