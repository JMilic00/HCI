"use client"

import { useState, useEffect } from 'react'

import BlogCard from '../BlogCard/BlogCard'

const BlogCardList = ({ data, handleTagClick }) => {
  return (
    <div>
      {data.map((post) => (
        <BlogCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText]= useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(()=>{
    const fetchPost = async () => {
      const response = await fetch('/api/blog');
      const data =  await response.json();
    
      setPosts(data);
    }

    fetchPost();
  },[])

  return (
    <section>
      <form>
        <input
        type="text"
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        required
        />
      </form>
      <BlogCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed