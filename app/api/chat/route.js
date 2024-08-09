import { NextResponse } from "next/server";
import Groq from "groq-sdk";
const systemPrompt=''

const client= new Groq({apiKey:process.env.GROQ_API_KEY})

export async function POST(req){
    const data = await req.json();

    try{
        const response= await client.chat.completions.create(
            {messages:[{role:'system',content:systemPrompt},...data],    
            model: 'llama3-8b-8192',
            stream:false
        }
        )

        const responseText= response.choices[0]?.message?.content || 'No response found';

        return NextResponse.json({assistantMessage:responseText})
    }catch(err){
        return NextResponse.json({error:err.assistantMessage},{status:500})
    }

}