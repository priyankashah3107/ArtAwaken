import {connectToMongoDb} from "@/dbConfig/connectToDb"
import User from "@/models/userModels"
import {NextRequest, NextResponse} from 'next/server'

connectToMongoDb()


export async function POST(request : NextRequest) {
     try {
        const reqBody = await request.json()
        const {token} = reqBody;
        console.log("Token from verifyEmail:", token)

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}})

        if(!user) {
            return NextResponse.json({error: "Invalid User"}, {status: 400})
        }
        console.log("User from verifyEmail",user)

        user. isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined
         
        await user.save()

        return NextResponse.json({message: "Email verified successfully", success: true}, {status: 500})
     } catch (error: any) {
        console.error("Internal Server Error");
       return  NextResponse.json({error: error.message}, {status: 500},)

     }
}