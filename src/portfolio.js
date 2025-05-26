/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Damian's Portfolio",
  description:
    "A driven full-stack developer with a passion for developing end-to-end products that create sustainable and scalable social and technical systems to make a meaningful impact.",
  og: {
    title: "Damian Valencia Portfolio",
    type: "website",
    url: "https://vision1224.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Damian Valencia",
  logo_name: "DamianValencia",
  subTitle:
    "A driven full-stack developer with a passion for developing end-to-end products that create sustainable and scalable social and technical systems to make a meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/1WtYIzh8H6K-7q_UmL3z6MFjybv2VRaQO/view?usp=drive_link",
  portfolio_repository: "https://github.com/Vision1224/portfolio",
  githubProfile: "https://github.com/Vision1224",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Vision1224",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/damian-valencia-280727b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:damianv2420@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Sys Admin & DevOps",
      fileName: "DataScienceImg",
      skills: [
        "⚡ As an experienced Sys Admin, I have a proven track record of working with multiple tools to streamline operations. ",
        "⚡ I am well-versed in utilizing Ansible, Jenkins, CI/CD, and Azure Pipelines to automate processes and increase efficiency.",
        "⚡ I have extensive experience in maintaining and optimizing both in-house and cloud servers, ensuring optimal performance and reliability.",
      ],
      softwareSkills: [
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            backgroundColor: "transparent",
            color: "#EE0000",
          },
        },
        {
          skillName: "NGINX",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            backgroundColor: "transparent",
            color: "#009639",
          },
        },
        {
          skillName: "Puppet",
          fontAwesomeClassname: "simple-icons:puppet",
          style: {
            backgroundColor: "transparent",
            color: "#FFAE1A",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            backgroundColor: "transparent",
            color: "#D24939",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            backgroundColor: "transparent",
            color: "#0078D7",
          },
        },
        {
          skillName: "CircleCI",
          fontAwesomeClassname: "simple-icons:circleci",
          style: {
            backgroundColor: "transparent",
            color: "#343434",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            backgroundColor: "transparent",
            color: "#2088FF",
          },
        },
        {
          skillName: "Windows Server",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            backgroundColor: "transparent",
            color: "#0078D6",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "flat-color-icons:linux",
          style: {
            backgroundColor: "transparent",
            // color black and yellow
          },
        },
        {
          skillName: "Unix",
          fontAwesomeClassname: "devicon:unix",
          style: {
            backgroundColor: "transparent",
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in building responsive website front-ends using React-Redux and Angular frameworks.",
        "⚡ Experienced in developing mobile applications using React Native.",
        "⚡ Skilled in creating efficient and robust application backends using Node.js and Express framework.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#FF4500",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ As a seasoned professional, I possess extensive experience in working with multiple cloud platforms.",
        "⚡ I have successfully hosted and maintained websites on virtual machine instances, seamlessly integrating databases to ensure optimal performance. ",
        "⚡ I have a proven track record of setting up streaming jobs from databases to servers or vice versa on both GCP and AWS, ensuring smooth and efficient data transfer.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Microsoft SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Vision1224/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/damianv2420",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/damianv2420",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Vision1224",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@damian41",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at El Paso",
      subtitle: "B.S. in Computer Science",
      logo_path: "utep_logo_no_background.png",
      alt_name: "UTEP",
      duration: "2012-2016",
      descriptions: [
        "⚡ I possess a strong foundation in basic computer science subjects such as Algorithms, Automata, Software Engineering, Databases, Operating Systems, and more.",
        "⚡ I have completed comprehensive courses on cutting-edge technologies such as Deep Learning, Data Science, Cloud Computing, and Full Stack Development.",
        "⚡ I have also had the privilege of being a part of a data science research group, where I gained valuable experience in conducting research and analyzing data.",
      ],
      website_link: "https://www.utep.edu/",
    },
    {
      title: "El Paso Community College",
      subtitle: "A.A in Computer Science",
      logo_path: "el-paso-community-college-logo.png",
      alt_name: "El Paso Community College",
      duration: "2008-2012",
      descriptions: [
        "⚡ I have completed a diverse range of courses related to Computer Programming, including Computer Programming I, Computer Programming II, and Networking.",
        "⚡ Additionally, I have pursued courses on advanced topics such as Computer Architecture, Information Security, and Calculus, further expanding my knowledge and skillset.",
        "⚡ During my time at community college, I was part of the early college program, which is a testament to my ability to excel in college-level courses while still in high school.",
      ],
      website_link: "https://www.epcc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Full Stack and Backend Developer, Designer, and Software Architect, I have had the pleasure of working with numerous companies throughout my career. Additionally, I have gained valuable experience as a System Administrator with some of the most well-established companies in the industry. My passion for programming has led me to become an active contributor to various open-source communities. I take great pride in my work and am committed to delivering high-quality results to every project I undertake.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Analytics Engineer II",
          company: "Performant Corp",
          company_url: "https://performanthealthcare.com/",
          logo_path: "performant_healthcare_logo.jpeg",
          duration: "July 2023 - May 2025",
          location: "El Paso, Texas (Remote)",
          description:
            "⚡ Successfully engineered and maintained complex data probes using Performant’s proprietary Data Processing Engine (DPE) to extract, transform, and analyze high-volume healthcare and financial datasets.⚡ Designed and implemented scalable solutions to support mission-critical workflows including data validation, fraud detection, and revenue recovery.⚡ Built reusable, modular probe templates that improved processing speed, consistency, and efficiency across multiple government contracts.⚡ Collaborated with cross-functional teams—including analytics, compliance, and business units—to translate regulatory requirements into executable, automated data workflows.⚡ Ensured system accuracy and reliability by debugging, optimizing, and applying version control to data probe configurations.⚡ Authored comprehensive technical documentation and led internal training initiatives to promote best practices in data probe development and DPE utilization.",
          color: "#81c341",
        },
        {
          title: "Computer Programmer IV",
          company: "Brillient Corporation",
          company_url: "https://www.brillient.net/",
          logo_path: "Brillient_Logo_Rev2016_web.png",
          duration: "March 2021 - July 2023",
          location: "El Paso, Texas (Remote)",
          description:
            "⚡ Proven track record of remote work, consistently achieving exceptional results through self-directed efforts.⚡ Develop, modify, and maintain complex programs to solve challenging programming problems, utilizing knowledge of system software, computer equipment, work processes,regulations, and management practices.⚡ Design and implement file and record interrelations within programs to effectively fit into the overall project design. ⚡ Play a critical role in the development of an in-house Helpdesk system, handling problem resolution through the ticketing system.⚡ Develop an automation script to import Paid In Full loans into the system, streamlining processes and improving efficiency.",
          color: "#81c341",
        },
        {
          title: "C/SQL/UNIX Developer",
          company: "Gainwell Technologies",
          company_url: "https://www.gainwelltechnologies.com/",
          logo_path: "gainwell-logo.jpg",
          duration: "November 2017 - March 2021",
          location: "El Paso, Texas",
          description:
            "⚡Engaged in extensive code reviews with senior developers, actively contributing to the enhancement of programming skills and knowledge. ⚡ Demonstrated a strong sense of responsibility by participating in on - call rotation, swiftly addressing errors in the production environment to ensure system stability and reliability.⚡Debugged and maintained code on diverse servers for clients, resulting in improved system performance and functionality.⚡Developed customized programs based on client requirements, consistently adhering to Statement of Work(SOW) and Business Design Document(BDD) guidelines.⚡ Successfully led numerous projects, demonstrating strong project management skills, meeting deadlines, and consistently exceeding client expectations.⚡Showcased exceptional programming capabilities by working on programs with over fifty thousand lines of code",
          color: "#00efae",
        },
        {
          title: "FormsBuilder Developer (Contractor)",
          company: "Western Technical College",
          company_url: "https://www.westerntech.edu",
          logo_path: "westernTechLogo.png",
          duration: "November 2017 - March 2018",
          location: "El Paso, Texas",
          description:
            "⚡ Successfully collaborated with a Western Technical College on a contract project to develop applications using the FormsBuilder tool on the Campus Nexus system.⚡ Implemented the applications using the .NET framework to automate the school's existing processes and alleviate their burden of manual tasks.⚡ Enabled Western Technical College to focus on their dayto-day responsibilities while ensuring streamlined and efficient operations through automated solutions.",
          color: "#b5111a",
        },
        {
          title: "Systems Administrator",
          company: "Western Technical College",
          company_url: "https://www.westerntech.edu/",
          logo_path: "westernTechLogo.png",
          duration: "November 2016 - November 2017",
          location: "El Paso, Texas",
          description:
            "⚡Proactively troubleshooted and swiftly resolved website and computer issues for students and employees, ensuring minimal disruption and maximizing productivity.⚡ Maintained and administered a diverse set of external databases integrated into the Western Technical College school system, including Campus Learning Management, Canvas, Velocify, and DiamondD.⚡Co-managed the successful implementation of the Campus Learning Management System (LMS), overseeing a smooth transition and integration process.⚡Led a pivotal project to integrate the Campus Management system with DocuSign and Canvas, resulting in streamlined processes and enhanced user experience.⚡ Collaborated with cross-functional teams to identify and implement system improvements, effectively optimizing performance and functionality.⚡Provided comprehensive technical support, training, and documentation to end-users, empowering them to navigate systems efficiently and effectively.",
          color: "#b5111a",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Website Development and SEO Intern",
          company: "Fun House Party Hall",
          logo_path: "fun_house_party_hall.jpg",
          duration: "October 2012 - April 2014",
          location: "El Paso, Texas",
          description:
            "⚡Proficiently developed websites' front-end using HTML,CSS, and JavaScript to deliver visually appealing and userfriendly interfaces.⚡Strategically implemented Search Engine Optimization (SEO) tactics to drive increased website traffic and improve online visibility.⚡Employed robust security measures to safeguard secured areas of the system from unauthorized access.",
          color: "#095bf3",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure or locally.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "damian_photo.jpeg",
    description:
      "I am available on Google, Github, LinkedIn. You can message me, I will reply within 24 hours. I can help you with React, Angular, Android, Cloud, Unix and Opensource Development.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
