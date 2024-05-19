import React from 'react'
import Sidebar from '../components/Sidebar';
import MainQuestionHeading from '../components/MainQuestionHeading';
import MainQuestionAnswer from '../components/MainQuestionAnswer';
import AddComment from '../components/AddComment';
import YourAnswer from '../components/YourAnswer';

const MainQuestion = () => {
  return (
    <div className='w-full flex'>
<Sidebar/>

<div className='main sm:w-full md:w-[90%] lg:w-[80%] pt-32 lg:px-20 md:px-8 sm:px-2 px-2'>
<MainQuestionHeading/>
 <MainQuestionAnswer/>
<AddComment/>
<YourAnswer/>
</div>
    </div>  )
}

export default MainQuestion