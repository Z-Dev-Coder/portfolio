import { PROJECTS } from './projects';

export interface StatisticMetric {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  isDateRange?: boolean;
  dateRangeText?: string;
}

const totalProjects = PROJECTS.length; // 7
const aiProjects = PROJECTS.filter((p) => p.category === 'ai').length; // 3

export const STATISTICS: StatisticMetric[] = [
  {
    id: 'projects-count',
    value: totalProjects,
    suffix: '+',
    label: 'Delivered Projects',
    sublabel: 'Python backend, AI & mobile software',
  },
  {
    id: 'ai-projects',
    value: aiProjects,
    label: 'Applied AI Systems',
    sublabel: 'LangGraph, RAG & local LLMs',
  },
  {
    id: 'isp-tenure',
    value: 2,
    isDateRange: true,
    dateRangeText: '2022 — 2024',
    label: 'ISP Operations Management',
    sublabel: 'Tech coordination & incident escalation',
  },
  {
    id: 'hnd-merit',
    value: 100,
    isDateRange: true,
    dateRangeText: 'Merit Award',
    label: 'HND Software Engineering',
    sublabel: 'EduCLaaS Academy, Myanmar',
  },
];
