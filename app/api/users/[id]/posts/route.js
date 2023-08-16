import { connectToDB } from "@utils/database";
import Blog from '@models/blog';

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const blogs = await Blog.find({
            creator: params.id
        }).populate('creator');
        
        return new Response(JSON.stringify(blogs),{status: 200})
    } catch (error) {
        return new Response("Failed to fetch all blogs", {status: 500})
    }
}