"use client"

import {useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import styles from './BlogCard.module.css'
import Link from 'next/link';


const BlogCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
 
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const handleCopy = () => {
    setCopied(post.blog)
    navigator.clipboard.writeText(post.blog);
    setTimeout(() => setCopied(""),3000);
  }

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };


  return (
    <Grid padding={3} item xs={12} sm={6} md={6} lg={4} className={styles.grid_item}>
      <Card className={styles.color}>
      <div>
        <div className={styles.header}>
            <div
              onClick={handleProfileClick}
            >
                <div className={styles.person}>
                  <Image
                    src={post.creator.image}
                    alt="user_image"
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                    <div className={styles.userInfo}>
                      <h2 style={{ fontFamily: 'Arial, sans-serif' }}>{post.creator.username}</h2>
                      <p style={{fontFamily: 'Arial, sans-serif', color: '#8888' }}>{post.creator.email}</p>
                    </div>
                </div>
              </div>
              {session?.user.id === post.creator._id && pathName === '/profile' && 
              (<div onClick={handleCopy}>
                <Image
                src={copied === post.blog
                  ? '/assets/images/Tick.jpg'
                  : '/assets/images/copy.png'
                }
                width={20}
                height={20}
                className={styles.tick}
              />
            </div>
            )}
        </div>
      </div>

      <h2 onClick={() => handleTagClick && handleTagClick(post.tag)} className={styles.title}>
        {post.tag}
      </h2> 
      <p className={styles.paragraph}>{post.blog}</p>
      
      <div className={styles.buttons}>
        <Link href={{
          pathname: "/blog",
          query: {
            paragraph: post.blog,
            title: post.tag, 
          },
        }}>
          <button className={styles.submit}>
                Read more
          </button>
          </Link>
          <p  className={styles.date}>
            2/August/2023
          </p>
      </div>
      {session?.user.id === post.creator._id && pathName === '/profile'
            &&(
            <div className={styles.Edit_delete}>

                <p onClick={handleEdit} className={styles.Edit}>Edit</p> 
              
                <p onClick={handleDelete} className={styles.Delete}>Delete</p>
            </div>
       )}
       </Card>
       {visibleCount < post.length && (
        <div className={styles.seeMoreButton}>
          <button onClick={handleSeeMore}>See More</button>
        </div>
      )}
    </Grid>
  )
}

export default BlogCard