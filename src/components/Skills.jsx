import React from 'react';

import d from '../images/d.png';
import t from '../images/t.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full gradient-bg-about text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl pr-40 font-bold inline border-b-4 border-pink-600'>Skills</p>
              <p className='py-4'> Contributed In Various Social Media PlatForm</p>
          </div>
<br/>
<br/>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md hover:scale-[2] blue-glassmorphism rounded-lg duration-500'>
                  <img className='py-4 pl-2 pr-2 border-2 w-60 mx-auto rounded-lg ' src={d} alt="d" />
                  <p className='my-4'>DISCORD</p>
              </div>
              <div className='shadow-md hover:scale-[2] blue-glassmorphism rounded-lg duration-500'>
                  <img className='py-4 pl-2 pr-2 border-2 w-60 mx-auto rounded-lg ' src={t} alt="t" />
                  <p className='my-4'>DISCORD</p>
              </div>

          </div>

          <br/>
          <br/>
          <br/>
      </div>
    </div>
  );
};

export default Skills;
