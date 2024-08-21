// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     const path = request.nextUrl.pathname

//     const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' 
//       || path === '/verifyemail' || path === '/buynow' || path === '/checkout'

//       const token = request.cookies.get("token")?.value || ''

//       if(isPublicPath && token) {
//         return NextResponse.redirect(new URL('/', request.url))
//       }

//        if(!isPublicPath && !token) {
//         return NextResponse.redirect(new URL('/', request.url))
//        }
  
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     '/',
//     '/pages/login',
//     '/pages/signup',
//     '/pages/buynow',
//     '/pages/checkout',
//     '/pages/art',
//     '/pages/digital',
//     '/pages/fashion',
//     '/pages/painting',
//     '/pages/photography',
//     '/pages/portraits',
//     '/pages/scluptures',
//     '/pages/verifyemail',
    
//   ],
// }


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware function
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Paths that are always public
  const isPublicPath = path === '/pages/login' || path === '/pages/signup' || path === '/pages/verifyemail';

  // Paths that require authentication
  const requiresAuth = path === '/pages/buynow' || path === '/pages/checkout';

  const token = request.cookies.get("token")?.value || '';

  // If the user is authenticated and trying to access a public path, redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If the user is not authenticated and trying to access a protected path, redirect to login
  if (requiresAuth && !token) {
    return NextResponse.redirect(new URL('/pages/login', request.url));
  }

      //    if(!isPublicPath && !token) {
      //   return NextResponse.redirect(new URL('/', request.url))
      //  }
   
  // if(!requiresAuth && !token) {
  //   return NextResponse.redirect(new URL('/pages/login', request.url));
  // }

  // If the user is authenticated and accessing a protected path, allow access
  if (requiresAuth && token) {
    return NextResponse.next();
  }

  // Allow access to public paths or authenticated users to protected paths
  return NextResponse.next();
}

// Middleware config
export const config = {
  matcher: [
    '/',
    '/pages/login',
    '/pages/signup',
    '/pages/buynow',
    '/pages/checkout',
    '/pages/art',
    '/pages/digital',
    '/pages/fashion',
    '/pages/painting',
    '/pages/photography',
    '/pages/portraits',
    '/pages/scluptures',
    '/pages/verifyemail',
  ],
}
