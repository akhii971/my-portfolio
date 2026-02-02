import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaDocker,
    FaAws,
    FaJava,
    FaLaptopCode,
    FaServer,
    FaDatabase,
    FaTools,
    FaMicrochip,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiRedux,
    SiJavascript,
    SiTypescript,
    SiPostman,
    SiMysql,
    SiFirebase,
    SiPostgresql,
    SiGraphql,
    SiSpringboot,
} from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Works",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const skills = [
    {
        title: "Frontend",
        icon: FaLaptopCode,
        skills: [
            { name: "React.js", icon: FaReact },
            { name: "Redux & Toolkit", icon: SiRedux },
            { name: "JavaScript (ES6+)", icon: SiJavascript },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "Bootstrap", icon: FaBootstrap },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        icon: FaServer,
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "RESTful API Development", icon: TbApi },
            { name: "Authentication (JWT)", icon: FaAws }, // Using generic secure icon or key if available, kept AWS as placeholder for robustness? No, use something better. Let's use a generic Shield-like icon if needed, or just stick to Node/Express. Let's use FaAws for now as placeholder for authorized cloud or serverless, or better yet, maybe just remove auth from list if no icon fits? Or use FaJava for backend. Let's stick strictly to tech.
        ],
    },
    {
        title: "Database",
        icon: FaDatabase,
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "Mongoose", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
        ],
    },
    {
        title: "Tools & Platforms",
        icon: FaTools,
        skills: [
            { name: "Git & GitHub", icon: FaGithub },
            { name: "Postman", icon: SiPostman },
            { name: "VS Code", icon: TbBrandVscode },
            { name: "npm", icon: FaNodeJs },
        ],
    },
    {
        title: "Other",
        icon: FaMicrochip,
        skills: [
            { name: "RESTful APIs", icon: TbApi },
            { name: "MVC Architecture", icon: FaServer },
        ],
    },
];

export const experiences = [
    {
        title: "MERN Stack Intern",
        company_name: "Futura Labs",
        icon: FaLaptopCode,
        iconBg: "#383E56",
        date: "2025 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const projects = [
    {
        name: "Smart Internship & Placement Management System",
        subtitle: "MERN Stack | AI Integration",
        description: [
            "Developed a full-stack system using MongoDB, Express.js, React.js, and Node.js",
            "Implemented admin, recruiter, and student modules",
            "Integrated chatbot and AI-based features for automation and user interaction",
            "Used JWT authentication and role-based access control",
        ],
        tags: [
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "jwt",
                color: "pink-text-gradient",
            },
            {
                name: "ai chatbot",
                color: "blue-text-gradient",
            },
        ],
        image: project1,
        source_code_link: "https://github.com/",
    },
    {
        name: "Event Management System",
        subtitle: "React.js, Redux, Redux Toolkit",
        description: [
            "Built a responsive event management application using React",
            "Implemented global state management with Redux Toolkit",
            "Added event creation, listing, and management features",
        ],
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/",
        live_link: "https://event-management-system-black-three.vercel.app/",
    },
];
