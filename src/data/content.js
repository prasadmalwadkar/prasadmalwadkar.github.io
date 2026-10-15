export const content = {
    personal: {
        name: "Prasad Malwadkar",
        role: "Founding backend engineer",
        line: "Backend, cloud systems, and LLM-powered voice.",
        email: "malwadkarprasad99@gmail.com",
        phone: "+1 (213) 272-5083",
        location: "Seattle, WA",
        linkedin: "https://www.linkedin.com/in/prasad-malwadkar/",
        github: "https://github.com/prasadmalwadkar",
        updated: "October 2026",
    },
    experience: [
        {
            role: "Founding Backend Engineer",
            company: "Flair Labs",
            note: "YC W24",
            date: "Apr 2026 — Present",
            points: [
                "Designed a multi-tenant voice architecture on Redis distributed locks, Cloud Run, and GCP. Lead conversion up 30%.",
                "Led a provider migration that cut cloud egress 40%, for millions of daily outbound interactions.",
                "Built speech-to-speech number rotation at 40k–80k calls/day, with DNC compliance.",
                "Ran architecture reviews for live-transfer routing and took accounts from zero to production.",
            ],
        },
        {
            role: "SDE Intern",
            company: "Amazon",
            note: "AWS",
            date: "May 2025 — Aug 2025",
            points: [
                "Automated EC2 key rotation with CloudFormation so AI agents could use the same infra tools. Manual ops down 80%.",
                "Moved legacy test infrastructure onto microservices. AI validations in CI/CD. Reliability up 30%.",
            ],
        },
        {
            role: "Senior Software Developer",
            company: "Amdocs",
            date: "May 2023 — Dec 2023",
            points: [
                "Pipelines in Talend and Informatica ingested GraphQL into HDFS, with OAuth 2.0. API latency down 30%.",
                "Tuned ETL on Hadoop and HBase with Hive and PySpark. Transfer rates up 40%.",
                "Built predictive processing and a UI query layer that cut manual work and subscriber churn.",
            ],
        },
        {
            role: "Software Engineer",
            company: "Amdocs",
            date: "Aug 2021 — May 2023",
            points: [
                "Tuned Informatica ETL with critical-path analysis. Runtime down 45%.",
                "Ran a Three Gates migration for 2.5M customer records. Full consistency, 99.9% uptime.",
                "Shipped event-driven batch processing and lowered error rates on core data layers.",
            ],
        },
    ],
    projects: [
        {
            title: "AI Voice Gateway",
            tag: "voice",
            meta: "FastAPI · Twilio · Gemini · Cartesia",
            summary: "Phone intake. Twilio audio goes to streaming STT, a server-side Gemini agent, then Sonic TTS, and a Playwright worker fills the form from a queue.",
            href: null,
        },
        {
            title: "mockfolio",
            tag: "product",
            meta: "Next.js · Drizzle · Alpaca",
            summary: "Paper trading against live market data, with a required reasoning journal, morning brief, and Telegram.",
            href: "https://mockfolio-web.vercel.app",
        },
        {
            title: "calchat",
            tag: "product",
            meta: "React · Express · Expo",
            summary: "Voice-first calorie tracker. Say what you ate. An offline parser logs calories and macros against the daily goal.",
            href: "https://calchat-backend-blush.vercel.app",
        },
        {
            title: "Fintech Agent Orchestrator",
            tag: "systems",
            meta: "FastAPI · React Flow · Next.js",
            summary: "Drag a network of agents, set handoff rules, then test them in text or voice. Chunked summary memory cut token cost by 60%.",
            href: "https://github.com/prasadmalwadkar/Fintech-Multi-Agent",
        },
        {
            title: "Bloom Filter Hash Join",
            tag: "systems",
            meta: "C++ · DuckDB",
            summary: "Bloom filter pushdown in the DuckDB planner. Probe lookups down 45%, up to 2.5× on selective joins.",
            href: null,
        },
        {
            title: "Telecom Churn Pipeline",
            tag: "systems",
            meta: "Python · Airflow · Redshift",
            summary: "ETL from customer files into a churn model on AWS, with a Tableau view of segments and rates.",
            href: null,
        },
        {
            title: "Smart Wellness Program",
            tag: "product",
            meta: "Django · SQLite",
            summary: "Records and scheduling for clinics. Published in IJCRT, December 2022.",
            href: null,
        },
    ],
    education: [
        {
            school: "University of Southern California",
            degree: "Master of Data Science",
            date: "Jan 2024 — Dec 2025",
            coursework: "Machine Learning, Predictive Analytics, Algorithms, Data Mining, Advanced Data Stores, AI",
        },
        {
            school: "Pune Institute of Computer Technology",
            degree: "Bachelor of Engineering",
            date: "Jun 2021",
            coursework: "Statistical Analytics, Object Oriented Programming, DBMS, Data Analytics",
        },
    ],
    skills: [
        {
            label: "Languages & data",
            items: "Python, TypeScript, JavaScript, Go, C++, SQL, Postgres, DynamoDB, Vector DB",
        },
        {
            label: "Web",
            items: "React, Next.js, Node.js, Django, Express, REST, GraphQL, Redis",
        },
        {
            label: "AI",
            items: "LLM integration, MCP servers, LangChain, RAG, predictive analytics",
        },
        {
            label: "Cloud",
            items: "AWS Lambda, S3, EC2, Docker, Cloud Run, GCP, CI/CD",
        },
    ],
};
