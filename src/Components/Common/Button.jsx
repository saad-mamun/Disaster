import React from "react";
import { cn } from "../Dbl";
export const Button=({className,children})=>{
    return(
        <button className={cn('cursor-pointer bg-Orange transition-colors duration-150 delay150 hover:bg-[#c65720] text-[#FAFAFA] text-[12px] font-bold font-Onset py-1.5  md:py-[14px] px-3 md:px-6 gap-[5px] rounded-[6px] ',className)}>
            {children}
        </button>
    )
}
