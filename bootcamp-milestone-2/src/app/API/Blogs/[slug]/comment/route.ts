
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

export type IParams = {
  slug: string;
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ status: 405, body: { error: 'Method Not Allowed' } });
  }

  await connectDB();

  // Extract the data from the request body
  const { username, commentText, blogSlug } = await req.json();

  try {
    console.log("hello")
    console.log({ username, commentText, blogSlug })
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: blogSlug },
      {
        $push: {
          comments: {
            user: username,
            comment: commentText,
            time: new Date(),
          },
        },
      },
      { new: true } 
    );
    console.log(updatedBlog)

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({body:'successful'})
  } catch (error) {
    console.error('Error posting comment:', error);
    return NextResponse.json({ status: 500, body: { error: 'Internal Server Error' } });
  }
}