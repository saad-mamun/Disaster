import React from "react";

export const User=()=>{
    return(
        <div>
            <div className="flex justify-center items-center gap-[6px] md:gap-2">
                <img className="rounded-full shadow-sm hover:shadow-Orange transition-colors duration-200 delay-200" src="public/NavImage/Notificarion.png" alt="Notification" />
                <img className="rounded-full shadow-sm hover:shadow-Orange transition-colors duration-200 delay-200" src="public/NavImage/User.png" alt="User-Image" />
                <div className="hidden lg:block">
                    <h1 className="font-semibold font-Onset  text-[#A1A1AA]">Usman Zafar</h1>
                    <p className="text-[#A1A1AA] font-Onset text-[14px]">usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
