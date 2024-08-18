import React from 'react'
import Link from 'next/link'
const CustomNav = () => {
  return (
    <nav>
     <div className='flex flex-wrap items-center justify-between  py-3 bg-[#111827] '>
      <Link href={"/"} className='text-4xl text-secondary font-semibold ml-10 justify-between'>
      Ardee
      </Link>
      <div className='menu justify-center '>
       <ul className='flex flex-row space-x-8 justify-center items-center text-tertiary'>
       <li>About</li>
       <li>Skills</li>
       <li>Projects</li>

       </ul>
       </div>
    </div>
  </nav>
  )
}

export default CustomNav