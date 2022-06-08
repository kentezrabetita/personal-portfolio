import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <nav className='container p-6 mx-auto md:p-10 text-md dark:text-white lg:text-2xl'>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <h1 className='md:text-lg lg:text-2xl'>
            <Link href='/'>
              <a>kent ezra.</a>
            </Link>
          </h1>
        </div>
        <div className='flex-row hidden space-x-10 text-right md:flex'>
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
          <div>
            {theme === 'dark' ? (
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setShowMenu(!showMenu);
                }}
                className='px-6 text-black bg-white rounded-md'
              >
                light.
              </button>
            ) : (
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setShowMenu(!showMenu);
                }}
                className='px-6 text-white bg-black rounded-md '
              >
                dark.
              </button>
            )}
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
          <div className='fixed z-10 top-0 flex bg-white flex-col items-center self-end justify-center py-8 space-y-6 dark:bg-neutral-900 text-black dark:text-white h-[100vh] left-0 right-0'>
            {theme === 'dark' ? (
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setShowMenu(!showMenu);
                }}
                className='p-2 px-6 text-black bg-white rounded-md'
              >
                light.
              </button>
            ) : (
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setShowMenu(!showMenu);
                }}
                className='p-2 px-6 text-white bg-black rounded-md'
              >
                dark.
              </button>
            )}
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
