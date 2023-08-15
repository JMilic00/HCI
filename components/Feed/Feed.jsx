"use client"

import { useState, useEffect } from 'react'

import BlogCard from '../BlogCard/BlogCard'

const Feed = () => {
  const [searchText, setSearchText]= useState('');

  const handleSearchChange = (e) => {

  }

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
    </section>
  )
}

export default Feed