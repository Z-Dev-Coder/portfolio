import React from 'react';
import { ArrowRight } from 'lucide-react';

const EngineeringSection: React.FC = () => {
  const categories = [
    { title: 'Backend Engineering', items: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'REST APIs'] },
    { title: 'Applied AI Engineering', items: ['LangGraph', 'RAG', 'pgvector', 'Ollama', 'Local LLMs'] },
    { title: 'Frontend Engineering', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
    { title: 'Software Engineering Practice', items: ['Git', 'API Design', 'Authentication', 'Testing', 'Agile Scrum'] },
  ];
  return (
    <section id="stack" className="py-20 bg-[#0B0D12] text-[#F5F7FA]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">How I Engineer Software</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#131922] rounded-xl border border-[#262E3B] p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#8B9CFF]">{cat.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-[#A1A8B5]">
                {cat.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
