"use client"

import { useState, useEffect } from 'react'

import BlogCard from '../BlogCard/BlogCard'

import Grid from '@mui/material/Grid'
import styles from './Feed.module.css'

const BlogCardList = ({ data, handleTagClick, visibleCount, loadMore}) => {
  return (
  <div>
    <Grid container sx={styles.grid_layout}>
    {data.slice(0, visibleCount).map((post) => ( 
        <BlogCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </Grid>
    {visibleCount < data.length && (
      <div className={styles.seeMoreButton}>
        <button onClick={loadMore} className={styles.TheButton}>See More</button>
      </div>
    )}
  </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText]= useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [visibleCount, setVisibleCount] = useState(9);
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

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); 
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.blog)
    );
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  }

  return (
    <div className={styles.container}>
      <section className={styles.center}>
        <form>
          <input
          type="text"
          placeholder="Search for a title or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className={styles.title}
          />
        </form>
        {searchText ? (
        <BlogCardList
          data={searchedResults}
          visibleCount={visibleCount}
            oadMore={loadMore}
        />) : (
          <BlogCardList
          data={posts}
          visibleCount={visibleCount} 
          loadMore={loadMore}
          />
        )}
      </section>
    </div>
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