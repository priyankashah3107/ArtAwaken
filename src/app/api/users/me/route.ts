import {connectToMongoDb} from "@/dbConfig/connectToDb"
import { getDataFromToken } from "@/helpers/getDataFromToken"
import User from "@/models/userModels"
import {NextRequest, NextResponse} from 'next/server'

connectToMongoDb()

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request)
        if (!userId) {
            return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
        }
        const user = await User.findOne({_id: userId}).select("-password")
       
        if(!user) {
            return NextResponse.json("User not exists")
        }

       return NextResponse.json({
        message: "User found",
        data: user
       })
 
    } catch (error: any) {
        console.error("Error in me Route", error.message);
        return NextResponse.json({error: error.message}, {status: 500})
    }
}