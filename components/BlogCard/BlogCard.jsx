"use client"

import {useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';


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
    <div>
      <div>
        <div>
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
      <p>{post.blog}</p>
      <p onClick={() => handleTagClick && handleTagClick(post.tag)}>
        #{post.tag}
      </p>

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
    </div>
  )
}

export default BlogCard