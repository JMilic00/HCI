"use client"

import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile/Profile'

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPost = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data =  await response.json();
        
          setPosts(data);
        }
    
        if(session?.user.id) fetchPost();
      },[])

    const handleEdit = (post) => {
      router.push(`/update-blog?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const Confirmed = confirm("This blog will be deleted");

      if(Confirmed){
        try {
        await fetch(`/api/blog/${post._id.toString()}`,
        {
          method:'DELETE'
        })

        const filteredPosts= posts.filter((p) => p._id === post._id);

        setPosts(filteredPosts);
        } catch (error) {
          console.log(error);
        }
      }
    }

    return (
        <Profile
        name="My"
        desc="Youre profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}  
        />
    )
}

export default MyProfile