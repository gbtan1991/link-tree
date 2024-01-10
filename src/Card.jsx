import React from 'react'
import NameCard from './component/NameCard'
import SocialLinks from './component/SocialLinks'
import Header from './component/Header'

const Card = () => {
  return (
    
    <div className='w-11/12 sm:w-[375px] h-full rounded-[44px] bg-zinc-50'>
        <div className='h-full w-fullflex flex-col '>
        <Header />
        <NameCard />
        <SocialLinks />
        
        </div>
      
    </div>
    
  )
}

export default Card
