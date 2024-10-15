
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
]