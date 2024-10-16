import React from "react"
import { cn } from "../../Dbl"
export const Search=({className,children})=>{
    return(
        <div className={cn("inline-flex justify-center items-center gap-[5px] px-2.5 py-3 bg-[#FAFAFA] text-Opas rounded-[6px]",className)}>
         {children}
        </div>
    )
}