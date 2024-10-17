import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Container } from '../Common/Container';
import { DashCards } from '../Dbl';
import { Button } from '../Common/Button';
import { Dashboard } from '../Common/Dashboard';
import { DateModified } from '../Common/DataModified';
import { Heading } from '../Common/Next/Heading';
import { HTop } from '../Common/Next/HTop';
export const Incidents=()=>{
    const navigate = useNavigate();

    const gotoPage = ()=>{
        navigate('/Started')
    }
    return(
        <section>
              <div className="w-full bg-Bhind">
                  <Container>
                    <div className='flex justify-between items-center'>
                    <div className='space-y-0 md:space-y-[13px]'>
                        <HTop>
                        Home - Incidents
                        </HTop>
                        <Heading>
                        Incidents
                        </Heading>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                    <Dashboard/>
                    <Button>
                        <button onClick={()=> gotoPage()} className='flex justify-center items-center gap-2'>
                            <img src="src/assets/plus.svg" alt="New Incident" />
                            <p className='flex gap-[5px] md:gap-2'>New<span> Incident</span></p>
                        </button>
                    </Button>
                    </div>
                    </div>
                 </Container>
                </div>
            <Container className='flex  justify-center items-center'>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 md:gap-6 mt-4">
                    {
                    DashCards.map(({image,heading,location,price},i) =>(
                    <div key={i}>
                        <img src={image} alt="Dashboard" />
                        <div className="space-y-[2px] md:space-y-2 mt-2 md:mt- mb-4 md:mb-5">
                             <h1 className="font-bold font-Opas text-DarkBlack
                                    ">{heading}</h1>
                            <p className="font-Onset text-[#71717A] text-[14px]">{location}</p>
                            <h2 className="font-bold font-Opas text-DarkBlack
                                    ">{price}</h2>
                        </div>
                    </div>
                       ))}
                 </div>
            </Container>
        </section>
    )
}