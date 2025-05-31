import React from 'react'
import UsefullLinks from './UsefullLinks'
import Categories from './Categories'
import Download from './Download'

const Footer = () => {
  return (
    <div className=" pt-8 ">
    <div className='flex'>
      <UsefullLinks/>
      <Categories/>
    </div>
    <Download/>
    <p className='lg:hidden text-xl font-bold mb-2 mt-12 ml-2 text-gray-600'>india's last minute app -  blinkit</p>
    </div>
  )
}

export default Footer
