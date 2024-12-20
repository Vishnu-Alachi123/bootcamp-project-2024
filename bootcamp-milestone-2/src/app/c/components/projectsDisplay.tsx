import React from "react";
import Image from "next/image";
import style from "./Projects.module.css";

type Project = {
  name: string;
  status: string;
  description: string; 
  features: string;
  image: string;
  imageAlt: string;
  slug: string;
};

export default function ProjectDisplay(props: Project) {
  return (
    <div className={style.project_container}>
      <h3 className={style.project_name}>{props.name}</h3>
      <div className={style.project_status}>Status: {props.status}</div>
      <div className={style.project_details}>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={300}
          height={300}
        />
        <p className={style.project_description}>{props.description}</p>
        <p className={style.project_features}>
          <strong>Features:</strong> {props.features}
        </p>
        <a href={`/projects/${props.slug}`} className={style.project_link}>
          Learn more
        </a>
      </div>
    </div>
  );
}
