import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const Pagination = () => {
  const navigate = useNavigate()
  const {page , changeHandler , totalPages} = useContext(Appcontext)
  return (
    <footer className='flex  justify-around items-center border-none shadow-lg  w-full h-[3rem] bg-gray-300 fixed bottom-0'>
     <div>
      { page > 1 && <button onClick={()=> changeHandler(page-1)} 
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
         focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
        dark:hover:bg-gray-700 mt-2 cursor-pointer '
        >Previous</button> }
      {page < totalPages && <button onClick={()=> changeHandler(page+1)}
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
         focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
        dark:hover:bg-gray-700 mt-2 cursor-pointer '
        >Next</button>}
        {page > 1 && <button onClick={()=> changeHandler(1)}
        className='text-white bg-violet-500 hover:bg-violet-300 focus:outline-none
         focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
        dark:hover:bg-gray-700 mt-2 cursor-pointer '
        >Home</button>}
</div>
      <p className='font-bold'>Page {page} of {totalPages}</p>

    </footer>
  )
}

export default Pagination