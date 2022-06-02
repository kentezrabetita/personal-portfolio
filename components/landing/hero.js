import React from 'react';

export default function Hero() {
  return (
    <div>
      <div className='text-center pb-6 flex flex-col items-center justify-center sm:flex-row-reverse md:justify-evenly sm:py-20'>
        <div>
          <img
            src='/assets/img/kent-1.png'
            className='w-80'
            alt='male web developer'
          />
        </div>
        <div className='sm:text-right md:text-left'>
          <div>Hi, my name is Kent!</div>
          <div className='font-bold text-lg'>
            <h1>Full Stack Web Developer</h1>
          </div>
          <div className='flex flex-row pt-4 justify-center space-x-6'>
            <div>
              <button className='p-2 bg-green-300 rounded-lg w-32 hover:scale-105 transition ease-in-out active:scale-100'>
                Hire me!
              </button>
            </div>
            <div>
              <button className='p-2 bg-blue-300 rounded-lg w-32 hover:scale-105 transition ease-in-out active:scale-100'>
                My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
