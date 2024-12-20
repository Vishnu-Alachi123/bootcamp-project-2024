import connectDB from "@/database/db";
import Projects from "@/database/projectschema";
import ProjectDisplay from "../c/components/projectsDisplay";


async function getProjects(){
    await connectDB();

    try {
        const projects = await Projects.find().sort({ name: 1 }).orFail();
        return projects;
    } catch (err) {
        return null;
    }
}

export default async function Home() {
    const projects = await getProjects();

    if (!projects) {
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
            <h1>Projects</h1>
            <div className="projects">
              {projects.map((project) => (
                <ProjectDisplay
                  key={project.slug}
                  name={project.name}
                  status={project.status}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  description={project.description}
                  features={project.features}
                  slug={project.slug}
                />
              ))}
            </div>
            <div className="More_Projects">
              <h3>More Projects Coming Soon!</h3>
            </div>
          </main>
  
          <footer className="footer">
            © 2024 Vishnu's Website | All Rights Reserved
          </footer>
        </div>
      </div>
    );
  }