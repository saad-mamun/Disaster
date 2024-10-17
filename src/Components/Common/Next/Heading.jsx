import React from "react";
import { cn } from "../../Dbl";

export const Heading=({className,children,})=>{
    return(
    <h1 className={cn('font-bold  text-DarkBlack lg:text-[26px] md:text-[22px] text-xl font-Onset',className)}>
        {children}
        </h1>
    )
}