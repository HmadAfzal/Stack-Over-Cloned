import React from 'react'
import {Link} from 'react-router-dom'
const Questions = () => {
    return (
        <div className='flex gap-10 items-center border-t py-8'>

            <div >
                <div className='text-md py-1'><span>0 </span>votes</div>
                <div className='text-md py-1 '><span>5 </span>Answers</div>
                <div className='text-md py-1'><span>10 </span>views</div>
            </div>

            <div>
                <Link to={'/question/:id'}>
                <h3 className=' text-[#1B74D9] text-2xl font-normal cursor-pointer'>
                    The ConnectionString property has not been initialized. How to solve this error?
                </h3></Link>
                <div className='flex items-center my-4 gap-4'><span className='bg-blue-100 text-[#1B74D9] py-1 px-2 rounded-md cursor-pointer'>sql server</span><span className='bg-blue-100 text-[#1B74D9] py-1 px-2 rounded-md cursor-pointer'>app.net</span><span className='bg-blue-100 text-[#1B74D9] py-1 px-2 rounded-md cursor-pointer'>c#</span><span className='bg-blue-100 text-[#1B74D9] py-1 px-2 rounded-md cursor-pointer'>blazor</span></div>
            </div>
        </div>
    )
}

export default Questions