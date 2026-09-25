import ecomerce from "../images/1image.png";
import portfolio from "../images/1portfolio.png";
import bootstrap2 from "../images/5image.png";

const PortfolioData = [
  {
    id: 8,
    Pheading: "Direct Sales Report",
    kind: "Work project · Upveda",
    stack: "Django REST Framework / React / Git",
    PParagraph:
      "A sales data and reporting system built at Upveda Technology, where I worked as a full-stack developer on Django REST Framework APIs, authentication, reporting logic, and the React interface for internal users.",
    role: "Full-Stack Developer",
    features: [
      "Authentication and secure access for internal users",
      "Sales reporting and data processing REST APIs with Django REST Framework",
      "Reusable React components for reporting dashboards and data views",
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
      "An early responsive website layout where I explored Bootstrap components, grid structure, and reusable page sections.",
  },
  {
    id: 5,
    Project: portfolio,
    Pheading: "Portfolio",
    kind: "Personal website",
    stack: "Frontend / Portfolio design",
    PParagraph:
      "An earlier version of my personal portfolio, bringing my introduction, skills, and selected work into one responsive page.",
  },
  {
    id: 1,
    Project: ecomerce,
    Pheading: "Professional",
    kind: "Website study",
    stack: "Frontend / Page structure",
    PParagraph:
      "A clean, professional website layout from my earlier frontend work, focused on page structure, spacing, and readability.",
    URL: "https://ismt.edu.np/",
    linkLabel: "Visit referenced website",
  },
];

export { PortfolioData };
