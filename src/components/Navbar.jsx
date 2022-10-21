import { useState } from 'react';
import {FaBars, FaTimes,} from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

import logo from "../images/logo123.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


    return (
        <div className='fixed w-full flex md:justify-center justify-between items-center p-2'>
         <div className="md:flex-[0.6] flex-initial justify-center items-center">
            <img src={logo} alt="logo" style={{ width: '69px',height:'65px', cursor:'pointer' }} />
         </div>
          <ul className="text-white md:flex hidden list-none justify-between items-center flex-initial">
          <li className=' mx-2 hover:bg-[#bd2525] py-2 px-3 rounded-full  cursor-pointer'>
               
              <Link to='home' smooth={true} duration={500} >
                Home
              </Link>
           </li>
           <li className=' mx-2 hover:bg-[#bd2525] py-2 px-3 rounded-full  cursor-pointer'>
              <Link to='about' smooth={true} duration={500} >
                About
              </Link>
           </li>
           <li className=' mx-2 hover:bg-[#bd2525] py-2 px-3 rounded-full  cursor-pointer'>
              <Link to='discord' smooth={true} duration={500} >
                Discord
              </Link>
           </li>
           <li className=' mx-2 hover:bg-[#bd2525] py-2 px-3 rounded-full  cursor-pointer'>
              <Link to='skills' smooth={true} duration={500} >
                Skills
              </Link>
           </li>
           <li className=' mx-2 hover:bg-[#bd2525] py-2 px-3 rounded-full  cursor-pointer'>
              <Link to='portfolio' smooth={true} duration={500} >
                Portfolio
              </Link>
           </li>
            
            <li className="bg-[#e32929] py-2 px-7 mx-10 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Connect Now
            </li>
           
          </ul>
          <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Discord
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>




    </div>

      


  );
}

export default Navbar;