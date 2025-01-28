import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
     <div className="flex flex-col justify-center items-center gap-y-1 bg-gray-300">
      
    <Header/>
    <div className='bg-gray-200'>
      <Blogs/>
    </div>
    
    <Pagination/>
    </div>
  )
}

export default Home