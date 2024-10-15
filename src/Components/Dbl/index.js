
import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export const cn = (...inputs)=>twMerge(clsx(...inputs));




export const navItems =[
    {
        label:'Dashboard',
        link:'#'
    },
    {
        label:'Incidents',
        link:'#'
    },
    {
        label:'Locations',
        link:'#'
    },
    {
        label:'Activities',
        link:'#'
    },
    {
        label:'Documents',
        link:'#'
    },
    {
        label:'Cypher Ai',
        link:'#'
    },
];


export const DashCards =[
    {
        image:"public/Dashbord/w_smoke.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00",
    },
    {
        image:"public/Dashbord/w-people.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00",
    },
    {
        image:"public/Dashbord/Plain.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00",
    },
    {
        image:"public/Dashbord/fire.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00",
    },
    {
        image:"public/Dashbord/Earthquack.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00",
    },
]