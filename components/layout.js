import React from 'react';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <div className='transition'>
      <Navbar />
      {children}
    </div>
  );
}
