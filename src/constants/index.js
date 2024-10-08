import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Experienced web developer specializing in efficient web applications and ERPs. Skilled in scalable solutions using modern technologies. Committed to high-quality results and effective teamwork.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies and creating new existing projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: " Full Stack Developer",
    company: "Finobase Global solutions",
    description: `Worked with Finobase Global Solutions to design and implement a comprehensive ERP solution for Aerofright Logistics
    and Trading Company in Qatar, featuring modules for Accounts, Finance, Sales and Purchase, Warehouse Management,
    CRM, Inventory Management, Asset Management, and Business Intelligence, enhancing and modernizing operations
    across various business functions.`,
    technologies: [
      "Javascript",
      "React.js",
      "Node.js",
      "MySql",
      "MaterialUI",
      
    ],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Creative Panda solutions",
    description: `Demonstrated expertise in developing scalable and user-centric applications, as evidenced by StaffSync (HRM app) and Costa (e-commerce platform). These projects showcase proficiency in leveraging modern technologies for impactful solutions`,
    technologies: [
      
      "Javascript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "AWS",
      "Mongodb",
    ],
  },
];

export const PROJECTS = [
  {
    title: "ERP Software",
    image: project1,
    description:
      "Designed and implemented a comprehensive ERP solution at Finobase Global Solutions for Aerofright Logistics in Qatar, incorporating modules for Accounts, Finance, Sales, Purchase, Warehouse, CRM, Inventory, Asset Management, and BI. Leveraged JavaScript, React.js, Node.js, MySQL, Material-UI, and Power BI Report Builder to modernize operations and drive data-driven decision-making. Upgraded tech stack with latest LTS versions of React.js and Node.js, boosting performance, security, and compatibility. Enhanced user experience with code-splitting, lazy loading, memoization, and Redux for scalable state management, and designed a dynamic organization chart in React.js.",
    technologies: [
      "Javascript",
      "React.js",
      "Node.js",
      "MySql",
      "MaterialUI",
      "PowerBI Report Builder",
    ],
  },
  {
    title: "StaffSync HRM",
    image: project2,
    description:
      "StaffSync  is a Human Resourse Mangement App enabling companies to manage Attendance,Leave,Payroll etc.  Integrated ZegoCloud for audio/video calls, and Stripe for seamless payment processing. Built with MVC architecture for scalability, and deployed via CI/CD pipelines using GitHub Actions and Docker Hub to AWS EC2 instances for efficient updates.",
    technologies: [  
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TailwindCSS",
    "AWS",
    ],
  },
  {
    title:"Costa E-commerce App",
    image: project3,
    description:
      "Developed a responsive fashion e-commerce platform with dynamic product listings, wishlisting, order tracking, and secure payments via Razorpay. Built a robust backend using Node.js and MongoDB for efficient data management and user authentication. Implemented a comprehensive admin panel using MVC architecture, enabling efficient management of products, users, and returns, ensuring smooth store operations across all devices.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Node.js" , "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ['React.Js' , "Tailwind.css" , "versel", "Framer motion"],
  },
  // {
  //   title: "banquee",
  //   image: project5,
  //   description:
  //     "Converted a beautifully designed Figma into a fully responsive application using the latest technologies.",
  //   technologies: ["HTML", "CSS", "React.Js", "Tailwind.css"],
  // },
];

export const CONTACT = {
  address: "Kochi Kerala India ",
  phoneNo: "+91 9544707688",
  email: "anojkjayan28@gmail.com",
};
