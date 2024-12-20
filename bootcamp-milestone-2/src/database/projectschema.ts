import mongoose, { Schema } from "mongoose";

type Project = {
	name: string;
    status: string;
	description: string;
    features: string;
	image: string;
	imageAlt: string;
  slug: string; 

};

// mongoose schema 
const projectSchema = new Schema<Project>({
    name: { type: String, required: true },
    status: { type: String, required: true, enum: ["In Development", "Completed", "Paused"] },
    description: { type: String, required: true },
    features: { type: String, required: true }, 
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    slug: { type: String, required: true }
		
})

// defining the collection and model
const Projects = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

	

export default Projects;