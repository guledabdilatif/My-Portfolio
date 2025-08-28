import assetTrackingSystem from "../../Assets/web/asset-mngt.png";
import rs from "../../Assets/web/real_state.png";
import awardinterior from "../../Assets/web/awardinterior.png";


// Web Links
var assetTrackingLink = "https://dev-asset.konza.go.ke/";
var awardinteriorLink = "https://awardinterior.vercel.app/";

export const WebsitesDetails = [
  {
    id: 1,
    webname: "Asset Tracking & Management System",
    webimage: assetTrackingSystem,
    weblink: assetTrackingLink,
    link: true,
    overview: "A robust and scalable system designed to streamline asset tracking, issuance, and reporting while ensuring compliance with the National Treasury's standards.",
    problem: "The existing asset management system was non-compliant with the National Treasury’s template, lacked support, and posed auditing challenges. Additionally, manual asset issuance and weak tracking created inefficiencies and data inaccuracies.",
    solution: "Developed a modern, fully compliant asset tracking and management system with digital asset issuance workflows, bulk import/export functionality, document uploads, and an analytics dashboard for real-time insights.",
  role: "Frontend Developer & UI/UX Designer. I was responsible for creating user-friendly interfaces in React, designing the system’s layout and workflows, and ensuring compliance-driven usability. I collaborated with the backend team to integrate APIs and focused on accessibility, responsive design, and interactive dashboards.",
    technologies: "React, Django, Tailwind CSS, REST API, Git,",
    impact: "The system improved asset compliance, reduced manual processes, and enhanced reporting accuracy. It simplified audits, enabled quick asset searches, and provided real-time dashboards, significantly boosting efficiency for the ICT department.",
    collaboration: "Worked closely with the ICT department to gather requirements, collaborated with peers for UI/UX feedback, and provided training to ensure smooth adoption. Communication was maintained through weekly reviews and agile sprints.",
    learning: "Gained deeper expertise in system compliance design, Active Directory integration, and building scalable dashboards. Learned to balance technical requirements with regulatory compliance. Next time, I would focus on earlier user testing to refine workflows faster."
  }
  ,
  {
    id: 2,
    webname: "Real Estate Mobile App",
    webimage: rs,
    // weblink: realEstateAppLink,
    link: false,
    github: "https://github.com/guledabdilatif/statewise-abdiladif.git",
    overview: "A mobile application built to simplify property discovery and agent interaction by providing a digital alternative to physical property searches.",
    problem: "Most property seekers relied on physical visits or unstructured online listings, which made the process time-consuming and inefficient. There was no centralized, user-friendly solution to browse properties and directly connect with agents.",
    solution: "Developed a mobile application where users can register, log in, and browse property listings. Each property includes detailed metadata, gallery, and agent information such as email and phone contacts for easy communication.",
    role: "Full-stack developer. I handled both the frontend (React Native) and backend (Laravel with Sanctum for authentication). I implemented user registration/login, property browsing, and integrated an API to serve property details and agent contacts. Being a personal project, I independently managed design, development, and testing.",
    technologies: "React Native, Laravel, Laravel Sanctum, MySQL, REST API, Expo",
    impact: "Provided a digital-first solution for property browsing and agent contact, reducing reliance on physical approaches. The app demonstrated my capability in full-stack mobile development and helped me strengthen my portfolio with a real-world solution.",
    collaboration: "Independent project. However, I collected feedback from peers and potential users to refine the app's design and usability.",
    learning: "Improved skills in mobile app development using React Native, API integration, and secure authentication with Laravel Sanctum. Learned how to structure scalable backend APIs for mobile use."
  },
  {
    id: 3,
    webname: "Awaad Interior",
    webimage: awardinterior,
    weblink: awardinteriorLink,
    link: true,
    overview: "A interior design shop page highlighting branding, galleries, and customer engagement through design.",
    problem: "Many local businesses lack a strong digital presence, limiting their ability to attract new customers.",
    solution: "Built a modern landing page for a interior design brand with clear navigation, visuals, and call-to-action elements.",
    role: "Front-end developer & designer. Created the UI and deployed the site.",
    technologies: "React, CSS, JavaScript, Netlify",
    impact: "Showcased how small businesses can stand out online. Helped me demonstrate branding and visual storytelling in web design.",
    collaboration: "Individual project with design feedback from colleagues.",
    learning: "Learned how to balance aesthetics with usability and sharpened branding-focused design skills."
  },
 
];
