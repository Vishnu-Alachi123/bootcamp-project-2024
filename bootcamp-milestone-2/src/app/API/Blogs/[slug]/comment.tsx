import connectDB from "@/database/db";





export async function POST(req: NextRequest) {

	await connectDB();
	
	const body = await req.json();
	const BlogSlug = 
	// validate body
	if (body not valid) {
		return some error
	}
	
	// push comment object to document
	Blog.update(...)
}