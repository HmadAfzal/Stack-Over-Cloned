import React from 'react'
import {Link} from 'react-router-dom'
const MainQuestionHeading = () => {
  return (
    <div className='border-b'>
        <div className=' pb-14 '>
    <h1 className='lg:text-3xl md:text-2xl sm:text-2xl text-lg font-semibold lg:w-[78%] md:w-[90%] sm:w-[100%] lg:mb-6 md:mb-6 sm:mb-4 mb-4'>The ConnectionString property has not been initialized. How to solve this error?</h1> <Link to={'/ask/question'} className='bg-blue-500 text-white font-medium lg:text-lg md:text-md sm:text-sm text-sm px-4 py-2 rounded-md '>Ask Question</Link>
    </div>
<div className='flex items-center pb-10 '>
    <div className='lg:text-lg md:text-md sm:text-sm text-sm'>Asked <span className='text-zinc-500 '>today</span></div> &nbsp; &nbsp;&nbsp;
    <div className='lg:text-lg md:text-md sm:text-sm text-sm'>Modified  <span className='text-zinc-500 '>today</span></div> &nbsp; &nbsp;&nbsp;
    <div className='lg:text-lg md:text-md sm:text-sm text-sm'>Viewed  <span className='text-zinc-500 '>14 Times</span></div>
</div>
</div>  )
}

export default MainQuestionHeading