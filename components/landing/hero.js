import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center p-6 text-center sm:flex-row-reverse md:justify-evenly sm:py-20'>
        <div>
          <img
            src='/assets/img/kent-1.png'
            className='w-80'
            alt='male web developer'
          />
        </div>
        <div className='sm:text-right md:text-left dark:text-white'>
          <div>Hi, my name is Kent!</div>
          <div className='text-lg font-bold'>
            <h1>Full Stack Web Developer</h1>
          </div>
          <div className='flex flex-row justify-center pt-4 space-x-6 dark:text-black'>
            <div className='w-full'>
              <Link href='/contact'>
                <a>
                  <button className='w-full p-2 transition ease-in-out bg-green-300 rounded-lg hover:scale-105 active:scale-100'>
                    Hire me!
                  </button>
                </a>
              </Link>
            </div>
            <div className='w-full'>
              <Link href='/projects'>
                <a>
                  <button className='w-full p-2 transition ease-in-out bg-blue-300 rounded-lg hover:scale-105 active:scale-100'>
                    Projects
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
