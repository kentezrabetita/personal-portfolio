import React from 'react';
import Link from 'next/link';

export default function AboutComponent() {
  return (
    <div className='container flex flex-col p-6 mx-auto space-y-4 xl:flex-row-reverse'>
      <div className='flex justify-center xl:w-full'>
        <img
          src='/assets/img/kent-2.png'
          className='h-max w-max'
          alt='male web developer'
        />
      </div>
      <div className='flex flex-col p-4 space-y-6 xl:w-full'>
        <div className='text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet nunc auctor, tristique diam eu, tempus eros. Vestibulum hendrerit
          velit sed metus commodo aliquam. Mauris a consectetur odio, a accumsan
          turpis. Proin iaculis hendrerit justo. Nunc mollis ligula a orci
          imperdiet faucibus. Donec vel sagittis sem, ac finibus elit. Etiam
          hendrerit ligula id dolor convallis, mattis commodo lacus tincidunt.
          Aliquam luctus magna a neque vulputate, sed malesuada lectus luctus.
          Donec auctor leo nisl, at interdum metus bibendum at. Integer nec
          magna et tortor tincidunt mollis. Ut sapien leo, aliquam a rutrum a,
          dignissim in ante. Nullam sed purus a dolor pretium porttitor non nec
          sem. Mauris vel eros ultricies leo faucibus ornare vitae nec diam.
          Aenean sollicitudin malesuada sem, at vestibulum augue commodo in.
        </div>
        <div className='flex flex-col space-y-4'>
          <div>Few technologies I've work with : </div>
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
      </div>
    </div>
  );
}
