import {NextResponse} from 'next/server'
export function GET(request,response){
    console.log(response.params.id)
    return NextResponse.json({id:response.params.id})



}