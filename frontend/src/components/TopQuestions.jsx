import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'
const TopQuestions = () => {
  return (
    <div>
        <div className='flex items-center justify-between pb-14 '>
    <h1 className='text-3xl font-semibold'>Top Questions</h1> <Link to={'/ask/question'} className='bg-blue-500 text-white font-medium text-lg px-4 py-2 rounded-md'>Ask Question</Link>
    </div>
<div className='flex items-center justify-between pb-10'>
    <div className='text-xl  font-medium'><span>7 </span>Questions</div>
    <div className='flex items-center gap-6'>
    <div className='border border-zinc-500 px-4 py-2 rounded-md flex items-center hidden lg:block md:block sm:hidden'><span className='pr-3' >Newest</span><span className='border-x border-black px-3'>Active</span><span className='pl-3'>More</span></div>
    <button className='bg-blue-100 text-blue-500 font-medium text-lg px-4 py-2 rounded-md flex items-center justify-center gap-4 border border-blue-500'>
       <IoFilterSharp size={24} color='#3B82F6'/> Filter
    </button>
    </div>
</div>

</div>
  )
}

export default TopQuestions