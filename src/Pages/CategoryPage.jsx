import React from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
const CategoryPage = () => {
  const navigation  = useNavigate()
    const location = useLocation();
    const category = location.pathname.split("/").at(-1)
  return (
    <>
    <div>
<Header/>
<div>
  <button onClick={()=> navigation(-1)} 
    className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
         focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 mx-2 mb-2 dark:bg-gray-800 
        dark:hover:bg-gray-700 mt-2 cursor-pointer'
    >Back</button>
  {/* <h2 className='font-bold '>Blogs Tagged <span className='text-violet-400 text-xl'>{category.replaceAll("%20" , " ")}</span></h2> */}
</div>
</div>
<div className='w-11/12 max-w-[500px] mb-10  mx-auto '>
<h2 className='font-bold mx-2'>Blogs Tagged <span className='text-violet-400 text-xl'>{category.replaceAll("%20" , " ")}</span></h2>

<Blogs/>
<Pagination/>
    </div>
    </>
  )
}

export default CategoryPage