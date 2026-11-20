import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project, PROJECTS } from '../data/projects';
import { ScrollReveal } from './ScrollReveal';

const ProjectsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'backend' | 'frontend'>('all');
  const filtered = PROJECTS.filter(p => activeTab === 'all' || p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-[#11151D] text-[#F5F7FA]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {(['all','ai','backend','frontend'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab===tab ? 'bg-[#8B9CFF] text-[#0B0D12]' : 'bg-[#171D27] text-[#A1A8B5] hover:bg-[#171D27]/80'}`}
            >
              {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(project => (
            <ScrollReveal key={project.id} direction="up" delay={50}>
              <div className="bg-[#131922] rounded-xl border border-[#262E3B] overflow-hidden hover:shadow-lg transition-shadow">
                {/* Accent bar */}
                <div className={`h-1 bg-gradient-to-r ${project.accent}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${project.badgeColor}`}>{project.badge}</span>
                    <span className="text-xs uppercase text-[#A1A8B5]">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5F7FA] mb-1">{project.title}</h3>
                  <p className="text-sm text-[#A1A8B5] mb-2">{project.subtitle}</p>
                  <p className="text-sm text-[#A1A8B5] mb-3">{project.description}</p>
                  <ul className="list-disc list-inside text-xs text-[#A1A8B5] mb-3">
                    {project.highlights.slice(0,3).map((h,i)=>(<li key={i}>{h}</li>))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((t,i)=>(
                      <span key={i} className="text-xs bg-[#0B0D12] text-[#A1A8B5] px-2 py-0.5 rounded border border-[#262E3B]">{t}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#8B9CFF] hover:underline text-sm">
                      GitHub <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#8B9CFF] hover:underline text-sm">
                        Live Demo <ArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
