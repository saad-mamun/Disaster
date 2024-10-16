import React from "react";
import { cn } from "../Dbl";
export const Container=({className, children})=>{
    return(
        <div className={cn("w-full max-w-screen-xl mx-auto pt-2 px-2.5", className)}>
            {children}
        </div>
    )
}
