import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(false);
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
        <div className='flex-row hidden space-x-20 text-right md:flex'>
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
          <div className='fixed z-10 top-0 flex flex-col items-center self-end justify-center py-8 space-y-6 text-white bg-black h-[100vh] left-0 right-0'>
            <Link href='/'>
              {theme ? (
                <a className='p-2 px-6 text-black bg-white rounded-md'>
                  light mode.
                </a>
              ) : (
                <a className='p-2 px-6 text-black bg-white rounded-md'>
                  dark mode.
                </a>
              )}
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
            <div
              className='cursor-pointer'
              onClick={() => setShowMenu(!showMenu)}
            >
              <a>close.</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
