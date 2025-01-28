import React from 'react'
import { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Singleblog from './Singleblog'

const Blogs = () => {
  const {loading ,posts }  = useContext(Appcontext);
  return (
    <div className='w-11/12 max-w-[500px] mb-10'>
      {loading ? <h1 className='text-3xl text-center mt-5'>Loading....</h1> :( posts.length === 0 ?
       <div>No post found </div> : posts.map((post)=> <Singleblog key={post.id} post={post}/>))}
    </div>
  )
}

export default Blogs ;