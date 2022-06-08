import React from 'react';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <div className='transition lg:h-fit'>
      <Navbar />
      {children}
    </div>
  );
}
