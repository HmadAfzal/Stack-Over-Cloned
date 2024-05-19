import { Avatar } from '@mui/material';
import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const MainQuestionAnswer = () => {
  return (
    <div className='flex py-12 border-b'>
        <div className='flex flex-col items-center gap-4'>
           <div className='rounded-full border p-1 hover:bg-gray-300'> <TiArrowSortedUp size={32} className="text-gray-500 hover:text-black cursor-pointer"/></div>
            <p className='text-2xl'>0</p>
            <div className='rounded-full border p-1 hover:bg-gray-300'>   <TiArrowSortedDown size={32} className="text-gray-500 hover:text-black cursor-pointer"/></div>
        </div>
        <div className='lg:px-8 md:px-6 sm:px-4 px-4 lg:text-xl md:text-md sm:text-sm text-sm leading-relaxed tracking-wide'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias consequuntur tempora adipisci similique suscipit! Animi ipsam quam recusandae sit, laudantium inventore! Autem labore impedit porro ducimus pariatur corporis molestiae sunt!
            Numquam non inventore in laboriosam perspiciatis magnam, veritatis hic architecto odit soluta nobis ipsam repellat fugiat deserunt, totam exercitationem minima accusamus recusandae rerum aliquid doloremque aspernatur dolore optio. Accusamus, unde?
            Labore maxime, quia voluptates similique officiis velit corrupti sit distinctio, quaerat magni ratione veniam id eius maiores error, at veritatis voluptate obcaecati. Sint cum quos pariatur quis tempore laboriosam expedita.
            Repellendus, doloremque error? Aodio voluptatum esse perspiciatis quaerat tenetur ipsa, provident dolorum ab mollitia facilis saepe, deleniti placeat quisquam doloremque quo. Dolorum, et! Earum, architecto dolores?</p>
            <div className='pt-10  gap-2 flex flex-col justify-center items-end hidden sm:hidden md:block lg:block'>
                <Avatar/>
            <div className='text-lg '>Asked <span className='text-zinc-500 '>today</span></div>
            
            </div>
        </div>
    </div>
  )
}

export default MainQuestionAnswer