import React, { useState } from 'react'

const AddComment = () => {
  const [comment, setComment]=useState(false)
  return (
    <div className='lg:px-24 md:px-10 sm-px-2 px-2 py-10 border-b'>
        <p className='text-blue-700 lg:text-lg md:text-md sm:text-sm text-sm font-medium cursor-pointer' onClick={()=>{setComment(!comment)}}>Add comment</p>
        {
          comment &&
               <div className='my-4'>
            <textarea name="comment" className='border border-black rounded-md lg:w-[80%] md:w-[80%] sm:w-full w-full text-black p-4 block'>Add your comment...</textarea>
            <button className='bg-blue-500 text-white font-medium lg:text-lg md:text-md sm:text-sm text-sm px-4 py-2 rounded-md mt-6'>add a comment</button>
        </div>   
        }

    </div>
  )
}

export default AddComment