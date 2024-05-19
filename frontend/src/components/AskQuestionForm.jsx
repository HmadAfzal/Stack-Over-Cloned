import React, { useState } from 'react';
import { useQuill } from 'react-quilljs-vite-fix';
import 'quill/dist/quill.snow.css';
import { TagsInput } from 'react-tag-input-component'
const AskQuestionForm = () => {
    const { quill, quillRef } = useQuill();
    const [tags, setTags] = useState([]);
    return (
        <div className='mb-20'>
            <h1 className='font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl'>Ask a public question</h1>

            <div className='my-8 shadow-md border p-8  lg:w-[50vw] md:w-[80] sm:w-[90vw] w-[90vw]'>
                {/* Title Section */}
                <div className='mb-6'>
                    <h4 className='text-xl font-bold'>Title</h4>
                    <p >Be specific and imagine you’re asking a question to another person.</p>
                    <input
                        type="text"
                        placeholder='e.g. is there an R function for finding the index of an element in a vector?'
                        className='border  p-2 mt-3 rounded-md w-full '
                    />
                </div>

                {/* Body Section */}
                <div className='mb-6'>
                    <h4 className='text-xl font-bold'>Body</h4>
                    <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                    <div className='mt-2 lg:h-[30vw] md:h-[50vw] sm:h-[70vw] h-[70vw]'>
                        <div ref={quillRef} />
                    </div>
                </div>

                {/* Tags Section */}
                <div className='lg:mt-20 md:mt-24 sm:mt-32 mt-32'>
                    <h4 className='text-xl font-bold'>Tags</h4>
                    <p className='pb-2'>Add up to 5 tags to describe what your question is about.</p>
                    <div className='w-full'>
                        <TagsInput
                            value={tags}
                            onChange={setTags}
                            placeHolder='press enter to add tags'

                        /></div>
                </div>
            </div>

            <button className='bg-blue-500 text-white font-medium lg:text-lg md:text-lg sm:text-sm text-sm px-4 py-2 rounded-md'>Add your question</button>
        </div>
    );
}

export default AskQuestionForm;
