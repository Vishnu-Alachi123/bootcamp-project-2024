import connectDB from "@/database/db";
import BlogPreview from "./c/components/blogPreview";
import Image from "next/image";
import Blogs from "@/database/blogSchema";

async function getBlogs(){
	await connectDB()

	try {

	    const blogs = await Blogs.find().sort({ date: -1 }).orFail()

	    return blogs
	} catch (err) {
	    return null
	}
}


export default async function Home() {
    const blogs= await getBlogs();

    if (!blogs) {
        return (
          <div>
            <h1>Projects</h1>
            <p>No projects found. Please try again later.</p>
          </div>
        );
      }


  return (
    <div>
      <div className="content">
            <main>
                <div>
                    <h1>Welcome</h1>
                    <br />
                    <div className="about_me">
                        <h1>About Me</h1>
                        <div className="container">
                        <Image src = "/images/about_me_img.jpg" className="about_image" alt = "picture of myself" width={1200} height={400}/>
                            <div className="about_me_text">
                                <p>
                                    My name is <strong>Vishnu Alachi</strong>, and I am currently a second-year <strong>software engineering</strong> major at Cal Poly, San Luis Obispo.
                                </p>
                                <p>
                                    I have a strong interest in computer science, though I am still exploring which specific field I want to focus on. What excites me most about the field is the <strong>problem-solving</strong> aspect, as well as the integration of math into solving complex challenges.
                                </p>
                                <p>
                                    Outside of academics, I enjoy staying active through sports like <strong>basketball and soccer</strong>. I also love expressing my creativity through <strong>drawing and building things</strong>, whether it's hands-on projects or working with technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug} 
            title={blog.title}
	        date ={blog.date}
	        description = {blog.description}
	        image = {blog.image}
	        imageAlt = {blog.imageAlt}
            content = {blog.content}
            slug = {blog.slug}
          />
        ))}
            </main>

            <footer className="footer">
                © 2024 Vishnu's Website | All Rights Reserved
            </footer>
    </div>
  </div>
  );
}



