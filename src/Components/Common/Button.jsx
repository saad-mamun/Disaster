import React from "react";
import { cn } from "../Dbl";
export const Button=({className,children})=>{
    return(
        <button className={cn('cursor-pointer bg-Orange text-[#FAFAFA] text-[12px] font-bold font-Onset py-[14px] px-6 gap-[5px] rounded-[6px] ',className)}>
            {children}
        </button>
    )
}
