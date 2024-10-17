import React from "react";
import { Container } from "../Common/Container";
import  {Heading} from "../Common/Next/Heading"
import { HTop } from "../Common/Next/HTop";
import { Button } from "../Common/Button";
import { StartedCard } from "../Dbl";
import { NewIncident } from "./NewIncident";
import { useNavigate } from "react-router-dom";
export const Started=()=>{
    const usenavigate = useNavigate();
    const gotoNewIncident =()=>{
        usenavigate('/NewIncident')
    }
    return(
       <section>
        <Container>
            <div className="flex flex-col items-center justify-center mt-3 md:mt-20">
                <Heading className='text-[14px] md:text-[32px]'>Let’s get started
                </Heading>
                <HTop className='text-base md:w-[468px] leading-[26px] mt-2'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</HTop>
                <img className="my-[20px] md:my-[33px] md:max-w-[601px]" src="src/assets/Progresbar.svg" alt="Get Started" />
                <div className="flex flex-col md:flex-row  justify-center items-center gap-y-3 md:gap-y-0 gap-[25px] lg:gap-[55px]">
                    {
                        StartedCard.map(({image,Headline,des},i)=>(
                            <div key={i} className="w-[235px] h-[269px] bg-[#F4F4F5] rounded-[10px] py-[25px] px-[20px] ">
                                <img src={image} alt="Disaster" />
                                <div className="pt-[50px] space-y-[22px]">
                                    <h1 className="text-[20p] font-bold font-Onset leading-[29px]">{Headline}</h1>
                                    <p className="text-[14px] leading-[22px] font-Onset">{des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="my-7 md:mt-[100px]">
                    <Button>
                        <button onClick={()=> gotoNewIncident()} className="flex gap-1">
                            <h1>Get</h1>
                            <h1>Started</h1>
                        </button>
                    </Button>
                </div>
            </div>
        </Container>
       </section>
    )
}