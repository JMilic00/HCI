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

  const handleCopy = () => {
    setCopied(post.blog)
    navigator.clipboard.writeText(post.blog);
    setTimeout(() => setCopied(""),3000);
  }
  return (
    <Grid padding={3} item xs={12} sm={6} md={4} lg={3} className={styles.grid_item}>
      <Card>
      <div>
        <div className={styles.header}>
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
          />
          <div>
            <h3>{post.creator.username}</h3>
            <p>{post.creator.email}</p>
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
     <Link href={{
        pathname: "/blog",
        query: {
          paragraph: post.blog,
          title: post.tag, 
        },
      }}
      > 
      <p className={styles.paragraph}>{post.blog}</p>
      <p onClick={() => handleTagClick && handleTagClick(post.tag)}>
        #{post.tag}
      </p>
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