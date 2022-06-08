import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='container flex flex-col p-6 mx-auto space-y-2 text-center dark:text-white max-w-96'>
      <div className='flex flex-col space-y-2 font-bold'>
        <div className='text-3xl'>Have a project in mind?</div>
        <div> I'm available to work!</div>
      </div>
      <div>
        <Link href='/contact'>
          <a>
            <button className='w-full p-2 transition ease-in-out bg-green-300 rounded-lg lg:w-96 dark:text-black active:scale-95'>
              Contact Me
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
