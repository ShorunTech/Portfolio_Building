import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';


import Typical  from 'react-typical';

import logo from "../images/logo9999.png";

const Home = () => {
    return (
        <div name='home' className="w-full flex justify-center items-center py-40">
         <div className="flex md:flex-row flex-col item-start justify-between md:p-20 py-12 px-4">
         <div className='profile-details-name'>
                    <span className='text-white text-3xl sm:text-4xl'>
                    Hello🙋 , I'M <span className='highlight-text'>ShorunTech</span>
                        {" "}
                       <span className='highlight-text '>
                       
                    
                            {" "}
                             <h1>
                                <Typical 
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    "Self Taught⛹",
                                    2000,
                                    "Full Stack Developer💻",
                                    2000,
                                    "MERN stack Dev🚀",
                                    2000,
                                    "Cross Platform🌎",
                                    2000,
                                    "React/React Native Dev📱",
                                    2000,
                                ]}
                                />
                                
                            </h1>
                            <span className='text-red-400'>
                                Console.log (Creativity)
                            </span>
                        </span>
                        
                    </div>
                       
                       
                       </span>
                    </span>

                    <div className="pl-6">
                    <button className="text-white group border-2 px-4 py-3 my-3 flex items-center hover:bg-pink-600">
                        Download Cv
                        <span className="group-hover:rotate-90 duration-300">
                         <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                  </div>
                </div>
                    
                 


             <div className="flex flex-col flex-1 item-center justify-start w-full md:mt-0 mt-10 pl-20 pr-14">
                <div className="p-3 pr-20 justify-end h-full w-full bg-pink-600 rounded-md bg-opacity-25 border border-gray-100">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                    <img src={logo} alt="logo" fontSize={21} color="#fff" />
                    </div>
                    <div> 
                        <br/>
                        <p className="text-white font-semibold text-lg mt-8">
                            ShorunTech<br/>Self-Tought Full-Stack <br/>
                            Developer
                        </p>
                    </div>
                 </div>
            </div>          

         </div>

         <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300 p-1" 
                    href="/">
                     Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
              
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg bg-gray400">
                    <a className="flex justify-between items-center w-full text-gray-300 p-1" 
                    href="/">
                      Git<FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg bg-red-600">
                    <a className="flex justify-between items-center w-full text-gray-300 p-1" 
                    href="/">
                     Youtube <FaYoutube size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg bg-blue600">
                    <a className="flex justify-between items-center w-full text-gray-300 p-1" 
                    href="/">
                     Twitter <FaTwitter size={30} />
                    </a>
                </li>
            </ul>
         </div>
        </div>
    );
}

export default Home;