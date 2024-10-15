import React from "react";

export const SearchIncident=()=>{
    return(
        <div className="inline-flex justify-center items-center gap-[5px] px-2.5 py-3 bg-[#FAFAFA] text-Opas rounded-[6px]">
           <img src="public/NavImage/search.png" alt="Incident" />
           <input type="search" value="search" name="search" className="border-hidden outline-none"/>
        </div>
    )
}