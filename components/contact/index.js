import React from 'react';

export default function ContactForm() {
  return (
    <div className='container flex flex-col p-6 mx-auto space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4 lg:h-[88vh] lg:items-center'>
      <div className='w-full'>
        <img
          src='/assets/img/kent-3.svg'
          alt='programming boy'
          className='p-6 min-w-md max-h-md'
        />
      </div>
      <div className='w-full'>
        <div className='flex flex-col p-6 space-y-4'>
          <div>
            <input
              type='text'
              name='name'
              className='w-full p-4 border rounded-lg'
              placeholder='NAME...'
            />
          </div>
          <div>
            <input
              type='email'
              name='name'
              className='w-full p-4 border rounded-lg'
              placeholder='EMAIL...'
            />
          </div>
          <div>
            <input
              type='text'
              name='name'
              className='w-full p-4 border rounded-lg'
              placeholder='TITLE...'
            />
          </div>
          <div>
            <textarea
              className='w-full p-4 border rounded-lg'
              name='message'
              placeholder='MESSAGE...'
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <div>
            <button className='w-full p-4 bg-blue-400 rounded-lg'>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
