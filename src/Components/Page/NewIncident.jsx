import React from "react";
import {useNavigate} from 'react-router-dom'
import { Container } from "../Common/Container";
import { Button } from "../Common/Button";
import { Heading } from "../Common/Next/Heading";
import { HTop } from "../Common/Next/HTop";
import { NewIncidentCard } from "../Dbl";
export const NewIncident=()=>{
    const usenavigate = useNavigate();
    const BacktoSterted=()=>{
        usenavigate('/Started')
    }

    const GotoInsidentDash=()=>{
        usenavigate('/IncidentDash')
    }
    return(
        <section>
            <div className="bg-Bhind pb-2">
                {/* nav */}
                <Container className='flex items-center justify-between'>
                    <button className="flex item-center justify-center gap-3 ">
                      <img  onClick={()=> BacktoSterted()}  className="w-[35px] md:w-[55px] shadow-md hover:shadow-Orange rounded-full "  src="src/assets/X.svg" alt="x" />
                      <div className="hidden md:block space-y-[13px]">
                        <HTop>Home - Incidents - New Incident</HTop>
                        <Heading>New Incident</Heading>
                      </div>
                    </button>
                    <div>
                        <img className="w-[0] lg:w-[400px] xl:w-[519px]  border border-slate-300 rounded-full" src="public/insident/bar.png" alt="" />
                    </div>
                    
                    <div className="space-x-[15px]">
                        
                        <Button className='bg-white border border-[#D4D4D8] '>
                            <button onClick={()=> BacktoSterted()} className="text-DarkBlack hover:text-white">Back</button>
                        </Button>
                        <Button>
                            <button onClick={()=> GotoInsidentDash()} >Next Step</button>
                        </Button>
                    </div>
                </Container>
            </div>
            {/* Card section */}
            <div>
                <Container>
                     <div className="grid justify-items-center gap-y-[25px]">
                         <div>
                        <Heading className=' text-[22px] mt-10'>Which of these best describes the incident?</Heading>
                       </div>
                         <div className="grid gcl-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4 ">
                            {
                                NewIncidentCard.map(({image,name},i)=>(
                                    <div key={i} className="flex item-center bg-[#F4F4F5] py-[22px] px-5 rounded-[6px] gap-2.5 hover:bg-Orange hover:text-white transition-colors duration-100 delay-100">
                                        <img className="" src={image} alt="Incident" />
                                        <p className='hovereffect text-[14px] font-Onset'>{name}</p>
                                    </div>
                                ))
                            }
                        </div>
                </div>
             </Container>
            </div>
        </section>
    )
}