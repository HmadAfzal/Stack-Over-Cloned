import React from 'react'

import Sidebar from '../components/Sidebar';
import TopQuestions from '../components/TopQuestions';
import Questions from '../components/Questions';

const Home = () => {
  return (
    <div className='w-full flex'>
<Sidebar/>

<div className=' main sm:w-full md:w-[90%] lg:w-[80%] pt-32 lg:px-20 md:px-10 sm:px-6 px-6'>
<TopQuestions/>
<Questions/>
</div>
    </div>
  )
}

export default Home