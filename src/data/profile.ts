export interface Project {
  id: string;
  slug: string;
  name: string;
  category: 'AI & Agents' | 'Backend APIs' | 'Web Apps' | 'Automation';
  highlightTag: string;
  role: string;
  oneLiner: string;
  shortDescription: string;
  description: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  engineeringHighlights: string[];
  technologies: string[];
  caseStudyPdf?: string;
  image: string;
  video?: string | null;
  videoPoster?: string | null;
  videoUrl?: string | null;
  videoType?: string | null;
  muxPlaybackId?: string | null;
  videoAspect?: 'mobile' | 'desktop';
  links: {
    github?: string;
    backend?: string;
    frontend?: string;
    live?: string;
  };
  featured: boolean;
  accentColor?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  whatIBuild: string;
  technologies: string[];
  useCases: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface ProfileData {
  name: {
    first: string;
    last: string;
    full: string;
  };
  title: string;
  tagline: string;
  availability: string;
  bio: string;
  detailedAbout: string;
  aboutApproach: {
    title: string;
    desc: string;
  }[];
  location: string;
  email: string;
  social: {
    github: string;
    whatsapp: string;
  };
  profileImage: string;
  stats: {
    label: string;
    value: string;
  }[];
  services: Service[];
  projects: Project[];
  experience: ExperienceItem[];
  skills: {
    category: string;
    items: string[];
  }[];
  aiEngineering: {
    intro: string;
    distinction: string;
    workflow: {
      stage: string;
      lead: 'AI-Assisted' | 'Engineer-Led';
      desc: string;
    }[];
    capabilities: string[];
    toolkit: string[];
    philosophy: string;
  };
}

export const profile: ProfileData = {
  name: {
    first: "HAFIZ",
    last: "ABI ZAID BABAR",
    full: "Hafiz Abi Zaid Babar"
  },
  title: "Agentic AI Engineer | Python Backend Developer",
  tagline: "Building autonomous AI agents & scalable Python backend systems",
  availability: "Available for New Projects",
  bio: "I build autonomous AI agents, production-grade REST APIs, and Python backends that transform complex business logic into reliable, high-performance software.",
  detailedAbout: "I'm an Agentic AI Engineer building on a strong Python backend foundation. My expertise includes designing stateful, tool-driven AI agents, integrating Large Language Models (LLMs) with grounded and deterministic logic, and architecting scalable REST APIs using FastAPI with clean, production-ready backend engineering practices.",
  aboutApproach: [
    {
      title: "Focus",
      desc: "Agentic AI Workflows, Python Backend Architecture & Asynchronous Microservices."
    },
    {
      title: "Approach",
      desc: "Deterministic API schemas, robust Pydantic v2 validation, self-healing state machines, zero raw LLM guesses."
    },
    {
      title: "Stack",
      desc: "FastAPI, PostgreSQL, MongoDB, Gemini Vision, LangGraph, Model Context Protocol (MCP), Docker."
    }
  ],
  location: "Lahore, Pakistan",
  email: "hafizabizaid@gmail.com",
  social: {
    github: "https://github.com/abizaid24",
    whatsapp: "https://wa.me/923074194011"
  },
  profileImage: "/images/profile.png",
  stats: [
    { label: "AI Ecosystems Built", value: "5+" },
    { label: "AI Integration Focus", value: "Agentic AI & MCP" },
    { label: "Public Repositories", value: "12+" },
    { label: "Primary Tech Stack", value: "Python & FastAPI" }
  ],
  services: [
    {
      id: "agentic-ai",
      title: "AGENTIC AI & WORKFLOW AUTOMATION",
      description: "Building stateful, autonomous AI agent graphs capable of executing multi-step tool execution, memory management, and background scheduling.",
      whatIBuild: "LangGraph state graphs, automated research and job-matching agents, background cron task schedulers, and custom tool binding layers.",
      technologies: ["LangGraph", "LangChain", "APScheduler", "Agentic AI", "Docker"],
      useCases: "Autonomous job discovery agents, background seat-locking expiration sweeps, automated resume parsing workflows."
    },
    {
      id: "ai-engineering",
      title: "AI ENGINEERING & LLM INTEGRATION",
      description: "Designing and integrating production-grade LLM pipelines, multimodal analysis engines, and structured AI response systems.",
      whatIBuild: "RAG architectures, Gemini Vision parsing backends, function-calling AI assistants, and MCP (Model Context Protocol) tool integration layers.",
      technologies: ["Google Gemini API", "OpenAI Agents SDK", "Mistral AI", "LangChain", "MCP"],
      useCases: "Multimodal food & document analysis, intelligent customer travel concierges, budget-aware recommendation engines."
    },
    {
      id: "python-backend",
      title: "PYTHON BACKEND ARCHITECTURE",
      description: "Engineering asynchronous, high-throughput REST APIs and backend microservices with clean architecture and strict schema validation.",
      whatIBuild: "FastAPI microservices, SQLAlchemy ORM models, Pydantic v2 schemas, JWT authentication, role-based access control, and database migration pipelines.",
      technologies: ["Python 3.12", "FastAPI", "SQLAlchemy", "Pydantic v2", "Alembic", "JWT"],
      useCases: "E-commerce transaction APIs, multi-tenant RBAC portals, real-time seat reservation state machines."
    },
    {
      id: "databases-api",
      title: "DATABASE DESIGN & API INTEGRATIONS",
      description: "Designing resilient relational and document database architectures paired with third-party service integrations.",
      whatIBuild: "PostgreSQL & MongoDB schemas, database-driven concurrency control algorithms, Stripe payment webhooks, and PDF e-ticket generation engines.",
      technologies: ["PostgreSQL", "MongoDB", "SQLite", "Stripe API", "Railway", "Docker"],
      useCases: "High-concurrency e-ticket booking, persistent cart calculation engines, analytics dashboards."
    }
  ],
  projects: [
    {
      id: "nutria-ai",
      slug: "nutria-ai",
      name: "Nutria AI",
      category: "AI & Agents",
      highlightTag: "Hero AI Case Study",
      role: "Lead Backend & AI Engineer",
      oneLiner: "AI-powered nutrition platform that reads food photos and coaches users toward personalized health goals.",
      shortDescription: "Multimodal nutrition tracking combining Gemini Vision parsing with a hybrid deterministic database engine to guarantee exact calorie calculations.",
      description: "A comprehensive health tracking platform pairing a React Native (Expo Router) mobile app with a FastAPI + MongoDB backend. Uses Gemini Vision combined with a hybrid deterministic pipeline to eliminate raw AI guesses during macro estimation.",
      overview: "Nutria AI replaces error-prone manual food logging with a camera click. Unlike generic AI wrappers that hallucinate nutritional values, Nutria AI passes image predictions into a strict deterministic database schema.",
      problem: "Pure LLM multimodal models often guess arbitrary macro numbers (e.g. 500 kcal vs 200 kcal), breaking user trust in health apps.",
      solution: "Engineered a hybrid pipeline: Gemini Vision extracts candidate food items and portions, which are then strictly validated and calculated against deterministic nutritional database schemas.",
      architecture: "React Native Expo Router -> FastAPI Async Gateway -> Gemini Vision API -> MongoDB Deterministic Macro Verification Service.",
      engineeringHighlights: [
        "Hybrid deterministic engine coupling multimodal LLM output with validated database constraints.",
        "Model Context Protocol (MCP) tool integration powering conversational nutrition coaching context.",
        "Fixed Android gesture handler root layout responsiveness, image header auth, and calorie recalculation logic."
      ],
      technologies: ["Python", "FastAPI", "MongoDB", "Gemini Vision", "MCP", "React Native", "Expo Router"],
      caseStudyPdf: "/case-studies/nutriai-case-study.pdf",
      image: "/images/projects/nutria-ai.jpg",
      video: null,
      videoPoster: null,
      videoUrl: null,
      videoType: "video/mp4",
      muxPlaybackId: "1adRWizA500T5CFxIr02sHQJBaBPgemRzbTXUi8AKRScg",
      videoAspect: "mobile",
      links: {
        github: "https://github.com/abizaid24"
      },
      featured: true,
      accentColor: "#10b981"
    },
    {
      id: "airlynk-ai",
      slug: "airlynk-ai",
      name: "AirLynk AI",
      category: "AI & Agents",
      highlightTag: "Intelligent Aviation Platform",
      role: "Backend Architect & AI Engineer",
      oneLiner: "AI-powered airline booking ecosystem with database seat locking, Stripe payments, and grounded Gemini travel assistance.",
      shortDescription: "Scalable aviation backend supporting multi-class weekly flight schedules, self-healing seat concurrency, and DB-grounded AI flight concierges.",
      description: "A production-style aviation platform featuring database-driven seat locking (`locked_until`) with self-healing seat generation, Stripe payments, PDF ticket generation, and a Gemini-powered AI travel assistant with function calling grounded in live database queries.",
      overview: "AirLynk AI is a full-featured airline booking ecosystem pairing real-time ticket booking with grounded conversational AI.",
      problem: "High-concurrency flight bookings suffer from double-booking risks and expensive Redis infrastructure dependencies for short seat locks.",
      solution: "Architected a database-driven `locked_until` seat-locking algorithm with self-healing state sweeps, maintaining strict transactional integrity with zero extra cache infra.",
      architecture: "FastAPI REST Core -> PostgreSQL (SQLAlchemy + Alembic) -> Stripe Checkout Webhooks -> Gemini Function Calling Concierge.",
      engineeringHighlights: [
        "Self-healing database seat locking mechanism guaranteeing zero double-bookings without external Redis overhead.",
        "Grounded Gemini function-calling AI assistant executing live flight queries, fare trend analysis, and price-drop alerts.",
        "Admin analytics dashboard monitoring occupancy rates, revenue generation, and weekly rolling flight generator."
      ],
      technologies: ["Python 3.12", "FastAPI", "SQLAlchemy", "PostgreSQL", "Google Gemini API", "Stripe", "Docker", "Next.js"],
      caseStudyPdf: "/case-studies/airlynk-ai-case-study.pdf",
      image: "/images/projects/airlynk-ai.jpg",
      video: null,
      videoPoster: null,
      videoUrl: null,
      videoType: "video/mp4",
      muxPlaybackId: "8UqiFVM874KTLOM500z1x02fv4CkyPtRv8gSnqAI2FulI",
      videoAspect: "desktop",
      links: {
        backend: "https://github.com/abizaid24/AirLynk-AI-Ecosystem-Backend",
        frontend: "https://github.com/abizaid24/AirLynk-AI-Ecosystem-Frontend"
      },
      featured: true,
      accentColor: "#3b82f6"
    },
    {
      id: "taskflow-ai",
      slug: "taskflow-ai",
      name: "TaskFlow AI",
      category: "AI & Agents",
      highlightTag: "Productivity Engine",
      role: "Backend Developer",
      oneLiner: "AI-powered productivity platform with authentication, task routing, and scalable FastAPI backend.",
      shortDescription: "Intelligent task orchestration backend enforcing Pydantic v2 schemas, JWT authentication, and automated task prioritization.",
      description: "An intelligent task orchestration system with JWT authentication, automated priority routing, task decomposition, and background job handling.",
      overview: "TaskFlow AI automates project breakdown by parsing high-level goals into structured background task queues.",
      problem: "Complex project goals often stay unorganized without clear micro-task breakdown and automated prioritization.",
      solution: "Built a FastAPI async pipeline that uses LLM function calls to generate structured subtasks with Pydantic schema validation.",
      architecture: "FastAPI Async Worker -> Pydantic Schema Validation -> PostgreSQL Task Queue -> JWT Auth Middleware.",
      engineeringHighlights: [
        "Structured task state machines and asynchronous task queues using FastAPI and SQLAlchemy.",
        "Enforced strict typing and validation with Pydantic v2 schemas and role-based access tokens."
      ],
      technologies: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "JWT Auth", "PostgreSQL"],
      caseStudyPdf: "/case-studies/taskflow-ai-case-study.pdf",
      image: "/images/projects/taskflow-ai.jpg",
      video: null,
      videoPoster: null,
      videoUrl: null,
      videoType: "video/mp4",
      muxPlaybackId: "uzUlF23wkPurtdMUn8A10101XzJ01a2Zq92nnSOfxcnnI8",
      videoAspect: "mobile",
      links: {
        github: "https://github.com/abizaid24"
      },
      featured: true,
      accentColor: "#8b5cf6"
    },
    {
      id: "khanaywala-ai",
      slug: "khanaywala-ai",
      name: "KhanayWala AI",
      category: "Web Apps",
      highlightTag: "Food Delivery Ecosystem",
      role: "Full-Stack AI Developer",
      oneLiner: "Modern food delivery platform with Mistral AI meal recommendations and multi-role operations.",
      shortDescription: "Multi-tenant food ordering backend connecting customers, restaurant owners, and admins with AI dietary suggestions.",
      description: "Multi-role food ordering platform connecting customers, restaurant managers, and admins. Integrates Mistral AI for budget-aware and context-aware meal recommendations.",
      overview: "KhanayWala AI streamlines multi-role restaurant management with intelligent, budget-friendly meal suggestions.",
      problem: "Food delivery apps often overload users with huge menus without contextual recommendations.",
      solution: "Integrated Mistral AI model endpoint to recommend meals based on budget, dietary context, and order history.",
      architecture: "FastAPI Engine -> PostgreSQL (Neon) -> Mistral AI Service -> Railway Cloud Deployment.",
      engineeringHighlights: [
        "Designed 3-tier role authorization (Customer, Restaurant Owner, Admin) with verified purchase reviews.",
        "Integrated Mistral AI model for personalized meal recommendations based on budget and user dietary context."
      ],
      technologies: ["Python 3.12", "FastAPI", "SQLAlchemy", "PostgreSQL (Neon)", "Mistral AI", "Railway"],
      image: "/images/projects/khanaywala-ai.jpg",
      video: null,
      videoPoster: null,
      videoUrl: null,
      videoType: "video/mp4",
      links: {
        backend: "https://github.com/abizaid24/KhanayWala-AI-Backend",
        frontend: "https://github.com/abizaid24/KhanayWala-AI-Frontend"
      },
      featured: false,
      accentColor: "#ef4444"
    },
    {
      id: "cvision-ai",
      slug: "cvision-ai",
      name: "CVision AI Resume Parser",
      category: "AI & Agents",
      highlightTag: "LLM Parser Engine",
      role: "AI Developer",
      oneLiner: "AI-powered resume parser using Large Language Models to extract candidate data into structured JSON.",
      shortDescription: "Document parsing engine extracting candidate experience, education, and skills into standardized JSON schemas.",
      description: "Automated document parser that ingests PDF/DOCX resumes, extracts key candidate skills, experience, and education, and converts them into standardized JSON formats.",
      engineeringHighlights: [
        "Utilized prompt engineering and schema validation to guarantee 99%+ schema compliance for extracted candidate profiles."
      ],
      technologies: ["Python", "LangChain", "OpenAI / Gemini", "FastAPI", "Pydantic"],
      image: "/images/projects/cvision-ai.jpg",
      video: null,
      links: {
        github: "https://github.com/abizaid24"
      },
      featured: false
    },
    {
      id: "ai-job-agent",
      slug: "ai-job-agent",
      name: "AI Job Finding Agent",
      category: "Automation",
      highlightTag: "Autonomous Agent",
      role: "AI Engineer",
      oneLiner: "Autonomous AI agent streamlining job discovery, requirement matching, and workflow automation.",
      shortDescription: "Stateful agentic decision graph scanning job listings and analyzing candidate fit.",
      description: "An agentic automation workflow that scans job boards, evaluates candidate fit against tech stacks, and summarizes requirements using Agentic AI concepts.",
      engineeringHighlights: [
        "Constructed multi-step decision graph in LangGraph for autonomous scraping, filtering, and summary reporting."
      ],
      technologies: ["Python", "LangGraph", "MCP", "FastAPI", "Playwright"],
      image: "/images/projects/ai-job-agent.jpg",
      video: null,
      links: {
        github: "https://github.com/abizaid24"
      },
      featured: false
    },
    {
      id: "ai-chatbot",
      slug: "ai-chatbot",
      name: "Conversational AI Chatbot",
      category: "AI & Agents",
      highlightTag: "LangChain Assistant",
      role: "AI Developer",
      oneLiner: "Conversational AI assistant built using LangChain with persistent session memory.",
      shortDescription: "Contextual chat engine managing session memory and vector-backed document lookup.",
      description: "Contextual chat engine capable of managing session memory, custom tool execution, and vector-backed document lookup.",
      engineeringHighlights: [
        "Implemented sliding window conversation buffer and vector store search for fast query retrieval."
      ],
      technologies: ["Python", "LangChain", "FastAPI", "Vector DB", "Streamlit"],
      image: "/images/projects/ai-chatbot.jpg",
      video: null,
      links: {
        github: "https://github.com/abizaid24"
      },
      featured: false
    }
  ],
  experience: [
    {
      id: "exp-neryxio",
      role: "Agentic AI Engineer",
      organization: "Neryxio Solutions",
      duration: "Aug 2026 — Present",
      location: "Remote / International",
      description: "Working as an Agentic AI Engineer at an international AI software agency, contributing to intelligent AI systems, agentic workflows, LLM-powered applications, and Python backend platforms.",
      highlights: [
        "Building agentic AI systems and intelligent automation workflows for international clients.",
        "Applying the same FastAPI, Python, and LLM-integration foundation developed across the independent product ecosystem below."
      ],
      badge: "Current Focus"
    },
    {
      id: "exp-independent",
      role: "Python Backend & Agentic AI Engineer",
      organization: "Independent Software Development & AI Engineering",
      duration: "Early 2025 — Present",
      location: "Lahore, Pakistan",
      description: "Researching, architecting, and shipping backend platforms, AI-powered applications, and REST APIs — combining independent technical research and system design with AI-assisted engineering workflows across a growing product ecosystem.",
      highlights: [
        "Designed AI product ecosystems including Nutria AI (Gemini Vision + MCP) and AirLynk AI (PostgreSQL seat locking + grounded AI travel assistant).",
        "Built a portfolio of public repositories demonstrating FastAPI, SQLAlchemy, PostgreSQL, MongoDB, Docker, and Railway deployment.",
        "Integrated LLMs (Gemini, Mistral, OpenAI) using LangChain, LangGraph, and Model Context Protocol (MCP), accelerated with AI-assisted development tools."
      ]
    }
  ],
  skills: [
    {
      category: "AI Engineering & Agents",
      items: ["Agentic AI", "LangChain", "LangGraph", "Google Gemini API (Vision)", "OpenAI Agents SDK", "Mistral AI", "MCP (Model Context Protocol)", "Prompt Engineering"]
    },
    {
      category: "Backend Engineering",
      items: ["Python 3.12", "FastAPI", "REST APIs", "SQLAlchemy", "Alembic", "Pydantic v2", "JWT Auth", "OAuth 2.0", "Bcrypt Hashing"]
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MongoDB", "SQLite", "Neon PostgreSQL", "Redis Caching Patterns"]
    },
    {
      category: "Mobile & Frontend",
      items: ["React Native", "Expo (Router)", "TypeScript", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Tools & Infrastructure",
      items: ["Git & GitHub", "Docker", "Railway", "Postman", "Stripe API", "VS Code", "Linux / Windows CLI"]
    }
  ],
  aiEngineering: {
    intro: "I integrate AI directly into my software engineering workflow — from research and architecture exploration to implementation, debugging, testing, and iteration. I use AI coding agents and developer tools to accelerate execution while maintaining ownership of system architecture, technical decisions, code quality, and final implementation.",
    distinction: "AI-assisted, not AI-dependent — I use AI as an engineering multiplier across research, architecture, implementation, debugging, and iteration, not as a replacement for engineering judgment.",
    workflow: [
      { stage: "Research", lead: "AI-Assisted", desc: "Accelerate technical research, compare approaches, and explore unfamiliar technologies or implementation strategies." },
      { stage: "Architecture", lead: "Engineer-Led", desc: "Define system requirements, architecture, components, data flow, APIs, and database structure myself." },
      { stage: "Implementation", lead: "AI-Assisted", desc: "AI coding agents assist with repetitive implementation, scaffolding, and refactoring to speed up development." },
      { stage: "Debugging", lead: "AI-Assisted", desc: "Use AI-assisted debugging to analyze errors, investigate causes, and explore candidate fixes." },
      { stage: "Testing", lead: "Engineer-Led", desc: "Validate generated implementations, test API and application behavior, and identify edge cases myself." },
      { stage: "Iteration", lead: "Engineer-Led", desc: "Continuously refine the system based on testing, requirements, performance, and technical constraints." }
    ],
    capabilities: [
      "AI Coding Agents",
      "Agentic Development Tools",
      "AI-Assisted Debugging",
      "AI-Assisted Research",
      "AI-Assisted Refactoring",
      "AI-Assisted Documentation",
      "Tool Calling",
      "Agent Frameworks"
    ],
    toolkit: ["Python", "FastAPI", "OpenAI Agents SDK", "Google Gemini", "Mistral AI", "LangChain", "LangGraph", "MCP", "PostgreSQL", "MongoDB", "Docker", "React Native"],
    philosophy: "My projects aren't simply AI-generated applications. I use AI as part of a broader engineering workflow — combining independent research, system design, architecture, implementation, debugging, testing, and iterative problem solving with AI-assisted development tools."
  }
};
