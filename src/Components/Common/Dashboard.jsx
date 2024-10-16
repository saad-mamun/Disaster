import React from "react";
import { Heading} from "./Next/Heading";
import { Search} from "./Next/Search";
import { Button } from "./Button";
import { DateModified } from "./DataModified";

export const Dashboard = ()=>{
    return(
    <div className="flex justify-between items-center">
            <Heading>
                <div className="space-y-[6px]">
                    <p className="text-Opas font-Onset text-[14px]">Welcome back</p>
                    <h1 className="font-bold  text-DarkBlack text-[26px] font-Onset">Dashboard</h1>
                </div>
            </Heading>
        <div className="flex items-center justify-center gap-[14px]">
            <Search>
            <div className="flex items-center justify-center gap-2">
                    <img src="public/NavImage/search.png" alt="search" />
                    <input className="outline-none border-none" type="search" value='Search incident' />
                </div>

            </Search>
           <DateModified/>
            <Button>
                <button>
                Cypher AI
                </button>
            </Button>
        </div>
    </div>
    )
}