export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  statusColor: string;
  description: string;
  highlights: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'bsc-computing',
    degree: 'BSc (Hons) in Computing',
    institution: 'EduCLaaS Academy',
    period: '2025 — Present',
    status: 'Currently Studying',
    statusColor: 'bg-[#B8F36B]/15 text-[#B8F36B] border-[#B8F36B]/30',
    description:
      'Advancing computational fundamentals, software engineering methodologies, distributed backend architectures, and enterprise computing systems.',
    highlights: [
      'Advanced Software Engineering & Distributed Systems Architecture',
      'Machine Learning Foundations & Applied Computational Techniques',
      'Enterprise Software Design Patterns & Scalable Backend Architectures',
    ],
  },
  {
    id: 'hnd-software-eng',
    degree: 'Higher National Diploma (HND) in Software Engineering',
    institution: 'EduCLaaS Academy, Myanmar',
    period: '2024 — Aug 2026',
    status: 'Completed — Merit Awarded',
    statusColor: 'bg-[#B8F36B]/20 text-[#B8F36B] border-[#B8F36B]/40',
    description:
      'Rigorous computer science curriculum emphasizing object-oriented programming, relational databases, web frameworks, mobile development, and Agile team delivery.',
    highlights: [
      'Capstone Project (HDSE-CPL): Agentic AI Customer Support Chatbot (LangGraph + RAG)',
      'Agile Project Management (HDSE-PMI): Scrum sprint cycles in a 5-developer team',
      'Core Coursework: Python, Django, Java (Android), SQL Database Design, REST APIs',
    ],
  },
  {
    id: 'civil-engineering',
    degree: 'Civil & Structural Engineering Coursework',
    institution: 'Technological University, Myanmar',
    period: '2014 — 2020',
    status: 'Previous Studies (Transitioned to Software)',
    statusColor: 'bg-white/10 text-[#A3AAA3] border-white/10',
    description:
      'Completed five years of rigorous engineering mathematics, structural analysis, and analytical problem-solving coursework through the final-year first semester before purposefully transitioning into software engineering.',
    highlights: [
      'Advanced engineering mathematics, calculus, and linear algebra foundations',
      'Analytical modeling, structural mechanics, and systematic systems thinking',
      'Completed coursework through 1st semester of final year prior to career pivot',
    ],
  },
];
