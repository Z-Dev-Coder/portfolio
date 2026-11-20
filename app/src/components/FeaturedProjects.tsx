import { useState, useMemo } from 'react';
import { ExternalLink, ArrowRight, Layers, Search, X } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { Project, ProjectStatus } from '../data/projects';
import ProjectDetailModal from './ProjectDetailModal';

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  const styles: Record<ProjectStatus, string> = {
    Live: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    Prototype: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    Academic: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    Archived: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30',
    Private: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  };

  return (
    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold inline-flex items-center gap-1.5 ${styles[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{status}</span>
    </span>
  );
}

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'backend' | 'frontend'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query)) ||
        p.role.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const flagshipProjects = filteredProjects.filter((p) => p.isFlagship);
  const secondaryProjects = filteredProjects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-24 border-b border-white/10 bg-[#080A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
              <span>03/ SELECTED WORK &amp; CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F4EF]">
              Flagship Software &amp; AI Systems.
            </h2>
            <p className="text-sm text-[#A3AAA3] max-w-xl">
              Real application builds demonstrating practical backend architectures, agentic AI workflows, and desktop multimedia pipelines.
            </p>
          </div>

          {/* Filter Pills & Quick Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Box */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#737D75] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by tech or keyword..."
                aria-label="Filter projects by technology or keyword"
                className="w-full sm:w-56 pl-8 pr-8 py-1.5 rounded-xl bg-[#121714] border border-white/10 text-xs text-[#F2F4EF] placeholder-[#737D75] focus:outline-none focus:border-[#B8F36B]/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#737D75] hover:text-[#F2F4EF]"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#121714] border border-white/10">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'ai', label: 'AI & Agents' },
                  { id: 'backend', label: 'Backend' },
                  { id: 'frontend', label: 'Frontend' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeFilter === tab.id
                      ? 'bg-[#B8F36B] text-[#080A0A] font-semibold shadow-sm'
                      : 'text-[#A3AAA3] hover:text-[#F2F4EF] hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty state when search produces 0 matches */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#121714] border border-white/10 space-y-3">
            <p className="text-sm text-[#A3AAA3]">No projects match your filter "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-4 py-2 rounded-lg bg-[#171C19] border border-white/10 text-xs text-[#B8F36B] hover:bg-white/5 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* FLAGSHIP PROJECTS — BENTO SHOWCASE */}
        {flagshipProjects.length > 0 && (
          <div className="space-y-8">
            {flagshipProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.id}
                  className="surface-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#B8F36B]/40 transition-all p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Screenshot / Preview Column */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#080A0A] shadow-lg">
                        <img
                          src={project.screenshot}
                          alt={`${project.title} user interface preview`}
                          width="640"
                          height="360"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto max-h-[360px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#B8F36B] text-[#080A0A]"
                          >
                            <span>Open Detailed Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-6 space-y-5 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <StatusBadge status={project.status} />
                          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#B8F36B]/15 text-[#B8F36B] border border-[#B8F36B]/30">
                            {project.badge}
                          </span>
                          <span className="text-xs font-mono text-[#737D75] uppercase">
                            {project.categoryLabel}
                          </span>
                        </div>

                        <h3
                          className="text-2xl sm:text-3xl font-bold text-[#F2F4EF] tracking-tight hover:text-[#B8F36B] transition-colors cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                        >
                          {project.title}
                        </h3>

                        <p className="text-xs font-mono text-[#A3AAA3] leading-relaxed">
                          {project.tagline}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#737D75] pt-1">
                          <span>Role: <strong className="text-[#F2F4EF] font-semibold">{project.role}</strong></span>
                          <span>·</span>
                          <span>Timeline: <strong className="text-[#F2F4EF] font-semibold">{project.timeline}</strong></span>
                        </div>
                      </div>

                      <p className="text-sm text-[#A3AAA3] leading-relaxed">
                        {project.solution}
                      </p>

                      {/* Engineering Highlights */}
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-[#737D75]">
                          Key Technical Capabilities:
                        </p>
                        <ul className="space-y-1.5 text-xs text-[#F2F4EF]">
                          {project.highlights.slice(0, 3).map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="text-[#B8F36B] shrink-0 font-bold">→</span>
                              <span className="text-[#A3AAA3]">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#171C19] text-[#A3AAA3] border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B8F36B] text-[#080A0A] text-xs font-semibold hover:bg-[#D2FF91] transition-all"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121714] border border-white/10 text-xs font-medium text-[#F2F4EF] hover:border-white/20 transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-[#A3AAA3]" />
                          <span>Source Code</span>
                        </a>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121714] border border-white/10 text-xs font-medium text-[#B8F36B] hover:border-[#B8F36B]/50 transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Preview</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SECONDARY PROJECTS GRID */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-[#F2F4EF] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B8F36B]" />
                <span>Academic &amp; Collaborative Projects</span>
              </h3>
              <span className="text-xs font-mono text-[#737D75]">
                {secondaryProjects.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-[#B8F36B]/40 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <StatusBadge status={project.status} />
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A3AAA3]">
                          {project.badge}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#737D75] uppercase">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <h4
                      className="text-xl font-bold text-[#F2F4EF] hover:text-[#B8F36B] transition-colors cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#737D75]">
                      <span>Role: <strong className="text-[#F2F4EF]">{project.role}</strong></span>
                      <span>·</span>
                      <span>{project.timeline}</span>
                    </div>

                    <p className="text-xs text-[#A3AAA3] leading-relaxed">
                      {project.problem}
                    </p>

                    <p className="text-xs text-[#F2F4EF] leading-relaxed bg-[#101413] p-3 rounded-xl border border-white/5">
                      <span className="text-[#B8F36B] font-mono font-semibold">Solution: </span>
                      {project.solution}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171C19] text-[#A3AAA3] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-medium text-[#B8F36B] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#101413] border border-white/10 text-[#A3AAA3] hover:text-[#F2F4EF] transition-colors"
                        title="View Source Code"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#101413] border border-white/10 text-[#B8F36B] hover:text-[#D2FF91] transition-colors"
                          title="Open Live Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
