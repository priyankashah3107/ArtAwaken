// import {connectToMongoDb} from "@/dbConfig/connectToDb"
// import {NextRequest, NextResponse} from 'next/server'

// connectToMongoDb()


// export async function POST(request: NextRequest) {

//     try {
        
//     const response = NextResponse.json({
//            message: "Logout Successfully",
//            success: true
//         })

//         response.cookies.set("token", "", {
//           httpOnly: true,
//           expires: new Date()
//         })
      
//         return response

//     } catch (error: any) {
//         console.error("Internal server error");
//         return NextResponse.json({error: error.message}, {status: 500})
//     }
// }


import { connectToMongoDb } from "@/dbConfig/connectToDb";
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDb();

export async function POST(request: NextRequest) {
    try {
        // Create the response object
        const response = NextResponse.json({
            message: "Logout Successfully",
            success: true
        });

        // Set the cookie with a past expiration date to effectively clear it
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Ensure secure flag is used in production
            sameSite: 'strict', // SameSite attribute for better security
            expires: new Date(0) // Set the expiration date to a past date to remove the cookie
        });

        return response;

    } catch (error: any) {
        console.error("Internal server error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
