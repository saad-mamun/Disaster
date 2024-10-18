import React from "react";
import { useState } from "react";
import { Container } from "../Common/Container";
import { DashCards } from "../Dbl";
import { Dashboard } from "../Common/Dashboard";
import { Button } from "../Common/Button";
import { Heading } from "../Common/Next/Heading";
import {HTop} from '../Common/Next/HTop'

export const DashboardCard=()=>{
    const [status, setStatus] = useState(false)
    return(
        <section>
              <div className=" bg-Bhind">
                  <Container>
                    <div className="flex items-center justify-between">
                        <div className="space-y-1 lg:space-y-[13px]">
                            <HTop>
                                 Welcome back
                            </HTop>
                             <Heading >
                                Dashboard
                            </Heading>
                        </div>
                        <div className="flex gap-0 md:gap-3">
                        <Dashboard/>
                        <Button>
                        <button className="flex flex-nowrap gap-[5px]"><span>Cypher</span> Ai</button>
                    </Button>
                        </div>
                    </div>
                 </Container>
                </div>
            <Container>
                <div  className='flex  justify-center items-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 md:mt-4 gap-0 md:gap-6">
                    {
                    DashCards.map(({image,heading,location,price},i) =>(
                    <div key={i} className="shadow-sm hover:shadow-lg transition-all delay-200 duration-200 rounded-lg">
                        <img src={image} alt="Dashboard" />
                        <div className="space-y-[2px]  md:space-y-2 mt-2 md:mt-4 mb-4">
                             <h1 className="font-bold font-Opas text-DarkBlack
                                    ">{heading}</h1>
                            <p className="font-Onset text-[#71717A] text-[14px]">{location}</p>
                            <h2 className="font-bold font-Opas text-DarkBlack
                                    ">{price}</h2>
                        </div>
                    </div>
                       ))}
                 </div>
                </div>
                 <div>
                    <div className="m-2 flex justify-end">
                        {
                            status ?<div>
                                <div className="w-[331px]  bg-[#F4F4F5] rounded-[13px] flex flex-col gap-[15px]">

                                   <div className=" py-[25px]  px-[15px] bg-[#F26922] rounded-t-[13px]">
                                     <h1 className="font-bold text-[18px] font-Onset text-[#FAFAFA]">Chat with Cypher</h1>
                                   </div> 

                                   <div className="px-[15px]  ">
                                     <div className="flex justify-end">
                                     <p className="bg-[#3F3F46] w-[213px] text-white font-medium py-[15px] px-[13px] rounded-[7px]  text-[12px]">Lorem ipsum dolar sit general sac mascho werho</p>
                                     </div>
                                     <div className="space-y-[15px] pt-[15px]">
                                        <p className="bg-[#F4F4F5] border-2 w-[213px] text-[#71717A] text-[12px] py-[15px] px-[13px] rounded-[7px] font-medium leading-[19px]">Lorem ipsum dolar sit general sac mascho werho</p>
                                        <p className="bg-[#F4F4F5] border-2  w-[213px] text-[#71717A] text-[12px] py-[15px] px-[13px] rounded-[7px] font-medium leading-[19px]">Lorem ipsum dolar sit general sac mascho werho</p>
                                     </div>
                                   </div>

                                   <div className="flex justify-end px-[15px]">
                                     <p className="bg-[#3F3F46] w-[213px] text-white font-medium py-[15px] px-[13px] rounded-[7px]  text-[12px]">Lorem ipsum dolar sit general sac mascho werho</p>
                                     </div>
                                     <div className="px-[15px]">
                                        <p className="py-[12px] px-[10px] text-[12px] font-medium border-2">Enter your question...</p>
                                     </div>
                                     <div className="px-[15px] pb-2 flex justify-between items-center">
                                        <div className="flex gap-1">
                                            <img src="src/assets/message/camera.svg" alt="" />
                                            <img src="src/assets/message/image.svg" alt="" />
                                            <img src="src/assets/message/Link.svg" alt="" />
                                        </div>
                                        <button>
                                           <p className="bg-[#F26922] rounded-[25px] px-[25px] py-[6px] text-[12px] font-medium text-white">Send</p>
                                        </button>
                                     </div>
                                </div>
                            </div>:null
                        }
                    </div>
                    <div className="my-2 flex justify-end">
                    <button  onClick={()=> setStatus(!status)}>
                            <img src="src/assets/message.svg" alt="" />
                     </button>
                    </div>
                 </div>
            </Container>
        </section>
    )
}