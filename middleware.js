import {NextResponse} from 'next/server'
export function  middleware(request) {

// if(request.nextUrl.pathname != '/login'){
//     console.log("request.nextUrl.pathname",request.nextUrl.pathname)
//     return NextResponse.redirect(new URL('/login',request.url))
// }

    // console.log("middleware running")
    // return NextResponse.json({success:"ok"})

    return NextResponse.redirect(new URL('/login',request.url))
    
}
//direction--- whre middleware run


export const config={
    matcher:["/userslist/:path*"]

}