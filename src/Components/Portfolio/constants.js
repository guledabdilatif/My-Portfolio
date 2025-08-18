import coffee from "../../Assets/web/portfolio1.png";
import TourandTravelWebsite from "../../Assets/web/portfolio2.png";
import FoodWebsite from "../../Assets/web/portfolio3.png";
import FacebookUI from "../../Assets/web/facebookClone-UI.png";
import portfolio from "../../Assets/web/portfolio.png";
import YouTubeUI from "../../Assets/web/YoutubeClone-UI.png";
import rashco from "../../Assets/web/rashco.png";
import youngbuck from "../../Assets/web/ybv.png";
import { IoIosLink } from "react-icons/io";

// Web Links
var coffeeLink = "https://caffeine-site.netlify.app";
var TourandTravelWebsiteLink = "https://travel-travel-site.netlify.app";
var FoodWebsiteLink = "https://refreshment.netlify.app";
var YouTubeLink = "https://youtubeclone-ui.netlify.app/";
var facebookLink = "https://superb-clafoutis-65679d.netlify.app/";
var rashcolink = "https://rashcoltd.com/";
var youngbucklink = "https://youngbucks.co.ke/";
var portfoliolink = "https://abdiladif-mohamud.netlify.app/";

export const WebsitesDetails = [
  {
    id: 1,
    webname: "Portfolio",
    webimage: portfolio,
    weblink: portfoliolink,
    overview: "A personal portfolio website designed to showcase my skills, projects, and services in a professional and modern way.",
    problem: "I needed a central online presence to demonstrate my work to potential clients and employers.",
    solution: "Developed a responsive and interactive portfolio website with smooth animations, light/dark mode, and clear project showcases.",
    role: "Full-stack developer & designer. Handled everything from design in Figma, coding with React, to deployment on Netlify.",
    technologies: "React, Tailwind CSS, AOS, React Router, Netlify",
    impact: "Helped me attract freelance opportunities and created a strong digital identity. Received positive client feedback on design clarity.",
    collaboration: "Independent project, but I gathered feedback from mentors and peers for improvements.",
    learning: "Learned advanced React Router usage, SEO optimization for React, and improved UI/UX design principles."
  },
  {
    id: 2,
    webname: "Facebook Clone UI",
    webimage: FacebookUI,
    weblink: facebookLink,
    overview: "A front-end clone of the Facebook interface built to practice UI development and responsive design.",
    problem: "Needed a way to sharpen my React skills by replicating a real-world, complex UI design.",
    solution: "Recreated Facebook’s UI using React components, ensuring responsiveness and modern design consistency.",
    role: "UI Developer. Focused on breaking down the Facebook UI into reusable React components with CSS styling.",
    technologies: "React, CSS Flexbox/Grid, Netlify",
    impact: "Improved my ability to replicate large-scale user interfaces. Demonstrated capability in modern front-end practices.",
    collaboration: "Independent project, but reviewed by peers for layout accuracy.",
    learning: "Learned how to modularize UI into reusable components and strengthen responsive design workflow."
  },
  {
    id: 3,
    webname: "Coffee Website",
    webimage: coffee,
    weblink: coffeeLink,
    overview: "A coffee shop landing page highlighting branding, menu, and customer engagement through design.",
    problem: "Many local businesses lack a strong digital presence, limiting their ability to attract new customers.",
    solution: "Built a modern landing page for a coffee brand with clear navigation, visuals, and call-to-action elements.",
    role: "Front-end developer & designer. Created the UI and deployed the site.",
    technologies: "HTML, CSS, JavaScript, Netlify",
    impact: "Showcased how small businesses can stand out online. Helped me demonstrate branding and visual storytelling in web design.",
    collaboration: "Individual project with design feedback from colleagues.",
    learning: "Learned how to balance aesthetics with usability and sharpened branding-focused design skills."
  },
  // later we’ll add Tour & Travel, Food, Rashco, YouTube, Young Bucks...
];
