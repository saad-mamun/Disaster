
import React from "react";
import { Container } from "./Container";
import { User } from "./User";
import { NavLink } from "react-router-dom";
export const Navbar=()=>{
    return(
       <nav className="bg-Bhind ">
         <Container>
            <div className="flex justify-between items-center  lg:gap-[60px] xl:gap-[120px]">
                <div>
                  <img src="public/NavImage/Logo_Main.png" alt="Disaster" />
                </div>
                <div className="hidden lg:flex items-center justify-center  font-Onset xl:gap-7 list-none lg:gap-4 gap-2 text-Opas cursor-pointer ">
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
            </div>
            <div className="pt-[6px] md:pt-2">
              <div className="h-[2px] w-full bg-[#3F3F46]/10"></div>
            </div>
         </Container>
       </nav>
    )
}