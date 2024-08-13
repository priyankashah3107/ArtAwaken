import {connectToMongoDb} from '@/dbConfig/connectToDb'
import User from "@/models/userModels"
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { sendEmail } from '@/helpers/mailer'

connectToMongoDb()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {username, fullname, email, password} = reqBody;
        // checking for validation 
        console.log(reqBody)
          
        const user = await User.findOne({email})
        if(user) {
           return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        // Hashing the password
        const salt =  await bcrypt.genSalt(10);
        const hashPassword =  await bcrypt.hash(password, salt);
    

     const newUser =  new User({
            username,
            fullname, 
            email, 
            password: hashPassword
        })
        
       
      const savedUser =  await newUser.save()

       console.log(newUser)

       // send verification email

       await sendEmail({email, emailType: "VERIFY", userId: savedUser._id}) 
       
       return NextResponse.json({
           message: "User registered successfully",
           success: true, 
           savedUser
       })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}