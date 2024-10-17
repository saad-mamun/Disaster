import React from "react";
import {useNavigate} from 'react-router-dom'
import { Container } from "../Common/Container";
import { Button } from "../Common/Button";
import { Heading } from "../Common/Next/Heading";
import { HTop } from "../Common/Next/HTop";
import { IncidentDash } from "./IncidentDash";

export const MapDisaster=()=>{
    const pagination = useNavigate();
    const gobackIncidentDash=()=>{
        pagination('/IncidentDash')
    }
    const finished =()=>{
        alert("We have found your location. Our rescue team will reach you soon, till then try to stay safe.")
    }
    return(
        <section>
            <div className="bg-Bhind pb-2">
                {/* nav */}
                <Container className='flex items-center justify-between'>
                    <button className="flex item-center justify-center gap-3 ">
                      <img onClick={()=> gobackIncidentDash()}   className="w-[35px] md:w-[55px]"  src="src/assets/X.svg" alt="x" />
                      <div className="hidden md:block space-y-[13px]">
                        <HTop>Home - Incidents - New Incident</HTop>
                        <Heading>New Incident</Heading>
                      </div>
                    </button>
                    <div>
                        <img className="w-[0] lg:w-[400px] xl:w-[519px]  border border-slate-300 rounded-full" src="public/insident/bar.png" alt="" />
                    </div>
                    
                    <div className="space-x-[15px]">
                        
                        <Button className='bg-white border border-[#D4D4D8]'>
                            <button onClick={()=> gobackIncidentDash()} className="text-DarkBlack">Back</button>
                        </Button>
                        <Button>
                            <button onClick={()=>finished()} >Finished</button>
                        </Button>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <div className="xl:pl-[250px] lg:pl-[200px] md:pl-[150px] sm:pl-[100px] md:pt-[50px] sm:pt-8 pt-4">
                        <Heading>Where’s the incident?</Heading>
                        <HTop className='md:max-w-[558px]'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</HTop>
                        <img className="mt-3 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[570px] xl:w-[750px]" src="public/Location/Map.png" alt="Map" />
                    </div>
                </Container>
            </div>
        </section>
    )
}