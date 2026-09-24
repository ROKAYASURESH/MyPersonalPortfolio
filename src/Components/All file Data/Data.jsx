import ecomerce from "../images/1image.png";
import bootstrap from "../images/2image.png";
import portfolio from "../images/1portfolio.png";
import bootstrap2 from "../images/5image.png";
import Portfolio2 from "../images/5image1 (2).png";
import Hotel from "../images/9image.png";

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
  // {
  //   id: 6,
  //   Project: Hotel,
  //   Pheading: "Hotel",
  //   kind: "Website project",
  //   stack: "Frontend / Website layout",
  //   PParagraph:
  //     "A hotel website interface focused on presenting the property and its information clearly.",
  // },
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
  // {
  //   id: 3,
  //   Project: bootstrap,
  //   Pheading: "Bootstrap layout",
  //   kind: "Layout study",
  //   stack: "Bootstrap / HTML / CSS",
  //   PParagraph:
  //     "Another exploration of Bootstrap layouts, spacing, and reusable interface components.",
  // },
  // {
  //   id: 7,
  //   Project: Portfolio2,
  //   Pheading: "Library",
  //   kind: "Website project",
  //   stack: "Frontend / Website layout",
  //   PParagraph:
  //     "A library-themed website from my collection of frontend projects.",
  // },
];

export { PortfolioData };
