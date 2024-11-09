import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={style.navbar}>
        <h1 className = {style.logo}>
        <Link href = "/">Vishnu's Website</Link>
        </h1>
        <ul className = {style.nav_list}>
            <Link href = "/">Home</Link>
            <Link href = "/contact">Contact</Link>
            <Link href = "/portfolio">Portfolio</Link>
            <Link href = "/resume">Resume</Link>

        </ul>
    </div>
  );
}