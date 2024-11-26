import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";



export const navItems = [
    {label:'Features', href:'#'},
    {label:'Workflow', href:'#'},
    {label:'Pricing', href:'#'},
    {label:'Testimonials', href:'#'}
];

export const features = [
    {
        icon: <BotMessageSquare />,
        text: 'Drag-and-Drop Interface',
        description: 'Easily design and arrange your VR environments with a user friendly drag-and-drop interface'
    },
    {
        icon: <BatteryCharging />,
        text: 'Real-time Preview',
        description: 'Preview your VR application in real time as you make changes allowing for quick iterations and adjustments'
    },
    {
        icon: <Fingerprint />,
        text: 'Multi-Platform Compatibility',
        description: 'Build VR applications that run seamlessly across multiple platforms including mobile, desktop, and VR headsets'
    },
    {
        icon: <ShieldHalf />,
        text: 'Built-in Templates',
        description: 'Jump start your VR projects with a variety of built-in templates for different types of application and environments'
    },
    {
        icon: <PlugZap />,
        text: 'Collaboration Tools',
        description: 'Easily design and arrange your VR environments with a user friendly drag-and-drop interface'
    },
    {
        icon: <GlobeLock />,
        text: 'Analytics Dashboard',
        description: 'Work together in real-time on VR projects enabling seamless collaboration and idea sharing'
    }
    
]

export const checklistItems = [
    {
        title: 'Code merge made easy',
        description: 'Traack the performance of your VR apps and gain insight into user behavior.'
    },
    {
        title: 'Review code without worry',
        description: 'Traack the performance of your VR apps and gain insight into user behavior.'
    },
    {
        title: 'AI assistance to reduce time',
        description: 'Traack the performance of your VR apps and gain insight into user behavior.'
    },
    {
        title: 'Share work in minutes',
        description: 'Traack the performance of your VR apps and gain insight into user behavior.'
    },
]

export const pricingOptions = [
    {
        title: 'Free',
        price: '$0',
        features: [
           'Private board sharing',
           '5 Gb Storage',
           'Web Analytics',
           'Private Mode'
        ]
    },
    {
        title: 'Pro',
        price: '$10',
        features: [
           'Private board sharing',
           '10 Gb Storage',
           'Web Analytics (Advance)',
           'Private Mode'
        ]
    },
    {
        title: 'Free',
        price: '$0',
        features: [
           'Private board sharing',
           '5 Gb Storage',
           'Web Analytics',
           'Private Mode'
        ]
    }
]

import user1 from '../assets/bigShoe2.jpg';
import user2 from '../assets/blackShoe.jpg';
import user3 from '../assets/blueshoe.jpg';
import user4 from '../assets/converse.jpg';
import user5 from '../assets/niceshoe.jpg';
import user6 from '../assets/shoe9.jpg';

export const testimonials = [
    {
        user: 'John Doe',
        company: 'Stellar Solutions',
        image: user1,
        text: 'I am extremely satisfied with the services provided, the team  was reponsive, professional, and delivered results beyond my espectations.'
    },
    {
        user: 'Jane Smith',
        company: 'Blue Horizon Technologies',
        image: user2,
        text: 'I am extremely satisfied with the services provided, the team  was reponsive, professional, and delivered results beyond my espectations.'
    },
    {
        user: 'David Johnson',
        company: 'Quantum Innovation',
        image: user3,
        text: 'I am extremely satisfied with the services provided, the team  was reponsive, professional, and delivered results beyond my espectations.'
    },
    {
        user: 'Ronee Brown',
        company: 'Fusion Dynamics',
        image: user4,
        text: 'I am extremely satisfied with the services provided, the team  was reponsive, professional, and delivered results beyond my espectations.'
    },
    {
        user: 'Michael Wilson',
        company: 'Visionary Creation',
        image: user5,
        text: 'I am extremely satisfied with the services provided, the team  was reponsive, professional, and delivered results beyond my espectations.'
    },
    {
        user: 'Emily Davies',
        company: 'Synergy Systems',
        image: user6,
        text: 'I am extremely satisfied with the services provided, the team  was reponsive, professional, and delivered results beyond my espectations.'
    }
]

export const resourseLinks = [
    {href:'#', text:'Getting Started'},
    {href:'#', text:'Documentations'},
    {href:'#', text:'Tutorials'},
    {href:'#', text:'API References'},
    {href:'#', text:'Community Forums'}
]

export const platformLinks = [
    {href:'#', text:'Features'},
    {href:'#', text:'Supported Devices'},
    {href:'#', text:'System Requirements'},
    {href:'#', text:'Downloads'},
    {href:'#', text:'Release Notes'}
]

export const communityLinks = [
    {href:'#', text:'Events'},
    {href:'#', text:'Meetups'},
    {href:'#', text:'Conferences'},
    {href:'#', text:'Hackathons'},
    {href:'#', text:'Jobs'}
]