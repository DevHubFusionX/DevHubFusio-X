export interface SystemPart {
  id: string;
  name: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  metric: string;
  year: string;
  image: string;
  status?: "Live" | "Scaled" | "In Progress" | "Deprecated";
  architecture?: string[];
  liveLink?: string;
  systemParts?: SystemPart[];
  challenge?: string;
  solution?: string;
  role?: string;
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Comtranz Global",
    "category": "Service Operations Architecture",
    "description": "Engineered a high-performance service ecosystem for a premier cleaning enterprise in Nigeria, featuring custom scheduling logic and a conversion-optimized client interface.",
    "metric": "85% Booking Automation",
    "year": "2024",
    "status": "Live",
    "architecture": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Vercel"
    ],
    "image": "/DevHubFusion-X/projects/Cleaner-Image.png",
    "liveLink": "https://www.comtranzglobal.com",
    "challenge": "The client faced significant operational bottlenecks due to manual scheduling and a fragmented booking process. They needed a system that could handle complex service availability, reduce human error, and provide a seamless experience for high-intent customers.",
    "solution": "I designed and implemented a bespoke booking engine that automates the entire scheduling lifecycle. By integrating intelligent availability logic and a friction-free UI, we transformed the customer journey from a multi-step manual process into a sub-30-second digital experience.",
    "role": "Lead Systems Architect & Frontend Engineer",
    "outcomes": [
      "Achieved 85% automation of the previously manual booking workflow",
      "Reduced average booking time from 15 minutes to under 30 seconds",
      "Implemented a scalable component architecture for future service expansions",
      "Optimized frontend performance for stable mobile operation across Nigeria"
    ],
    "systemParts": [
      {
        "id": "dev",
        "name": "Service Hub",
        "description": "Custom booking engine with specialized scheduling algorithms for cleaning operations."
      },
      {
        "id": "deploy",
        "name": "Client Portal",
        "description": "High-conversion front-end interface optimized for rapid service discovery."
      }
    ]
  },
  {
    "id": 2,
    "title": "Dara Express",
    "category": "Logistics Systems",
    "description": "Comprehensive logistics and delivery platform optimized for cross-regional shipping and real-time tracking.",
    "metric": "Global Shipping",
    "year": "2024",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Dara-Logistics.png",
    "liveLink": "https://daraexpress.com",
    "architecture": ["Next.js", "Tracking API", "Fleet Manager", "Edge CDN"],
    "challenge": "Fragmented tracking systems and poor visibility into cross-regional logistics were causing delays and customer dissatisfaction. The requirement was a centralized, real-time platform that could synchronize driver dispatch with global tracking data.",
    "solution": "Engineered a robust logistics dashboard that aggregates data from multiple tracking APIs into a single source of truth. The system features a custom Fleet Manager module for optimized dispatching and utilizes Edge CDNs for low-latency status updates globally.",
    "role": "Full-Stack Engineer & Logistics Strategist",
    "outcomes": [
      "Unified disparate tracking data into a single, real-time interface",
      "Increased fleet efficiency by 25% through optimized dispatch logic",
      "Reduced tracking latency by 40% using edge caching strategies",
      "Successfully scaled to handle cross-border shipping volume"
    ],
    "systemParts": [
      {
        "id": "track",
        "name": "Live Tracking",
        "description": "Real-time delivery tracking system for end-to-end package visibility."
      },
      {
        "id": "fleet",
        "name": "Fleet Ops",
        "description": "Integrated management system for driver dispatch and route optimization."
      }
    ]
  },
  {
    "id": 3,
    "title": "Blyn",
    "category": "Social Infrastructure",
    "description": "A high-fidelity social networking platform designed for seamless user engagement and real-time interactions.",
    "metric": "Instant Search",
    "year": "2024",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Dating-app.png",
    "liveLink": "https://blyn-qe.vercel.app",
    "architecture": ["React", "State Management", "Real-time sync", "Auth Service"],
    "challenge": "Building a social platform that feels 'instant' requires solving complex state synchronization and discovery challenges. The goal was to eliminate perceived lag in user interactions and matching algorithms.",
    "solution": "Developed a high-fidelity interface using advanced state management and optimized discovery engines. I implemented proactive data fetching and optimistic UI updates to ensure a frictionless social experience even on variable network conditions.",
    "role": "Product Engineer & UI Specialist",
    "outcomes": [
      "Achieved sub-200ms discovery results through optimized database indexing",
      "Reduced user-reported lag by 60% with optimistic UI patterns",
      "Engineered a modular component library for rapid social feature iteration",
      "Implemented secure, low-latency authentication for user data protection"
    ],
    "systemParts": [
      {
        "id": "social",
        "name": "Discovery Engine",
        "description": "Optimized matching and discovery algorithms for enhanced user connections."
      },
      {
        "id": "chat",
        "name": "Interactive UI",
        "description": "Fluid, motion-rich interface built for high-retention social experiences."
      }
    ]
  },
  {
    "id": 4,
    "title": "LUCIS",
    "category": "Visual Experience Design",
    "description": "A high-fidelity minimalist portfolio platform for professional photographers, prioritizing visual storytelling and performance.",
    "metric": "Sub-Second Load",
    "year": "2024",
    "status": "Live",
    "image": "/DevHubFusion-X/projects/Photography-web.png",
    "liveLink": "https://lucis-ph.vercel.app",
    "architecture": ["Next.js", "Image Optimization", "Tailwind CSS", "Motion"],
    "challenge": "High-resolution photo portfolios often suffer from poor performance and long load times. The challenge was to maintain 'gallery-grade' visual quality while achieving sub-second performance metrics.",
    "solution": "Architected an aggressive image optimization pipeline using Next.js and specialized edge assets. I implemented intelligent lazy loading and priority-based rendering to ensure that the user's primary visual focus is always delivered instantly.",
    "role": "Frontend Performance Architect",
    "outcomes": [
      "Reduced initial page load of image-heavy galleries by over 70%",
      "Maintained a perfect 100/100 Lighthouse performance score",
      "Engineered a dynamic masonry layout that prevents Layout Shift (CLS)",
      "Implemented sophisticated motion design that compliments the photography"
    ],
    "systemParts": [
      {
        "id": "gallery",
        "name": "Visual Engine",
        "description": "Dynamic masonry layout system with intelligent image prioritization."
      },
      {
        "id": "perf",
        "name": "Edge Assets",
        "description": "Aggressive image optimization pipeline for instant content delivery."
      }
    ]
  }
];
