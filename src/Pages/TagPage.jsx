import React from 'react'
import Header from '../components/Header'
import {useLocation, useNavigate} from "react-router-dom"
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
const TagPage = () => {
    const navigation  = useNavigate()
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1)
  return (
    <div>
        <Header/>
        <button type='button' 
            className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
         focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 mx-2 mb-2 dark:bg-gray-800 
        dark:hover:bg-gray-700 mt-2 cursor-pointer'
            onClick={()=> navigation(-1)}>Back</button>
        <div className='w-11/12 max-w-[500px] mb-10  mx-auto'>
           
            <h2 className='mx-2 font-bold'>Blogs Tagged <span className='text-violet-500'>#{tag}</span></h2>
            <Blogs/>
        </div>

<Pagination/>
    </div>
  )
}

export default TagPage