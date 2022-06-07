import React from 'react';

export default function SelectedProjects() {
  return (
    <div className='container flex flex-col mx-auto my-6 space-y-6 text-center'>
      <div className='text-lg font-bold'>SELECTED PROJECTS</div>
      <div className='flex flex-col p-6 space-y-6 border'>
        <div className='flex flex-col p-6 space-y-4 text-left border rounded-lg shadow-md'>
          <div>
            <img
              className='rounded shadow-lg'
              src='https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2Fc5LqaGep0e4dbCVcBoddG%2F4b70c11c75ddccf2c8046b9735ae4996%2Fezgif.com-gif-maker__25_.gif&w=640&q=75'
              alt=''
            />
          </div>
          <div>
            <div>Project Title</div>
            <div>Project Description</div>
            <div className='flex flex-row items-center justify-center mt-4 space-x-4'>
              <div>
                <button className='w-32 p-2 bg-green-300 rounded-lg'>
                  Source
                </button>
              </div>
              <div>
                <button className='w-32 p-2 bg-blue-300 rounded-lg'>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-6 space-y-4 text-left border rounded-lg shadow-md'>
          <div>
            <img
              className='rounded shadow-lg'
              src='https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F2C8f1eij15fcMxoMxLYstT%2F08021e82b7d5a6c43d50d860c2db303c%2F1627637897_x.gif&w=640&q=75'
              alt=''
            />
          </div>
          <div>
            <div>Project Title</div>
            <div>Project Description</div>
            <div className='flex flex-row items-center justify-center mt-4 space-x-4'>
              <div>
                <button className='w-32 p-2 bg-green-300 rounded-lg'>
                  Source
                </button>
              </div>
              <div>
                <button className='w-32 p-2 bg-blue-300 rounded-lg'>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-6 space-y-4 text-left border rounded-lg shadow-md'>
          <div>
            <img
              className='rounded shadow-lg'
              src='https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F54UxCAOnMlT9gY9w8svhDk%2Ff2769befc1a421865f1abd79bac4ce3f%2Fezgif.com-gif-maker__9_.gif&w=640&q=75'
              alt=''
            />
          </div>
          <div>
            <div>Project Title</div>
            <div>Project Description</div>
            <div className='flex flex-row items-center justify-center mt-4 space-x-4'>
              <div>
                <button className='w-32 p-2 bg-green-300 rounded-lg'>
                  Source
                </button>
              </div>
              <div>
                <button className='w-32 p-2 bg-blue-300 rounded-lg'>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
