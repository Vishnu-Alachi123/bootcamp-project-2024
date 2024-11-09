import React from 'react';
import style from './blogPreview.module.css'
import type { Blog } from '@/app/blogData';
import Image from 'next/image';


export default function BlogPreview(props: Blog) {
  return (
      <div className={style.blog_container}>
          <div className={style.blog_title}>
            {props.title}
          </div>
          <div className={style.blog_date}>{props.date}</div>
          <div className = {style.side_by_side}>
          </div>
        
      <div>
        <Image  src = {props.image} alt = {props.imageAlt} width={300} height={300} />
        <p>{props.description}</p>
      </div>
	  </div>
  );
}
 