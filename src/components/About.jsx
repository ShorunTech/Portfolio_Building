import React from 'react';


import me16 from "../images/me16.png";

const About = () => {
    return (
     <div name='about' className="w-full flex justify-center items-center gradient-bg-about">
        <div className="flex md:flex-row flex-col item-center justify-between md:p-20 py-12 px-4">
          <div className="sm:text-center md:pb-8 pl-4">
           <p className="text-white text-4xl font-bold inline border-b-4 border-pink-600 sm:text-5xl pr-40">About</p>

         <p className="text-white flex md:flex-row flex-col item-start justify-between md:p-20 py-12 px-4">
         Am Profectional Full stack Web developer Work with different software and have 
       
          Work with different software and have
         Work with different software and have
         <br />Work with different software and have  <br />ceated some website,Apps alsoWork with different software and have <br/>Open Source Ethuasiam.
            <br/>
          
           Am Graduate of Physics with Electronics<br/>transition into Tech world.
           Sterilizer Technicial at Mikano Int.Work with different software and have 
           Work with different software and have
          </p>
          </div>
          <div className="w-full flex flex-row-reverse  items-center justify-start  md:mt-0 mt-1 pl-4 pr-9">
        <div className="justify-end items-start flex-col rounded">
        
        <img src={me16} alt="me16" className="w-80  transition ease-in-out delay-150 bg-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 cursor-pointer rounded-full"/>
      
         </div>

       </div>     
                  
         </div>

       
     </div>
    
    )
}


export default About;