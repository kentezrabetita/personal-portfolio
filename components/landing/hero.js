/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const imgUrl = '/assets/img/kent-1.svg';
  const prefix = '/csu-hci-project';
  return (
    <div>
      <div className='container mx-auto flex flex-col items-center space-y-8 justify-center p-6 text-center sm:flex-row-reverse sm:space-x-reverse sm:space-x-8 sm:py-20 lg:h-[80vh] lg:py-0'>
        <motion.div
          className='flex justify-center w-full'
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <img
            src={prefix + imgUrl}
            className='w-80 lg:w-3/4'
            alt='male web developer'
          />
        </motion.div>
        <div className='w-full sm:text-right md:text-left dark:text-white lg:text-xl'>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            Hi, my name is Kent!
          </motion.div>
          <motion.div
            className='text-lg'
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 100,
              delay: 0.2,
            }}
          >
            <h1>
              Self-learning software and web developer through research and
              development.
            </h1>
          </motion.div>
          <motion.div
            className='flex flex-row justify-center pt-4 space-x-6 dark:text-black'
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 100,
              delay: 0.4,
            }}
          >
            <div className='w-full'>
              <Link href='/contact'>
                <a>
                  <button className='w-full p-2 transition ease-in-out rounded-lg bg-main hover:scale-105 active:scale-100'>
                    Hire me!
                  </button>
                </a>
              </Link>
            </div>
            <div className='w-full'>
              <Link href='/projects'>
                <a>
                  <button className='w-full p-2 transition ease-in-out rounded-lg bg-secondary hover:scale-105 active:scale-100'>
                    Projects
                  </button>
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
