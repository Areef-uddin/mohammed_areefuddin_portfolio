/**
 * Mohammed Areefuddin - Professional Portfolio Data
 * Extracted directly from official resume with zero dummy content.
 */

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent: boolean;
  projectContext?: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  deployment: {
    frontend?: string;
    backend?: string;
    adminPanel?: string;
  };
  highlights: string[];
  architectureOverview: string;
  keyFeatures: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experienceNote: string;
    highlight?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Mohammed Areefuddin",
  title: "Flutter Developer",
  location: "Zaheerabad City, Sangareddy District, Telangana, India",
  phone: "+91 73868 72991",
  phoneClean: "+917386872991",
  email: "mdareefuddin2@gmail.com",
  github: "https://github.com/Areef-uddin",
  githubHandle: "github.com/Areef-uddin",
  resumePdfUrl: "/assets/aistudio/Areefuddin_Resume_Updated_0f8c589f.pdf",
  summary:
    "Flutter Developer with hands-on experience building and maintaining cross-platform applications for Android, iOS, and Web. Currently working on Zivbit at Starforce Facilities Management Services LLC, where I built the partner app, fix issues across the partner app and admin panel, and support AI-assisted social media content creation. Also building a personal AI-based video conferencing project using Flutter and Django, with deployment on Firebase Hosting, Render, and Vercel.",
  platforms: ["Android", "iOS", "Web"],
  coreStack: ["Flutter", "Dart", "Django", "Python", "Firebase", "WebSockets", "Gemini API"]
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "starforce",
    role: "Flutter Developer",
    company: "Starforce Facilities Management Services LLC",
    period: "10 Sep 2026 – Present",
    location: "On-site / Hybrid",
    isCurrent: true,
    projectContext: "Zivbit app | Manpower and facilities services platform",
    highlights: [
      "Built the Zivbit partner app using Flutter, contributing to the app's implementation and functionality.",
      "Fix and troubleshoot bugs across the partner app and admin panel to improve reliability and user experience.",
      "Support creation of AI-assisted Instagram posts and promotional videos for Zivbit's service marketing."
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Admin Panel Integration", "Gemini AI", "Android", "iOS"]
  },
  {
    id: "zerlak",
    role: "Flutter Developer Intern",
    company: "Zerlak Technology Private Limited",
    period: "Ended 5 Sep 2026",
    location: "Remote",
    isCurrent: false,
    highlights: [
      "Translated Figma designs into responsive Flutter screens and implemented UI according to design specifications.",
      "Integrated Firebase services and collaborated through Git/GitHub for source control and version management."
    ],
    technologies: ["Flutter", "Dart", "Figma-to-Code", "Firebase", "Git", "GitHub"]
  },
  {
    id: "innoit",
    role: "Flutter Developer Intern",
    company: "Innoit Labs Pvt Ltd",
    period: "3 Months",
    location: "Hyderabad, Telangana",
    isCurrent: false,
    highlights: [
      "Converted UI/UX mockups into functional Flutter screens and built responsive components using Flutter widgets.",
      "Collaborated with the development team using Git and GitHub."
    ],
    technologies: ["Flutter Widgets", "UI/UX Mockups", "Responsive Layouts", "Git", "GitHub"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "ai-video-conferencing",
    title: "AI-Based Video Conferencing App",
    subtitle: "Real-time communication with AI intelligence",
    category: "Personal Project",
    technologies: ["Flutter", "Django", "Firebase Hosting", "Render", "Vercel", "WebSockets", "Gemini API"],
    deployment: {
      frontend: "Firebase Hosting (Flutter Web / Mobile)",
      backend: "Render (Django & WebSockets)",
      adminPanel: "Vercel"
    },
    highlights: [
      "Developing a personal AI-based video conferencing application with Flutter as the frontend and Django as the backend.",
      "Deployed the backend on Render, the frontend on Firebase Hosting, and the admin panel on Vercel.",
      "Engineered real-time meeting rooms utilizing WebSockets with AI-assisted features powered by Gemini API."
    ],
    architectureOverview:
      "Frontend built with Flutter cross-platform architecture communicating via WebSockets and REST APIs to a Django ASGI/WSGI backend hosted on Render, with administrative dashboards served on Vercel and client assets on Firebase Hosting.",
    keyFeatures: [
      "Cross-platform Flutter video conferencing client",
      "Django ASGI backend on Render handling room coordination",
      "WebSockets for real-time signaling and state synchronization",
      "AI-assisted summarization and content generation via Gemini API",
      "Distributed cloud deployment: Firebase Hosting + Render + Vercel"
    ]
  },
  {
    id: "zivbit-partner-app",
    title: "Zivbit Partner Application & Platform",
    subtitle: "Manpower & facilities services ecosystem",
    category: "Commercial Production — Starforce Facilities Management Services LLC",
    technologies: ["Flutter", "Dart", "Firebase", "Admin Panel", "AI-Assisted Media", "Android", "iOS", "Web"],
    deployment: {
      frontend: "Flutter Android & iOS Partner App",
      backend: "Facilities Management Backend & Admin Panel",
      adminPanel: "Live Admin Operations Suite"
    },
    highlights: [
      "Built the Zivbit partner app using Flutter, contributing to the app's full implementation and feature sets.",
      "Diagnosed and resolved critical bugs across partner app and admin panel, significantly boosting operational stability.",
      "Supported creation of AI-assisted promotional video media and Instagram marketing content for Zivbit service outreach."
    ],
    architectureOverview:
      "Cross-platform client architecture using Flutter custom widgets and reactive state bindings, integrated with service provider scheduling pipelines and administrative web consoles.",
    keyFeatures: [
      "Partner onboarding and job request assignment flows",
      "Custom Flutter widget hierarchy optimized for low-latency operations",
      "Robust bug troubleshooting across partner app & admin panel",
      "AI-assisted promotional media workflows for digital outreach"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    description: "Core programming languages and foundational frameworks",
    skills: [
      { name: "Dart", level: "Primary", experienceNote: "Deep Flutter widget creation, async streams, sound null safety", highlight: true },
      { name: "Flutter", level: "Primary", experienceNote: "Cross-platform mobile (Android/iOS) and Web application architecture", highlight: true },
      { name: "Python", level: "Core", experienceNote: "Server-side scripting, Django web backend engineering, API pipelines" },
      { name: "Django", level: "Core", experienceNote: "REST framework, ASGI/WSGI WebSockets, backend routing and authentication" }
    ]
  },
  {
    category: "Mobile & UI Development",
    description: "Responsive layouts and pixel-perfect design translation",
    skills: [
      { name: "Cross-platform (Android/iOS/Web)", level: "Production", experienceNote: "Single-codebase deployment with platform-adaptive behavior" },
      { name: "Responsive Layouts", level: "Production", experienceNote: "LayoutBuilder, MediaQuery, flexible grid constraints" },
      { name: "Flutter Widgets", level: "Specialist", experienceNote: "Custom StatelessWidget, StatefulWidget, render tree optimization" },
      { name: "Figma-to-Code Implementation", level: "Production", experienceNote: "Precision conversion from design mockups to production screens" },
      { name: "Bug Fixing & Troubleshooting", level: "Production", experienceNote: "Root cause analysis across mobile apps and web admin panels" }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Server architecture, real-time protocols, and endpoints",
    skills: [
      { name: "Django REST Framework", level: "Proficient", experienceNote: "Robust RESTful endpoints, serializers, authentication" },
      { name: "WebSockets", level: "Proficient", experienceNote: "Full-duplex real-time communication for video room signaling" },
      { name: "REST APIs Integration", level: "Production", experienceNote: "HTTP client, error interception, JSON serialization in Dart" },
      { name: "Admin Panel Synchronization", level: "Production", experienceNote: "Connecting mobile clients with administrative management consoles" }
    ]
  },
  {
    category: "AI & Integrations",
    description: "Intelligent APIs and automated content workflows",
    skills: [
      { name: "Gemini API", level: "Applied", experienceNote: "API integration for intelligent text analysis and contextual features" },
      { name: "AI-Assisted Content Creation", level: "Applied", experienceNote: "Generative workflows for marketing videos & Instagram content" },
      { name: "AI-Based Video Conferencing", level: "Applied", experienceNote: "Integrated smart video meeting assistance and pipeline" }
    ]
  },
  {
    category: "Deployment & Tools",
    description: "Cloud hosting, version control, and development environments",
    skills: [
      { name: "Firebase Hosting", level: "Production", experienceNote: "Fast client deployment and static asset CDN" },
      { name: "Render", level: "Production", experienceNote: "Python/Django backend containerized service deployment" },
      { name: "Vercel", level: "Production", experienceNote: "Admin dashboard deployment and instant previews" },
      { name: "Git & GitHub", level: "Production", experienceNote: "Branching workflows, PR reviews, version management" },
      { name: "Android Studio", level: "Tooling", experienceNote: "Android build tools, Gradle, emulators, profiling" },
      { name: "VS Code", level: "Tooling", experienceNote: "Primary IDE with Dart & Flutter SDK tooling extensions" }
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "St. Mary's Group of Institutions",
    type: "Bachelor's Degree",
    focus: "Computer Science fundamentals, software engineering, algorithms, data structures"
  },
  {
    degree: "Higher Secondary Certificate (Intermediate)",
    institution: "Sravanthi Junior College",
    type: "Intermediate Education",
    focus: "Mathematics, Physics, Chemistry stream"
  }
];

export const SPOKEN_LANGUAGES = [
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Hindi", proficiency: "Native / Bilingual" },
  { language: "Telugu", proficiency: "Professional / Fluent" }
];
