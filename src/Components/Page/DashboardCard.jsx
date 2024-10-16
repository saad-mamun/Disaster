import React from "react";
import { Container } from "../Common/Container";
import { DashCards } from "../Dbl";
import { Dashboard } from "../Common/Dashboard";
export const DashboardCard=()=>{
    return(
        <section>
              <div className="w-full bg-Bhind">
                  <Container>
                    <Dashboard/>
                 </Container>
                </div>
            <Container className='flex  justify-center items-center'>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px]">
                    {
                    DashCards.map(({image,heading,location,price},i) =>(
                    <div key={i}>
                        <img src={image} alt="Dashboard" />
                        <div className="space-y-2 mt-5 mb-5">
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