import { createContext, useState } from "react";
import Baseurl from "../Baseurl";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext()

export  function AppcontextProvider({children}){
const [loading , setLoading] = useState(false);
const [posts ,  setPost] = useState([]);
const [page , setPage] = useState(1);
const [totalPages , setTotalPages] = useState(null);
const navigate = useNavigate()

const value = {
    loading,
    setLoading,
    posts,
    setPost,
    page , 
    setPage,
    totalPages, 
    setTotalPages,
    fetchBlogs,
    changeHandler,
}
async function fetchBlogs(page = 1 , tag=null , category){
setLoading(true);
let  url = `${Baseurl}?page=${page}`;
if(tag){
    url += `&tag=${tag}`
}
if(category){
    url+= `&category=${category}`
}
try {   
const res = await fetch(url);
const data = await res.json();
setPost(data.posts);
setPage(data.page);
setTotalPages(data.totalPages);

} catch (error) {
    console.log("error when try to fetch api");
    setPost([]);
    setPage(1);
    setTotalPages(null);
}
setLoading(false)
}

function changeHandler(page){
    setPage(page)
    fetchBlogs(page)
}


return <Appcontext.Provider value={value}>
    {children}
</Appcontext.Provider>
}

