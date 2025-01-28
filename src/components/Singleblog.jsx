import React from 'react'
import { NavLink } from 'react-router-dom'

const Singleblog = ({post})=>{
  return (
    <div className='p-2 flex flex-col gap-1'>
      <NavLink to={`/blog/${post.id}`} className='font-bold text-gray-700 text-lg '>{post.title}</NavLink>
      <p className='text-md italic'>By <span className='text-violet-600'>{post.author}</span> on <NavLink
       to={`/categories/${post.category}`} className='text-lg underline'>{post.category.replaceAll(" " , "-")}</NavLink></p>
      <p className='font-bold '>{post.date}</p>
      <p className='font-serif  text-md'>{post.content}</p>
      <div>{post.tags.map((tag , index)=> <NavLink to={`/tags/${tag}`} key={index} className='font-bold mx-1 underline'>
        <span className='text-red-600 '>#</span><span>{tag}</span>
      </NavLink>)}</div>


    </div>    
  )
}

export default Singleblog