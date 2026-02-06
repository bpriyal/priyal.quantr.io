import { Project, HallOfFameItem, ArticleNode, UserProfile, ResearchItem } from './types';

export const USER_PROFILE: UserProfile = {
  name: "Priyal Bhagwanani",
  role: "Quant Researcher & Engineer",
  shortBio: "Is there a world where you are no one and yet everything?",
  fullBioMarkdown: `
# About Me

I am a quantitative researcher with a passion for systematic trading, high-performance computing, and mathematical modeling.

My work bridges the gap between theoretical probability and production-grade software engineering. I have a deep interest in:

*   **Stochastic Calculus**
*   **System Architecture**
*   **Vedic Narratives & Semiotics**
*   **Culinary Arts**

Currently building systems that scale.
  `,
  email: "contact@priyal.dev",
  github: "https://github.com/bpriyal",
  linkedin: "https://linkedin.com/in/bpriyal",
  newsletter: "https://bpriyal.substack.com/",
  avatarUrl: "https://picsum.photos/200/200" // Placeholder
};

export const PROJECTS: Project[] = [
  {
    id: "algo-puzzles",
    title: "Algorithmic Puzzles Lab",
    description: "A comprehensive collection of solutions to complex algorithmic challenges, optimized for time and space complexity.",
    link: "https://github.com/bpriyal/algopuzzles_solutions.lab",
    dateRange: "Jan 2023 - Present",
    tags: ["C++", "Python", "Algorithms"],
    featured: true
  },
  {
    id: "geo-adapter",
    title: "Geospatial Context Adapter",
    description: "C++ implementation for real-time geospatial data processing using S2 geometry cells.",
    link: "https://github.com/bpriyal/s2GeoAdapter",
    dateRange: "Aug 2023 - Dec 2023",
    tags: ["C++", "S2 Geometry", "System Design"],
    featured: true
  },
  {
    id: "worldquant",
    title: "Alpha Factors Research",
    description: "Proprietary alpha factor generation and backtesting framework.",
    link: "https://github.com/bpriyal/worldquant-projects",
    dateRange: "2022 - 2023",
    tags: ["Python", "Pandas", "Finance"],
    featured: true
  },
  {
     id: "visual-glyph",
     title: "Polyhedral Glyph Framework",
     description: "Interactive high-dimensional visualization framework using generalized polyhedral glyphs.",
     link: "https://github.com/bpriyal",
     dateRange: "2021",
     tags: ["Visualization", "WebGL", "Math"],
     featured: false
  }
];

export const RESEARCH_ITEMS: ResearchItem[] = [
    {
        id: "goldbach-2026",
        title: "Generational Emergence of Even Numbers from Cumulative Prime Sumsets: A Structural Analysis Toward the Strong Goldbach Conjecture",
        date: "2026-01-22",
        type: "Preprint",
        doi: "10.5281/ZENODO.18331852",
        contributors: ["Priyal Bhagwanani"],
        link: "https://doi.org/10.5281/zenodo.18331852"
    },
    {
        id: "polyhedral-2026",
        title: "A Generalized Polyhedral Glyph Framework for Interactive High-Dimensional Visualization",
        date: "2026-01-21",
        type: "Preprint",
        doi: "10.5281/ZENODO.18322291",
        contributors: ["Priyal Bhagwanani"],
        link: "https://doi.org/10.5281/zenodo.18322291"
    },
    {
        id: "game-theory-poster",
        title: "Best Research Poster: Adv Algorithmic Game Theory",
        date: "2019",
        journalOrConference: "ACM, IIT Gandhinagar",
        type: "Poster",
        contributors: ["Priyal Bhagwanani"]
    }
];

export const HALL_OF_FAME: HallOfFameItem[] = [
  // --- 2019-Present ---
  {
    id: "covid-vol",
    title: "Maharashtra Zone Coordinator",
    organization: "Covid Relief",
    location: "Remote/Local",
    date: "2019 - 2020",
    description: "Coordinated logistics for oxygen and food supply.",
    category: "Volunteering"
  },
  {
    id: "cml-bda",
    title: "Group Coordinator",
    organization: "CML/BDA",
    date: "2019 - 2020",
    category: "Leadership"
  },
  {
    id: "ncat-2019",
    title: "All India Rank 15",
    organization: "National Creativity and Aptitude Test (NCAT)",
    location: "India",
    date: "2019",
    description: "National Aptitude Olympiad.",
    category: "Award"
  },
  {
    id: "lnmiit-counselling",
    title: "Admission Counselling Head",
    organization: "LNM IIT",
    date: "2019",
    category: "Leadership"
  },
   {
    id: "ta-cmu",
    title: "Teaching Assistant",
    organization: "LNM IIT (for Prof Philip Miller, CMU)",
    date: "2019",
    description: "Lab TA for visiting faculty.",
    category: "Leadership"
  },
  {
    id: "bell-cakes",
    title: "Baking Diploma",
    organization: "Bell Cakes",
    location: "Bonn, Germany",
    date: "2019",
    description: "Completed comprehensive diploma in patisserie and sugar arts.",
    category: "Culinary"
  },
  // --- 2018 ---
  {
    id: "sous-chef",
    title: "Sous Chef Experience",
    organization: "Grand Hotel",
    location: "Mumbai",
    date: "2018",
    description: "Worked primarily on the line during dinner service, managing sauce stations.",
    category: "Culinary"
  },
  {
      id: "asme-host",
      title: "Event Host",
      organization: "ASME E-fest LNMIIT",
      date: "2018",
      category: "Leadership"
  },
  {
      id: "lnmiit-member",
      title: "Honoured General Body Member",
      organization: "LNM IIT Student Council",
      date: "2018",
      category: "Leadership"
  },
  // --- 2017 ---
  {
      id: "lnmiit-senator",
      title: "Senator - Sports Committee",
      organization: "LNM IIT Student Council",
      date: "2017",
      category: "Leadership"
  },
  // --- 2016 ---
  {
      id: "lnmiit-volleyball",
      title: "Volleyball Team A",
      organization: "LNM IIT",
      date: "2016 - 2018",
      category: "Sports"
  },
  {
    id: "cept-rank",
    title: "All India Rank 11",
    organization: "CEPT Aptitude Test",
    date: "2016",
    category: "Award",
    link: "https://cept.ac.in"
  },
  {
      id: "cbse-12",
      title: "94.3% Class 12 Board Exams",
      organization: "CBSE",
      date: "2016",
      category: "Award"
  },
  // --- 2014 ---
  {
    id: "illustrator-mea",
    title: "Recognised Illustrator - Chitrakatha",
    organization: "Ministry Of External Affairs India",
    location: "India",
    date: "2014",
    description: "Yogkala Chitrakala Illustration Gold Medallist.",
    category: "Arts"
  },
  {
      id: "cbse-10",
      title: "CBSE Merit Scholar (Top 10)",
      organization: "CBSE Board",
      date: "2014",
      description: "10/10 CGPA.",
      category: "Award"
  },
  // --- 2013 ---
  {
    id: "group-singing",
    title: "All India Rank 4",
    organization: "National Group Singing Competition",
    location: "India",
    date: "2013",
    category: "Arts"
  },
  {
      id: "sanskrit-vocal",
      title: "State Rank 1, Sanskrit Group Vocal",
      organization: "Bharat Vikas Parishad",
      date: "2013",
      category: "Arts"
  },
  {
      id: "folk-vocal",
      title: "State Rank 1, Folk Group Vocal",
      organization: "Bharat Vikas Parishad",
      location: "Gujarat",
      date: "2013",
      category: "Arts"
  },
  {
      id: "drawing-board",
      title: "96% Secondary Drawing Board Exam",
      organization: "Maharashtra State Board",
      date: "2013",
      category: "Arts"
  },
  // --- 2012 ---
  {
    id: "volleyball-dav",
    title: "Established Girl's Volleyball Team",
    organization: "DAV International School",
    date: "2012",
    category: "Sports"
  },
  {
      id: "studio-artist",
      title: "Studio Recording Artist",
      organization: "NIPA Dramatics",
      location: "Gujarat",
      date: "2012",
      category: "Arts"
  },
  {
      id: "dav-head",
      title: "Head of Student Council",
      organization: "DAV International School",
      date: "2011 - 2012",
      description: "Twice elected.",
      category: "Leadership"
  },
  // --- Pre 2012 ---
  {
      id: "champak",
      title: "Writing Champion",
      organization: "Champak Children Magazine",
      date: "2010",
      category: "Arts"
  },
  {
      id: "air-host",
      title: "Student Host",
      organization: "All India Radio",
      date: "2010",
      category: "Arts"
  },
  {
      id: "student-advocate",
      title: "Student Advocate",
      organization: "Center for Science and Environment",
      date: "2008",
      category: "Volunteering"
  },
  {
      id: "cartoon-network",
      title: "Voice Artist - Gali Gali Sim Sim",
      organization: "Cartoon Network",
      date: "2007",
      description: "Voice artist for the Mehendi episode.",
      category: "Arts"
  }
];

export const ARTICLE_TREE: ArticleNode[] = [
  {
    id: "calculus",
    title: "Calculus",
    type: "folder",
    children: [
      {
        id: "lagrange",
        title: "Lagrange Multipliers",
        type: "file",
        path: "/articles/calculus/lagrange_multipliers.html",
        content: "# Lagrange Multipliers\n\nMethod for finding the local maxima and minima of a function subject to equality constraints.\n\n$$ \\mathcal{L}(x, y, \\lambda) = f(x, y) - \\lambda g(x, y) $$"
      },
      {
        id: "finite-diff",
        title: "Finite Difference PDE",
        type: "file",
        path: "/articles/calculus/finite-difference-pde.html",
        content: "# Finite Difference Methods\n\nNumerical methods for solving differential equations by approximating derivatives with finite differences."
      }
    ]
  },
  {
    id: "probability",
    title: "Probability",
    type: "folder",
    children: [
      {
        id: "monty-hall",
        title: "Monty Hall Problem",
        type: "file",
        path: "/articles/probability/monty-hall.html",
        content: "# The Monty Hall Problem\n\nA counter-intuitive statistics puzzle.\n\nSwitching doors increases your probability of winning to $\\frac{2}{3}$."
      },
      {
        id: "russian-roulette",
        title: "Russian Roulette Logic",
        type: "file",
        path: "/articles/probability/russian-roulette.html",
        content: "# Probability in Survival\n\nAnalyzing sequential probability in lethal games."
      }
    ]
  },
  {
    id: "sys-arch",
    title: "System Architecture",
    type: "folder",
    children: [
      {
        id: "design-patterns",
        title: "Design Patterns",
        type: "folder",
        children: [
           {
             id: "singleton",
             title: "The Singleton",
             type: "file",
             path: "/articles/system-arch/design-patterns/singleton.html",
             content: "# Singleton Pattern\n\nEnsure a class has only one instance and provide a global point of access to it."
           }
        ]
      }
    ]
  }
];