
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

export const NewIncidentCard =[
    {
        image:"public/insident/Avalanche.png",
        name:"Avalanche",
    },
    {
        image:"public/insident/Biological.png",
        name:"Biological",
    },
    {
        image:"public/insident/Blizzard.png",
        name:"Blizzard",
    },
    {
        image:"public/insident/ColdFreezing.png",
        name:"Cold/Freezing",
    },
    {
        image:"public/insident/Drought.png",
        name:"Drought",
    },
    {
        image:"public/insident/Earthquake.png",
        name:"Earthquake",
    },
    {
        image:"public/insident/Flooding.png",
        name:"Flooding",
    },
    {
        image:"public/insident/Heat_Wave.png",
        name:"Heat Wave",
    },
    {
        image:"public/insident/Hail.png",
        name:"Hail",
    },
    {
        image:"public/insident/Lightning.png",
        name:"Lightning",
    },
    {
        image:"public/insident/Man_Made.png",
        name:"Man Made",
    },
    {
        image:"public/insident/Mudslide.png",
        name:"Mudslide",
    },
    {
        image:"public/insident/Severe_Storm.png",
        name:"Severe Storm",
    },
    {
        image:"public/insident/Strong_Wind.png",
        name:"Strong Wind",
    },
    {
        image:"public/insident/Tornado.png",
        name:"Tornado",
    },
    {
        image:"public/insident/Tsunami.png",
        name:"Tsunami",
    },
    {
        image:"public/insident/Volcanic_Eruption.png",
        name:"Volcanic Eruption",
    },
    {
        image:"public/insident/Wildfire.png",
        name:"Wildfire",
    },
];


export const LocationCards=[
    {
        image:"public/Location/red1.png",
        title:"Whitechapel Rd.",
        desc:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
    },
    {
        image:"public/Location/Night.png",
        title:"Whitechapel Rd.",
        desc:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
    },
    {
        image:"public/Location/red1.png",
        title:"Whitechapel Rd.",
        desc:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
    },
    {
        image:"public/Location/red1.png",
        title:"Whitechapel Rd.",
        desc:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
    },

]