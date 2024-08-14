import {connectToMongoDb} from "@/dbConfig/connectToDb"
import User from "@/models/userModels"
import {NextRequest, NextResponse} from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
connectToMongoDb()

export async function POST(request: NextRequest) {
    
    try {
         const reqBody = await request.json()
         const {email, password} = reqBody;

         // cheking the is email is exist in the db  
          
         const user = await User.findOne({email})

         if(!user) {
            return NextResponse.json({message: "Invalid Email"}, {status: 404})
         }
        
         const isPasswordMatched = await bcrypt.compare(password, user.password) 

         if(!isPasswordMatched) {
            return NextResponse.json({message: "Invalid Password"}, {status: 401})
         }
         
         // other user ko authenticate kr do 

        //  return NextResponse.json({message: "Login Successfully"}, {status: 200})

        // making a token and passes the payload(data on it) 

        const tokenData = {
            id: user._id,
            // username: user.username,
            // email: user.email
            // usually to id hi bejhte payload mei bcz jitna data bhejenge utna bandwidth ka bill aata hai.
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '30d'})
         
        const response = NextResponse.json({message: "Logged In Success", success: true}, {status: 200})

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set secure flag in production
            sameSite: 'strict', // Adjust as needed
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        });

        return response;
    } catch (error: any) {
         console.error("Internal server error");
         return NextResponse.json({error: error.message}, {status: 500})
    }
}