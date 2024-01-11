import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='bg-zinc-500 h-20 w-11/12 fixed bottom-0 rounded-br-[44px] rounded-bl-[44px]'>
      <div className='flex justify-center items-center h-full'>
        <p className='text-white text-base font-bold'>Copyright © {year}. All rights reserved.</p>
    </div>
      
    </div>
  )
}

export default Footer
