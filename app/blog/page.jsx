"use client";

import { useSearchParams } from "next/navigation";
import SingleBlog from "@components/SingleBlog/SingleBlog"

const Blog = () => {
  const searchParams = useSearchParams();
  return(
  <SingleBlog
    paragraph={searchParams.get("paragraph")}
    title= {searchParams.get("title")}
  />
  )
}

export default Blog