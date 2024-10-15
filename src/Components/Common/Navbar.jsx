
import React from "react";
import { Container } from "./Container";
import { navItems } from "../Dbl";
import { User } from "./User";
import { Dashboard } from "./Dashboard";

export const Navbar=()=>{
    return(
       <nav className="bg-Bhind">
         <Container>
            <div className="flex justify-between items-center  lg:gap-[60px] xl:gap-[120px]">
                <div>
                  <img src="public/NavImage/Logo_Main.png" alt="Disaster" />
                </div>
                <div className="hidden  lg:flex justify-center items-center xl:gap-[22px] lg:gap-[15px] gap-2 cursor-pointer">
                  {
                    navItems.map(({link,label},i)=> (
                      <a key={i} href={link}>
                  <p className="text-sm lg:text-base text-Opas hover:text-DarkBlack hover:font-bold">{label}
                  </p>
                  </a>
                    ))}
                </div>
                <div>
                  <User/>
                </div>
            </div>
            <div className="pt-4">
              <div className="h-[2px] w-full bg-[#3F3F46]"></div>
            </div>
            <div>
              <Dashboard/>
            </div>
         </Container>
       </nav>
    )
}