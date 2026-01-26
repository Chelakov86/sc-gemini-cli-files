export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    speakerBio: string;
  };
}

export const SESSIONS: Session[] = [
  // Day 1
  {
    id: 'opening-keynote-ai',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Elena Rostova',
    category: 'Keynote',
    day: 'Day 1',
    time: '09:00 AM - 10:30 AM',
    location: 'Main Hall A',
    description: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. Dr. Rostova will discuss the convergence of generative models, robotics, and ethical AI.',
      takeaways: ['Vision for 2030', 'Strategic AI adoption', 'Ethical considerations'],
      tracks: ['AI/ML', 'Strategy'],
      level: 'Beginner',
      speakerBio: 'Dr. Elena Rostova is the CEO of TechStack and a pioneer in neural network research.'
    }
  },
  {
    id: 'mlops-kubernetes',
    title: 'End-to-End MLOps with Kubernetes',
    speaker: 'Marcus Chen',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment.',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster. This hands-on lab will guide you through setting up a robust pipeline.',
      takeaways: ['Kubernetes for AI', 'CI/CD for Models', 'Monitoring'],
      tracks: ['DevOps', 'AI/ML', 'Cloud'],
      level: 'Advanced',
      speakerBio: 'Marcus Chen is a Principal Engineer specializing in cloud-native machine learning infrastructure.'
    }
  },
  {
    id: 'micro-frontends',
    title: 'Micro-Frontends at Scale',
    speaker: 'Priya Patel',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively using micro-frontend architecture.',
    details: {
      fullDescription: 'Learn how to brand distributed niches effectively. We will dive deep into module federation, shared state management, and ensuring a consistent user experience across independent teams.',
      takeaways: ['Module Federation', 'Team Scalability', 'Performance'],
      tracks: ['Web', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Priya Patel is a Senior Frontend Architect who has migrated multiple fortune 500 companies to micro-frontends.'
    }
  },
  {
    id: 'kafka-streaming',
    title: 'Real-Time Event Streaming with Kafka',
    speaker: 'Sarah Johnson',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives with Apache Kafka.',
    details: {
      fullDescription: 'Real-world case study on unleashing real-time initiatives. Discover how to handle millions of events per second with low latency and high reliability.',
      takeaways: ['Event-Driven Architecture', 'Kafka Streams', 'Scalability'],
      tracks: ['Backend', 'Data Engineering'],
      level: 'Intermediate',
      speakerBio: 'Sarah Johnson is a Lead Data Engineer with a decade of experience in distributed systems.'
    }
  },
  {
    id: 'graph-neural-networks',
    title: 'Graph Neural Networks in Practice',
    speaker: 'Isabella Martinez',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships using Graph Neural Networks.',
    details: {
      fullDescription: 'Workshop: Generating extensible relationships. We will explore how GNNs can be applied to social networks, recommendation systems, and molecular discovery.',
      takeaways: ['PyTorch Geometric', 'Graph Theory', 'Recommendation Systems'],
      tracks: ['AI/ML', 'Data Science'],
      level: 'Advanced',
      speakerBio: 'Isabella Martinez is a researcher at the AI Institute focusing on geometric deep learning.'
    }
  },
  {
    id: 'optimizing-react',
    title: 'Optimizing React Performance',
    speaker: 'David Kim',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs and rendering performance.',
    details: {
      fullDescription: 'Strategies for streamlining customized eyeballs. Learn about concurrent mode, server components, and granular memoization to keep your apps buttery smooth.',
      takeaways: ['React Compiler', 'Server Components', 'Profiling'],
      tracks: ['Web', 'Performance'],
      level: 'Intermediate',
      speakerBio: 'David Kim is a core contributor to several open-source React libraries.'
    }
  },
  {
    id: 'scalable-communities',
    title: 'Building Scalable Community Platforms',
    speaker: 'James Wilson',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities and scaled to millions of users.',
    details: {
      fullDescription: 'How we e-enabled dynamic communities. A deep dive into the database schema, caching layers, and moderation tools required for large-scale social platforms.',
      takeaways: ['Database Sharding', 'Content Moderation', 'Activity Feeds'],
      tracks: ['Backend', 'System Design'],
      level: 'Intermediate',
      speakerBio: 'James Wilson is the CTO of ConnectAll, a leading community platform.'
    }
  },
  {
    id: 'high-throughput-data',
    title: 'High-Throughput Data Pipelines',
    speaker: 'Robert Garcia',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels for massive data ingestion.',
    details: {
      fullDescription: 'Hands-on: Transitioning efficient channels. Build a robust pipeline using Airflow, Spark, and Iceberg to manage petabytes of data.',
      takeaways: ['Apache Spark', 'Data Governance', 'Pipeline Orchestration'],
      tracks: ['Data Engineering', 'Big Data'],
      level: 'Advanced',
      speakerBio: 'Robert Garcia is a Data Architect at FinTech Corp.'
    }
  },
  {
    id: 'open-source-strategy',
    title: 'Open Source Stewardship Strategy',
    speaker: 'Thomas Lee',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Implementing strategic communities for growth and sustainability.',
    details: {
      fullDescription: 'Implementing strategic communities for growth. How to govern, fund, and maintain open source projects while balancing corporate interests.',
      takeaways: ['Governance Models', 'Community Building', 'Licensing'],
      tracks: ['Strategy', 'Open Source'],
      level: 'Beginner',
      speakerBio: 'Thomas Lee is the Executive Director of the Open Tech Foundation.'
    }
  },
  {
    id: 'securing-apis',
    title: 'Securing Modern Web APIs',
    speaker: 'Michael Brown',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively to prevent breaches.',
    details: {
      fullDescription: 'Targeting holistic web services effectively. Best practices for OAuth2, OIDC, rate limiting, and threat detection in API gateways.',
      takeaways: ['OAuth 2.1', 'API Gateways', 'Zero Trust'],
      tracks: ['Security', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Michael Brown is a Security Researcher and author of "Bulletproof APIs".'
    }
  },
  {
    id: 'wasm-next-gen',
    title: 'Next-Gen WebAssembly (Wasm)',
    speaker: 'Lisa Wang',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '04:00 PM - 06:00 PM',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services with high-performance Wasm.',
    details: {
      fullDescription: 'E-Enabling next-generation web services. Compile Rust and C++ to Wasm and run it in the browser, on the edge, or even on the server.',
      takeaways: ['WASI', 'Rust to Wasm', 'Edge Computing'],
      tracks: ['Web', 'Performance', 'Systems'],
      level: 'Advanced',
      speakerBio: 'Lisa Wang is a compiler engineer and Wasm working group member.'
    }
  },

  // Day 2
  {
    id: 'ethical-ai',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. Emily Carter',
    category: 'Keynote',
    day: 'Day 2',
    time: '09:00 AM - 10:00 AM',
    location: 'Main Hall A',
    description: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.',
    details: {
      fullDescription: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency. Prof. Carter will present frameworks for auditing models and detecting bias.',
      takeaways: ['Bias Detection', 'AI Safety', 'Regulatory Landscape'],
      tracks: ['AI/ML', 'Ethics', 'Strategy'],
      level: 'Beginner',
      speakerBio: 'Prof. Emily Carter holds the Chair of Computer Ethics at Tech University.'
    }
  },
  {
    id: 'personalization-ai',
    title: 'Personalization at Scale with AI',
    speaker: 'Maria Hernandez',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab through hyper-personalization.',
    details: {
      fullDescription: 'Streamlining B2C experiences lab. Implement real-time recommendation engines that adapt to user behavior instantly using vector databases and LLMs.',
      takeaways: ['Vector Databases', 'RecSys', 'Real-time Inference'],
      tracks: ['AI/ML', 'Data Science'],
      level: 'Intermediate',
      speakerBio: 'Maria Hernandez is the Head of AI at ShopSmart.'
    }
  },
  {
    id: 'vertical-ai-agents',
    title: 'Building Vertical AI Agents',
    speaker: 'Christopher Davis',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance using specialized agents.',
    details: {
      fullDescription: 'Optimizing vertical applications for better performance. Learn to build agents that are experts in specific domains like legal, medical, or coding tasks.',
      takeaways: ['Agent Frameworks', 'Prompt Engineering', 'Domain Adaptation'],
      tracks: ['AI/ML', 'Web'],
      level: 'Intermediate',
      speakerBio: 'Christopher Davis is an AI Engineer at LegalTech Solutions.'
    }
  },
  {
    id: 'distributed-tracing',
    title: 'Distributed Tracing & Observability',
    speaker: 'Jennifer Martinez',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success with OpenTelemetry.',
    details: {
      fullDescription: 'Aggregating granular synergies for success. Implement OpenTelemetry to trace requests across microservices and identify bottlenecks instantly.',
      takeaways: ['OpenTelemetry', 'Grafana/Prometheus', 'Debugging'],
      tracks: ['DevOps', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Jennifer Martinez is a Staff SRE at CloudScale.'
    }
  },
  {
    id: 'real-time-analytics-flink',
    title: 'Real-Time Analytics with Apache Flink',
    speaker: 'Kevin Anderson',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop with stateful stream processing.',
    details: {
      fullDescription: 'Maximize real-time eyeballs workshop. Master stateful computations over data streams to power dashboards and fraud detection systems.',
      takeaways: ['Stream Processing', 'State Management', 'Fraud Detection'],
      tracks: ['Big Data', 'Data Engineering'],
      level: 'Advanced',
      speakerBio: 'Kevin Anderson is a committer for the Apache Flink project.'
    }
  },
  {
    id: 'edge-ai',
    title: 'Edge AI: Running Models Locally',
    speaker: 'Susan Taylor',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards by moving inference to the edge.',
    details: {
      fullDescription: 'Redefining world-class bandwidth standards. Explore TensorFlow Lite and ONNX Runtime to deploy models on mobile devices and IoT sensors.',
      takeaways: ['On-Device ML', 'Model Quantization', 'Privacy'],
      tracks: ['AI/ML', 'Mobile', 'IoT'],
      level: 'Intermediate',
      speakerBio: 'Susan Taylor is a Mobile ML Lead at PhoneCo.'
    }
  },
  {
    id: 'benchmarking-llms',
    title: 'Benchmarking Large Language Models',
    speaker: 'Daniel White',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the industry to choose the right model.',
    details: {
      fullDescription: 'Benchmarking synergistic vortals in the industry. A comparative analysis of Llama 3, GPT-4, and Claude 3 across reasoning, coding, and creative tasks.',
      takeaways: ['Evaluation Metrics', 'Cost Analysis', 'Model Selection'],
      tracks: ['AI/ML', 'Data Science'],
      level: 'Intermediate',
      speakerBio: 'Daniel White runs an independent AI benchmarking lab.'
    }
  },
  {
    id: 'webtransport-websockets',
    title: 'WebTransport & WebSockets Deep Dive',
    speaker: 'Jessica Thomas',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial for low-latency apps.',
    details: {
      fullDescription: 'Seize next-generation bandwidth tutorial. Understand the differences between WebSockets and the new WebTransport API based on QUIC.',
      takeaways: ['HTTP/3', 'Real-time Communication', 'Gaming'],
      tracks: ['Web', 'Networking'],
      level: 'Advanced',
      speakerBio: 'Jessica Thomas is a Network Engineer at a major browser vendor.'
    }
  },
  {
    id: 'serverless-edge',
    title: 'Serverless vs. Edge Functions',
    speaker: 'Paul Moore',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services using global compute.',
    details: {
      fullDescription: 'Techniques to disintermediate back-end web services. When to use AWS Lambda vs. Cloudflare Workers vs. Vercel Edge Functions.',
      takeaways: ['Cold Starts', 'Global Distribution', 'Cost Optimization'],
      tracks: ['Cloud', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Paul Moore is a Cloud Architect Consultant.'
    }
  },
  {
    id: '5g-iot',
    title: 'Optimizing 5G for IoT',
    speaker: 'Mark Jackson',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study for smart cities.',
    details: {
      fullDescription: 'Transforming bleeding-edge bandwidth case study. Leveraging 5G slicing and MEC (Multi-access Edge Computing) for industrial IoT applications.',
      takeaways: ['5G Architecture', 'Industrial IoT', 'Low Latency'],
      tracks: ['IoT', 'Networking'],
      level: 'Advanced',
      speakerBio: 'Mark Jackson is a Telecommunications Engineer.'
    }
  },

  // Day 3
  {
    id: 'scaling-rust',
    title: 'Scaling Rust for Web Services',
    speaker: 'Laura Martin',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies with memory-safe languages.',
    details: {
      fullDescription: 'Scaling next-generation e-business strategies. Building high-performance, crash-free web services using Axum and Tokio.',
      takeaways: ['Rust Async', 'Memory Safety', 'Performance Tuning'],
      tracks: ['Backend', 'Systems'],
      level: 'Advanced',
      speakerBio: 'Laura Martin is a Core Rust Contributor.'
    }
  },
  {
    id: 'monolith-microservices',
    title: 'Migrating from Monolith to Microservices',
    speaker: 'Michelle Wu',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly without stopping the business.',
    details: {
      fullDescription: 'Transitioning to holistic models seamlessly. The Strangler Fig pattern, database migration strategies, and cultural shifts required for success.',
      takeaways: ['Migration Patterns', 'Domain Driven Design', 'Team Topology'],
      tracks: ['Architecture', 'DevOps'],
      level: 'Intermediate',
      speakerBio: 'Michelle Wu is a VP of Engineering who oversaw the breakup of a massive monolith.'
    }
  },
  {
    id: 'service-mesh-istio',
    title: 'Service Mesh with Istio & Linkerd',
    speaker: 'David O\'Connell',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly for observability and security.',
    details: {
      fullDescription: 'Meshing customized web services seamlessly. Comparing the leading service meshes and understanding when you actually need one.',
      takeaways: ['mTLS', 'Traffic Splitting', 'Sidecars'],
      tracks: ['DevOps', 'Cloud', 'Security'],
      level: 'Advanced',
      speakerBio: 'David O\'Connell is a Cloud Native Ambassador.'
    }
  },
  {
    id: 'video-streaming-protocols',
    title: 'Efficient Video Streaming Protocols',
    speaker: 'Steven Thompson',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive into HLS, DASH, and WebRTC.',
    details: {
      fullDescription: 'Cultivating efficient bandwidth deep dive. How to build adaptive bitrate streaming services that work across all devices and network conditions.',
      takeaways: ['Codecs', 'CDN Optimization', 'Low Latency Streaming'],
      tracks: ['Media', 'Web'],
      level: 'Intermediate',
      speakerBio: 'Steven Thompson is a Video Engineer at StreamFlix.'
    }
  },
  {
    id: 'headless-commerce',
    title: 'Headless Commerce Architectures',
    speaker: 'Kenneth Lewis',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences with API-first platforms.',
    details: {
      fullDescription: 'Redefining world-class e-commerce experiences. Decoupling the frontend from the backend to enable omnichannel retail experiences.',
      takeaways: ['API-First', 'Jamstack', 'Omnichannel'],
      tracks: ['Web', 'Architecture', 'E-commerce'],
      level: 'Intermediate',
      speakerBio: 'Kenneth Lewis is a Solution Architect at CommerceCloud.'
    }
  },
  {
    id: 'devrel-trust',
    title: 'DevRel: Building Developer Trust',
    speaker: 'Patricia Walker',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships through authentic community engagement.',
    details: {
      fullDescription: 'Monetizing next-generation relationships. Why "selling" to developers fails and how to build genuine advocacy through education and support.',
      takeaways: ['Community Management', 'Content Strategy', 'Advocacy'],
      tracks: ['Strategy', 'Marketing'],
      level: 'Beginner',
      speakerBio: 'Patricia Walker is a Head of Developer Relations.'
    }
  },
  {
    id: 'graphql-federation',
    title: 'GraphQL Federation at Scale',
    speaker: 'Brian Garcia',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Driving rich web services masterclass on unifying multiple subgraphs.',
    details: {
      fullDescription: 'Driving rich web services masterclass. Managing a federated graph across multiple teams, handling schema changes, and optimizing query plans.',
      takeaways: ['Apollo Federation', 'Schema Design', 'Governance'],
      tracks: ['Backend', 'Web'],
      level: 'Advanced',
      speakerBio: 'Brian Garcia is a Staff Engineer at GraphScale.'
    }
  },
  {
    id: 'multi-cloud-infra',
    title: 'Multi-Cloud Infrastructure Management',
    speaker: 'Amara Okafor',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale using Terraform and Crossplane.',
    details: {
      fullDescription: 'Engaging distributed infrastructures at scale. Strategies for avoiding vendor lock-in and managing resources across AWS, Azure, and GCP.',
      takeaways: ['IaC', 'Terraform', 'Crossplane'],
      tracks: ['Cloud', 'DevOps'],
      level: 'Intermediate',
      speakerBio: 'Amara Okafor is a Principal Cloud Architect.'
    }
  },
  {
    id: 'accessibility-web',
    title: 'Accessibility in Modern Web Apps',
    speaker: 'Tariq Al-Fayed',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth by ensuring inclusivity.',
    details: {
      fullDescription: 'Re-intermediating rich communities for growth. Practical techniques for WCAG compliance, WAI-ARIA, and testing with screen readers.',
      takeaways: ['WCAG 2.2', 'Screen Readers', 'Inclusive Design'],
      tracks: ['Web', 'Design'],
      level: 'Beginner',
      speakerBio: 'Tariq Al-Fayed is an Accessibility Advocate.'
    }
  },
  {
    id: 'advanced-postgresql',
    title: 'Advanced PostgreSQL Patterns',
    speaker: 'Wei Zhang',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data intensive applications.',
    details: {
      fullDescription: 'E-Enabling efficient schemas for data. JSONB, partitioning, custom indexing strategies, and performance tuning for high-scale apps.',
      takeaways: ['Indexing', 'JSONB', 'Partitioning'],
      tracks: ['Database', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Wei Zhang is a Postgres Contributor.'
    }
  },
  {
    id: 'bridging-digital-physical',
    title: 'Bridging Digital & Physical Retail',
    speaker: 'Mateo Fernandez',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities for modern retail.',
    details: {
      fullDescription: 'Streamlining clicks-and-mortar functionalities. Integrating POS systems, inventory management, and e-commerce for a seamless customer journey.',
      takeaways: ['IoT', 'Integration Patterns', 'Retail Tech'],
      tracks: ['E-commerce', 'IoT'],
      level: 'Intermediate',
      speakerBio: 'Mateo Fernandez is a Retail Tech Strategist.'
    }
  }
];
