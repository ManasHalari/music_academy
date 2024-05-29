/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client"
import { Meteors } from "@/components/ui/meteors";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";



function page() {
  const [user,setUser]=useState({
    subject:"",
    message:""
  })
  
  const [disablesButton,setDisablesButton]=useState(true);
  
  const [loading,setLoading]=useState(false);
  
  useEffect(()=>{
      if( user.subject.length>0 && user.message.length>0){
          setDisablesButton(false);
  
      }else{
        setDisablesButton(true)
      }
  },[user])
  
  const onSendingMessage= async function (){
    setLoading(true);
    try {
      const response=await axios.post("/api/message",user)
      console.log(response);
      toast.success("Message send successfully")
      
    } catch (error:any) {
      toast.error(error.message)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-800 py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">{loading ? "Processing" : "Contact  Us"}</h1>

        <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >We are Here to help you if any questions arises just let us know we will assist you in your musical journey.</p>
        <div className="flex justify-center items-center mt-4 sm:mt-6 lg:mt-8">
        <input
        type="text"
        name="subject"
        className="w-[50vw] h-[10vh] bg-black rounded-lg text-neutral-300"
        placeholder="Enter Your Subject"
        value={user.subject}
        onChange={(e) => setUser({...user, subject: e.target.value})}
        />
        </div>
        <div className="flex justify-center items-center mt-4 sm:mt-6 lg:mt-8">
        <textarea
        name="message"
        className="w-[50vw] h-[30vh] bg-black rounded-lg text-neutral-300"
        placeholder="Enter Your Message"
        value={user.message}
        onChange={(e) => setUser({...user, message: e.target.value})}
        />
        </div>
        <div className='flex justify-center items-center mt-4 sm:mt-6 lg:mt-8 '>
                <Link href={"/courses"}>
                <button
        className="p-4 bg-green-500 text-white rounded-md mb-2 focus:outline-none"
        onClick={onSendingMessage}
      >
        {disablesButton ? "Don't send Message" : "Send Message"}
      </button>
                </Link>
            </div>
        <Meteors number={30} />
    </div>
    
  )
}

export default page