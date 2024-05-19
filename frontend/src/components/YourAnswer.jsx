import React from 'react'
import { useQuill } from 'react-quilljs-vite-fix';
import 'quill/dist/quill.snow.css';
const YourAnswer = () => {
    const { quill, quillRef } = useQuill();

    return (
        <div className='my-12 lg:px-24 md:px-10 sm-px-2 px-2 py-10'>
            <h4 className='text-3xl font-medium pb-4'>Your Answer</h4>
            <div className='mt-2 lg:h-[30vw] md:h-[50vw] sm:h-[70vw] h-[70vw]'>
                <div ref={quillRef} />
            </div>
            <button className='bg-blue-500 text-white font-medium text-lg px-4 py-2 rounded-md lg:mt-20 md:mt-28 sm:mt-36 mt-36'>Add your Answer</button>
        </div>
    )
}

export default YourAnswer