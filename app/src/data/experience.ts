export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  category: 'operations' | 'engineering' | 'support';
  categoryLabel: string;
  badge: string;
  description: string;
  transferableCapabilities: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'isp-operations',
    role: 'Operations Management',
    company: 'Internet Service Provider (ISP)',
    period: 'Verified Technology Experience',
    category: 'operations',
    categoryLabel: 'Tech Operations & Service Management',
    badge: 'Technology Operations',
    description:
      'Coordinated technical operations, cross-department communication, and service workflow resolution in an Internet Service Provider environment.',
    transferableCapabilities: [
      'Operational coordination and service delivery management under tight turnaround windows',
      'Incident escalation management, communicating between field technicians and end customers',
      'Workflow process documentation, queue prioritization, and service tracking',
      'Operational problem-solving and structured technical troubleshooting coordination',
    ],
  },
  {
    id: 'site-engineer-imf',
    role: 'Site Engineer',
    company: 'Innovate Myanmar Forward Co., Ltd.',
    period: '2020 — 2021',
    category: 'engineering',
    categoryLabel: 'Engineering Execution & Oversight',
    badge: 'Engineering Discipline',
    description:
      'Supervised structural construction deliverables against engineering blueprints, coordinated multi-contractor schedules, and enforced quality control standards.',
    transferableCapabilities: [
      'Systematic adherence to technical specifications, architectural blueprints, and compliance guidelines',
      'Cross-functional team coordination across contractors, managers, and supply stakeholders',
      'Daily analytical progress reporting, milestone verification, and quality assurance auditing',
      'Disciplined execution and critical path problem resolution under tight deadlines',
    ],
  },
  {
    id: 'site-engineer-am',
    role: 'Site Engineer',
    company: 'AM Construction Group',
    period: '2018 — 2019',
    category: 'engineering',
    categoryLabel: 'Field Supervision & QA',
    badge: 'Field Engineering',
    description:
      'Assisted senior engineers in structural site surveying, quality assurance testing, and daily construction logs while tracking contractor workflows.',
    transferableCapabilities: [
      'Rigorous attention to detail in technical measurements and material quality assurance',
      'Data documentation habits and structured log keeping for engineering audits',
      'Subcontractor coordination to maintain alignment with critical path timelines',
    ],
  },
  {
    id: 'tech-sales-power',
    role: 'Sales & Customer Technical Support',
    company: 'Power Used Laptop Sales & Service Centre',
    period: '2013 — 2014',
    category: 'support',
    categoryLabel: 'Hardware & Client Support',
    badge: 'Earlier Experience',
    description:
      'Supported customers with laptop hardware specifications, configuration requirements, and technical inquiries while assisting with sales and inventory coordination.',
    transferableCapabilities: [
      'Active listening and translating customer requirements into appropriate hardware recommendations',
      'Foundational hardware literacy, operating system configuration, and diagnostic support',
      'Clear, empathetic technical communication with non-technical users',
    ],
  },
];
