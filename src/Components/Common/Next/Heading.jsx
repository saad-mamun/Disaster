import React from "react";
import { cn } from "../../Dbl";

export const Heading=({className,children,})=>{
    return(
    <div className={cn('',className)}>
        {children}
        </div>
    )
}