import React from "react";
import { Heading} from "./Next/Heading";
import { Search} from "./Next/Search";
import { Button } from "./Button";
import { DateModified } from "./DataModified";

export const Dashboard = ()=>{
    return(
    <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-1 md:gap-[14px]">
            <Search>
            <div className="flex items-center justify-center gap-x-[2px] md:gap-2">
                    <img src="public/NavImage/search.png" alt="search" />
                    <input className="hidden md:block outline-none border-none" type="search" placeholder="Search Incident"/>
                </div>
            </Search>
           <DateModified/>
        </div>
    </div>
    )
}