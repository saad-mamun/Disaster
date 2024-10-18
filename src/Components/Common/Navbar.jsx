
import React from "react";
import { Container } from "./Container";
import { User } from "./User";
import { NavLink } from "react-router-dom";
export const Navbar=()=>{
    return(
       <nav className="bg-Bhind ">
         <Container>
            <nav className="flex justify-between items-center  lg:gap-[60px] xl:gap-[120px]">
                <div>
                  <img  className="w-[70px] sm:w-[90px] md:w-[110px] lg:w-[131px]" src="public/NavImage/Logo_Main.png" alt="Disaster" />
                </div>
                <div  className="flex items-center justify-center  font-Onset xl:gap-7 list-none lg:gap-4 sm:gap-2 gap-[6px] text-Opas md:text-base sm:text-[13px] text-[10px]  cursor-pointer ">
                    <li><NavLink to="/" >Dashboard</NavLink></li>
                    <li><NavLink to="/Incidents">Incidents</NavLink></li>
                    <li><NavLink to='/Locations'>Locations</NavLink></li>
                    <li>Activities</li>
                    <li>Documents</li>
                    <li>Cypher Ai</li>
                </div>

                <div>
                  <User/>
                </div>
            </nav>
            <div className="pt-[6px] md:pt-2">
              <div className="h-[2px] w-full bg-[#3F3F46]/10"></div>
            </div>
         </Container>
       </nav>
    )
}