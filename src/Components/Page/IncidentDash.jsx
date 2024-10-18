import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Common/Button";
import { Heading } from "../Common/Next/Heading";
import { HTop } from "../Common/Next/HTop";
import { Container } from "../Common/Container";
import { MapDisaster } from "./MapDisaster";
export const IncidentDash=()=>{
    const usenavigate = useNavigate();
    const BackNewIncident=()=>{
        usenavigate('/NewIncident')
    };

    const NextMapDisaster=()=>{
        usenavigate('/MapDisaster')
    }
    return(
        <section>
                <div className="bg-Bhind pb-2 w-full">
                {/* nav */}
                <Container className='flex items-center justify-between'>
                    <div className="flex item-center justify-center gap-3 ">
                      <img  onClick={()=> BackNewIncident()}  className="w-[35px] md:w-[55px] shadow-md hover:shadow-Orange rounded-full"  src="src/assets/X.svg" alt="x" />
                      <div className="hidden md:block space-y-[13px]">
                        <HTop>Home - Incidents - New Incident</HTop>
                        <Heading>New Incident</Heading>
                      </div>
                    </div>
                    <div>
                        <img className="w-[0] lg:w-[400px] xl:w-[519px]  border border-slate-300 rounded-full" src="public/insident/bar.png" alt="" />
                    </div>
                    
                    <div className="space-x-[15px]">
                        
                        <Button className='bg-white border border-[#D4D4D8]'>
                            <button onClick={()=> BackNewIncident()} className="text-DarkBlack">Back</button>
                        </Button>
                        <Button>
                            <button onClick={()=> NextMapDisaster()} >Next Step</button>
                        </Button>
                    </div>
                </Container>
            </div>
            <div >
                <Container>
                    <div  className="flex flex-col items-start gap-[25px]  xl:pl-[250px] lg:pl-[200px] md:pl-[150px] pt-3 md:pt-[50px] md:w-[752px]">
                      <div>
                       <form>
                        <Heading>Let’s give the incident a title?</Heading>
                        <HTop>Make a title that will easily identify the incidents</HTop>
                         <input className="bg-[#F4F4F5] w-full mt-4 py-3 px-2.5 rounded-[10px] border outline-none hover:border-Orange shadow-md hover:shadow-lg transition-colors duration-150 delay-125" type="text"  placeholder="Add title here"/>
                       </form>
                     </div>
                     <div>
                       <form>
                        <Heading className='w-[300px] md:w-full'>Describe what happened during the incident?</Heading>
                        <HTop  className='w-[300px] md:w-full'>Share some information about the incident. The when, where, how. </HTop>
                         <textarea className="bg-[#F4F4F5] p-3 text-Opas mt-4 shadow-md outline-none hover:shadow-lg border rounded-[10px] hover:border-Orange transition-colors delay-200 duration-200" rows="4" cols='40' placeholder="Type here">
                          
                         </textarea>
                       </form>
                      </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}