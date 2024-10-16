
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
];

export const StartedCard =[
    {
        image:"public/insident/type.png",
        Headline:"What type of incident?",
        des:"Choose the category that best describes the incident.",
    },
    {
        image:"public/insident/about.png",
        Headline:"Tell us about the incident?",
        des:"Let’s connect the dots and see where to start.",
    },
    {
        image:"public/insident/location.png",
        Headline:"Where did the incident occur?",
        des:"Lorem ipsum dolar sit general sac mascho werho",
    },
]