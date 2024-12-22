
import { NextRequest, NextResponse } from 'next/server'
import projectSchema from "@/database/projectschema"
import connectDB from '@/database/db'




export async function GET(req: NextRequest, { params }: {params: Promise<{slug: string }> }) {
    await connectDB()
		const slug = (await params ).slug

	   try {
	        const blog = await projectSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.' ,{ status: 404 })
	    }
}
