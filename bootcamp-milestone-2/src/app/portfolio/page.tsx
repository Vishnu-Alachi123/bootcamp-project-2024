import Image from "next/image";

export default function Home() {
    return (
      <div>
        <div className="content">
              <main>
              <h1>Projects</h1>
        <div className = "projects">
            
            <div className = "DailyGoal">
                <h3>DailyGoal</h3>
                <div className = "DailyGoal_Project_Status">
                    <h3>Status : In Development</h3>
                    <div className = "project_details">
                    <p>
                        <strong>DailyGoal</strong> is a productivity app using  <strong>React Native </strong>tailored for college students. The app helps users track goals, manage tasks, and stay on top of recurring activities or habits such as studying and exercising. It also allows users to set deadlines, plan tasks in advance, and set reminders. The goal is to provide a comprehensive tool for students to enhance their focus and productivity in their daily lives. The project is still <em> in development</em>, but it aims to be a go-to app for task management and personal growth.
                    </p>
                    </div>
                </div>
            </div>
            <div className = "Personal_Website">
                <h3>Personal Website</h3>
                <div className = "personal_website_Project_status">
                    <Image src = "/images/portfolio_img.png" alt="image of personal website" className = "website_image" width = {500} height={500}/>
                </div>
                <div className = "about_website">
                    <p>
                    I've built my website from the ground up using HTML and CSS. This site serves as a digital showcase of my journey in web development, featuring distinct pages including my portfolio, resume, and an about me section. Each page reflects my skills, experiences, and creative endeavors, offering visitors insight into who I am and what I do.

While the site is complete, it’s just the beginning! I am committed to continually improving it as I learn more about web development, with plans to enhance its functionality and aesthetics by adding new features. Join me as I explore the endless possibilities of the digital world!
                    </p>
                </div>
            </div>
        </div>
        <div className = "More_Projects">
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
  