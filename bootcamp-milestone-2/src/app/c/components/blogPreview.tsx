import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  title: string;
  date: Date;
  description: string;
  image: string;
  imageAlt: string;
  content: string;
  slug: string; 
};


export default function BlogPreview(props: Blog) {
  return (
      <div className={style.blog_container}>
          <Link href={`/blog/${props.slug}`}>
           <div className={style.blog_title}>
            {props.title}
          </div> </Link>
          <div className={style.blog_date}>
          {props.date?.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</div>
          <div className = {style.side_by_side}>
          </div>
        
      <div>
        <Image  src = {props.image} alt = {props.imageAlt} width={200} height={200} />
        <p>{props.description}</p>
      </div>
	  </div>
  );
}
 