import BlogCard from '../BlogCard/BlogCard'
import styles from './Profile.module.css'
import Grid from '@mui/material/Grid'
import { useState } from 'react'

const Profile = ( {name, data, handleEdit, handleDelete } ) => {

  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); 
  }

  return (
  <div  className={styles.container}>
    <section  className={styles.center}>
      <div className={styles.header}>
        <h1>{name} Profile</h1>
      </div>

      <Grid container sx={styles.grid_layout}>
      {data.slice(0, visibleCount).map((post) => (
        <BlogCard
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
      </Grid>
        {visibleCount < data.length && (
          <div className={styles.button_position}>
            <button onClick={loadMore} className={styles.button}>See More</button>
          </div>
        )}
      </section>
  </div>
  )
}


export default Profile;