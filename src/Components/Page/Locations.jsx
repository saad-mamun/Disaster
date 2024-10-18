import React from "react";
import { Container } from "../Common/Container";
import {Button} from '../Common/Button';
import {Heading} from '../Common/Next/Heading';
import {HTop} from '../Common/Next/HTop';
import { Dashboard } from "../Common/Dashboard";
import { useNavigate } from "react-router-dom";
import { LocationCards } from "../Dbl";
import { LocationActive } from "../Dbl";
import { DocumentcardInLocatin } from "../Dbl";
export const Locations=()=>{
    return(
        <section>
            <div className="bg-Bhind md:pb-4 pb-2">
                {/* nav section */}
            <Container>
                <div className="">
                    <div className="flex flex-row justify-between items-center">
                        <div className="space-y-2 md:space-y-[13px]">
                        <HTop className='hidden md:block'>Incidents - DR-4699 March 2023 Severe Storms </HTop>
                        <div className="flex items-center gap-[15px]">
                            <img src="public/Location/tree.svg" alt="Locations" />
                            <Heading className='hidden md:block'>DR-4699 March 2023 Severe Storms</Heading>
                          </div>
                        </div>
                        <div className="flex gap-[13px]">
                          <div className="hidden xl:flex">
                           <Dashboard/>
                          </div>
                           <div>
                           <Button>
                            <button className="flex gap-2">
                                <img src="src/assets/plus.svg" alt="" />
                                <div>New<span> Location</span></div>
                             </button>
                           </Button>
                           </div>
                        </div>
                    </div>
                </div>
            </Container>
            </div>
            {/* card section of Locations*/}
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 md:gap-10 lg:gap-[95px] mt-2 lg:mt-8">
                    {/* Left column */}
                <div>
                    <div  className="space-y-2 md:space-y-[25px] lg:space-y-[45px]">
                         <div className="flex items-center gap-[10px] md:gap-[15px]">
                            <div>
                                <img src="public/Location/blackLocation.png" alt="" />
                            </div>
                            <div>
                                <HTop>Location</HTop>
                                <Heading className='text-[16px] md:text-[20px]'>Tulare County,  Los Angles, CA 23415</Heading>
                            </div>
                         </div> 
                      
                         <div className="flex items-center gap-[10px] md:gap-[15px]">
                            <div>
                                <img src="public/Location/Camere.png" alt="" />
                            </div>
                            <div>
                                <HTop>Approx. Cost:</HTop>
                                <Heading className='text-[16px] md:text-[20px]'>$60,607,456.00</Heading>
                            </div>
                         </div>
                          <div className="bg-[#E4E4E7] w-full border"></div>
                    </div>
                    {/* Description */}
                    <div className="mt-2 md:mt-5 lg:mt-10">
                        <div className="space-y-1 md:space-y-[10px] lg:space-y-[15px]">
                        <HTop className='text-DarkBlack font-bold'>Description</HTop>
                        <HTop>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto minima amet maxime tenetur? Sed ratione natus ducimus adipisci enim beatae consectetur blanditiis accusantium deleniti, nesciunt ipsa, eaque, reiciendis repellat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, tempore!</HTop>
                        </div>
                        <div className="bg-[#E4E4E7] w-full border mt-3 md:mt-6 lg:mt-10"></div>
                    </div>
                    {/* location card */}
                    <div className="mt-3 md:mt-6 lg:mt-10">
                        <div className="flex justify-between items-center mb-1 md:mb-[10px] lg:mb-[15px]">
                        <HTop className='font-bold text-DarkBlack'>Locations</HTop>
                        <HTop className='border-b border-b-slate-500'>See all</HTop>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full">
                            {
                                LocationCards.map(({image,title,desc,price},i)=>(
                                    <div key={i} className=" p-2 w-[215px] hover:shadow-lg rounded-lg">
                                        <img src={image} alt="Location" />
                                        <div className="py-2">
                                            <HTop className='text-DarkBlack font-bold'>{title}</HTop>
                                            <HTop>{desc}</HTop>
                                            <HTop className='text-DarkBlack font-bold'>{price}</HTop>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="bg-[#E4E4E7] w-full border md:mt-4 lg:mt-8 mb-2 md:mb-5 lg:mb-10"></div>
                    </div>
                    {/* Active section */}
                    <div >
                        <div className="flex items-center justify-between pb-2">
                            <h1 className="font-bold text-DarkBlack">Activities</h1>
                            <HTop className='text-DarkBlack border-b border-slate-500'>See all</HTop>
                        </div>
                        <div className="space-y-2.5">
                        {
                            LocationActive.map(({image,title,desc,price},i)=>(
                                <div key={i} className="w-full bg-[#F4F4F5] flex gap-2.5 py-[15px] px-2.5 rounded-[10px] hover:shadow-md" >
                                    <div>
                                        <img className="size-[78px]" src={image} alt="Location" />
                                    </div>
                                    <div className="">
                                        <Heading className='text-base font-bold ' >{title}</Heading>
                                        <HTop>{desc}</HTop>
                                        <Heading className='text-base font-bold'>{price}</Heading>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                        <div className="bg-[#E4E4E7] w-full border mt-3 md:mt-6 lg:mt-10"></div>
                    </div>
                    {/* Document section */}
                    <div >
                        <div className="flex items-center justify-between mt-2 md:mt-5 lg:mt-10 pb-2">
                            <h1 className="font-bold text-DarkBlack">Documents</h1>
                            <HTop className='text-DarkBlack border-b border-slate-500'>See all</HTop>
                        </div>
                        <div className="space-y-2.5">
                        {
                            DocumentcardInLocatin.map(({image,title,desc,price},i)=>(
                                <div key={i} className="w-full bg-[#F4F4F5] flex gap-2.5 py-[15px] px-2.5 rounded-[10px] hover:shadow-md" >
                                    <div>
                                        <img className="size-[78px]" src={image} alt="Location" />
                                    </div>
                                    <div className="">
                                        <Heading className='text-base font-bold ' >{title}</Heading>
                                        <HTop>{desc}</HTop>
                                        <Heading className='text-base font-bold'>{price}</Heading>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                        <div className="bg-[#E4E4E7] w-full border mt-3 md:mt-6 lg:mt-10"></div>
                    </div>
                 </div>

                    {/* Right column */}
                    <div className="space-y-2 lg:space-y-5 mb-3">
                        <HTop>Incident Map</HTop>
                        <img src="public/Location/Locatinimage2.png" alt="" />
                        <HTop>Start 19.1232, -118.233     End 19.3245, -119.2323</HTop>
                    </div>
                </div>
            </Container>
        </section>
    )
}