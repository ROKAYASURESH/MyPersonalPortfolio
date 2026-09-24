import { FaChrome, FaAndroid, FaGratipay } from "react-icons/fa/";

import ecomerce from "../images/1image.png";
import bootstrap from "../images/2image.png";
import portfolio from "../images/4image.png";
import bootstrap2 from "../images/5image.png";
import Portfolio2 from "../images/5image1 (2).png";
import Hotel from "../images/9image.png";

import Imag from "../images/1images.jpg";
import Ima from "../images/2images.jpg";
import kc from "../images/4images.jpg";
import Nikesh from "../images/nikesh.jpg";

import responsive from "../images/respnsive.png";
import ecomerces from "../images/ecomerce.png";
import custom from "../images/custom.png";

const ServiceData = [
  {
    id: 1,
    serv: responsive,
    icon: <FaChrome />,
    heading: "Responsive website",

    paragraph:
      "Creating dynamic changes to the appearance of a website depending on the screen size and orientation",
    Button: "Learn More",
  },
  {
    id: 2,
    icon: <FaGratipay />,
    serv: ecomerces,

    heading: "Ecommerce website",

    paragraph:
      "Online storefronts for presenting products and helping customers find what they need.",
    Button: "Learn More",
  },
  {
    id: 3,
    icon: <FaAndroid />,
    serv: custom,

    heading: "Custom website",

    paragraph:
      "Websites built around your content, requirements, and day-to-day workflow.",

    Button: "Learn More",
  },
];

const PortfolioData = [
  {
    id: 8,
    Pheading: "Direct Sales Report",
    kind: "Work project · Upveda",
    stack: "Django REST Framework / React / Git",
    PParagraph:
      "A system for managing sales data, reports, and analytics. I worked on the backend APIs and the React interface at Upveda Technology.",
    role: "Full-Stack Developer",
    features: [
      "Authentication and secure access",
      "Sales reporting and data processing APIs",
      "Reusable React components",
    ],
    focus:
      "Connecting sales data and reporting services to the frontend while maintaining API performance and readable code.",
  },
  {
    id: 4,
    Project: bootstrap2,
    Pheading: "Bootstrap",
    kind: "Layout study",
    stack: "Bootstrap / HTML / CSS",
    PParagraph:
      "An early website layout exploring Bootstrap components and page structure.",
  },
  {
    id: 5,
    Project: portfolio,
    Pheading: "Portfolio",
    kind: "Personal website",
    stack: "Frontend / Portfolio design",
    PParagraph:
      "An earlier version of my portfolio, bringing my introduction, skills, and work into one place.",
  },
  {
    id: 6,
    Project: Hotel,
    Pheading: "Hotel",
    kind: "Website project",
    stack: "Frontend / Website layout",
    PParagraph:
      "A hotel website interface focused on presenting the property and its information clearly.",
  },
  {
    id: 1,
    Project: ecomerce,
    Pheading: "Professional",
    kind: "Website study",
    stack: "Frontend / Page structure",
    PParagraph: "A professional website layout from my earlier frontend work.",
    URL: "https://ismt.edu.np/",
    linkLabel: "Visit referenced website",
  },
  {
    id: 3,
    Project: bootstrap,
    Pheading: "Bootstrap layout",
    kind: "Layout study",
    stack: "Bootstrap / HTML / CSS",
    PParagraph:
      "Another exploration of Bootstrap layouts, spacing, and reusable interface components.",
  },
  {
    id: 7,
    Project: Portfolio2,
    Pheading: "Library",
    kind: "Website project",
    stack: "Frontend / Website layout",
    PParagraph:
      "A library-themed website from my collection of frontend projects.",
  },
];

const teamdata = [
  {
    id: 1,
    icon: kc,
    heading: "KSHITTIZ CHAUDARY",
    paragraph: "Mobile DEVELOPER",
    Button: "More Detail",
    About:
      "A collaborator from my developer network. See their skills and education below.",
    MainSkill: "Main Skill",
    Experience: "Experience",
    Education: "Education",
    SEE: "Amar Jyoti Secondary School",
    Higher: "Triton International Collage",
    Bachelor: "International School of Management & Technology, Kathmandu ",
    HTMLtitle: "HTML",

    CSStitle: "CSS",

    Fluttortitle: "Flutter",

    WorkExp: "No work Experence",
  },
  {
    id: 2,
    icon: Imag,
    heading: "RAHUL KUMAR THAKUR",
    paragraph: "WEB DEVELOPER",
    Button: "More Detail",
    About:
      "A collaborator from my developer network. See their skills and education below.",
    MainSkill: "Main Skill",
    Experience: "Experience",
    Education: "Education",
    SEE: "Shree Siddhi Vinayak English Boarding School. Kalaiya, Bara",
    Higher: "Hetauda School of Management and Social Science, Hetauda",
    Bachelor: "International School of Management & Technology, Kathmandu ",
    HTMLtitle: "HTML",

    CSStitle: "CSS",

    Fluttortitle: "flutter",

    WorkExp: "work Experence",
    Linkedin: "https://www.linkedin.com/in/rahul-kumar-thakur-009226216/",
    message: "http://m.me/Devrahul2003",
    Whatsapp: "https://wa.me/9779821810341?text=Hi%20There!'",
  },
  {
    id: 3,
    icon: Ima,
    heading: "BIGRAJ SUNUWAR",
    paragraph: "GRAPHIC DESIGNER",
    Button: "More Detail",
    About:
      "A collaborator from my developer network. See their skills and education below.",
    MainSkill: "Main Skill",
    Experience: "Experience",
    Education: "Education",
    SEE: " ❤️‍🔥 💟",
    Higher: " 🥇 🥇🥇🥇",
    Bachelor: "International School of Management & Technology, Kathmandu ",
    HTMLtitle: "HTML",

    CSStitle: "CSS",

    Fluttortitle: "Graphic Design",

    WorkExp: "work Experence in Graphic Design",
  },

  {
    id: 4,
    icon: Nikesh,
    heading: "Nikesh Deula",
    paragraph: "Graphic Designar",
    Button: "More Detail",
    About:
      "A collaborator from my developer network. See their skills and education below.",
    MainSkill: "Main Skill",
    Experience: "Experience",
    Education: "Education",
    SEE: "Kathmadnu seconday",
    Higher: "CCRC college",
    Bachelor: "International School of Management & Technology, Kathmandu ",
    HTMLtitle: "HTML",

    CSStitle: "CSS",

    Fluttortitle: "Flutter",

    WorkExp: "work on Graphic Design",
  },
];

export { PortfolioData, teamdata, ServiceData };
