import connectDB from "@/database/db";
import { NextRequest, NextResponse } from 'next/server';
import Projects from "@/database/projectschema";




export async function POST(req: NextRequest) {

    try {
        
        await connectDB();

        const url = new URL(req.url);
        const projectSlug = url.pathname.split("/").pop();
        const body = await req.json();
    
        // Validate request body
        if (!body.user || !body.comment) {
          return NextResponse.json({ error: "User and comment are required" }, { status: 400 });
        }
    
        const newComment = {
          user: body.user,
          comment: body.comment,
          time: new Date(),
        };
    

        const updatedProject = await Projects.findOneAndUpdate(
          { slug: projectSlug },
          { $push: { comment: newComment } },
          { new: true } 
        );
    
        if (!updatedProject) {
          return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }
    
        return NextResponse.json(updatedProject, { status: 200 });
      } catch (error) {
        console.error("Error adding comment:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
      }
    }