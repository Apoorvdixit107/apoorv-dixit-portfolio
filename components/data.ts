export type Stat = { value: string; label: string };
export type Card = { icon: string; title: string; body: string };
export type SkillCard = Card & { marker: string; tags: string[] };
export type Project = {
  icon: string;
  name: string;
  description: string;
  siteUrl: string;
  githubUrl: string;
  tags: string[];
};

export const stats: Stat[] = [
  { value: "3+", label: "Years of backend engineering" },
  { value: "40-60%", label: "API latency reduction" },
  { value: "50%", label: "Database load reduction" },
  { value: "99.9%", label: "Service uptime delivered" }
];

export const experience: Card[] = [
  {
    icon: "🏗️",
    title: "Production Microservices",
    body: "Architected and maintained StockRegister microservices processing 5M+ inventory records, serving 10,000+ daily active users, and supporting a 99.9% uptime SLA."
  },
  {
    icon: "🔌",
    title: "30+ RESTful APIs",
    body: "Engineered Java 17 and Spring Boot APIs handling 500K+ daily requests, applying SOLID principles, clean architecture, SQL indexing, query optimization, and Redis caching."
  },
  {
    icon: "🔐",
    title: "Secure Platform Access",
    body: "Implemented Spring Security with JWT authentication, OAuth2 authorization, and RBAC, reducing unauthorized access incidents by more than 90%."
  },
  {
    icon: "📦",
    title: "Cloud Delivery",
    body: "Built Maven-based services with GitHub Actions CI/CD, Docker, and AWS deployments across EC2, Elastic Beanstalk, ECS, ECR, RDS, S3, SQS, and CloudWatch."
  }
];

export const skills: SkillCard[] = [
  {
    icon: "☕",
    marker: "J",
    title: "Java and Spring Engineering",
    body: "Building production-grade REST APIs and microservices with Java 17, Spring Boot, Spring Security, OAuth2, and JWT.",
    tags: ["Java 17", "Spring Boot", "Security"]
  },
  {
    icon: "🚀",
    marker: "C",
    title: "Cloud and Data Performance",
    body: "Designing cloud-aware services backed by MySQL, PostgreSQL, Redis, AWS SQS, and dead-letter queues, with an emphasis on low latency and efficient database usage.",
    tags: ["AWS", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    icon: "🧠",
    marker: "S",
    title: "System Design and Delivery",
    body: "Applying distributed systems design, CAP theorem trade-offs, high-availability patterns, TDD, Agile/Scrum delivery, and AI-augmented workflows.",
    tags: ["TDD", "SOLID", "CAP", "Agile"]
  }
];

export const techBadges = [
  "Java 17",
  "Spring Boot",
  "Spring Security",
  "OAuth2/JWT",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "AWS SQS",
  "Docker",
  "GitHub Actions",
  "JUnit 5",
  "Grafana"
];

export const credentials: Card[] = [
  {
    icon: "🏅",
    title: "AWS Certified Developer - Associate",
    body: "Validates hands-on ability to build, deploy, and maintain applications on AWS services with modern cloud development practices."
  },
  {
    icon: "☁️",
    title: "AWS Certified Cloud Practitioner",
    body: "Demonstrates cloud fluency across AWS infrastructure, architecture concepts, deployment models, and service fundamentals."
  },
  {
    icon: "🎓",
    title: "B.Tech in Computer Science Engineering",
    body: "ABES Engineering College, Ghaziabad, India. Completed Bachelor of Technology in Computer Science Engineering from 2019 to 2023."
  },
  {
    icon: "🤖",
    title: "AI-Augmented Engineering",
    body: "Uses OpenAI, Gemini, Claude APIs, and Cursor AI to accelerate delivery while keeping code quality, review, and system design discipline at the center."
  }
];

export const projects: Project[] = [
  {
    icon: "💰",
    name: "EMS — Expense Management System",
    description:
      "Event-driven microservices platform for personal expense tracking. Built with Spring Boot API Gateway, JWT authentication, Kafka event streaming, and a Next.js dashboard for expenses, reports, and real-time notifications.",
    siteUrl: "https://expensekit17.netlify.app/",
    githubUrl: "https://github.com/Apoorvdixit107/ExpenseManagementSystem",
    tags: ["Java 17", "Spring Boot", "Kafka", "Next.js", "Docker", "MySQL"]
  }
];

export const impact: Card[] = [
  {
    icon: "⚡",
    title: "Reduced API latency by 40-60%",
    body: "Optimized backend service behavior for faster response times across high-volume application workflows."
  },
  {
    icon: "📉",
    title: "Reduced database load by 50%",
    body: "Improved data access patterns and caching strategy to lower pressure on relational storage."
  },
  {
    icon: "🛡️",
    title: "Maintained 99.9% service uptime",
    body: "Designed for operational reliability through resilient architecture, disciplined testing, and production-minded engineering."
  },
  {
    icon: "📡",
    title: "Delivered event-driven services",
    body: "Built messaging-oriented backend systems for scalable inventory management and distributed workflows."
  }
];
