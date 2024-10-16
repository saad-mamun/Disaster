import React from "react";
import { cn } from "../../Dbl";

export const Heading=({className,children,})=>{
    return(
    <h1 className={cn('font-bold  text-DarkBlack text-[26px] font-Onset',className)}>
        {children}
        </h1>
    )
}