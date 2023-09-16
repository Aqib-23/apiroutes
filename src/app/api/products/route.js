import {connectionSrt} from '@/lib/db'
import mongoose from 'mongoose'
import {NextResponse} from 'next/server'
export async function GET(){
    //2
   await mongoose.connect(connectionSrt)
    
    
    //1
    return NextResponse.json({result:true})
}