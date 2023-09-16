import {NextResponse} from 'next/server'
import {user} from '@/app/utils/db'
export function GET(request,response){
console.log(response.params.userid)
const data = user;
const userdata = data.filter((item)=>item.id==response.params.userid)
return NextResponse.json(userdata.length==0?{result:"data not found"}:{result:userdata[0]})
}
export async function PUT(request , content){
   let payload = await request.json();
   payload.id = content.params.id;
   console.log(payload)
   if(!payload.id || !payload.name || !payload.age || !payload.email){
    return NextResponse.json({result:"request data is not valid" , success:false}, {status:400})
   }
   return NextResponse.json({result:payload , success:true},{status:200})
}
export function DELETE(request , content){
   let id = content.params.userid;
   if(id){
      return NextResponse.json({result:"user deleted successfully"},{status:201})
   }
   else{
      return NextResponse.json({result:"user does not valid"},{status:400})
   }
}