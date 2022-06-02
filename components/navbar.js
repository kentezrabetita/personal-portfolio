import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='p-6 md:p-10 md:px-40 text-md'>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <h1 className='md:text-lg'>
            <Link href='/'>
              <a>kent ezra.</a>
            </Link>
          </h1>
        </div>
        <div className='hidden md:flex flex-row text-right space-x-20'>
          <div>
            <Link href='/about'>
              <a>about.</a>
            </Link>
          </div>
          <div>
            <Link href='/projects'>
              <a>projects.</a>
            </Link>
          </div>
          <div>
            <Link href='/contact'>
              <a>contact.</a>
            </Link>
          </div>
        </div>
        <div className='md:hidden'>
          <button className='menu-btn' onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? 'close.' : 'menu.'}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className='md:hidden'>
          <div className='absolute flex flex-col items-center h-96 justify-center self-end py-8 mt-10 space-y-6 bg-black rounded-xl text-white left-6 right-6'>
            <Link href='/'>
              <a>kent ezra.</a>
            </Link>
            <Link href='/about'>
              <a>about.</a>
            </Link>
            <Link href='/projects'>
              <a>projects.</a>
            </Link>
            <Link href='/contact'>
              <a>contact.</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
