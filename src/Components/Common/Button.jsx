import React from "react";
import { cn } from "../Dbl";
export const Button=({className,children})=>{
    return(
        <button className={cn('bg-Orange text-[#FAFAFA] text-[12px] font-bold font-Onset leading-[15px] py-2 px-6 gap-[5px] rounded-[5px]',className)}>
            {children}
        </button>
    )
}
