import React from "react";
import { SearchIncident } from "./SearchIncident";
import { DateModified } from "./DataModified";
import { Button } from "./Button";

export const Dashboard = ()=>{
    return(
        <div className="flex justify-between items-center pt-5">
            <div className="space-y-[13px]">
                <p className="text-[12px] text-Opas font-Onset">Welcome back</p>
                <h1 className="text-DarkBlack font-bold font-Onset">Dashboard</h1>
            </div>
            <div className="flex items-center justify-center gap-[14px]">
            <SearchIncident/>
            <DateModified/>
            <Button/>
            </div>
        </div>
    )
}