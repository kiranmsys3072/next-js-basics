import {NextResponse} from 'next/server'
export function GET(){



    return NextResponse.json({result:"Hello Backend Data "},{status:500})
}