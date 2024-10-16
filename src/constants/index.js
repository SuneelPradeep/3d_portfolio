import {  portfolio,  sudoku } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,angular,python,jira,jest,electronjs,antdesign,
    mysql,styledcomponents,threejs,reactnative ,bootstrap,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    english,telugu,japanese,hindi,
} from "../assets/icons";

import {dtulogo,narayanalogo,svnlogo,imglogo,ezylogo,hbsslogo,
    animeshop,deliveroo,handwritten,uber,music, movieeflix,
    dtu,nptel,coursera,scaler,pro5ai
} from '../assets/images'


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Task system",
    },
    {
        imageUrl: jest,
        name: "Jest",
        type: "Testing",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming language",
    },
    {
        imageUrl: styledcomponents,
        name: "Styled Components",
        type: "Frontend",
    },
    {
        imageUrl: reactnative,
        name: "React Native",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: electronjs,
        name: "Electron.js",
        type: "Frontend",
    },
    {
        imageUrl: antdesign,
        name: "Ant Design",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "ootstrap",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Database",
    },


];

export const WorkExperienceData = [
    {id:1,
        logo: hbsslogo,
        name : "HB Software Solutions",
        period : {start : "Jul 2021 ", end :"Jan 2024"},
        position : "Software Developer",
        iconBg: "#accbe1",
        location : "Gurgoan, Haryana",
        summary : "Developed user interfaces using ReactJS and Material UI or AntD UI to implement responsive design and ensure cross-browser compatibility and optimized for performance, scalability, and API integrations. Implemented authentication and authorization and developed microservices to handle CRUD operations for Clients, Drivers, and Vehicles Management used real-time features using WebSocket connections in ExpressJS, NodeJS for trip booking and vehicle Dispatch and integrated Redis for caching real-time data updates Managed Git repositories in GitLab, including branching, merging, and resolving merge conflicts",
        keyFocus : ["ReactJS", "NodeJS","Redis","AntDesign", "MaterialUI","Oracle","GitLab","Sockets","API development"]
},
{id:2,
    logo:imglogo,
    name : "Immaginovate",
    period : {start : "Jan 2021 ", end :"Jul 2021"},
    position : "Junior Software Developer",
    
    iconBg: "#fbc3bc",
    location : "Visakhapatnam, Andhra Pradesh",
    summary : "As a junior developer, I learned ES6 Javascript and it's frameworks React JS andits hooks and UI elements like Material UI , Bootstrap, ANTDesign, and for backend, tools like Express using Node and SQL",
    keyFocus : ["ReactJS","Bootstrap","ExpressJS","SQL","AntDesign"]
},
{id:3,
    logo: ezylogo,
    name : "Ezy Schooling",
    period : {start : "May 2020 ", end :"Jul 2020"},
    position : "Software  Developer Trainee intern",
    location : "New Delhi, India",
    iconBg: "#a2d2ff",
    summary : "Worked on making a webpage that collects information about the different classes and rating of the schools and Admission process and prices of the tuition of various schools and displayed on the ezy schooling website  using their API",
    keyFocus : ["HTML","CSS","Javascript"]
},
]

export const EducationData  = [
    {id : 1,
        logo: dtulogo,
        institution:"Delhi Technological University",
        study :"Computer Engineering",
        degree : "Bachelor of Technology",
        iconBg: "#a2d2ff",
        location:"New Delhi, India",
        period : {start : "Aug 2016" , end :"Dec 2020"}
    },
    {id : 2,
        logo: narayanalogo,
        institution:"Narayana Junior College",
        study :"Maths, Physics, Chemistry",
        degree : "Intermediate(11th & 12th)",
        location:"Visakhapatnam, AP,India",
        iconBg: "#accbe1",
        period : {start : "2014" , end :"2016"}
    },
    {id : 3,
        logo: svnlogo,
        institution:"Sarvepalli Vidya Niketan",
        study :"SSC",
        degree : "High School",
        location:"SKota, AP,India",
        iconBg: "#b7e4c7",
        period : {start : "2004" , end :"2014"}
    }
]

export const LanguagesData = [
    { name: 'English', percentage: 90, image : english },
    { name: 'Telugu', percentage: 100, image: telugu},
    { name: 'Hindi', percentage: 80, image: hindi},
    { name: 'Japanese', percentage: 20, image: japanese }];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projectData = [
    { 
        id: 1,
        image  :animeshop,
        theme: 'btn-back-red',
        color:'gradient-text-red',
        textcolor : 'text-red-500',
    name: "AnimeShop",
    summary: `Developed an e-commerce anime site using the MERN stack (MongoDB, Express.js, React.js, Node.js) that displays product details like ratings, price, and stock. Users can filter and sort products across various categories. Redux is used for managing the state of items added to the cart, while the backend API, built with Node.js and Express.js, interacts with MongoDB to store and retrieve product data.
`,
 tags: ["reactjs","nodejs","expressjs","mongodb","html/css","javascript","styled_components"],
    link: {
         url : "https://animeshops.netlify.app/", 
        github : "https://github.com/SuneelPradeep/AnimeShop",
          }
    },
    { 
        id: 8,
        image  : portfolio,
    name: "My 3D Portfolio ",
    theme: 'btn-back-black',
    color:'gradient-text-black',
    textcolor : 'text-black-500',
    summary: `My portfolio website is made using Threejs. It has features like fiber,drei,spring so that it helps in incorporating 3D models into my React project styled with tailwindcss.I have made two worlds 1) MonsterVerse 2) OnePiece in dark and lightmodes and also has information about me and my skills & projects `,
    tags: ["Threejs","react-threejs/fiber","reactjs","tailwindcss","dark/light-mode"],
    link: {
         url : "https://suneelpradeep.netlify.app/",
        github : "https://github.com/SuneelPradeep/3d_portfolio",
          },
    },
    { 
        id: 7,
        image  : sudoku,
    name: "Sudoku PWA & Electron",
    theme: 'btn-back-green',
    color:'gradient-text-green',
    textcolor : 'text-green-500',
    summary: `A Sudoku game built using React.js and Tailwind CSS, powered by Vite for fast development. The app is deployed as a Progressive Web App (PWA) and packaged with Electron for cross-platform desktop compatibility (Windows, Linux, Mac)`,
tags: ["reactjs","tailwindcss","electronjs","PWA","Game"],
    link: {
         url : "https://sudokooo.netlify.app/",
        github : "https://github.com/SuneelPradeep/sudoku",
          },
    },
    
     { 
            id: 2,
            image  :movieeflix,
            theme: 'btn-back-blue',
            color:'gradient-text-blue',
            textcolor : 'text-blue-500',
        name: "Movieeflix",
        summary: `MovieFlix is a platform similar to Netflix, displaying movie data fetched from RapidAPI. It uses server-side rendering with Next.js v13 for both frontend and backend. The app connects to MongoDB for storing and retrieving user data, providing a seamless experience`,
        tags: ["reactjs","nextjs","mongodb","html/css","javascript","tailwindcss"],
        link: {
             url : "https://movieeeflixx.netlify.app/",
            github : "https://github.com/SuneelPradeep/movieeflix",
              },
        },
        { 
            id: 4,
            image  : music,
            theme: 'btn-back-pink',
            color:'gradient-text-pink',
            textcolor : 'text-pink-500',
        name: "MY songs music site",
        summary: `A site featuring five songs that I sang in five different languages.`,
        tags: ["javascript","reactjs","html/css"],
        link: { 
             url : "https://suneelmusic.netlify.app/",
            github : "",
              },
        },
        { 
            id: 3,
            image  : deliveroo,
            theme: 'btn-back-green',
            color:'gradient-text-green',
            textcolor : 'text-green-500',
        name: "Deliveroo clone",
        summary: `This delivery app is built with React Native using Expo, featuring a UI similar to the Deliveroo app. The user interface is styled with Tailwind CSS, while the Redux Toolkit manages state. For the backend, Sanity CMS is used to store and query data using the GROQ query language, with the API deployed for seamless integration`
        ,  tags: ["reactnative","tailwindcss","groq_query","mongodb","html/css","javascript","Redux"],
        link: {
             url : "",
            github : "https://github.com/SuneelPradeep/Deliveroo_clone",
              },
        },
        
        { 
            id: 5,
            image  : handwritten,
            theme: 'btn-back-orange',
            textcolor : 'text-orange-500',
            color:'gradient-text-orange',
             name: "Handwritten digit recognition",
        summary: `Developed an application using machine learning that recognizes handwritten digits. The model leverages Convolutional Neural Networks (CNN) and is trained on the MNIST dataset to accurately identify various digits`,
        tags: ["python","ML","CNN","MNIST"],
        
        },
        { 
            id: 6,
            image  : uber,
        name: "Uber clone",
        theme: 'btn-back-yellow',
        color:'gradient-text-yellow',
        textcolor : 'text-yellow-500',
        summary: `This uber app is a React Native app that has a similar look to the
                Uber app. The UI is made with Tailwindcss and Reduxjs Toolkit to handle
                the state of React and for the backend, Sanity CMS is used as it stores the data
                and queries with GROQ query language to connect and is deployed as API`,
        tags: ["reactnative","tailwindcss","groq_query","mongodb","html/css","javascript","Redux"],
        link: {
             url : "",
            github : "https://github.com/SuneelPradeep/Uber_clone",
              },
        }
       

]

export const certificationData =[
   { id : 1,
     iconUrl: pro5ai,
    theme: 'btn-back-red',
     color :"hover-gradient-text-red",
      name : 'Top 5% Front End Engineer Certificate',
      issuer : 'Pro5.ai',
      date : "13th July 2024",
      link : "https://drive.google.com/file/d/1ywwbVnxdNl89AByEZv9lYC0J0CfD-RJu/view?usp=sharing"

   },
   
 { id : 12,
    iconUrl: scaler,
        theme: 'btn-back-green',
        color :"hover-gradient-text-green",
    name : 'SOLID principles',
    issuer : 'Scaler',
    date : "Oct 2024",
    link : "https://moonshot.scaler.com/s/sl/S0dhmsrcsq"

 },
 { id : 3,
    iconUrl: scaler,
        theme: 'btn-back-black',
        color :"hover-gradient-text-black",
    name : 'Build an E-commerce platform using React',
    issuer : 'Scaler',
    date : "26th Sep 2024",
    link : "https://moonshot.scaler.com/s/sl/yB3Ayp83vn"

 },{
    id : 11,
    iconUrl: coursera,
        theme: 'btn-back-blue',
        color :"hover-gradient-text-blue",
    name : 'Programming for Everybody',
    issuer : 'Coursera(University of Michigan)',
    date : "July-Oct 2018",
    link : "https://coursera.org/share/1917299d4823fdcd94fc50df211bbc50"

 },
 { id : 4,
    iconUrl: coursera,
        theme: 'btn-back-pink',
        color :"hover-gradient-text-pink",
    name : 'Using python to access web data',
    issuer : 'Coursera(University of Michigan)',
    date : "April 2019",
    link : "https://coursera.org/share/c1e250aaa86e094cea3f4e1b7d7d3f32"

 },
 { id : 5,
    iconUrl: nptel,
        theme: 'btn-back-black',
        color :"hover-gradient-text-black",
    name : 'Introduction to IOT',
    issuer : 'NPTEL',
    date : "July-Oct 2018",
    link : "https://drive.google.com/file/d/1eZhpiMbqVPlg3Jau7czD928c5to6MW7R/view?usp=sharing"

 },
 { id : 6,
    name : 'Usable Security',
    iconUrl: coursera,
        theme: 'btn-back-yellow',
        color :"hover-gradient-text-yellow",
    issuer : 'Coursera(University of Mariyland)',
    date : "May 2019",
    link : "https://coursera.org/share/6d2cc49c70c53135028edda2394c9674"

 },
 { id : 7,
    iconUrl: nptel,
        theme: 'btn-back-red',
        color :"hover-gradient-text-red",
    name : 'Programming, DS,Algo using Python',
    issuer : 'NPTEL',
    date : "Aug-Sep 2018",
    link : "https://drive.google.com/file/d/1edsn2nKEx7_gZp0vZ0CTb21Py8qbxHfs/view?usp=sharing"

 },
 { id : 8,
    iconUrl: coursera,
        theme: 'btn-back-green',
        color :"hover-gradient-text-green",
    name : 'Using databases with Python',
    issuer : 'Coursera(University of Michigan)',
    date : "May 2019",
    link : "https://coursera.org/share/2e883307018ed0a994c727606d20b52d"

 },
 { id : 9,
    iconUrl: coursera,
    theme: 'btn-back-blue',
    color :"hover-gradient-text-blue",
    name : 'Pyton data structures',
    issuer : 'Coursera(University of Michigan)',
    date : "4th Dec 2018",
    link : "https://coursera.org/share/d7752bb3ee96ba351f532240ba55bf66"

 },
 { id : 10,
    iconUrl: dtu,
    theme: 'btn-back-pink',
    color :"hover-gradient-text-pink",
    name : 'INQUIZATE',
    issuer : 'Delhi School of Management(DSM)',
    date : " 2017",
    link : "https://drive.google.com/file/d/1ejLAgIgO_fVrbbJUHCcxPuqeZ0KN9EaA/view?usp=sharing"

 },
 { id : 2,
    iconUrl: scaler,
        theme: 'btn-back-green',
        color :"hover-gradient-text-green",
    name : 'Get in-depth understanding of Kafka and Zookeeper masterclass',
    issuer : 'Scaler',
    date : "July 2024",
    link : "https://moonshot.scaler.com/s/sl/9VSo1qDA4f"

 },

]

export const LinksData = {
    instagram : "https://www.instagram.com/suneel_pradeep/",
    github : "https://github.com/SuneelPradeep",
    linkedin : "https://www.linkedin.com/in/suneel-pradeep-setti-351a26293/",
    resume : "https://rxresu.me/ernestsolomoninzion/my-latest-resume"
 
}
// export const projects = [
//     {
//         iconUrl: pricewise,
//         theme: 'btn-back-red',
//         name: 'Amazon Price Tracker',
//         description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
//         link: 'https://github.com/adrianhajdin/pricewise',
//     },
//     {
//         iconUrl: threads,
//         theme: 'btn-back-green',
//         name: 'Full Stack Threads Clone',
//         description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
//         link: 'https://github.com/adrianhajdin/threads',
//     },
//     {
//         iconUrl: car,
//         theme: 'btn-back-blue',
//         name: 'Car Finding App',
//         description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
//         link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
//     },
//     {
//         iconUrl: snapgram,
//         theme: 'btn-back-pink',
//         name: 'Full Stack Instagram Clone',
//         description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
//         link: 'https://github.com/adrianhajdin/social_media_app',
//     },
//     {
//         iconUrl: estate,
//         theme: 'btn-back-black',
//         name: 'Real-Estate Application',
//         description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
//         link: 'https://github.com/adrianhajdin/projects_realestate',
//     },
//     {
//         iconUrl: summiz,
//         theme: 'btn-back-yellow',
//         name: 'AI Summarizer Application',
//         description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
//         link: 'https://github.com/adrianhajdin/project_ai_summarizer',
//     }
// ];



// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];
