import React from 'react'
import styles from "./SingleBlogCard.module.css"

const SingleBlog = ({ paragraph, title }) => {
  return (
    <div className={styles.body}>
        <div className={styles.flex}>
          <img 
          src="/assets/images/Makarska.jpg"
          alt="logo"
          style={{ maxWidth: '100%', height: 'auto' }}
          >
          </img>
          <h1  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px' }}>{title}</h1>
          <p style={{ fontSize: '22px' }}>{paragraph}</p>
        </div>
    </div>
  )
}

export default SingleBlog