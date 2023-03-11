import {FaChrome,FaAndroid,FaGratipay } from 'react-icons/fa/';

import  ecomerce  from "../images/1image.png";
import  bootstrap  from "../images/2image.png";
import  first  from "../images/3image.png";
import  portfolio  from "../images/4image.png";
import  bootstrap2  from "../images/5image.png";
import  CSS  from "../images/6image.png";
import  Portfolio2  from "../images/5image1 (2).png";
import  Hotel  from "../images/9image.png";
import {FaLink } from 'react-icons/fa/';

import Imag from '../images/1images.jpg';
import Ima from '../images/2images.jpg';
import kc from "../images/4images.jpg";
import Nikesh from "../images/nikesh.jpg"

// ...............................ABOUT PAGE.........................................
const tabcontent=[
    {
        title:"HTML",
        Percentages:"75%",
        width:"75%",
       
    },
    {
        title:"CSS",
        Percentages:"65%",
        width:"65%"
    },
    {
        title:"JAVASCRIPT",
        Percentages:"35%",
        width:"35%"

    },
    {
        title:"REACT JS",
        Percentages:"15%",
        width:"15%",
    },
    {
        title:"Designing",
        Percentages:"50%",
        width:"50%"

    },
    
]

// ............................SERVICE PAGE............................................
const ServiceData=[
    {
        id:1,
        icon:<FaChrome/>,
        heading:"Dev Design",
        paragraph:"Web design is the process of creating visually appealing and user-friendly websites and web applications that involves a combination of graphic design, user experience (UX) design, and technical skills. It requires the use of various tools such as HTML, CSS, JavaScript and design software to create the layout, visual appearance, and functionality of a website.",
        Button:"Learn More"
    },
    {
        id:2,
        icon:<FaGratipay/>,
        heading:"Graphic Design",
        paragraph:"Graphic design is the art and practice of creating visual content to communicate information and ideas to an audience. It involves the use of typography, imagery, and color to create designs that are both aesthetically pleasing and effective in conveying a message. Graphic designers use a variety of tools and techniques, including illustration, photography, and digital software such as Adobe Illustrator and Photoshop, to create their designs.",
        Button:"Learn More"

    },
    {
        id:3,
        icon:<FaAndroid/>,
        heading:"Android Develop",
        paragraph:"Android development is the process of creating mobile applications for the Android operating system. It involves using the Java or Kotlin programming languages and the Android software development kit (SDK) to create apps that can run on a wide range of devices, including smartphones and tablets. Android developers use a variety of tools and technologies to create and test their apps, such as Android Studio.",
        Button:"Learn More"

    }
]

// .....................................PORTFOLIO PAGE...............................
const PortfolioData=[
    {
        id:1,
        Project:ecomerce,
        Pheading:"Professional",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>,
        URL: "https://ismt.edu.np/"  
    },
    {
        id:2,
        Project: CSS ,
        Pheading:"Ecomerce",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>,
    },
    {
        id:3,
        Project:bootstrap,
        Pheading:"Bootstrap",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>,
    },
    {
        id:4,
        Project:bootstrap2 ,
        Pheading:"Bootstrap",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>,
    },
    {
        id:5,
        Project:first ,
        Pheading:"Hotel",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>
    }
    ,
    {
        id:5,
        Project:portfolio,
        Pheading:"Portfolio",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>

    },
    {
        id:5,
        Project:Portfolio2 ,
        Pheading:"Library",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>
    },
    {
        id:5,
        Project:Hotel ,
        Pheading:"Hotel",
        PParagraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Pincon:<FaLink/>
    }
]

// ...........................TEAM PAGE............................................
const teamdata=[
    {
        id:1,
        icon:kc,
        heading:"KSHITTIZ CHAUDARY",
        paragraph:"ANDROID DEVELOPER",
        Button:"More Detail",
        About:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.",
        MainSkill:"Main Skill",
        Experience:"Experience",
        Education:"Education",
        SEE:"Shree 🐎",
        Higher:" :abacus:",
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
        WorkExp:"No work Experence"
        
    },
    {
        id:2,
        icon:Imag,
        heading:"RAHUL KUMAR THAKUR",
        paragraph:"WEB DEVELOPER",
        Button:"More Detail",
        About:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.",
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
        WorkExp:"No work Experence",
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
        About:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.",
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
        About:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus, voluptatibus ut enim odit ipsum tempore rerum, quasi et itaque necessitatibus sunt? Ex iste odit, non officia unde itaque. Repellat.",
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