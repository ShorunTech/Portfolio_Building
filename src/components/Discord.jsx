import React from 'react';

import d from '../images/d.png';
import t from '../images/t.png';


const Discord = () => {
  return (
    <div name='discord' className='w-full gradient-bg-welcome text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl pr-40 font-bold inline border-b-4 border-pink-600'>Speaker</p>
              <p className='py-4'> Contributed In Various Social Media PlatForm</p>
          </div>
<br/>
<br/>
          <div className='w-full flex justify-between grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
              <div className='shadow-md hover:scale-[2]  duration-500'>
                  <img className='py-4 pl-2 pr-2 border-2 w-60 mx-auto rounded-lg ' src={d} alt="d" />
                  <p className='my-4'>DISCORD</p>
              </div>
              <div className='shadow-md hover:scale-[2]   duration-500'>
                  <img className='py-4 pl-2 pr-2 border-2 w-60 mx-auto rounded-lg ' src={d} alt="d" />
                  <p className='my-4'>DISCORD</p>
              </div>
              <div className='shadow-md hover:scale-[2] py-12  duration-500'>
                  <img className='py-4 pl-2 pr-2 border-2 w-60 mx-auto rounded-lg ' src={d} alt="d" />
                  <p className='my-4'>DISCORD</p>
              </div>
              <div className='shadow-md hover:scale-[2] py-12 rounded-lg duration-500'>
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

export default Discord;
