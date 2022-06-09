import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <div className='container flex flex-col p-6 mx-auto space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4 lg:h-[88vh] lg:items-center'>
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
        }}
        className='w-full'
      >
        <img
          src='/assets/img/kent-3.svg'
          alt='programming boy'
          className='p-6 transition ease-in-out min-w-md max-h-md active:scale-95 hover:scale-105'
        />
      </motion.div>
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
          delay: 0.2,
        }}
        className='w-full'
      >
        <div className='flex flex-col p-6 space-y-4'>
          <div>
            <input
              type='text'
              name='name'
              className='w-full p-4 transition ease-in-out border rounded-lg active:scale-95'
              placeholder='NAME...'
            />
          </div>
          <div>
            <input
              type='email'
              name='name'
              className='w-full p-4 transition ease-in-out border rounded-lg active:scale-95'
              placeholder='EMAIL...'
            />
          </div>
          <div>
            <input
              type='text'
              name='name'
              className='w-full p-4 transition ease-in-out border rounded-lg active:scale-95'
              placeholder='TITLE...'
            />
          </div>
          <div>
            <textarea
              className='w-full p-4 transition ease-in-out border rounded-lg active:scale-95'
              name='message'
              placeholder='MESSAGE...'
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <div>
            <button className='w-full p-4 transition ease-in-out bg-blue-400 rounded-lg hover:scale-105 active:scale-95'>
              SEND
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
