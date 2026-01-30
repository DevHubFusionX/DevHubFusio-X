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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NEMVOL",
    category: "Fintech Architecture",
    description: "Re-engineered core banking infrastructure for high-frequency trading reliability.",
    metric: "$2B+ Processed",
    year: "2024",
    status: "Live",
    architecture: ["Client", "API Gateway", "Settlement Engine", "Ledger DB"],
    image: "/project1.jpg",
    systemParts: [
        { id: "core", name: "Settlement Engine", description: "Atomic transaction processing with < 5ms latency guarantee." },
        { id: "api", name: "Gateway API", description: "Rate-limited, idempotent endpoints handling 50k RPS." },
        { id: "db", name: "Ledger Replica", description: "Distributed SQL ensuring zero-downtime consistency." }
    ]
  },
  {
    id: 2,
    title: "LUMINA",
    category: "AI Research Platform",
    description: "Designed the interface for a next-gen LLM training dashboard used by top researchers.",
    metric: "40% Efficiency",
    year: "2023",
    image: "/project2.jpg",
    status: "Scaled",
    architecture: ["Dashboard", "Inference API", "Context Manager", "Vector DB"],
    systemParts: [
        { id: "vis", name: "Tensor Visualizer", description: "Real-time attention map rendering and model weights." },
        { id: "context", name: "Context Manager", description: "Dynamic window management for long-context recall." },
        { id: "pipe", name: "Inference Pipeline", description: "Streamlined node execution for rapid prototyping." }
    ]
  },
  {
    id: 3,
    title: "OASIS",
    category: "Luxury Real Estate",
    description: "Digital experience for an exclusive property portfolio in Dubai.",
    metric: "Sold Out",
    year: "2023",
    status: "Live",
    architecture: ["WebGL UI", "Edge CDN", "Lead Engine", "CRM"],
    image: "/project3.jpg",
    systemParts: [
        { id: "vr", name: "Virtual Tour", description: "WebGL-based walkthrough optimization for mobile." },
        { id: "crm", name: "Lead Scoring", description: "Automated qualification engine based on behavior." },
        { id: "ui", name: "Fluid UI", description: "Motion-rich interaction design with zero jank." }
    ]
  },
  {
    id: 4,
    title: "VELOCITY",
    category: "Automotive E-comm",
    description: "Direct-to-consumer sales platform for a custom electric vehicle manufacturer.",
    metric: "300% Growth",
    year: "2022",
    status: "Scaled",
    architecture: ["Configurator", "Payment Rail", "Inventory Sync", "ERP"],
    image: "/project4.jpg",
    systemParts: [
        { id: "config", name: "3D Configurator", description: "Real-time rendering of vehicle customization options." },
        { id: "checkout", name: "Payment Rail", description: "Multi-currency checkout with financing integration." },
        { id: "inv", name: "Inventory Sync", description: "Global stock management across 4 warehouses." }
    ]
  }
];
