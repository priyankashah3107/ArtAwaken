// import {connectToMongoDb} from '@/dbConfig/connectToDb'
// import User from "@/models/userModels"
// import { NextRequest, NextResponse } from 'next/server'
// import bcrypt from 'bcrypt'
// import { sendEmail } from '@/helpers/mailer'

// connectToMongoDb()

// export async function POST(request: NextRequest) {
//     try {
//         const reqBody = await request.json();
//         const {username, fullname, email, password} = reqBody;
//         // checking for validation 
//         console.log(reqBody)
          
//         const user = await User.findOne({email})
//         if(user) {
//            return NextResponse.json({error: "User already exists"}, {status: 400})
//         }
//         // Hashing the password
//         const salt =  await bcrypt.genSalt(10);
//         const hashPassword =  await bcrypt.hash(password, salt);
    

//      const newUser =  new User({
//             username,
//             fullname, 
//             email, 
//             password: hashPassword
//         })
        
       
//       const savedUser =  await newUser.save()

//        console.log(newUser)

//        // send verification email

//        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id}) 
       
//        return NextResponse.json({
//            message: "User registered successfully",
//            success: true, 
//            savedUser
//        })

//     } catch (error: any) {
//         return NextResponse.json({error: error.message}, {status: 500})
//     }
// }


import { connectToMongoDb } from '@/dbConfig/connectToDb';
import User from '@/models/userModels';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { sendEmail } from '@/helpers/mailer';

connectToMongoDb();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, fullname, email, password } = reqBody;

    // Validate the request body
    if (!username || typeof username !== 'string' || username.trim().length < 3) {
      return NextResponse.json({ error: "Invalid username" }, { status: 400 });
    }
    if (!fullname || typeof fullname !== 'string' || fullname.trim().length < 3) {
      return NextResponse.json({ error: "Invalid fullname" }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    if (!password || typeof password !== 'string' || password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters long" }, { status: 400 });
    }

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      fullname,
      email,
      password: hashPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send verification email
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
