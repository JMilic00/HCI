"use client"

import {useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import styles from './BlogCard.module.css'
import Link from 'next/link';
import { grey } from '@mui/material/colors';


const BlogCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
 
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

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

  return (
    <Grid padding={3} item xs={12} sm={6} md={4} lg={3} className={styles.grid_item}>
      <Card>
      <div>
        <div className={styles.header}>
            <div
              onClick={handleProfileClick}
            >
                <div className={styles.person}>
                  <Image
                    src={post.creator.image}
                    alt="user_image"
                    width={40}
                    height={40}
                  />
                    <div className={styles.userInfo}>
                      <h2 style={{ fontFamily: 'Arial, sans-serif' }}>{post.creator.username}</h2>
                      <p style={{fontFamily: 'Arial, sans-serif', color: '#8888' }}>{post.creator.email}</p>
                    </div>
                </div>
              </div>
            <div onClick={handleCopy}>
              <Image
                src={copied === post.blog
                  ? '/assets/images/tick.png'
                  : '/assets/images/copy.png'
                }
                width={20}
                height={20}
              />
            </div>
        </div>
      </div>
     <Link href={{
        pathname: "/blog",
        query: {
          paragraph: post.blog,
          title: post.tag, 
        },
      }}
      >
      <h1 onClick={() => handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </h1> 
      <p className={styles.paragraph}>{post.blog}</p>
      </Link> 

      {session?.user.id === post.creator._id && pathName === '/profile'
       &&(
        <div>
          <p onClick={handleEdit}>
            Edit
          </p>
          <p onClick={handleDelete}>
            Delete
        </p>
        </div>
       )}
       </Card>
    </Grid>
  )
}

export default BlogCard