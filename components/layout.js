import React from 'react';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <div className='pb-6 transition dark:bg-neutral-900 '>
      <Navbar />
      {children}
    </div>
  );
}
