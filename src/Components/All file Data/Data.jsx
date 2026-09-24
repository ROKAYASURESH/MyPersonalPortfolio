import {FaChrome,FaAndroid,FaGratipay } from 'react-icons/fa/';

import  ecomerce  from "../images/1image.png";
import  bootstrap  from "../images/2image.png";
import  portfolio  from "../images/4image.png";
import  bootstrap2  from "../images/5image.png";
import  Portfolio2  from "../images/5image1 (2).png";
import  Hotel  from "../images/9image.png";

import Imag from '../images/1images.jpg';
import Ima from '../images/2images.jpg';
import kc from "../images/4images.jpg";
import Nikesh from "../images/nikesh.jpg"

import responsive from "../images/respnsive.png"
import ecomerces from '../images/ecomerce.png'
import custom from "../images/custom.png"

// ...............................ABOUT PAGE.........................................
const tabcontent=[
    {
        title:"Django & Django REST Framework",
        Percentages:"90%",
        width:"90%",
       
    },
    {
        title:"React.js & Hooks",
        Percentages:"85%",
        width:"85%"
    },
    {
        title:"REST API Development",
        Percentages:"88%",
        width:"88%"

    },
    {
        title:"PostgreSQL & MySQL",
        Percentages:"82%",
        width:"82%",
    },
    {
        title:"JavaScript & TypeScript",
        Percentages:"85%",
        width:"85%"

    },
    {
        title:"Git & GitHub",
        Percentages:"90%",
        width:"90%"

    },
    
]

// ............................SERVICE PAGE............................................
const ServiceData=[
    {
        id:1,
        serv: responsive,
        icon:<FaChrome/>,
        heading:"Responsive website",
        // paragraph:"Web design is the process of creating visually appealing and user-friendly websites and web applications that involves a combination of graphic design, user experience (UX) design, and technical skills. It requires the use of various tools such as HTML, CSS, JavaScript and design software to create the layout, visual appearance, and functionality of a website.",
        paragraph:"Creating dynamic changes to the appearance of a website depending on the screen size and orientation",
        Button:"Learn More"
    },
    {
        id:2,
        icon:<FaGratipay/>,
        serv:ecomerces,
        // heading:"Graphic Design",
        heading:"Ecommerce website",
        // paragraph:"Graphic design is the art and practice of creating visual content to communicate information and ideas to an audience. It involves the use of typography, imagery, and color to create designs that are both aesthetically pleasing and effective in conveying a message. Graphic designers use a variety of tools and techniques, including illustration, photography, and digital software such as Adobe Illustrator and Photoshop, to create their designs.",
        paragraph:"Online storefronts for presenting products and helping customers find what they need.",
        Button:"Learn More"

    },
    {
        id:3,
        icon:<FaAndroid/>,
        serv:custom,
        // heading:"Android Develop",
        heading:"Custom website",

        // paragraph:"Android development is the process of creating mobile applications for the Android operating system. It involves using the Java or Kotlin programming languages and the Android software development kit (SDK) to create apps that can run on a wide range of devices, including smartphones and tablets. Android developers use a variety of tools and technologies to create and test their apps, such as Android Studio.",
        paragraph:"Websites built around your content, requirements, and day-to-day workflow.",

        Button:"Learn More"

    }
]

// .....................................PORTFOLIO PAGE...............................
const PortfolioData = [
    { id: 8, Pheading: 'Direct Sales Report', kind: 'Work project · Upveda', stack: 'Django REST Framework / React / Git', PParagraph: 'A system for managing sales data, reports, and analytics. I worked on the backend APIs and the React interface at Upveda Technology.', role: 'Full-Stack Developer', features: ['Authentication and secure access', 'Sales reporting and data processing APIs', 'Reusable React components'], focus: 'Connecting sales data and reporting services to the frontend while maintaining API performance and readable code.' },
    { id: 4, Project: bootstrap2, Pheading: 'Bootstrap', kind: 'Layout study', stack: 'Bootstrap / HTML / CSS', PParagraph: 'An early website layout exploring Bootstrap components and page structure.' },
    { id: 5, Project: portfolio, Pheading: 'Portfolio', kind: 'Personal website', stack: 'Frontend / Portfolio design', PParagraph: 'An earlier version of my portfolio, bringing my introduction, skills, and work into one place.' },
    { id: 6, Project: Hotel, Pheading: 'Hotel', kind: 'Website project', stack: 'Frontend / Website layout', PParagraph: 'A hotel website interface focused on presenting the property and its information clearly.' },
    { id: 1, Project: ecomerce, Pheading: 'Professional', kind: 'Website study', stack: 'Frontend / Page structure', PParagraph: 'A professional website layout from my earlier frontend work.', URL: 'https://ismt.edu.np/', linkLabel: 'Visit referenced website' },
    { id: 3, Project: bootstrap, Pheading: 'Bootstrap layout', kind: 'Layout study', stack: 'Bootstrap / HTML / CSS', PParagraph: 'Another exploration of Bootstrap layouts, spacing, and reusable interface components.' },
    { id: 7, Project: Portfolio2, Pheading: 'Library', kind: 'Website project', stack: 'Frontend / Website layout', PParagraph: 'A library-themed website from my collection of frontend projects.' },
];

// ...........................TEAM PAGE............................................
const teamdata=[
    {
        id:1,
        icon:kc,
        heading:"KSHITTIZ CHAUDARY",
        paragraph:"Mobile DEVELOPER",
        Button:"More Detail",
        About:"A collaborator from my developer network. See their skills and education below.",
        MainSkill:"Main Skill",
        Experience:"Experience",
        Education:"Education",
        SEE:"Amar Jyoti Secondary School",
        Higher:"Triton International Collage",
        Bachelor:"International School of Management & Technology, Kathmandu ",
        HTMLtitle:"HTML",
        HTMLpercentages:"90%",
        HTMLwidth:"80%",
        CSStitle:"CSS",
        CSSPercentages:"70%",
        CSSwidth:"60%",
        Fluttortitle:"Flutter",
        FluttorPercentages:"80%",
        Fluttorwidth:"70%",
        WorkExp:"No work Experence"
        
    },
    {
        id:2,
        icon:Imag,
        heading:"RAHUL KUMAR THAKUR",
        paragraph:"WEB DEVELOPER",
        Button:"More Detail",
        About:"A collaborator from my developer network. See their skills and education below.",
        MainSkill:"Main Skill",
        Experience:"Experience",
        Education:"Education",
        SEE:"Shree Siddhi Vinayak English Boarding School. Kalaiya, Bara",
        Higher:"Hetauda School of Management and Social Science, Hetauda",
        Bachelor:"International School of Management & Technology, Kathmandu ",
        HTMLtitle:"HTML",
        HTMLpercentages:"65%",
        HTMLwidth:"65%",
        CSStitle:"CSS",
        CSSPercentages:"50%",
        CSSwidth:"50%",
        Fluttortitle:"flutter",
        FluttorPercentages:"30%",
        Fluttorwidth:"30%",
        WorkExp:"work Experence",
        Linkedin:"https://www.linkedin.com/in/rahul-kumar-thakur-009226216/" ,
        message:"http://m.me/Devrahul2003",
        Whatsapp:"https://wa.me/9779821810341?text=Hi%20There!'"


    },
    {
        id:3,
        icon:Ima,
        heading:"BIGRAJ SUNUWAR",
        paragraph:"GRAPHIC DESIGNER",
        Button:"More Detail",
        About:"A collaborator from my developer network. See their skills and education below.",
        MainSkill:"Main Skill",
        Experience:"Experience",
        Education:"Education",
        SEE:" ❤️‍🔥 💟",
        Higher:" 🥇 🥇🥇🥇",
        Bachelor:"International School of Management & Technology, Kathmandu ",
        HTMLtitle:"HTML",
        HTMLpercentages:"50%",
        HTMLwidth:"50%",
        CSStitle:"CSS",
        CSSPercentages:"40%",
        CSSwidth:"40%",
        Fluttortitle:"Graphic Design",
        FluttorPercentages:"70%",
        Fluttorwidth:"70%",
        WorkExp:"work Experence in Graphic Design"

    },
   
    {
        id:4,
        icon:Nikesh,
        heading:"Nikesh Deula",
        paragraph:"Graphic Designar",
        Button:"More Detail",
        About:"A collaborator from my developer network. See their skills and education below.",
        MainSkill:"Main Skill",
        Experience:"Experience",
        Education:"Education",
        SEE:"Kathmadnu seconday",
        Higher:"CCRC college",
        Bachelor:"International School of Management & Technology, Kathmandu ",
        HTMLtitle:"HTML",
        HTMLpercentages:"80%",
        HTMLwidth:"80%",
        CSStitle:"CSS",
        CSSPercentages:"60%",
        CSSwidth:"60%",
        Fluttortitle:"Flutter",
        FluttorPercentages:"70%",
        Fluttorwidth:"70%",
        WorkExp:"work on Graphic Design"

    }
]


export  {tabcontent, PortfolioData, teamdata, ServiceData}