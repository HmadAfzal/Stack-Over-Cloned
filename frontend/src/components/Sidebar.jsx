import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoIosPricetags } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
<div className="sidebar w-[20%] cursor-pointer pt-24 hidden lg:block md:block sm:hidden">
<div className='upper-sidebar my-6'>
<div className='flex items-center w-full gap-6 hover:bg-zinc-200 px-2 py-4'>
<HiMiniHome size={28}/>
<Link to={'/'} className='text-lg font-semibold'>Home</Link>
</div>
<div className='flex items-center w-full gap-6 hover:bg-zinc-200 px-2 py-4'>
<RiQuestionnaireFill size={28}/>
<p className='text-lg font-semibold'>Questions</p>
</div>
<div className='flex items-center w-full gap-6 hover:bg-zinc-200 px-2 py-4'>
<IoIosPricetags size={28}/>
<p className='text-lg font-semibold'>Tags</p>
</div>
</div>

<div className='Lower-sidebar my-6'>
<div className='flex items-center w-full gap-6 hover:bg-zinc-200 px-2 py-4'>
<IoBookmark size={28}/>
<p className='text-lg font-semibold'>Saves</p>
</div>
<div className='flex items-center w-full gap-6 hover:bg-zinc-200 px-2 py-4'>
<IoPeople size={28}/>
<p className='text-lg font-semibold'>Users</p>
</div>
<div className='flex items-center w-full gap-6 hover:bg-zinc-200 px-2 py-4'>
<HiMiniBuildingOffice2 size={28}/>
<p className='text-lg font-semibold'>Companies</p>
</div>
</div>

</div>
)
}

export default Sidebar