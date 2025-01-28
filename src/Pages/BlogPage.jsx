import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Appcontext } from '../context/Appcontext';
import Baseurl from '../Baseurl';
import Header from '../components/Header';
import Singleblog from '../components/Singleblog';
import Pagination from '../components/Pagination';

const BlogPage = () => {
  const newBaseurl = "https://codehelp-apis.vercel.app/api/"
  const [Blogs  , setBlogs] = useState(null);
  const [relatedBlog , setRelatedBlogs] = useState([])
  const {loading , setLoading} = useContext(Appcontext);
const location = useLocation();
let blogid = location.pathname.split("/").at(-1);
const navigation = useNavigate();


  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseurl}get-blog?blogId=${blogid}`;
      
    try {
      const res = await fetch(url);
      const data = await res.json()
      setBlogs(data.blog);
      setRelatedBlogs(data.relatedBlogs)
      
    } catch (error) {
      console.log("error in blog page fetching");
      setBlogs(null);
      setRelatedBlogs([])
    }
    setLoading(false)
  }
  
useEffect(()=>{
  if(blogid){
    fetchRelatedBlogs()
  }
} , [location.pathname])

  return (
    <>
    <div>
      <Header/>
      <button
  onClick={()=> navigation(-1)}
  className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
         focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 dark:bg-gray-800 
        dark:hover:bg-gray-700 mt-2 cursor-pointer '
  >
Back
  </button>
<div className='w-11/12 max-w-[500px] mb-10  mx-auto'>
 
  {loading ? <h1 className='text-2xl text-black'>Loading...</h1>:Blogs ? <div>
    <Singleblog post={Blogs}/>
    <h2>Related Blogs</h2>
<div>

    {relatedBlog.map((post)=> <Singleblog key={post.id} post={post}/>)}
</div>
  </div> : <p className='text-xl font-bold'>No Blogs Found</p>}
</div>
    </div>
   
    </>
  )
}

export default BlogPage;