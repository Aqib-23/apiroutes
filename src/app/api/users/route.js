import {NextResponse} from 'next/server'
// import { user } from "../../utils/db";
// export function GET(request,response){
// const data = user;
// return NextResponse.json(data)
// }
export async function POST(request){
    let payload = await request.json();
     console.log(payload)
     if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"not dound",success:'false'})
     }
    return NextResponse.json({result:"new user added" , success:'true'})
}