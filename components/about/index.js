import React from 'react';

export default function AboutComponent() {
  return (
    <div className='container flex flex-col p-6 mx-auto space-y-4'>
      <div>
        <img src='/assets/img/kent-2.png' alt='male web developer' />
      </div>
      <div className='flex flex-col p-4 space-y-8'>
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
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <div>
                Frontend<span className='text-lg text-orange-400'>.</span>
              </div>
              <div className='flex flex-row flex-wrap p-4 text-justify'>
                <div className='p-1 m-1 text-white bg-orange-600 rounded-lg'>
                  HTML
                </div>
                <div className='p-1 m-1 text-white bg-blue-700 rounded-lg'>
                  CSS
                </div>
                <div className='p-1 m-1 text-white bg-yellow-500 rounded-lg'>
                  JavaScript
                </div>
                <div className='p-1 m-1 text-white rounded-lg bg-violet-600'>
                  Bootstrap
                </div>
                <div className='p-1 m-1 text-white bg-blue-600 rounded-lg'>
                  Ant Design
                </div>
                <div className='p-1 m-1 text-white rounded-lg bg-sky-500'>
                  Tailwind
                </div>
                <div className='p-1 m-1 text-white rounded-lg bg-sky-500'>
                  React.js
                </div>
                <div className='p-1 m-1 text-white bg-gray-700 rounded-lg'>
                  Next.js
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                Backend<span className='text-lg text-sky-400'>.</span>
              </div>
              <div className='flex flex-row flex-wrap p-4 text-justify'>
                <div className='p-1 m-1 text-white bg-green-600 rounded-lg'>
                  Node.js
                </div>
                <div className='p-1 m-1 text-white bg-orange-600 rounded-lg'>
                  Hapi.js
                </div>
                <div className='p-1 m-1 text-white bg-blue-500 rounded-lg'>
                  MySQL
                </div>
                <div className='p-1 m-1 text-white rounded-lg bg-sky-600'>
                  PostgreSQL
                </div>
                <div className='p-1 m-1 text-white rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500'>
                  REST APIs
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                Tools<span className='text-lg text-red-600'>.</span>
              </div>
              <div className='flex flex-row flex-wrap p-4 text-justify'>
                <div className='p-1 m-1 text-white bg-blue-600 rounded-lg'>
                  VSCode
                </div>
                <div className='p-1 m-1 text-white rounded-lg bg-zinc-700'>
                  Figma
                </div>
                <div className='p-1 m-1 text-white bg-yellow-500 rounded-lg'>
                  Navicat
                </div>
                <div className='p-1 m-1 text-white bg-orange-600 rounded-lg'>
                  Postman
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div>
              Links<span className='text-lg text-yellow-400'>.</span>
            </div>
            <div className='flex flex-row flex-wrap p-4 text-justify'>
              <button className='p-1 m-1 text-white bg-blue-600 rounded-lg'>
                facebook
              </button>
              <button className='p-1 m-1 text-white bg-blue-600 rounded-lg'>
                linkedin
              </button>
              <button className='p-1 m-1 text-white rounded-lg bg-zinc-700'>
                github
              </button>
              <button className='p-1 m-1 text-white bg-gray-500 rounded-lg'>
                dev.to
              </button>
              <button className='p-1 m-1 text-white rounded-lg bg-gradient-to-r from-pink-500 to-orange-500'>
                instagram
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
