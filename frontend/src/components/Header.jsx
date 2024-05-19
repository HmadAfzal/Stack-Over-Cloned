import React from 'react'
import { RiInbox2Fill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { SiStackoverflow } from "react-icons/si";
import {Link} from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
const Header = () => {
  return (
    <div className='parent flex items-center justify-between  py-4 px-10 lg:px-30 md:px-16 sm:px-10 border-b-2 fixed z-50 top-0 w-full bg-white'>
<div className='right flex items-center justify-between gap-12 cursor-pointer'>
  <Link to={'/'}>
  <SiStackoverflow size={32}/>
  </Link>

    <p className=' hover:bg-zinc-200 rounded-full px-6 py-2 cursor-pointer  hidden sm:hidden lg:block md:block'>products</p>
</div>
<div className='middle flex items-center justify-between hidden sm:hidden lg:block md:block'>
    <input type="text" placeholder='search...' className='border-zinc-600 border w-[30vw] px-4 py-1 rounded-md'/>
</div>
<div className='left flex items-center justify-between gap-8'>
<Avatar src="/broken-image.jpg" className='cursor-pointer'/>
<RiInbox2Fill className="text-gray-500 hover:text-black cursor-pointer" size={28} />
      <BsFillQuestionCircleFill className="text-gray-500 hover:text-black cursor-pointer" size={28} />
      <ImMenu className="text-gray-500 hover:text-black cursor-pointer" size={28} />
</div>
    </div>
  )
}

export default Header