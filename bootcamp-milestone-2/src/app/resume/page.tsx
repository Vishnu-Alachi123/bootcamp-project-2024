import Link from "next/link";

export default function Home() {
    return (
      <div>
        <div className="content">
              <main>  

        <section className="section">
          <a className="portfolio" href="/portfolio">
            <div className="Portfolio">
              <h2>Projects</h2>
              <ul className="portfolio">
                <li>
                  <strong>DailyGoal</strong>: <strong>DailyGoal</strong> is a <strong>React Native</strong> app that helps college students track goals, manage tasks, and monitor habits with deadlines, reminders, and planning tools for productivity.
                </li>
                <li>
                  <strong>Personal Website</strong>: I built my website from the ground up using <strong>HTML and CSS</strong>, showcasing my skills and creativity through pages like my <strong>portfolio, resume, and about me</strong>, marking a significant milestone in my web development journey.
                </li>
              </ul>
            </div>
          </a>
        </section>

        <section className="section">
          <a className="Education" href="https://www.calpoly.edu/major/software-engineering" target="_blank" rel="noopener noreferrer">
            <div className="education">
              <h2>Education</h2>
              <p>
                <strong>California Polytechnic State University, San Luis Obispo (Cal Poly)</strong>
              </p>
              <p>Bachelor of Science Degree in <strong>Software Engineering</strong></p>
              <p><strong>Current GPA</strong>: <strong>3.4</strong></p>
            </div>
          </a>
        </section>

        <section className="section">
          <div className="skills">
            <h2>Skills</h2>
            <p>Programming Languages: Java, Python, JavaScript, CSS, HTML, React Native</p>
          </div>
        </section>

        <section className="section">
          <div className="coursework">
            <h2>CourseWork</h2>
            <ul>
              <li>Fundamentals of Computer Science</li>
              <li>Introduction to Computing</li>
              <li>Data Structures</li>
              <li>Project-Based Object-Oriented Programming and Design</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="experience">
            <h2>Experience</h2>
            <ul>
              <li>
                <h4>Software Development Intern</h4>
                <h5>Exalture</h5>
                <ul>
                  <li>Worked in department for code debugging and code refactoring for anti-collision software for satellites.</li>
                  <li>Assisted in coding for machine language aspect of satellite project.</li>
                  <li>Lead seminar talking about importance of code efficiency and code organization.</li>
                </ul>
              </li>
              <li>
                <h4>Head of Social Media Outreach</h4>
                <h5>Theruvoram NGO</h5>
                <ul>
                  <li>Designed Blog Webpage for Non-Profit Organization.</li>
                  <li>Wrote biweekly blog posts and managed social media.</li>
                  <li>Edited and posted community awareness videos.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
              </main>
  
              <footer className="footer">
                  © 2024 Vishnu's Website | All Rights Reserved
              </footer>
      </div>
    </div>
    );
  }
  