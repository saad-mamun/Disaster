import React from "react";
import { cn } from "../../Dbl";

export const HTop=({className,children,})=>{
    return(
    <h1 className={cn('text-Opas font-Onset text-[14px]',className)}>
        {children}
        </h1>
    )
}