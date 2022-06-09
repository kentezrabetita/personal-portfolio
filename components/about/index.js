/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutComponent() {
  const imgUrl = '/assets/img/kent-2.svg';
  const prefix = '/csu-hci-project';

  return (
    <div className='container flex flex-col p-6 mx-auto space-y-4 xl:flex-row-reverse xl:space-x-reverse xl:space-x-8 xl:space-y-0'>
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
          delay: 0.2,
        }}
        className='flex items-center justify-center xl:w-full'
      >
        <img
          src={prefix + imgUrl}
          className='w-80 lg:w-3/4'
          alt='male web developer'
        />
      </motion.div>
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
        }}
        className='flex flex-col p-4 space-y-6 xl:w-full'
      >
        <div className='flex flex-col space-y-4 text-justify'>
          <p>
            My name is Kent Ezra Betita, an aspiring Full Stack Web Developer
            from Philippines. Currently studying as an Undergraduate Computer
            Science student at Caraga State University, Butuan City and working
            remotely as a
            <span className='font-bold'> Full Time Web Developer</span> at
            <span className='px-2 ml-1 font-bold border rounded-lg cursor-pointer'>
              <Link href='https://www.devspace.asia/'>
                <a target='_blank'>DevSpace PH</a>
              </Link>
            </span>
            .
          </p>
          <p>
            I was never particularly great in school or in academics. I&apos;m
            just a generally curious individual. I spend a lot of time building
            applications and learning something new, but there&apos;s a lot more
            to it than that. Currently I&apos;ve been working on full stack web
            development both in my job and personal/school projects.
          </p>
          <p>
            In my spare time, I try to learn and teach myself things that
            interest me and that includes Web Animations, Machine Learning/AI,
            Security/Penetration Testing, Docker/Kubernetes, and the
            Blockchain/Cryptocurrency.
          </p>
        </div>
        <div className='flex flex-col space-y-4'>
          <div>Few technologies I&apos;ve work with : </div>
          <div className='flex flex-col space-y-2 cursor-default'>
            <div className='flex flex-col'>
              <div>
                Frontend<span className='text-lg text-orange-400'>.</span>
              </div>
              <div className='flex flex-row flex-wrap px-4 text-justify'>
                <div className='p-1 m-1 text-white transition ease-in-out bg-orange-600 rounded-lg hover:scale-105'>
                  HTML
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-blue-700 rounded-lg hover:scale-105'>
                  CSS
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-yellow-500 rounded-lg hover:scale-105'>
                  JavaScript
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out rounded-lg hover:scale-105 bg-violet-600'>
                  Bootstrap
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-blue-600 rounded-lg hover:scale-105'>
                  Ant Design
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out rounded-lg hover:scale-105 bg-sky-500'>
                  Tailwind
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out rounded-lg hover:scale-105 bg-sky-500'>
                  React.js
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-gray-700 rounded-lg hover:scale-105'>
                  Next.js
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                Backend<span className='text-lg text-sky-400'>.</span>
              </div>
              <div className='flex flex-row flex-wrap px-4 text-justify'>
                <div className='p-1 m-1 text-white transition ease-in-out bg-green-600 rounded-lg hover:scale-105'>
                  Node.js
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-orange-600 rounded-lg hover:scale-105'>
                  Hapi.js
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-blue-500 rounded-lg hover:scale-105'>
                  MySQL
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out rounded-lg hover:scale-105 bg-sky-600'>
                  PostgreSQL
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out rounded-lg hover:scale-105 bg-gradient-to-r from-pink-500 to-yellow-500'>
                  REST APIs
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                Tools<span className='text-lg text-red-600'>.</span>
              </div>
              <div className='flex flex-row flex-wrap px-4 text-justify'>
                <div className='p-1 m-1 text-white transition ease-in-out bg-blue-600 rounded-lg hover:scale-105'>
                  VSCode
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out rounded-lg bg-zinc-700 hover:scale-105'>
                  Figma
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-yellow-500 rounded-lg hover:scale-105'>
                  Navicat
                </div>
                <div className='p-1 m-1 text-white transition ease-in-out bg-orange-600 rounded-lg hover:scale-105'>
                  Postman
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                Links<span className='text-lg text-yellow-400'>.</span>
              </div>
              <div className='flex flex-row flex-wrap px-4 text-justify'>
                <Link href='https://facebook.com/kentdagrit'>
                  <a target='_blank'>
                    <button className='p-1 m-1 text-white transition ease-in-out bg-blue-600 rounded-lg hover:scale-105'>
                      facebook
                    </button>
                  </a>
                </Link>
                <Link href='https://www.linkedin.com/in/kent-ezra-betita-64355a212/'>
                  <a target='_blank'>
                    <button className='p-1 m-1 text-white transition ease-in-out bg-blue-600 rounded-lg hover:scale-105'>
                      linkedin
                    </button>
                  </a>
                </Link>
                <Link href='https://github.com/kentezrabetita/'>
                  <a target='_blank'>
                    <button className='p-1 m-1 text-white transition ease-in-out rounded-lg bg-zinc-700 hover:scale-105'>
                      github
                    </button>
                  </a>
                </Link>
                <Link href='https://dev.to/kentezrabetita'>
                  <a target='_blank'>
                    <button className='p-1 m-1 text-white transition ease-in-out bg-gray-500 rounded-lg hover:scale-105'>
                      dev.to
                    </button>
                  </a>
                </Link>
                <Link href='https://www.instagram.com/kentezrathegreat/?hl=en'>
                  <a target='_blank'>
                    <button className='p-1 m-1 text-white transition ease-in-out rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105'>
                      instagram
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
