import React from "react";

export const User=()=>{
    return(
        <div>
            <div className="flex justify-center items-center gap-2">
                <img src="public/NavImage/Notificarion.png" alt="Notification" />
                <img src="public/NavImage/User.png" alt="User-Image" />
                <div>
                    <h1 className="font-semibold font-Onset  text-[#A1A1AA]">Usman Zafar</h1>
                    <p className="text-[#A1A1AA] font-Onset text-[14px]">usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
