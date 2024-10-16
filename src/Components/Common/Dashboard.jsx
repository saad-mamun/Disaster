import React from "react";
import { Heading} from "./Next/Heading";
import { Search} from "./Next/Search";
import { Button } from "./Button";
import { DateModified } from "./DataModified";

export const Dashboard = ()=>{
    return(
    <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-center gap-[14px]">
            <Search>
            <div className="flex items-center justify-center gap-2">
                    <img src="public/NavImage/search.png" alt="search" />
                    <input className="outline-none border-none" type="search" value='Search incident' />
                </div>
            </Search>
           <DateModified/>
        </div>
    </div>
    )
}