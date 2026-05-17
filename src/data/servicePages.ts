export const servicePages = [
  {
    id: "web",
    slug: "website-development",
    title: "Website Development",
    subtitle: "Fast, responsive websites built to convert.",
    description:
      "Shaantik builds custom websites, landing pages, e-commerce experiences, and web platforms with performance, SEO, accessibility, and conversion strategy built in from day one.",
    features: [
      "Custom website design and development",
      "Mobile-first responsive layouts",
      "SEO-ready page structure and metadata",
      "CMS, blog, and e-commerce integrations",
      "Performance optimisation and launch support",
      "Analytics, tracking, and conversion setup",
    ],
    outcomes: ["Faster load times", "Better organic visibility", "Higher lead conversion", "Cleaner brand experience"],
    tags: ["React", "Next.js", "TypeScript", "WordPress", "Shopify", "SEO"],
  },
  {
    id: "app",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Polished iOS and Android apps for growing products.",
    description:
      "We design and develop mobile apps that feel clean, fast, and reliable across devices, from early MVPs to production-ready customer platforms.",
    features: [
      "iOS and Android app development",
      "React Native cross-platform builds",
      "UI/UX design and clickable prototypes",
      "Backend API and third-party integrations",
      "App Store and Google Play launch support",
      "Crash reporting and analytics setup",
    ],
    outcomes: ["Smooth user experience", "Faster launch timeline", "Scalable product foundation", "Reliable release process"],
    tags: ["React Native", "Expo", "Firebase", "REST APIs", "Swift", "Kotlin"],
  },
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Paid media, funnels, and growth campaigns tied to revenue.",
    description:
      "We plan and execute growth campaigns across paid media, social, email, content, and conversion optimisation so marketing spend connects to measurable business outcomes.",
    features: [
      "Google Ads and Meta Ads management",
      "Campaign strategy and audience planning",
      "Landing page and funnel optimisation",
      "Email marketing and automation",
      "Monthly analytics and reporting",
      "Conversion rate optimisation",
    ],
    outcomes: ["More qualified traffic", "Lower acquisition waste", "Stronger conversion rates", "Clear growth reporting"],
    tags: ["Google Ads", "Meta Ads", "Analytics", "CRO", "Email", "Funnels"],
  },
  {
    id: "seo",
    slug: "seo-strategy",
    title: "SEO Strategy",
    subtitle: "Technical SEO, content strategy, and search visibility that compounds.",
    description:
      "Shaantik builds SEO foundations that help search engines understand, trust, and rank your business. We combine technical audits, keyword strategy, content planning, on-page optimisation, schema, and performance improvements into a practical growth roadmap.",
    features: [
      "Technical SEO audits and crawl fixes",
      "Keyword research and search intent mapping",
      "On-page SEO for service and landing pages",
      "Content strategy, topic clusters, and briefs",
      "Schema markup, metadata, and internal linking",
      "Search Console, analytics, and ranking reports",
    ],
    outcomes: ["Better organic visibility", "More qualified search traffic", "Stronger topical authority", "Cleaner indexation"],
    tags: ["Technical SEO", "Content SEO", "Schema", "Search Console", "Core Web Vitals", "Analytics"],
  },
  {
    id: "design",
    slug: "brand-design",
    title: "Graphics & Brand Design",
    subtitle: "Memorable visual systems for modern businesses.",
    description:
      "We create brand identities, campaign visuals, pitch assets, and design systems that make your business easier to recognise, trust, and remember.",
    features: [
      "Logo and brand identity design",
      "Brand guidelines and design systems",
      "Social media graphics and templates",
      "Pitch decks and presentation design",
      "Print, packaging, and campaign assets",
      "Motion graphics and launch creatives",
    ],
    outcomes: ["Stronger visual consistency", "Better brand recall", "More polished sales assets", "Clearer market positioning"],
    tags: ["Figma", "Illustrator", "Photoshop", "Brand Strategy", "Motion", "Decks"],
  },
  {
    id: "devops",
    slug: "devops-cloud",
    title: "DevOps & Cloud",
    subtitle: "Automated releases and cloud infrastructure that scales.",
    description:
      "We set up CI/CD, cloud hosting, monitoring, deployment workflows, and operational safeguards so your product ships faster and runs with confidence.",
    features: [
      "CI/CD pipeline setup",
      "AWS, Vercel, and Cloudflare deployment",
      "Docker and environment configuration",
      "Monitoring, logging, and uptime alerts",
      "Security and performance hardening",
      "Backup, rollback, and release planning",
    ],
    outcomes: ["Faster deployments", "Less release risk", "Better uptime visibility", "Scalable infrastructure"],
    tags: ["CI/CD", "AWS", "Docker", "Vercel", "Cloudflare", "Monitoring"],
  },
  {
    id: "ai",
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Practical AI workflows that save time and improve decisions.",
    description:
      "We design AI assistants, workflow automations, data pipelines, and internal tools that reduce manual work while keeping teams in control.",
    features: [
      "AI chatbot and assistant development",
      "Workflow automation for sales, support, and operations",
      "Document processing and knowledge-base search",
      "CRM and tool integrations",
      "Prompt design, testing, and guardrails",
      "Analytics dashboards and reporting automation",
    ],
    outcomes: ["Reduced manual workload", "Faster response times", "Cleaner operational data", "More scalable internal processes"],
    tags: ["OpenAI", "LangChain", "Vector DBs", "n8n", "Zapier", "Automation"],
  },
  {
    id: "salesforce",
    slug: "salesforce-consulting",
    title: "Salesforce Consulting",
    subtitle: "Salesforce setup, automation, and optimisation for growing teams.",
    description:
      "We help businesses configure Salesforce, automate CRM workflows, connect data, and improve visibility across sales, service, and marketing operations.",
    features: [
      "Sales Cloud and Service Cloud configuration",
      "Lead, opportunity, and pipeline automation",
      "Custom objects, fields, and page layouts",
      "Apex, Flow, and integration support",
      "Reporting dashboards and CRM analytics",
      "User training and ongoing CRM optimisation",
    ],
    outcomes: ["Cleaner CRM adoption", "Better pipeline visibility", "Less manual admin", "Stronger sales operations"],
    tags: ["Sales Cloud", "Service Cloud", "Apex", "Flow", "Einstein AI", "CRM"],
  },
];

export const getServiceBySlug = (slug?: string) => servicePages.find((service) => service.slug === slug);
export const getServiceById = (id: string) => servicePages.find((service) => service.id === id);
