/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getAllUsers = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setProjects(res.data);
    });
  };

  const projectBackground = [
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F5V2BuJnpZi7j6I06WAaWt7%2F22d5aaacf48a02627bb0b63fef22759f%2Fezgif.com-gif-maker__36_.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F55zB0yL7OtqPHheHcNSpgS%2F8f757dc991ed121e6e698eaf18c127e6%2Fezgif.com-gif-maker__34_.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2Fc5LqaGep0e4dbCVcBoddG%2F4b70c11c75ddccf2c8046b9735ae4996%2Fezgif.com-gif-maker__25_.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F2C8f1eij15fcMxoMxLYstT%2F08021e82b7d5a6c43d50d860c2db303c%2F1627637897_x.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F3uBrJ07WSM40FpolgjInHY%2F7d886cb4187b52194bf9b63c183a1d3a%2F1627637330_x.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F1vw5KguANULQqNkPDNuAOP%2Ffdddbecb03c45cf76e353b37e3806165%2Fezgif.com-gif-maker__1_.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F6WzFZyWN8P8F5Qr9PzVCu3%2Faa5daa52282947f54024cf4b6dd03190%2Fezgif.com-gif-maker__5_.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F6wX3r2sDGHSPjMEmIk8nSi%2F5f9e6581fe9b7bf9cf721ffb14aad6b2%2Fimage_slider_preview.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F199biHX2OBy7hlXEf16Ehc%2F79b6b70e8891fd7b5ba060d77f3f91db%2F1627582788_x.gif%3Fw%3D630%26q%3D80&w=384&q=75',
    'https://www.madza.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fzlsyc9paq6sa%2F54UxCAOnMlT9gY9w8svhDk%2Ff2769befc1a421865f1abd79bac4ce3f%2Fezgif.com-gif-maker__9_.gif%3Fw%3D630%26q%3D80&w=384&q=75',
  ];

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className='container flex flex-col p-6 mx-auto space-y-8 lg:px-36'>
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <input
          className='w-full p-2 border rounded-lg'
          type='text'
          name='search'
          placeholder='Search projects...'
          onChange={(e) => setSearchTerm(e.target.value)}
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
        className='flex flex-col space-y-4 lg:flex-row md:grid md:grid-cols-2 xl:grid-cols-3 md:space-y-0 md:gap-8'
      >
        {projects
          .filter((value) => {
            if (searchTerm === '') {
              return value;
            } else if (
              value.company.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
            return false;
          })
          .map((project) => (
            <div
              className='flex flex-col space-y-2 text-center border rounded-lg dark:border-none'
              key={project.id}
            >
              <img
                className='h-56 transition ease-in-out rounded-lg hover:scale-105'
                src={projectBackground[project.id - 1]}
                alt='project gif'
              />
              <div>
                <p className='text-2xl font-bold'>{project.company.name}</p>
                <p className='text-gray-500'>{project.company.bs}</p>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
}
