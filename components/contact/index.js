/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Successfully Sent!');

export default function ContactForm() {
  const form = useRef();
  const imgUrl = '/assets/img/kent-3.svg';
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );
      toast.success('Successfully Sent!');
    } catch (error) {
      toast.error('There was an error!');
      throw error;
    }
  };

  return (
    <div className='container flex flex-col p-6 mx-auto space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4 lg:h-[88vh] lg:items-center'>
      <Toaster />
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
          src={prefix + imgUrl}
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
        <form ref={form} onSubmit={sendEmail}>
          {process.env.REACT_APP_EMAIL_TEMPLATE_ID}
          {process.env.REACT_APP_EMAIL_SERVICE_ID}
          {process.env.REACT_APP_EMAIL_PUBLIC_KEY}
          <div className='flex flex-col p-6 space-y-4'>
            <div>
              <input
                required
                type='text'
                name='name'
                className='w-full p-4 transition ease-in-out border rounded-lg active:scale-95'
                placeholder='NAME...'
              />
            </div>
            <div>
              <input
                required
                type='email'
                name='email'
                className='w-full p-4 transition ease-in-out border rounded-lg active:scale-95'
                placeholder='EMAIL...'
              />
            </div>
            <div>
              <input
                type='text'
                name='title'
                className='w-full p-4 transition ease-in-out border rounded-lg active:scale-95'
                placeholder='TITLE...'
              />
            </div>
            <div>
              <textarea
                required
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
        </form>
      </motion.div>
    </div>
  );
}
