import { NextResponse } from "next/server";

export  async function GET(request , content){
    let studentdetails = content.params.student;
    console.log(studentdetails)
return NextResponse.json({result:studentdetails},{status:201})
}