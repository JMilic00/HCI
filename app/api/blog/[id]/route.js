import { connectToDB } from "@utils/database";
import Blog from '@models/blog';

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const blog = await Blog.findById(params.id).populate('creator');

        if(!blog) return new Response("Blog not found",{status: 404});
        
        return new Response(JSON.stringify(blog),{status: 200})
    } catch (error) {
        return new Response("Failed to fetch all blogs", {status: 500})
    }
}

export const PATCH = async (request, { params }) => {
    const { blog, tag } = await request.json();

    try {
        await connectToDB();

        const existingBlog =  await Blog.findById(params.id);

        if(!existingBlog) return new Response("Blog not found",
        {status: 404});

        existingBlog.blog = blog;
        existingBlog.tag = tag;

        await existingBlog.save();

        return new Response(JSON.stringify(existingBlog),
        {status: 200})

    } catch (error) {
        return new Response("Failed to update the blog", {status: 500})
    }
}

export const DELETE = async (request, {params}) =>{
    try {
        await connectToDB();

        await Blog.findByIdAndRemove(params.id);

        return new Response("Blog deleted", {status: 200});
    } catch (error) {
        return new Response("Failed to delete the blog", { status: 500});
    }
}