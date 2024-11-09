import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}