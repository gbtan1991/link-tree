import React from 'react'
import { FaGithub, FaHashnode, FaCodepen } from 'react-icons/fa6'

const SocialLinks = () => {

  const codingProfiles = [
    {
        id: 1,
        name: 'GitHub',
        link: 'https://github.com/your-username',
        icon: <FaGithub />
    },
    {
        id: 2,
        name: 'Hashnode',
        link: 'https://hashnode.com/@your-username',
        icon: <FaHashnode />
    },
    {
        id: 3,
        name: 'CodePen',
        link: 'https://codepen.io/your-username',
        icon: <FaCodepen />
    }
  ]


  return (
    <div className='w-full h-2/4 bg-zinc-50'>
    <ul className='flex justify-center items-center h-full'>
      {codingProfiles.map((profile) => (
        <li key={profile.id} className='mx-4 border'>
          <a
            href={profile.link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col items-center'
          >
            {profile.icon}
            <span className='mt-2'>{profile.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default SocialLinks


