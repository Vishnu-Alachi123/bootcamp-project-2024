import connectDB from "@/database/db";
import Projects from "@/database/projectschema";

async function getProjects(){
	await connectDB()

	try {
	    const blogs = await Projects.find().sort({ date: -1 }).orFail()
	    return blogs
	} catch (err) {
	    return null
	}
}

export default getProjects;