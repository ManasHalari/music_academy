import dbConnect from "@/db/dbConnect";
import messageModel from "@/models/message";
import { NextRequest } from "next/server";


dbConnect()
export  async function POST(req:NextRequest){
    try {
        const { subject,message } = await req.json();
    
        if (subject.length==0 || message.length==0) {
            return Response.json({
                message:"All fields are mandatory"
            },{status:400})
        }
    
        const messageData=await messageModel.create({
            subject:subject,
            message:message
        })
    
        if(!messageData){
            return Response.json({
                message:"Message is not created"
            },{status:500})
        }
    
       return Response.json({
            message:"Message sent successfully",
            data:messageData
        },{status:201})
    } catch (error:any) {
        console.log("Catch part in message registration",error);
        
    }
}