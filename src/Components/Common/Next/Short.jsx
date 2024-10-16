import React from "react";
import { cn} from "../../Dbl";

export const Short=(className, children)=>{
    return(
        <button className={cn("py-3 px-2.5 space-x-[5px] bg-[#FAFAFA] rounded-[6px]",className)}>
        {children}
    </button>
    )
}