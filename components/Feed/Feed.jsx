"use client"

import { useState, useEffect } from 'react'

import BlogCard from '../BlogCard/BlogCard'

import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import styles from './Feed.module.css'

const BlogCardList = ({ data, handleTagClick }) => {
  return (
    <Grid container sx={styles.grid_layout}>
      {data.map((post) => (
        <BlogCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </Grid>
  )
}

const Feed = () => {
  const [searchText, setSearchText]= useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPost = async () => {
      const response = await fetch('/api/blog');
      const data =  await response.json();
    
      setPosts(data);
    }

    fetchPost();
  },[])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.blog)
    );
  };
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
      {searchText ? (
      <BlogCardList
        data={searchedResults}
      />) : (
        <BlogCardList
        data={posts}/>
      )}
    </section>
  )
}

export default Feed

{/* <TextField 
label="Outlined" 
variant="outlined"
type="search text"
value={searchText}
onChange={handleSearchChange}
required
/> */}