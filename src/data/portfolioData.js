export const portfolioData = {
  personal: {
    name: "Anu Sushmitha S",
    role: "Data Scientist · AI Engineer",
    tagline: "Building data-driven models that turn complexity into clear, actionable insight.",
    location: "Chennai, India",
    email: "sanushusmitha@gmail.com",
    phone: "+91 98418 46914",
    phoneDisplay: "+91 98418 46914",
    linkedin: "https://linkedin.com/in/anusushmitha-s-07a072271",
    linkedinHandle: "linkedin.com/in/anusushmitha-s-07a072271",
    hackerrank: "https://hackerrank.com/sanushusmitha",
    hackerrankHandle: "hackerrank.com/sanushusmitha",
    github: "https://github.com/sanushusmitha",
    cgpa: "8.9 / 10",
    status: "Seeking Data Science & AI Opportunities",
    gradYear: "2026"
  },

  projects: [
    {
      id: "01",
      number: "01 / 03",
      title: "VisionGuard AI",
      category: "Computer Vision",
      subtitle: "Real-Time Industrial Defect Detection and Predictive Quality Inspection",
      description: "A system that analyzes product images and video streams to detect manufacturing defects, localize them, and classify their severity.",
      coreSkill: "Object detection and model evaluation",
      models: ["YOLO", "CNN", "Vision Transformer"],
      features: [
        "Real-time detection",
        "Defect localization",
        "Severity classification",
        "Inspection dashboard",
        "Image-based reports"
      ],
      stack: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "PostgreSQL"],
      metrics: [
        { label: "Precision Rate", value: "98.4%" },
        { label: "Inference Latency", value: "<28ms" },
        { label: "QA Acceleration", value: "3.4x" }
      ],
      architecture: {
        nodes: [
          { name: "Camera Stream", type: "Input", detail: "RTSP / Industrial Feed" },
          { name: "Frame Preprocessing", type: "OpenCV", detail: "CLAHE & Normalization" },
          { name: "YOLO + ViT Backbone", type: "Model", detail: "Defect Localization" },
          { name: "Severity Engine", type: "Inference", detail: "Multi-class Scoring" },
          { name: "WebSocket API", type: "FastAPI", detail: "Low-latency Push" },
          { name: "Inspection UI", type: "Client", detail: "Real-time Telemetry" }
        ]
      },
      deepDive: {
        problem: "Automated assembly lines often suffer from subtle microscopic micro-fractures and surface irregularities that escape manual quality inspection, leading to costly downstream failures.",
        solution: "Engineered a dual-stage vision pipeline pairing YOLOv8 for rapid bounding box localization with a lightweight Vision Transformer (ViT) patch classifier for micro-texture severity analysis.",
        results: "Maintained sustained 35 FPS throughput on embedded inference hardware while reducing false reject rates by 42% compared to standard baseline CNNs."
      },
      links: {
        caseStudy: "#project-01",
        github: "https://github.com/sanushusmitha/visionguard-ai"
      }
    },
    {
      id: "02",
      number: "02 / 03",
      title: "EnterpriseMind",
      category: "RAG + Vector Database",
      subtitle: "Agentic RAG-Based Knowledge Intelligence and Research Platform",
      description: "An enterprise knowledge assistant that searches thousands of documents, retrieves relevant evidence, and generates answers with citations.",
      coreSkill: "Retrieval quality and grounded generation",
      models: ["Compact LLM", "Embedding Model", "Cross-Encoder Reranker"],
      features: [
        "PDF ingestion",
        "Semantic search",
        "Hybrid retrieval",
        "Contextual citations",
        "Document comparison",
        "Multi-step research"
      ],
      stack: ["Python", "LangGraph", "Qdrant", "FastAPI", "React", "PostgreSQL"],
      metrics: [
        { label: "Faithfulness (Ragas)", value: "94.2%" },
        { label: "Corpus Scale", value: "10k+ Docs" },
        { label: "Time-to-Insight", value: "-87%" }
      ],
      architecture: {
        nodes: [
          { name: "Document Parser", type: "Ingestion", detail: "Multi-modal Chunking" },
          { name: "Hybrid Retriever", type: "BM25 + Qdrant", detail: "Dense + Sparse Vectors" },
          { name: "Cross-Encoder", type: "Reranker", detail: "Context Re-ordering" },
          { name: "LangGraph Agent", type: "Reasoner", detail: "Multi-hop Verification" },
          { name: "Citation Anchor", type: "Audit", detail: "Source Sentence Verification" },
          { name: "Research Console", type: "React UI", detail: "Interactive Evidence Graph" }
        ]
      },
      deepDive: {
        problem: "Enterprise technical documentation and legal research span unstructured multi-column PDFs with tabular structures where classical embeddings suffer from hallucinated cross-references.",
        solution: "Built an agentic multi-hop retrieval graph using LangGraph with Qdrant vector database and hybrid BM25 lexical search, backed by an exact sentence-level citation verification guardrail.",
        results: "Achieved a 94.2% faithfulness rating on complex financial and engineering queries, eliminating unverified claims through deterministic source attribution."
      },
      links: {
        caseStudy: "#project-02",
        github: "https://github.com/sanushusmitha/enterprisemind-rag"
      }
    },
    {
      id: "03",
      number: "03 / 03",
      title: "VoxReserve",
      category: "Voice AI + Full Stack",
      subtitle: "Autonomous Voice AI Agent for Intelligent Reservation and Booking Management",
      description: "A conversational voice agent that understands spoken requests, checks live availability, and completes bookings through backend APIs.",
      coreSkill: "Tool calling and transactional workflows",
      models: ["~1B Compact LLM", "Speech-to-Text", "Text-to-Speech"],
      features: [
        "Voice-based search",
        "Booking & scheduling",
        "Rescheduling & cancellation",
        "Availability validation",
        "Payment integration",
        "Admin dashboard"
      ],
      stack: ["React", "FastAPI", "PostgreSQL", "Small LLM", "STT/TTS", "Redis"],
      metrics: [
        { label: "Voice Turn Latency", value: "<420ms" },
        { label: "Slot Accuracy", value: "99.1%" },
        { label: "Concurrency Locks", value: "0 Deadlocks" }
      ],
      architecture: {
        nodes: [
          { name: "Audio Stream", type: "Client", detail: "WebRTC Audio Ingestion" },
          { name: "Streaming STT", type: "Transcribe", detail: "Tokenized Utterances" },
          { name: "Compact LLM", type: "Agent", detail: "Slot-filling & Intent Parsing" },
          { name: "Tool Dispatcher", type: "FastAPI", detail: "Schema Validation & DB Lock" },
          { name: "PostgreSQL & Redis", type: "Storage", detail: "Transactional Ledger" },
          { name: "Neural TTS", type: "Audio", detail: "Streaming Speech Response" }
        ]
      },
      deepDive: {
        problem: "Traditional phone-based IVR systems generate high customer churn due to rigid multi-level touch-tone trees, while full-scale cloud LLMs introduce intolerable latencies for voice conversation.",
        solution: "Fine-tuned a compact 1B-parameter model specifically for reservation tool calling, orchestrated with Redis distributed mutex locks to prevent double-booking during live voice conversations.",
        results: "Maintained a sub-420ms end-to-end response loop, automating 82% of scheduling inquiries without human operator intervention."
      },
      links: {
        caseStudy: "#project-03",
        github: "https://github.com/sanushusmitha/voxreserve-voice-ai"
      }
    }
  ],

  about: {
    bio: "Final-year B.Tech student in AI & Data Science (CGPA 8.9) with hands-on experience in data cleaning, EDA, statistical analysis, and predictive modeling using Python, SQL, and TensorFlow. Skilled in analyzing sales and business data and building DAX-driven Power BI dashboards, with applied CNN and time-series ML across multiple projects.",
    editorialNotes: [
      "Approaching data science as a disciplined craft of signal extraction and structured verification.",
      "Bridging statistical rigor with reliable software engineering to deploy models that provide measurable operational value."
    ],
    softSkills: ["Leadership", "Communication", "Public Speaking"],
    highlights: [
      { metric: "8.9", label: "Cumulative GPA", sub: "Panimalar Engineering College" },
      { metric: "04", label: "Publications", sub: "Scopus & Peer-Reviewed" },
      { metric: "04", label: "Certifications", sub: "Oracle & NASSCOM" },
      { metric: "2026", label: "Graduation", sub: "Available for Full-time Roles" }
    ]
  },

  expertise: [
    {
      category: "Languages",
      skills: ["Python", "SQL"]
    },
    {
      category: "ML & Deep Learning",
      skills: ["TensorFlow", "CNN", "OpenCV", "Time-Series Analysis"]
    },
    {
      category: "Data & Analytics",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Statistical Analysis"]
    },
    {
      category: "BI & Tools",
      skills: ["Power BI (DAX, Data Modeling)", "Excel", "Jupyter", "Git", "Raspberry Pi / IoT"]
    }
  ],

  experience: [
    {
      role: "Trainee, Sales Insight Data Refinement",
      organization: "DLK Technologies",
      period: "2024",
      location: "Chennai, India",
      points: [
        "Cleaned and validated a company-wide sales dataset in Excel and Power BI to improve reporting accuracy",
        "Preprocessed and standardized raw sales data for analysis",
        "Analyzed sales trends and built data models linking multiple datasets for consolidated reporting",
        "Designed interactive Power BI dashboards to visualize key sales metrics and support decision-making"
      ],
      skillsUsed: ["Power BI", "DAX", "Data Modeling", "Excel", "Trend Analysis"]
    }
  ],

  education: [
    {
      degree: "B.Tech, Artificial Intelligence and Data Science",
      institution: "Panimalar Engineering College",
      location: "Chennai, India",
      period: "2022 — 2026",
      score: "CGPA 8.9",
      notes: "Focusing on Deep Learning, Statistical Analysis, and Distributed Data Architectures"
    },
    {
      degree: "Higher Secondary Certificate (HSC · 12th)",
      institution: "Fatima Matriculation Higher Secondary School",
      location: "Chennai, India",
      period: "2022",
      score: "88.3%",
      notes: "Core coursework in Mathematics, Physics, and Computer Science"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC · 10th)",
      institution: "Fatima Matriculation Higher Secondary School",
      location: "Chennai, India",
      period: "2020",
      score: "89.4%",
      notes: "Foundational distinction in Sciences and Mathematics"
    }
  ],

  certifications: [
    {
      title: "Generative AI",
      issuer: "Oracle",
      year: "2024",
      badge: "Industry Certified"
    },
    {
      title: "Oracle Certified Professional: Java SE 11 Developer",
      issuer: "Oracle",
      year: "2023",
      badge: "Professional"
    },
    {
      title: "Data Science for Beginners",
      issuer: "NASSCOM",
      year: "2023",
      badge: "Foundational"
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "NASSCOM",
      year: "2023",
      badge: "Security"
    }
  ],

  publications: [
    {
      id: "01",
      title: "Robotic Proprioception: Integrating Six Senses Technology",
      indexing: "Scopus Indexed",
      summary: "Explored sensor fusion paradigms and tactile-kinesthetic state estimation for autonomous robotic manipulation in unstructured terrain.",
      domain: "Robotics & Sensory AI",
      year: "2024"
    },
    {
      id: "02",
      title: "Chord Generative Model Using Convolutional Neural Networks",
      indexing: "Scopus Indexed",
      summary: "Designed a convolutional deep generative framework mapping symbolic musical progression matrices into coherent polyphonic chord progressions.",
      domain: "Deep Learning & Audio",
      year: "2024"
    },
    {
      id: "03",
      title: "GPT-Driven Song Generation: Exploring Automated Music Creation with Deep Learning-Based Audio Analysis",
      indexing: "Peer Reviewed",
      summary: "Investigated autoregressive transformer architectures combined with spectrogram feature embeddings to orchestrate melodic and lyrical alignment.",
      domain: "Generative AI & NLP",
      year: "2023"
    },
    {
      id: "04",
      title: "HeartLink: IoT Smartwatch for Emergency Alerts",
      indexing: "Google Scholar Indexed",
      summary: "Engineered an IoT-enabled physiological telemetry pipeline utilizing real-time photoplethysmography anomaly detection for immediate medical dispatch alerts.",
      domain: "IoT & Predictive Healthcare",
      year: "2023"
    }
  ]
};
