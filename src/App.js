import { useContext, useEffect } from "react";

import { Appcontext } from "./context/Appcontext";
import { Route, Routes } from "react-router-dom";
import { useLocation , useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
function App() {
const location = useLocation();
const [searchParams , setSearchParams] = useSearchParams()

  const {fetchBlogs} = useContext(Appcontext);
  useEffect(()=>{
const page = searchParams.get("tags") ?? 1;
if(location.pathname.includes("tags")){
  const tag = location.pathname.split("/").at(-1).replaceAll("-" , " ");
  fetchBlogs(Number(page) , tag)
}else if(location.pathname.includes("categories")){
  const category = location.pathname.split("/").at(-1).replaceAll("-" , " ");
  fetchBlogs(Number(page) , null , category)
}
else{
  fetchBlogs(Number(page))
}
 fetchBlogs()
  },[location.pathname , location.search])
  return (
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog/:blogid" element={<BlogPage/>}></Route>
      <Route path="/tags/:tag" element={<TagPage/>}></Route>
      <Route path="categories/:category" element={<CategoryPage/>}></Route>
    </Routes>
  );
}

export default App;
