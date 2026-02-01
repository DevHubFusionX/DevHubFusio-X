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
  systemParts?: SystemPart[];
  status?: "Live" | "Scaled" | "In Progress" | "Deprecated";
  architecture?: string[]; // E.g., ["Next.js", "Trpc", "Postgres", "Redis"]
  liveLink?: string;
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
