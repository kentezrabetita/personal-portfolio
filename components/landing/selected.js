/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SelectedProjects() {
  return (
    <motion.div
      initial={{ y: 250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: 'spring',
        stiffness: 100,
        delay: 0.4,
      }}
      className='container flex flex-col mx-auto mt-12 text-center lg:space-y-6 selected dark:text-white'
    >
      <div className='text-2xl font-bold lg:text-4xl'>SELECTED PROJECTS</div>
      <div className='flex flex-col p-6 space-y-10'>
        <div className='flex flex-col p-6 space-y-4 text-left border border-black rounded-lg shadow-md dark:border-white lg:flex-row lg:justify-between lg:space-x-10 lg:space-y-0 lg:h-full'>
          <div className='lg:w-full'>
            <Image
              className='transition ease-in-out rounded shadow-lg max-h-96 max-w-96 hover:scale-105'
              src='https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2Fc5LqaGep0e4dbCVcBoddG%2F4b70c11c75ddccf2c8046b9735ae4996%2Fezgif.com-gif-maker__25_.gif&w=640&q=75'
              alt='project showcase gif'
              width={700}
              height={400}
              priority
            />
          </div>
          <div className='w-full lg:text-xl lg:flex lg:justify-between lg:flex-col'>
            <div>
              <div>Project Title</div>
              <div>Project Description</div>
            </div>
            <div className='flex flex-col lg:space-y-1'>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 3</div>
              </div>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center mt-4 space-x-4 dark:text-black'>
              <div className='w-full'>
                <button className='w-full p-2 transition ease-in-out rounded-lg hover:scale-105 bg-main active:scale-95'>
                  Source
                </button>
              </div>
              <div className='w-full'>
                <button className='w-full p-2 transition ease-in-out rounded-lg hover:scale-105 bg-secondary active:scale-95'>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-6 space-y-4 text-left border border-black rounded-lg shadow-md dark:border-white lg:flex-row-reverse lg:justify-between lg:space-x-reverse lg:space-x-10 lg:space-y-0 lg:h-full'>
          <div className='lg:w-full'>
            <Image
              className='transition ease-in-out rounded shadow-lg max-h-96 max-w-96 hover:scale-105'
              src='https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F2C8f1eij15fcMxoMxLYstT%2F08021e82b7d5a6c43d50d860c2db303c%2F1627637897_x.gif&w=640&q=75'
              alt='project showcase gif'
              width={700}
              height={400}
              priority
            />
          </div>
          <div className='w-full lg:text-xl lg:flex lg:justify-between lg:flex-col'>
            <div>
              <div>Project Title</div>
              <div>Project Description</div>
            </div>
            <div className='lg:flex lg:flex-col lg:space-y-1'>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center mt-4 space-x-4 dark:text-black'>
              <div className='w-full'>
                <button className='w-full p-2 transition ease-in-out rounded-lg hover:scale-105 bg-main active:scale-95'>
                  Source
                </button>
              </div>
              <div className='w-full'>
                <button className='w-full p-2 transition ease-in-out rounded-lg hover:scale-105 bg-secondary active:scale-95'>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-6 space-y-4 text-left border border-black rounded-lg shadow-md dark:border-white lg:flex-row lg:justify-between lg:space-x-10 lg:space-y-0 lg:h-full'>
          <div className='lg:w-full'>
            <Image
              className='transition ease-in-out rounded shadow-lg max-h-96 max-w-96 hover:scale-105'
              src='https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F54UxCAOnMlT9gY9w8svhDk%2Ff2769befc1a421865f1abd79bac4ce3f%2Fezgif.com-gif-maker__9_.gif&w=640&q=75'
              alt='project showcase gif'
              width={700}
              height={400}
              priority
            />
          </div>
          <div className='w-full lg:text-xl lg:flex lg:justify-between lg:flex-col'>
            <div>
              <div>Project Title</div>
              <div>Project Description</div>
            </div>
            <div className='lg:flex lg:flex-col lg:space-y-1'>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
              <div className='flex flex-row'>
                <div className='w-full'>Feature 1</div>
                <div className='w-full'>Feature 2</div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center mt-4 space-x-4 dark:text-black'>
              <div className='w-full'>
                <button className='w-full p-2 transition ease-in-out rounded-lg hover:scale-105 bg-main active:scale-95'>
                  Source
                </button>
              </div>
              <div className='w-full'>
                <button className='w-full p-2 transition ease-in-out rounded-lg hover:scale-105 bg-secondary active:scale-95'>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
