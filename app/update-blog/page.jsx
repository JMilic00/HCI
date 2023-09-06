"use client"

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from '@components/Form/Form';

const EditBlog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    blog: '',
    tag: '',
  })


  useEffect(()=>{
    const getBlogDeatalis = async () => {
        const response = await fetch (`/api/blog/${blogId}`)
        const data = await response.json();

        setPost({
            blog: data.blog,
            tag: data.tag,
        })
    }

    if(blogId) getBlogDeatalis();
  },[blogId])

  const updateBlog = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!blogId) return alert("Blog ID missing");

    try{
      const response = await fetch(`/api/blog/${blogId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          blog: post.blog,
          tag: post.tag
        })
      })

      if(response.ok){
        router.push('/profile');
      }
    }catch (error){
      console.log(error);
    }finally{
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateBlog}
    />
  )
}

export default EditBlog;