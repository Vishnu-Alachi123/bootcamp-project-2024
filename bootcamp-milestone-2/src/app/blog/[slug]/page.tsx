import React from 'react';
import style from "../../home.module.css"; 
import Image from "next/image";
import "../../globals.css";

async function getBlog(slug: string) {
  try {
    const url = `http://localhost:3000/API/Blogs/${slug}`;

    const res = await fetch(url, {
      cache: "no-store",
    });
    const data = await res.json();

    if (!res.ok) {
      console.log(res)
      throw new Error("Failed to fetch blog");
    }

    return data;
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = await getBlog(slug);

  if (blog) {
    return (
      <div className={style.blog_container}>
        <h1 className={style.blog_title}>{blog.title}</h1>
        <p className={style.blog_date}>Date: {new Date(blog.date).toLocaleDateString()}</p>
        
        <div>
          <Image
            className={style.blog_image}
            src={ blog.image}
            alt="img"
            width={600}
            height={400}
          />

          <div className={style.blog_content}>
            {blog.content}
          </div>
        </div>
        
        <div className={style.footer}>
          <footer>© 2024 Vishnu's Website | All Rights Reserved</footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.blog_not_found}>
        <h1>Blog Not Found</h1>
        <p>Sorry, we couldn't find the blog you were looking for.</p>
      </div>
    );
  }
}
