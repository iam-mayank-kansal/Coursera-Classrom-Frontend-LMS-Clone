import {
  CoursesDataInterface,
  EventInterface,
  SlideFeature,
  SlideGrid,
  SlideHero,
  SlideSplit,
} from "./interface";
import {
  BsClock,
  BsFileEarmarkCode,
  BsWhatsapp,
  BsBook,
  BsCheckCircle,
} from "react-icons/bs";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiTarget,
  FiGlobe,
  FiAward,
  FiClock,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";
import { AiOutlineUserSwitch, AiOutlineRocket } from "react-icons/ai";
import {
  FaRocket,
  FaAward,
  FaUsers,
  FaTrophy,
  FaPlaneArrival,
  FaRobot,
} from "react-icons/fa";
import {
  BiAward,
  BiBookOpen,
  BiCalendar,
  BiDownload,
  BiLaptop,
  BiNetworkChart,
  BiPlay,
  BiSmile,
  BiUser,
} from "react-icons/bi";
import { DiPython } from "react-icons/di";
import { FaComputer } from "react-icons/fa6";
import { GiMachineGun } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";

//# Navbar

export const exploreData = [
  {
    category: "Popular Courses",
    courses: [
      {
        courseName: "Web Development 101",
        coursePara: "Basics of HTML, CSS, and JavaScript.",
        link: "/course/web-development/web-dev-101",
      },
      {
        courseName: "Data Science Essentials",
        coursePara: "Introduction to data analysis and visualization.",
        link: "/course/data-science/data-science-essentials",
      },
      {
        courseName: "React Native Advance",
        coursePara: "Learn React Native from scratch to advance.",
        link: "/course/app-development/react-native-advance",
      },
      {
        courseName: "UI/UX Design Fundamentals",
        coursePara: "Essentials of UI and UX design.",
        link: "/course/ui-ux/ui-ux-fundamentals",
      },
      {
        courseName: "Mobile App Development",
        coursePara: "Build apps using React Native.",
        link: "/course/app-development/mobile-development",
      },
      {
        courseName: "Digital Marketing",
        coursePara: "Strategies for effective online marketing.",
        link: "/course/digital-marketing/marketing-advance",
      },
    ],
    freeCourses: [
      {
        courseName: "Mobile App Development",
        coursePara: "Build apps using React Native.",
        link: "/course/app-development/mobile-development",
      },
      {
        courseName: "Digital Marketing",
        coursePara: "Strategies for effective online marketing.",
        link: "/course/digital-marketing/marketing-advance",
      },
    ],
    link: "/course/popular",
  },
  {
    category: "Web Development",
    courses: [
      {
        courseName: "JavaScript Mastery",
        coursePara: "Master JavaScript for dynamic web applications.",
        link: "/course/web-development/javascript-mastery",
      },
      {
        courseName: "Frontend Development",
        coursePara: "Learn React, Angular, and Vue for modern UIs.",
        link: "/course/web-development/frontend-development",
      },
    ],
    freeCourses: [
      {
        courseName: "JavaScript Mastery",
        coursePara: "Master JavaScript for dynamic web applications.",
        link: "/course/web-development/javascript-mastery",
      },
      {
        courseName: "Frontend Development",
        coursePara: "Learn React, Angular, and Vue for modern UIs.",
        link: "/course/web-development/frontend-development",
      },
    ],
    link: "/course/web-development",
  },
  {
    category: "Data Science",
    courses: [
      {
        courseName: "Machine Learning Basics",
        coursePara: "Understand machine learning algorithms.",
        link: "/course/data-science/machine-learning-basics",
      },
      {
        courseName: "Deep Learning Foundations",
        coursePara: "Introduction to neural networks and AI.",
        link: "/course/data-science/deep-learning",
      },
    ],
    freeCourses: [
      {
        courseName: "Machine Learning Basics",
        coursePara: "Understand machine learning algorithms.",
        link: "/course/data-science/machine-learning-basics",
      },
      {
        courseName: "Deep Learning Foundations",
        coursePara: "Introduction to neural networks and AI.",
        link: "/course/data-science/deep-learning",
      },
    ],
    link: "/course/data-science",
  },
  {
    category: "Data Analytics",
    courses: [
      {
        courseName: "SQL for Data Analysis",
        coursePara: "Learn to query and analyze databases.",
        link: "/course/data-analytics/sql-for-analysis",
      },
      {
        courseName: "Excel and Tableau",
        coursePara: "Master data visualization tools.",
        link: "/course/data-analytics/excel-tableau",
      },
    ],
    freeCourses: [
      {
        courseName: "SQL for Data Analysis",
        coursePara: "Learn to query and analyze databases.",
        link: "/course/data-analytics/sql-for-analysis",
      },
      {
        courseName: "Excel and Tableau",
        coursePara: "Master data visualization tools.",
        link: "/course/data-analytics/excel-tableau",
      },
    ],
    link: "/course/data-analytics",
  },
  {
    category: "UI/UX",
    courses: [
      {
        courseName: "User Interface Design",
        coursePara: "Learn to design stunning user interfaces.",
        link: "/course/ui-ux/ui-design",
      },
      {
        courseName: "User Research Techniques",
        coursePara: "Understand user needs with effective research.",
        link: "/course/ui-ux/user-research",
      },
    ],
    freeCourses: [
      {
        courseName: "User Interface Design",
        coursePara: "Learn to design stunning user interfaces.",
        link: "/course/ui-ux/ui-design",
      },
      {
        courseName: "User Research Techniques",
        coursePara: "Understand user needs with effective research.",
        link: "/course/ui-ux/user-research",
      },
    ],
    link: "/course/ui-ux",
  },
  {
    category: "Digital Marketing",
    courses: [
      {
        courseName: "SEO Masterclass",
        coursePara: "Optimize websites for search engines.",
        link: "/course/digital-marketing/seo-masterclass",
      },
      {
        courseName: "Social Media Marketing",
        coursePara: "Strategies for growing social media presence.",
        link: "/course/digital-marketing/social-media-marketing",
      },
    ],
    freeCourses: [
      {
        courseName: "SEO Masterclass",
        coursePara: "Optimize websites for search engines.",
        link: "/course/digital-marketing/seo-masterclass",
      },
      {
        courseName: "Social Media Marketing",
        coursePara: "Strategies for growing social media presence.",
        link: "/course/digital-marketing/social-media-marketing",
      },
    ],
    link: "/course/digital-marketing",
  },
  {
    category: "App Development",
    courses: [
      {
        courseName: "iOS Development",
        coursePara: "Build apps for the Apple ecosystem.",
        link: "/course/app-development/ios-development",
      },
      {
        courseName: "Android Development",
        coursePara: "Learn to create apps for Android devices.",
        link: "/course/app-development/android-development",
      },
    ],
    freeCourses: [
      {
        courseName: "iOS Development",
        coursePara: "Build apps for the Apple ecosystem.",
        link: "/course/app-development/ios-development",
      },
      {
        courseName: "Android Development",
        coursePara: "Learn to create apps for Android devices.",
        link: "/course/app-development/android-development",
      },
    ],
    link: "/course/app-development",
  },
];

export const moreDropdown = [
  { href: "/about", label: "About" },
  { href: "/career-support", label: "Career Support" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/blogs", label: "Blogs" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
];

// # Footer

export const courseCategories = [
  {
    title: "Marketing",
    links: [
      {
        label: "Digital Marketing",
        href: "/course/digital-marketing/digital",
      },
      { label: "SEO Mastery", href: "/course/digital-marketing/seo-mastery" },
      {
        label: "Social Media Marketing",
        href: "/course/digital-marketing/social-media-marketing",
      },
      {
        label: "Content Marketing",
        href: "/course/digital-marketing/content-marketing",
      },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Web Development", href: "/course/web-development" },
      { label: "Data Science", href: "/course/data-science" },
      { label: "Game Development", href: "/course/game-development" },
      { label: "App Development", href: "/course/app-development" },
    ],
  },
  {
    title: "Programming",
    links: [
      { label: "C++", href: "/course/programming/c++" },
      { label: "Python", href: "/course/programming/python" },
      { label: "Javascript", href: "/course/programming/javascript" },
    ],
  },
  {
    title: "Design",
    links: [
      { label: "UI/UX Design", href: "/course/ui-ux" },
      { label: "Graphic Design", href: "/course/graphics-design" },
      { label: "Video Editing", href: "/course/video-editing" },
      { label: "3D & Animation", href: "/course/vfx-animation" },
    ],
  },
];

export const socialIcons = [
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/people/SkillsYard/61550968584712/",
    label: "Facebook",
  },
  {
    icon: FiTwitter,
    href: "https://x.com/SkillsYard",
    label: "Twitter",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedIn.com/company/101408820/admin/feed/posts/",
    label: "Linkedin",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/skillsyard/",
    label: "Instagram",
  },
  {
    icon: FiYoutube,
    href: "https://www.youtube.com/@SkillsYard",
    label: "Youtube",
  },
  {
    icon: BsWhatsapp,
    href: "https://api.whatsapp.com/send/?phone=9873248878&text&type=phone_number&app_absent=0",
    label: "Whatsapp",
  },
];

//# Home components data

// Header slides
export const slides: (SlideHero | SlideSplit | SlideFeature | SlideGrid)[] = [
  {
    type: "hero",
    title: "Empower Your Potential with Modern Learning Tools",
    description:
      "Step into the future of education with tools designed to maximize your growth. Learn at your own pace with expert guidance and a community of like-minded learners.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
  },
  {
    type: "split",
    title: "Experience the Future of Learning",
    description:
      "Discover innovative features designed to enhance your learning journey and unlock new opportunities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071",
    stats: [
      { label: "AI-Driven Insights", value: "Real-Time" },
      { label: "Gamified Learning", value: "Unlock Rewards" },
      { label: "Customizable Dashboard", value: "100% Personalized" },
      { label: "Global Community", value: "200+ Countries" },
    ],
  },
  {
    type: "feature",
    title: "Build Real-World Projects",
    description:
      "Apply your skills to practical projects that matter. Create a portfolio that makes you stand out.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
    features: [
      { icon: "play", text: "Interactive video lessons" },
      { icon: "users", text: "Collaborative learning environment" },
      { icon: "book", text: "Comprehensive course materials" },
    ],
  },
  {
    type: "grid",
    title: "Your Learning Journey",
    description:
      "A comprehensive learning experience designed for your success",
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=2074",
    gridItems: [
      {
        title: "Personalized Learning",
        description: "AI-powered adaptive learning paths",
        icon: "brain",
      },
      {
        title: "Live Sessions",
        description: "Interactive classes with experts",
        icon: "video",
      },
      {
        title: "Project Work",
        description: "Real-world project experience",
        icon: "code",
      },
      {
        title: "Career Support",
        description: "Dedicated placement assistance",
        icon: "briefcase",
      },
    ],
  },
];

// Course category
export const  coursesData: CoursesDataInterface[] = [
  {
    title: "Popular Courses",
    listData: [
      {
        title: "Frontend Mastery",
        rating: 4,
        students: "40+",
        duration: "16 weeks",
        image:
          "https://img.freepik.com/free-vector/people-analyzing-financial-charts-virtual-interface_1262-19289.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 6,
        link: "/course/web-development/frontend-mastery",
      },
      {
        title: "Data Science with AI",
        rating: 4.2,
        students: "50+",
        duration: "48 weeks",
        image:
          "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Advanced",
        modules: 16,
        link: "/course/data-science/data-science-with-ai",
      },
      {
        title: "Certified in Game Development",
        rating: 4.6,
        students: "10+",
        duration: "24 weeks",
        image:
          "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149266855.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 6,
        link: "/course/game-development/certified-in-game-development",
      },
      {
        title: "Diploma in Computer Applications",
        rating: 4,
        students: "40+",
        duration: "48 weeks",
        image:
          "https://img.freepik.com/free-photo/modern-player-live-streaming-video-games-play-computer-having-fun-with-rpg-tournament-young-adult-playing-online-action-shooting-game-with-multiple-players-pc-shooter-challenge_482257-47448.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 9,
        link: "/course/computer-courses/diploama-in-computer-applications",
      },
      {
        title: "Graphics Design and Video Editing",
        rating: 4.7,
        students: "10+",
        duration: "32 weeks",
        image:
          "https://img.freepik.com/premium-vector/hand-drawn-flat-quantum-illustration_108061-1448.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Advanced",
        modules: 8,
        link: "/course/graphics-designing/graphic-design-video-editing",
      },
      {
        title: "2D Graphics Design Mastery",
        rating: 3.8,
        students: "10+",
        duration: "24 weeks",
        image:
          "https://img.freepik.com/free-photo/creative-creator-doing-portrait-retouch-using-color-grade-late-night-professional-editing-office_482257-5161.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermidiate",
        modules: 6,
        link: "/course/graphics-designing/2d-graphics-design-mastery",
      },
    ],
  },
  {
    title: "Free Courses",
    listData: [
      {
        title: "Web Development Basics",
        rating: 4,
        students: "30+",
        duration: "3 weeks",
        image:
          "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Beginner",
        modules: 4,
        link: "/course/free/web-development-basics",
      },
      {
        title: "Certificate in Computer Applications",
        rating: 3,
        students: "25+",
        duration: "24 weeks",
        image:
          "https://img.freepik.com/premium-vector/game-development-concept-game-design-digital-technology-programming-codding_199064-1145.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Beginner",
        modules: 12,
        link: "/course/free/unity",
      },
    ],
  },
  {
    title: "Web Development",
    listData: [
      {
        title: "Web Development Basics",
        rating: 4,
        students: "30+",
        duration: "3 weeks",
        image:
          "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Beginner",
        modules: 4,
        link: "/course/free/web-development-basics",
      },
      {
        title: "Frontend Mastery",
        rating: 4,
        students: "40+",
        duration: "16 weeks",
        image:
          "https://img.freepik.com/free-vector/people-analyzing-financial-charts-virtual-interface_1262-19289.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 6,
        link: "/course/web-development/frontend-mastery",
      },
      {
        title: "Full Stack Development",
        rating: 4.5,
        students: "40+",
        duration: "36 weeks",
        image:
          "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Advanced",
        modules: 12,
        link: "/course/web-development/full-stack-development",
      },
    ],
  },
  {
    title: "Game Development",
    listData: [
      {
        title: "Advance Certificate in Game Development",
        rating: 3.2,
        students: "15+",
        duration: "8 weeks",
        image:
          "https://img.freepik.com/premium-vector/game-development-concept-game-design-digital-technology-programming-codding_199064-1145.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 5,
        link: "/course/game-development/adavance-certificate-in-game-development",
      },
      {
        title: "Advance Program in Game Development",
        rating: 4.2,
        students: "20+",
        duration: "10 weeks",
        image:
          "https://img.freepik.com/free-photo/colleagues-working-computer-office_23-2149307819.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Advanced",
        modules: 6,
        link: "/course/game-development/advaance-program-in-game-development",
      },
    ],
  },
  {
    title: "Data Science",
    listData: [
      {
        title: "Data Science with AI",
        rating: 4.2,
        students: "50+",
        duration: "48 weeks",
        image:
          "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Advanced",
        modules: 16,
        link: "/course/data-science/data-science-with-ai",
      },
      {
        title: "Data Analytics",
        rating: 4.1,
        students: "50+",
        duration: "48 weeks",
        image:
          "https://img.freepik.com/free-vector/smartphone-with-open-pages-landing-page_52683-22969.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Beginner",
        modules: 15,
        link: "/course/data-science/data-analytics",
      },
    ],
  },
  {
    title: "Graphics Designing",
    listData: [
      {
        title: "2D Graphics Design Mastery",
        rating: 3.8,
        students: "10+",
        duration: "24 weeks",
        image:
          "https://img.freepik.com/free-photo/creative-creator-doing-portrait-retouch-using-color-grade-late-night-professional-editing-office_482257-5161.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Basic",
        modules: 6,
        link: "/course/graphics-designing/2d-graphics-design-mastery",
      },
      {
        title: "3D Design and Animation Mastery",
        rating: 3.5,
        students: "25+",
        duration: "32 weeks",
        image:
          "https://img.freepik.com/free-photo/lifestyle-designer-using-3d-printer_23-2151019899.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermidiate",
        modules: 12,
        link: "/course/graphics-designing/3d-design-and-animation-mastery",
      },
      {
        title: "Video Editing Essentials",
        rating: 3.9,
        students: "10+",
        duration: "16 weeks",
        image:
          "https://img.freepik.com/free-photo/3d-glasses-movies-tickets-flat-lay_23-2149558744.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermidiate",
        modules: 6,
        link: "/course/graphics-designing/video-editing-essentials",
      },
      {
        title: "Graphic Design & Video Editing",
        rating: 4.4,
        students: "30+",
        duration: "32 weeks",
        image:
          "https://img.freepik.com/free-photo/photographer-using-phone-tripod-record-explaining-basic-photography-editing-techniques_482257-82181.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Advanced",
        modules: 8,
        link: "/course/graphics-designing/graphic-design-video-editing",
      },
      {
        title: "Animation & VFX Pro",
        rating: 4.1,
        students: "15+",
        duration: "48 weeks",
        image:
          "https://img.freepik.com/free-vector/broadcasting-live-event-concept_23-2148527129.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Advanced",
        modules: 10,
        link: "/course/graphics-designing/animations-vfx-pro",
      },
      {
        title: "All in one Creative Suite",
        rating: 5,
        students: "5+",
        duration: "72 weeks",
        image:
          "https://img.freepik.com/premium-photo/video-editing-software-mobile-app-tiny-people-editing-film_1029473-768970.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermidiate",
        modules: 18,
        link: "/course/graphics-designing/all-in-one-creative-suite",
      },
    ],
  },
  {
    title: "Digital Marketing",
    listData: [
      {
        title: "Digital Marketing Basics",
        rating: 3.4,
        students: "15+",
        duration: "16 weeks",
        image:
          "https://img.freepik.com/free-photo/magnifying-glass-with-seo-concepts_1134-81.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 6,
        link: "/course/digital-marketing/digital-marketing-basics",
      },
      {
        title: "Advance in Digital Marketing",
        rating: 4,
        students: "20+",
        duration: "48 weeks",
        image:
          "https://img.freepik.com/free-photo/medium-shot-men-holding-smartphone_23-2150208243.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Beginner",
        modules: 11,
        link: "/course/digital-marketing/advance-in-digital-marketing",
      },
    ],
  },
  {
    title: "Computer Courses",
    listData: [
      {
        title: "Certificate in Computer Applications",
        rating: 4,
        students: "32+",
        duration: "24 weeks",
        image:
          "https://img.freepik.com/free-vector/online-certification-with-cap_23-2148599132.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Beginner",
        modules: 5,
        link: "/course/computer-courses/certificate-in-computer-applications",
      },
      {
        title: "Diploma in Computer Applications",
        rating: 4,
        students: "40+",
        duration: "48 weeks",
        image:
          "https://img.freepik.com/free-photo/here-s-my-results-group-young-people-casual-clothes-working-modern-office_146671-16517.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 9,
        link: "/course/computer-courses/diploama-in-computer-applications",
      },
      {
        title: "Tally Prime and Busy",
        rating: 3,
        students: "50+",
        duration: "12 weeks",
        image:
          "https://img.freepik.com/free-photo/person-holds-paper-with-drawings_140725-7914.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 3,
        link: "/course/computer-courses/tally-prime-and-busy",
      },
      {
        title: "Basic Computer Course",
        rating: 3.2,
        students: "30+",
        duration: "12 weeks",
        image:
          "https://img.freepik.com/free-photo/diverse-group-students-taking-online-tests_74855-1805.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Basic",
        modules: 3,
        link: "/course/computer-courses/diploama-in-computer-applications",
      },
      {
        title: "Advance Excel",
        rating: 3.5,
        students: "45+",
        duration: "12 weeks",
        image:
          "https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        level: "Intermediate",
        modules: 4,
        link: "/course/computer-courses/adavance-excel",
      },
    ],
  },
];

// Companies

export const companies = [
  "images/amazon-logo.svg",
  "/images/geeky-ants.png",
  "/images/magic-ed-tech.png",
  "/images/quest.png",
  "/images/web-glaze.png",
  "/images/freecharge.png",
  "/images/vama.png",
  "/images/kiddopia.png",
];

// Self paced courses

export const selfPasedCourses = [
  {
    course: "Web Development",
    details: [
      {
        image:
          "https://img.freepik.com/premium-vector/children-learning-coding-computer-programming-flat-illustration-coding-kids-basic-compute_258153-311.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Html, Css, and Js",
        duration: "12+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/web-development/html-css-js",
      },
      {
        image:
          "https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Web SEO",
        duration: "8+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/web-development/web-seo",
      },
      {
        image:
          "https://img.freepik.com/free-vector/set-server-room-element-isometric-big-data-processing-data-center-database-concept_39422-909.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Full stack",
        duration: "9+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/web-development/full-stack",
      },
      {
        image:
          "https://img.freepik.com/free-vector/frontend-development-online-service-platform-website-interface-design-improvement-web-page-programming-coding-testing-online-text-editor-isolated-flat-vector-illustration_613284-3263.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Frontend",
        duration: "7+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/web-development/frontend",
      },
      {
        image:
          "https://img.freepik.com/free-photo/people-working-laptop-meeting_53876-64855.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Web Analytics",
        duration: "11+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/web-development/web-analytics",
      },
    ],
  },
  {
    course: "Game Development",
    details: [
      {
        image:
          "https://img.freepik.com/free-vector/online-games-concept-illustration_23-2148521334.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Unity Development",
        duration: "12+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/game-development/unity",
      },
      {
        image:
          "https://img.freepik.com/free-photo/back-view-caucasian-man-playing-video-games-home-computer-girlfriend-background_482257-31249.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Introduction to unreal engine",
        duration: "8+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/game-development/unreal-engine",
      },
    ],
  },
  {
    course: "Graphic Designing",
    details: [
      {
        image:
          "https://img.freepik.com/free-photo/creative-creator-doing-portrait-retouch-using-color-grade-late-night-professional-editing-office_482257-5161.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Adobe photoshoot masterclass",
        duration: "12+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/graphics-designing/adobe",
      },
      {
        image:
          "https://img.freepik.com/premium-vector/vector-logo-illustration-peacock-gradient-colorful-style_116762-7334.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Logo design with illustrator",
        duration: "8+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/graphics-designing/logo-design",
      },
    ],
  },
  {
    course: "Vfx",
    details: [
      {
        image:
          "https://img.freepik.com/premium-photo/man-makes-video-editing-film-making-video-production_61243-1298.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "Advanced SEO",
        duration: "12+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/vfx/vfx-fundamentals",
      },
      {
        image:
          "https://img.freepik.com/premium-photo/anime-style-young-woman-editing-video-3d-character-illustration_950992-2198.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
        title: "SEO for E-commerce",
        duration: "8+",
        level: "Beginner",
        students: "2.3k",
        modules: 12,
        rating: 4.9,
        link: "/course/vfx/3d-animations",
      },
    ],
  },
];

// Process

export const stepGroups = {
  enrolment: [
    {
      number: "01",
      title: "Career Counselling",
      description:
        "Speak to expert counsellors who will guide you towards the ideal program for your career aspirations.",
    },
    {
      number: "02",
      title: "University Admission",
      description:
        "Get expert support every step of the way to ease the stress of the University's admission process.",
    },
    {
      number: "03",
      title: "Flexible Payment Plans",
      description:
        "Say goodbye to hefty student loans. Get assistance in finding the best, personalized payment plans.",
    },
  ],
  completion: [
    {
      number: "01",
      title: "AI-Powered Learning",
      description:
        "Access cutting-edge AI tools and personalized learning paths tailored to your pace and style.",
    },
    {
      number: "02",
      title: "Live Sessions",
      description:
        "Engage in interactive live sessions with industry experts and get real-time doubt resolution.",
    },
    {
      number: "03",
      title: "Project-Based Learning",
      description:
        "Build real-world projects under expert guidance to strengthen your portfolio.",
    },
  ],
  acceleration: [
    {
      number: "01",
      title: "Career Mentoring",
      description:
        "Get one-on-one mentoring sessions with industry professionals to chart your career path.",
    },
    {
      number: "02",
      title: "Placement Support",
      description:
        "Receive comprehensive placement assistance including resume building and interview preparation.",
    },
    {
      number: "03",
      title: "Industry Network",
      description:
        "Connect with our vast network of industry partners for exclusive job opportunities.",
    },
  ],
};

// Advantages

export const advantages = [
  {
    image: "/images/advantages-1.avif",
    heading: "Industry-Relevant Skills",
    para: "Stay ahead in your field by mastering high-demand skills through our online sessions",
  },
  {
    image: "/images/advantages-2.avif",
    heading: "Learn by Doing",
    para: "Dive into real challenges from today’s businesses,  gaining hands-on experience.",
  },
  {
    image: "/images/advantages-3.avif",
    heading: "Career Opportunities",
    para: "Tap into a wealth of career opportunities through our established network.",
  },
  {
    image: "/images/advantages-4.avif",
    heading: "Community at the Center",
    para: "Engage with your vibrant community of learners and seasoned industry mentors ",
  },
];

// Placements and success

export const profiles = [
  {
    name: "Mudit Bisht",
    role: "Software & ML Engineer",
    salary: "INR 35 LPA",
    description:
      "Mudit Bisht is a skilled software and machine learning engineer with a passion for innovation. He excels in building AI-driven solutions and scalable software systems, contributing to cutting-edge projects.",
    image: "/images/mudit-bisht.png",
  },
  {
    name: "Pankaj Pandey",
    role: "Software Developer",
    salary: "INR 24 LPA",
    description:
      "Pankaj Pandey is a versatile software developer specializing in designing and implementing efficient software applications. His problem-solving skills and dedication drive exceptional results.",
    image: "/images/pankaj-pandey.png",
  },
  {
    name: "Aman Chauhan",
    role: "Backend Developer",
    salary: "INR 17 LPA",
    description:
      "Aman Chauhan is a backend developer with expertise in creating robust server-side architectures. His proficiency in database management and API development ensures seamless functionality.",
    image: "/images/aman-chauhan.png",
  },
  {
    name: "Vikas Kumar",
    role: "App Developer",
    salary: "INR 17 LPA",
    description:
      "Vikas Kumar is an app developer skilled in crafting user-friendly mobile applications. His innovative approach to problem-solving ensures applications that stand out in functionality and design.",
    image: "/images/vikas-kumar.png",
  },
  {
    name: "Rohit Prajapati",
    role: "App Developer",
    salary: "INR 15 LPA",
    description:
      "Rohit Prajapati is an app developer with a knack for creating intuitive and scalable mobile applications. His commitment to quality ensures exceptional user experiences.",
    image: "/images/rohit-prajapati.png",
  },
  {
    name: "Jayant Barthwal",
    role: "Game Developer",
    salary: "INR 13.5 LPA",
    description:
      "Jayant Bartwal is a game developer dedicated to designing captivating gaming experiences. His expertise in modern game engines drives the creation of visually impressive and engaging games.",
    image: "/images/jayant-barthwal.png",
  },
  {
    name: "Deepak Suyal",
    role: "Game Developer",
    salary: "INR 13 LPA",
    description:
      "Deepak Suyal specializes in game development, focusing on immersive gameplay mechanics and stunning visual effects. His dedication to quality ensures memorable gaming experiences.",
    image: "/images/deepak-suyal.png",
  },
  {
    name: "Prayas Sharma",
    role: "Backend Developer",
    salary: "INR 13 LPA",
    description:
      "Prayas Sharma is a backend developer passionate about building efficient and secure server-side systems. His contributions ensure optimal performance and scalability of applications.",
    image: "/images/prayas-sharma.png",
  },
  {
    name: "Jatin Suyal",
    role: "Game Developer",
    salary: "INR 12 LPA",
    description:
      "Jatin Suyal is a creative game developer proficient in crafting engaging and interactive gaming worlds. His attention to detail enhances the player's experience in every project.",
    image: "/images/jatin-suyal.png",
  },
  {
    name: "Pankaj Rawat",
    role: "Backend Developer",
    salary: "INR 11.5 LPA",
    description:
      "Pankaj Rawat is a backend developer with expertise in building reliable and scalable server-side systems. His focus on optimization ensures seamless application functionality.",
    image: "/images/pankaj-rawat.png",
  },
  {
    name: "Deepak Singh",
    role: "3D Artist & Animator",
    salary: "INR 11 LPA",
    description:
      "Deepak Singh is a skilled 3D artist and animator, bringing digital worlds to life through exceptional visual storytelling and design.",
    image: "/images/deepak-singh.png",
  },
  {
    name: "Ansh Aggarwal",
    role: "Full Stack Developer",
    salary: "INR 6 LPA",
    description:
      "Ansh Aggarwal is a full stack developer skilled in building modern web applications. His ability to manage both front-end and back-end development ensures a cohesive user experience.",
    image: "/images/ansh-aggarwal.png",
  },
  {
    name: "Vansh",
    role: "Data Analyst",
    salary: "INR 5.4 LPA",
    description:
      "Vansh is a data analyst with expertise in analyzing complex datasets and generating actionable insights. His strong analytical skills drive data-informed decision-making.",
    image: "/images/vansh.png",
  },
];


// modern skills

export const modernSkills = [
  {
    link: "/course/web-development",
    title: "Web Developement",
    logo: "🤖",
  },
  {
    link: "/course/app-development",
    title: "App Developement",
    logo: "📊",
  },
  {
    link: "/course/data-science",
    title: "Data Science",
    logo: "🔭",
  },
  {
    link: "/course/game-development",
    title: "Game Developement",
    logo: "🎮",
  },
  {
    link: "/course/graphics-designing",
    title: "Graphics Designing",
    logo: "✒️",
  },
  {
    link: "/course/vfx-animations",
    title: "Vfx Animations",
    logo: "📍",
  },
  {
    link: "/course/digital-marketing",
    title: "Digital Marketing",
    logo: "🛡️",
  },
  {
    link: "/course/computer-courses",
    title: "Computer Courses",
    logo: "💻",
  },
  {
    link: "/course/data-analytics",
    title: "Data Analytics",
    logo: "📈",
  },
  {
    link: "/course/2d-3d",
    title: "2D and 3D",
    logo: "🎨",
  },
];

// faqs

export const faqs = [
  {
    heading: "What is SkillsYard?",
    para: "SkillsYard is an online platform designed to help individuals enhance their skills through interactive courses and personalized learning paths.",
  },
  {
    heading: "How can I enroll in a course?",
    para: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click on the 'Enroll Now' button. You will then be guided through the registration process.",
  },
  {
    heading: "Are the courses free?",
    para: "SkillsYard offers a mix of free and paid courses. Free courses can be accessed without any payment, while premium courses require a fee.",
  },
  {
    heading: "Can I get a certificate after completing a course?",
    para: "Yes, upon successful completion of a course, you will receive a digital certificate that you can share on your LinkedIn profile or resume.",
  },
  {
    heading: "What if I have questions during a course?",
    para: "Our courses include a Q&A section where you can post questions and receive answers from instructors or fellow students. You can also reach out to our support team for additional help.",
  },
  {
    heading: "Is there a mobile app for SkillsYard?",
    para: "Yes, SkillsYard offers a mobile app that allows you to access courses on the go, track your progress, and engage with the community from your smartphone.",
  },
  {
    heading: "How can I track my progress?",
    para: "You can track your progress through your dashboard, which shows completed modules, scores, and overall progress in your enrolled courses.",
  },
  {
    heading: "What skills can I learn on SkillsYard?",
    para: "SkillsYard offers a wide range of courses across various domains, including programming, design, marketing, data analysis, and more, allowing you to develop skills relevant to your career goals.",
  },
];

// # About Page

export const missions = [
  {
    icon: FiTarget,
    title: "Career-Focused",
    desc: "Industry-aligned curriculum designed for job readiness",
  },
  {
    icon: FiGlobe,
    title: "Global Community",
    desc: "Connect with learners and experts worldwide",
  },
  {
    icon: BsBook,
    title: "Expert-Led",
    desc: "Learn from industry veterans and thought leaders",
  },
];

export const stats = [
  { number: "120+", label: "Students" },
  { number: "20+", label: "Expert Mentors" },
  { number: "90%", label: "Placement Rate" },
  { number: "50+", label: "Corporate Partners" },
];

export const teamMembers = [
  {
    name: "Ravi Vohra",
    role: "CEO & Founder",
    image: "https://skillsyard.com/public/images/ravi_vohra_img_3.jpg",
  },
  {
    name: "Jitendar Joshi",
    role: "Statistical Expert",
    image: "https://skillsyard.com/public/images/jitendar_joshi_img2.jpg",
  },
  {
    name: "Jaya Vohra",
    role: "Operational Manager",
    image: "https://skillsyard.com/public/images/jaya_vohra_ji_img2.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

export const values = [
  {
    icon: AiOutlineUserSwitch,
    title: "Student First",
    desc: "Every decision we make prioritizes our learners' success and growth.",
  },
  {
    icon: AiOutlineRocket,
    title: "Innovation",
    desc: "Constantly evolving our method to provide cutting-edge education.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    desc: "Maintaining the highest standards in everything we do.",
  },
  {
    icon: BsCheckCircle,
    title: "Impact",
    desc: "Creating meaningful change in our students' careers and lives.",
  },
];

// # Career Support Page

export const data = [
  "Career Fairs",
  "Successful Career",
  "Career Prep Sessions",
  "Networking Sessions",
  "Hackathons & Live Projects",
];

export const transitions = [
  {
    name: "Deepak Singh",
    roleTo: "Game Artist",
    companyTo: "https://skillsyard.com/public/images/kalam-labs.png",
    imageUrl: "https://skillsyard.com/public/images/Deepak.png",
    salary: 12,
  },
  {
    name: "Jatin Suyal",
    roleTo: "Game Developer",
    companyTo: "https://skillsyard.com/public/images/questt.png",
    imageUrl: "https://skillsyard.com/public/images/Jatin.png",
    salary: 12,
  },
  {
    name: "gaurav",
    roleFrom: "Application Development Analyst",
    roleTo: "Web Developer",
    companyTo: "https://skillsyard.com/public/images/magic.png",
    imageUrl: "https://skillsyard.com/public/images/Gaurav.png",
    salary: 7.5,
  },
  {
    name: "Jatin Suyal",
    roleFrom: "Application Development Analyst",
    roleTo: "Web Developer",
    companyTo: "https://skillsyard.com/public/images/questt.png",
    imageUrl: "https://skillsyard.com/public/images/Gaurav.png",
    salary: 12,
  },
  {
    name: "Prayas Sharma",
    roleTo: "Web Developer",
    companyTo: "https://skillsyard.com/public/images/freecharge.png",
    imageUrl: "https://skillsyard.com/public/images/Prayas.png",
    salary: 13,
  },
  {
    name: "Rohit Prajapati",
    roleTo: "Full Stack Developer",
    companyTo: "https://skillsyard.com/public/images/geeky_ants_img1.png",
    imageUrl: "https://skillsyard.com/public/images/rohit_prajapati_img1.jpg",
    salary: 16,
  },
];

export const careerPrep = [
  {
    imgUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_50_Customer_Service_Interview_Questions_and_Answers.jpg",
    alt: "Career Mentor",
    heading: "1 : 1 Career mentoring",
    lis: [
      "1:1 LIVE online sessions with experienced industry professionals",
      "Expert mentors guide you on the career path that’s right for you",
      "Suggestions on setting your short term and long term career goals",
      "Mentors from various domains help you gain valuable industry insights",
    ],
  },
  {
    imgUrl:
      "https://media-cdn.igrad.com/IMAGE/Redesign/Articles/lg/tips-for-your-next-interview.jpg",
    alt: "CV Review",
    heading: "CV/LinkedIn Review",
    lis: [
      "Feedback from experts to make your resume and LinkedIn profiles stand out from the crowd",
      "Personalized and detailed suggestions to improve the contentand format of your CV",
      "Tips on customizing your resume for the job profile you are applying to",
    ],
  },
  {
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/051/804/053/small/two-multiracial-arabic-hispanic-colleagues-businesspeople-men-discuss-startup-accept-common-project-satisfied-with-result-of-negotiation-give-high-five-agreement-partnership-teamwork-at-office-meeting-photo.jpg",
    alt: "Interview Preparation",
    heading: "Interview Preparation Session",
    lis: [
      "1:1 mock interviews with industry experts to help you land your dream job",
      "Guidance from our alumni currently in roles you aspire for",
      "Develop industry context with case studies and learn answers to common technical and HR questions",
    ],
  },
];

// # Sucess Stories Page

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote:
      "The structured learning path and mentorship completely transformed my career. I went from a junior developer to landing my dream job at Google in just 8 months.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Michael Rodriguez",
    role: "Data Scientist",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote:
      "The practical projects and real-world experience I gained were invaluable. The career support team went above and beyond to help me land multiple offers.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    quote:
      "The program's focus on real-world skills and industry best practices helped me transition from a non-tech background to a PM role at Amazon.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
];

export const transition = [
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    name: "Emily Zhang",
    transition: "Marketing Associate",
    salary: "Senior Product Manager",
    increase: "+120% salary",
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    name: "David Kim",
    transition: "Sales Representative",
    salary: "Technical Solutions Engineer",
    increase: "+85% salary",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Jessica Patel",
    transition: "Teacher",
    salary: "UX Designer",
    increase: "+95% salary",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "James Wilson",
    transition: "Account Manager",
    salary: "Cloud Solutions Architect",
    increase: "+150% salary",
  },
];

// # Blog page

export const allBlogs = {
  latestBlog: {
    title: "The Future of Web Development: What's Coming in 2024",
    description:
      "Explore the upcoming trends, technologies, and paradigm shifts that will shape the future of web development.",
    date: new Date("2024-04-12"),
    readingTime: "10 min read",
    href: "/blog/future-web-development-2024",
    category: "Web Development",
  },
  moreBlogs: [
    {
      title: "Understanding Modern JavaScript Features",
      description:
        "Explore the latest JavaScript features and how they can improve your code.",
      date: new Date("2024-04-10"),
      readingTime: "5 min read",
      href: "/blog/modern-javascript",
      category: "JavaScript",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "Learn best practices for building robust and scalable APIs using Node.js.",
      date: new Date("2024-04-08"),
      readingTime: "8 min read",
      href: "/blog/scalable-apis",
      category: "Node.js",
    },
    {
      title: "Getting Started with TypeScript",
      description: "A comprehensive guide to TypeScript fundamentals.",
      date: new Date("2024-04-05"),
      readingTime: "6 min read",
      href: "/blog/typescript-guide",
      category: "TypeScript",
    },
    {
      title: "Getting Started with TypeScript",
      description: "A comprehensive guide to TypeScript fundamentals.",
      date: new Date("2024-04-05"),
      readingTime: "6 min read",
      href: "/blog/typescript-guide",
      category: "TypeScript",
    },
    {
      title: "Getting Started with TypeScript",
      description: "A comprehensive guide to TypeScript fundamentals.",
      date: new Date("2024-04-05"),
      readingTime: "6 min read",
      href: "/blog/typescript-guide",
      category: "TypeScript",
    },
    {
      title: "Getting Started with TypeScript",
      description: "A comprehensive guide to TypeScript fundamentals.",
      date: new Date("2024-04-05"),
      readingTime: "6 min read",
      href: "/blog/typescript-guide",
      category: "TypeScript",
    },
  ],
};

export const blogStats = [
  { name: "Published articles", value: "3+" },
  { name: "Monthly readers", value: "100+" },
  { name: "Content categories", value: "12+" },
  { name: "Topics explored", value: "15+" },
];

export const categories = [
  { name: "All Posts", href: "/blog" },
  { name: "Development", href: "" },
  // { name: "TypeScript", href: "/blog/typescript" },
  // { name: "React", href: "/blog/react" },
  // { name: "Node.js", href: "/blog/nodejs" },
  // { name: "DevOps", href: "/blog/devops" },
];

// # Events Page

export const eventHero = [
  {
    svg: FaUsers,
    text: "1K+ Learners",
  },
  {
    svg: FaRocket,
    text: "1 Live Events",
  },
  {
    svg: FaTrophy,
    text: "Real Certificates",
  },
];

export const events: EventInterface[] = [
  {
    id: 1,
    title: "Tech Exhibition St Johns Convent Sr Sec School",
    date: "2024-03-25",
    category: "Workshop",
    participants: 1000,
    status: "Past",
    imageUrl:
      "/images/skillsyard-event-img.jpeg",
    description:
      "Skillsyard recently ignited young minds at St. John Convent School, Sant Nagar-Burari, Delhi. Our tech event sparked creativity and curiosity, empowering students with hands-on experiences in coding, robotics, and more. Together, we're shaping tomorrow's innovators. Stay tuned for more exciting collaborations and events!",
    skills: ["Event", "Exibition"],
    price: 0,
  },
];

export const eventCategories = ["all", "Algorithm", "Competition", "Workshop"];

export const eventStats = [
  {
    icon: FiAward,
    label: "Completion Rate",
    value: "94%",
    description: "Success Rate",
  },
  {
    icon: FiClock,
    label: "Average Duration",
    value: "2-3",
    description: "Hours per Event",
  },
  {
    icon: FiCalendar,
    label: "Monthly Events",
    value: "15+",
    description: "Expert guides",
  },
  {
    icon: FiUsers,
    label: "Community",
    value: "10K+",
    description: "Active Learners",
  },
];

// # Course Individual Page

export const curriculum = [
  {
    head: "Python",
    img: DiPython,
    background: "#705ded",
  },
  {
    head: "Neural Networks",
    img: BiNetworkChart,
    background: "#f1644c",
  },
  {
    head: "Hugging Face",
    img: BiSmile,
    background: "#2fa75f",
  },
  {
    head: "Deep Learning",
    img: FaPlaneArrival,
    background: "#d64b9e",
  },
  {
    head: "NLP with Generative AI",
    img: FaRobot,
    background: "#0f4089",
  },
  {
    head: "Machine Learning",
    img: GiMachineGun,
    background: "#705ded",
  },
  {
    head: "Prompt Engineering",
    img: MdEngineering,
    background: "#fe9f11",
  },
  {
    head: "Computer Vision",
    img: FaComputer,
    background: "#f1644c",
  },
];

export const courseBenefitCard = [
  {
    head: ["Learn anytime, anywhere", "Weekly online mentorship by experts"],
    para: [
      "Learn through online videos by world class faculty",
      "Get assistance on projects and reinforce concepts through weekly sessions",
    ],
    img: ["/images/learn-anytime.jpg", "/images/mentorship.jpg"],
  },
  {
    head: [
      "Network with people of similar interests",
      "Dedicated Program Support",
    ],
    para: [
      "Get a certificate",
      "Dedicated Program Manager to solve your queries",
    ],
    img: ["/images/people-network.jpg", "/images/prog-support.jpg"],
  },
];

export const courseFaqs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building web applications with server-side rendering and static site generation.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for quickly styling applications.",
  },
  {
    question: "How do I use this FAQ component?",
    answer:
      "Simply pass an array of questions and answers as props to the FAQ Accordion component.",
  },
];

export const courseHeader = [
  {
    svg: BsClock,
    text: "6 Months",
  },
  {
    svg: BiBookOpen,
    text: "24 Modules",
  },
  {
    svg: BiUser,
    text: "Live Sessions",
  },
  {
    svg: BiAward,
    text: "Certificate",
  },
];

export const courseMentor = [
  {
    image:
      "https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-76-kumar-muthuraman-f12a138eff68c7ce44f3782fd0792cfccb5d20319c589ddf5f9567506401bbb2.jpeg",
    title: "Dr. Kumar Muthuraman",
    description:
      "Faculty Director - Centre for Research and Analytics 20+ Years Work Experience",
  },
  {
    image:
      "https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-76-kumar-muthuraman-f12a138eff68c7ce44f3782fd0792cfccb5d20319c589ddf5f9567506401bbb2.jpeg",
    title: "Dr. Abhinanda Sarkar",
    description: "Faculty Director, Great Learning",
  },
  {
    image:
      "https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-76-kumar-muthuraman-f12a138eff68c7ce44f3782fd0792cfccb5d20319c589ddf5f9567506401bbb2.jpeg",
    title: "Mr. Gurumoorthy Pattabiraman",
    description:
      "Professor, Artificial Intelligence and Machine Learning, Great Learning",
  },
  {
    image:
      "https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-76-kumar-muthuraman-f12a138eff68c7ce44f3782fd0792cfccb5d20319c589ddf5f9567506401bbb2.jpeg",
    title: "Dr. Abhinanda Sarkar",
    description: "Faculty Director, Great Learning",
  },
  {
    image:
      "https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-76-kumar-muthuraman-f12a138eff68c7ce44f3782fd0792cfccb5d20319c589ddf5f9567506401bbb2.jpeg",
    title: "Mr. Gurumoorthy Pattabiraman",
    description:
      "Professor, Artificial Intelligence and Machine Learning, Great Learning",
  },
];

export const courseDetails = [
  {
    icon: BiCalendar,
    question: "Start Date",
    answer: "March 15, 2024",
  },
  {
    icon: BsClock,
    question: "Duration",
    answer: "6 Months",
  },
  {
    icon: BiBookOpen,
    question: "Learning Format",
    answer: "Online Live Classes",
  },
  {
    icon: BiAward,
    question: "Certification",
    answer: "Industry-recognized certificate",
  },
];

export const courseOverview = [
  "Build full-stack applications with React and Node.js",
  "Master modern JavaScript ES6+ features",
  "Implement authentication and authorization",
  "Work with databases and APIs",
  "Deploy applications to cloud platforms",
  "Write clean, maintainable code",
  "Practice test-driven development",
  "Collaborate using Git and GitHub",
];

export const courseFeatures = [
  {
    icon: BiPlay,
    title: "Live Classes",
    desc: "Interactive sessions with industry experts",
  },
  {
    icon: BiDownload,
    title: "Resources",
    desc: "Downloadable code and study materials",
  },
  {
    icon: BiUser,
    title: "Community",
    desc: "Access to student community and mentors",
  },
];

// # Course Category Page

export const courseCategory = [
  {
    category: "popular",
    categoryName: "Popular Courses",
    header: {
      subHeading: "Unlock Knowledge for Free:",
      heading: "Unlock Knowledge for Free:",
      para: "Explore a wide range of free courses designed to help you learn new skills and advance your knowledge—at no cost. Start your learning journey today!",
      subPoints: [
        {
          svg: BiUser,
          heading1: "Expert Trainers",
          heading2: "Learn from professionals",
        },
        {
          svg: BiLaptop,
          heading1: "Online Learning",
          heading2: "Learn from anywhere",
        },
        {
          svg: FaAward,
          heading1: "Certification",
          heading2: "Industry recognized",
        },
        {
          svg: BsFileEarmarkCode,
          heading1: "Practical Projects",
          heading2: "Build real apps",
        },
      ],
      imageUrl:
        "https://img.freepik.com/free-photo/knowledge-learning-academics-study-scissors-ruler_53876-124456.jpg?ga=GA1.1.188851069.1725974777&semt=ais_hybrid",
    },
    allCourses: [
      {
        title: "Complete HTML & CSS",
        duration: "3 months",
        isFree: true,
        hasLiveClass: true,
        hasCertification: true,
        level: "Beginner",
        imageUrl:
          "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "JavaScript Fundamentals",
        duration: "4 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Beginner",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "React.js Development",
        duration: "5 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Intermediate",
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Full Stack Web Development",
        duration: "10 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Advanced",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Node.js Backend Development",
        duration: "4 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Intermediate",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "UI/UX Design Fundamentals",
        duration: "3 months",
        isFree: true,
        hasLiveClass: false,
        hasCertification: true,
        level: "Intermediate",
        imageUrl:
          "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
    ],
    aboutCourses: [
      {
        title: "What are the features of our free courses?",
        content: [
          "All courses are completely free with no hidden costs.",
          "Courses are available 24/7, allowing you to learn at your own pace.",
          "Each course includes interactive exercises to enhance learning.",
          "Access to community support and discussion forums.",
        ],
      },
      {
        title: "What advantages do free courses offer?",
        content: [
          "They allow you to acquire new skills without financial commitment.",
          "You can explore various topics before deciding on a career path.",
          "Flexible learning options help fit education into a busy schedule.",
          "Provides a risk-free opportunity to test your interest in new fields.",
        ],
      },
      {
        title: "Are free courses beginner-friendly?",
        content: [
          "Yes, courses are designed for all levels, especially beginners.",
          "Each course includes foundational lessons and easy-to-follow guides.",
          "No prior experience is required to start learning.",
          "Support materials and resources are provided to help beginners succeed.",
        ],
      },
      {
        title: "What topics are covered in our free courses?",
        content: [
          "Our courses cover a wide range of subjects including programming, design, marketing, and more.",
          "Each topic is designed to provide comprehensive knowledge from basics to advanced levels.",
          "We offer courses on both technical skills and soft skills development.",
          "New topics and courses are added regularly to keep content fresh.",
        ],
      },
      {
        title: "How can free courses help in career growth?",
        content: [
          "Gain practical skills that are in demand across industries.",
          "Build a strong foundation for advanced, paid certifications or degrees.",
          "Add new skills to your resume without financial investment.",
          "Network with like-minded learners and professionals in the field.",
        ],
      },
    ],
  },
  {
    category: "free",
    categoryName: "Free Courses",
    header: {
      subHeading: "No-cost learning, endless possibilities.",
      heading: "Unlock Knowledge for Free:",
      para: "Explore a wide range of free courses designed to help you learn new skills and advance your knowledge—at no cost. Start your learning journey today!",
      subPoints: [
        {
          svg: BiUser,
          heading1: "Expert Trainers",
          heading2: "Learn from professionals",
        },
        {
          svg: BiLaptop,
          heading1: "Online Learning",
          heading2: "Learn from anywhere",
        },
        {
          svg: FaAward,
          heading1: "Certification",
          heading2: "Industry recognized",
        },
        {
          svg: BsFileEarmarkCode,
          heading1: "Practical Projects",
          heading2: "Build real apps",
        },
      ],
      imageUrl:
        "https://img.freepik.com/free-photo/knowledge-learning-academics-study-scissors-ruler_53876-124456.jpg?ga=GA1.1.188851069.1725974777&semt=ais_hybrid",
    },
    allCourses: [
      {
        title: "Complete HTML & CSS",
        duration: "3 months",
        isFree: true,
        hasLiveClass: true,
        hasCertification: true,
        level: "Beginner",
        imageUrl:
          "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "JavaScript Fundamentals",
        duration: "4 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Beginner",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "React.js Development",
        duration: "5 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Intermediate",
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Full Stack Web Development",
        duration: "10 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Advanced",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Node.js Backend Development",
        duration: "4 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Intermediate",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "UI/UX Design Fundamentals",
        duration: "3 months",
        isFree: true,
        hasLiveClass: false,
        hasCertification: true,
        level: "Intermediate",
        imageUrl:
          "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
    ],
    aboutCourses: [
      {
        title: "What are the features of our free courses?",
        content: [
          "All courses are completely free with no hidden costs.",
          "Courses are available 24/7, allowing you to learn at your own pace.",
          "Each course includes interactive exercises to enhance learning.",
          "Access to community support and discussion forums.",
        ],
      },
      {
        title: "What advantages do free courses offer?",
        content: [
          "They allow you to acquire new skills without financial commitment.",
          "You can explore various topics before deciding on a career path.",
          "Flexible learning options help fit education into a busy schedule.",
          "Provides a risk-free opportunity to test your interest in new fields.",
        ],
      },
      {
        title: "Are free courses beginner-friendly?",
        content: [
          "Yes, courses are designed for all levels, especially beginners.",
          "Each course includes foundational lessons and easy-to-follow guides.",
          "No prior experience is required to start learning.",
          "Support materials and resources are provided to help beginners succeed.",
        ],
      },
      {
        title: "What topics are covered in our free courses?",
        content: [
          "Our courses cover a wide range of subjects including programming, design, marketing, and more.",
          "Each topic is designed to provide comprehensive knowledge from basics to advanced levels.",
          "We offer courses on both technical skills and soft skills development.",
          "New topics and courses are added regularly to keep content fresh.",
        ],
      },
      {
        title: "How can free courses help in career growth?",
        content: [
          "Gain practical skills that are in demand across industries.",
          "Build a strong foundation for advanced, paid certifications or degrees.",
          "Add new skills to your resume without financial investment.",
          "Network with like-minded learners and professionals in the field.",
        ],
      },
    ],
  },
  {
    category: "web-development",
    categoryName: "Web Development",
    header: {
      subHeading: "Craft modern web experiences.",
      heading: "Become a Web Developer:",
      para: "Master the art of web development, from front-end to back-end, with our comprehensive courses designed for all levels.",
      subPoints: [
        {
          svg: BiUser,
          heading1: "Professional Instructors",
          heading2: "Industry expertise",
        },
        {
          svg: FaAward,
          heading1: "Certification",
          heading2: "Globally recognized",
        },
        {
          svg: BsFileEarmarkCode,
          heading1: "Hands-on Projects",
          heading2: "Build real applications",
        },
        {
          svg: BiLaptop,
          heading1: "Live Coding",
          heading2: "Interactive sessions",
        },
      ],
      imageUrl:
        "https://img.freepik.com/free-photo/programmer-drinking-cup-coffee-morning-while-building-firewalls_482257-104079.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
    },
    allCourses: [
      {
        title: "JavaScript Fundamentals",
        duration: "4 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Beginner",
        imageUrl:
          "https://img.freepik.com/premium-vector/app-development-concept_23-2148687726.jpg?ga=GA1.1.459621482.1725013345&semt=ais_hybrid",
      },
    ],
    aboutCourses: [
      {
        title: "What skills can I gain from Web Development courses?",
        content: [
          "Comprehensive knowledge of front-end technologies like HTML, CSS, and JavaScript.",
          "Hands-on experience with back-end frameworks and databases.",
          "Understanding of responsive design and cross-browser compatibility.",
          "Building scalable and high-performance applications.",
        ],
      },
    ],
  },
  {
    category: "game-development",
    categoryName: "Game Development",
    header: {
      subHeading: "Create immersive gaming experiences.",
      heading: "Master Game Development:",
      para: "Learn to design, develop, and deploy games with our specialized courses that cover game engines, graphics, and gameplay mechanics.",
      subPoints: [
        {
          svg: BiUser,
          heading1: "Expert Mentors",
          heading2: "Guided by industry pros",
        },
        {
          svg: FaAward,
          heading1: "Certification",
          heading2: "Industry relevant",
        },
        {
          svg: BsFileEarmarkCode,
          heading1: "Projects",
          heading2: "Develop real apps",
        },
        {
          svg: BiLaptop,
          heading1: "Flexible Learning",
          heading2: "Study from anywhere",
        },
      ],
      imageUrl:
        "https://img.freepik.com/premium-vector/app-development-web-design-layered-user-interfaces-screens-touch-screen-smartphone_895423-662.jpg?ga=GA1.1.188851069.1725974777&semt=ais_hybrid",
    },
    allCourses: [
      {
        title: "Unity Game Development",
        duration: "6 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Intermediate",
        imageUrl: "https://example.com/react-native-course-image.jpg",
      },
    ],
    aboutCourses: [
      {
        title: "Why choose our App Development courses?",
        content: [
          "Learn to develop cross-platform apps with React Native.",
          "Hands-on projects to build your portfolio.",
          "Insights into app store deployment.",
          "Industry-relevant skills for career growth.",
        ],
      },
    ],
  },
  {
    category: "data-analytics",
    categoryName: "Data Analytics",
    header: {
      subHeading: "Transform data into actionable insights.",
      heading: "Master Data Analytics:",
      para: "Learn to analyze, interpret, and visualize data for informed decision-making in business and beyond.",
      subPoints: [
        {
          svg: BiUser,
          heading1: "Expert Mentors",
          heading2: "Guided by data experts",
        },
        {
          svg: FaAward,
          heading1: "Certification",
          heading2: "Globally recognized",
        },
        {
          svg: BsFileEarmarkCode,
          heading1: "Hands-On Projects",
          heading2: "Real-world datasets",
        },
        {
          svg: BiLaptop,
          heading1: "Flexible Learning",
          heading2: "Learn at your pace",
        },
      ],
      imageUrl:
        "https://img.freepik.com/free-photo/laptop-computer-with-marketing-statistics-graphs-screen-standing-table-startup-office-coworkers-discussing-company-strategy-background-employees-working-overtime-startup-office_482257-66472.jpg?ga=GA1.1.188851069.1725974777&semt=ais_hybrid",
    },
    allCourses: [
      {
        title: "Data Analytics with Python",
        duration: "4 months",
        isFree: false,
        hasLiveClass: true,
        hasCertification: true,
        level: "Beginner",
        imageUrl: "https://example.com/data-analytics-course-image.jpg",
      },
    ],
    aboutCourses: [
      {
        title: "Why choose our Data Analytics courses?",
        content: [
          "Learn Python, SQL, and data visualization tools.",
          "Work with real-world datasets to enhance problem-solving skills.",
          "Understand business intelligence and data storytelling.",
          "Gain skills in demand across industries.",
        ],
      },
    ],
  },
];
