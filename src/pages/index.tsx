/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { signOut } from 'next-auth/react'
import { Home } from '@/components'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  // returned object is being destructured to extract the data property. Then, the data property is being aliased as session.
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get('/api/project')
      .then(res => {
        console.log(res.data)
        setProjects(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

    return (
      <Home>
        <div>
          <Link href='/project' className='mt-20 cursor-pointer'>
            <button>add project</button>
          </Link>
          <div className='w-full flex flex-row gap-48'>
            {projects.map((project) => (
              <div className='pt-20 w-full'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img src={project.image} alt='hello' height={300} width={300} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="text-gray-700 text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
                <div>
                  <button onClick={() => signOut()}>edit</button>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </Home>
    )
  }

export default Main;