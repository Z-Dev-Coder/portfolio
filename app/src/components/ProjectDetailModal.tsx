import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Cpu, Layers, HelpCircle, Lightbulb, ShieldAlert, Award, Check } from 'lucide-react';
import type { Project, ProjectStatus } from '../data/projects';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
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
    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold inline-flex items-center gap-1.5 ${styles[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{status}</span>
    </span>
  );
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#080A0A] border border-white/10 shadow-2xl shadow-black p-6 sm:p-8 md:p-10 space-y-8 text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#B8F36B]/15 text-[#B8F36B] border border-[#B8F36B]/30 font-semibold">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-[#737D75] uppercase tracking-wider">
                {project.categoryLabel}
              </span>
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#F2F4EF] tracking-tight">
              {project.title}
            </h2>

            <p className="text-sm text-[#A3AAA3] max-w-2xl font-normal leading-relaxed">{project.tagline}</p>

            {/* Skimmable Role & Timeline Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#737D75] pt-1">
              <span>Role: <strong className="text-[#F2F4EF] font-semibold">{project.role}</strong></span>
              <span>·</span>
              <span>Timeline: <strong className="text-[#F2F4EF] font-semibold">{project.timeline}</strong></span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-xl bg-[#121714] border border-white/10 text-[#A3AAA3] hover:text-[#F2F4EF] hover:border-white/20 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Screenshot or Diagram Preview */}
        {project.screenshot && (
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#121714]">
            <img
              src={project.screenshot}
              alt={`${project.title} user interface preview`}
              loading="lazy"
              decoding="async"
              className="w-full max-h-[380px] object-cover object-top"
            />
          </div>
        )}

        {/* Skimmable Overview: Problem / Constraints / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#121714] border border-white/5 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A3AAA3] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#B8F36B]" />
              <span>Problem Statement</span>
            </h3>
            <p className="text-sm text-[#F2F4EF] leading-relaxed">{caseStudy.problemDetails}</p>
          </div>

          <div className="p-5 rounded-xl bg-[#121714] border border-white/5 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A3AAA3] flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#B8F36B]" />
              <span>Proposed Solution</span>
            </h3>
            <p className="text-sm text-[#F2F4EF] leading-relaxed">{caseStudy.solutionDetails}</p>
          </div>
        </div>

        {/* Engineering Constraints */}
        {caseStudy.constraints && caseStudy.constraints.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#F2F4EF] flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#B8F36B]" />
              <span>Engineering Constraints</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.constraints.map((constraint, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#121714] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-[#B8F36B] uppercase font-semibold">Constraint 0{idx + 1}</span>
                  <p className="text-xs text-[#A3AAA3] leading-relaxed">{constraint}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Architecture */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-[#F2F4EF] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#B8F36B]" />
            <span>System Architecture &amp; Data Flow</span>
          </h3>

          <div className="p-5 rounded-xl bg-[#101413] border border-white/10 space-y-3 font-mono text-xs">
            {caseStudy.architecture.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[#A3AAA3]">
                <span className="text-[#B8F36B] shrink-0 font-bold">[{idx + 1}]</span>
                <span className="text-[#F2F4EF]">{item}</span>
              </div>
            ))}
          </div>

          {caseStudy.architectureDiagram && (
            <div className="rounded-xl overflow-hidden border border-white/10 mt-3">
              <img
                src={caseStudy.architectureDiagram}
                alt={`${project.title} system architecture diagram`}
                loading="lazy"
                decoding="async"
                className="w-full max-h-80 object-contain bg-[#121714] p-2"
              />
            </div>
          )}
        </div>

        {/* Measurable Results & Impact */}
        {caseStudy.impact && caseStudy.impact.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#F2F4EF] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#B8F36B]" />
              <span>Outcomes &amp; Measurable Impact</span>
            </h3>
            <div className="space-y-2">
              {caseStudy.impact.map((result, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg flex items-start gap-3 text-xs leading-relaxed bg-[#121714] border border-white/5 text-[#F2F4EF]"
                >
                  <Check className="w-3.5 h-3.5 text-[#B8F36B] shrink-0 mt-0.5" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Individual Contributions */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[#F2F4EF] flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#B8F36B]" />
            <span>My Engineering Contributions</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {caseStudy.contributions.map((c, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-[#121714] border border-white/5 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F36B] shrink-0 mt-2" />
                <p className="text-xs text-[#A3AAA3] leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions & Trade-offs */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[#F2F4EF] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#B8F36B]" />
            <span>Engineering Decisions &amp; Trade-offs</span>
          </h3>
          <ul className="space-y-2 text-xs text-[#A3AAA3]">
            {caseStudy.engineeringDecisions.map((decision, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#B8F36B] shrink-0 mt-0.5">→</span>
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Badges */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <p className="text-xs font-mono uppercase text-[#737D75]">Verified Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-md bg-[#121714] border border-white/10 text-[#F2F4EF]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121714] border border-white/10 text-xs font-semibold text-[#F2F4EF] hover:border-[#B8F36B] hover:text-[#B8F36B] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source Code</span>
            </a>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B8F36B] text-[#080A0A] text-xs font-semibold hover:bg-[#D2FF91] transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono text-[#737D75] px-3 py-2 rounded-lg bg-[#121714] border border-white/5">
                {project.id === 'recap-studio'
                  ? 'Desktop App · Local inference'
                  : 'Demo available on request'}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#A3AAA3] hover:text-[#F2F4EF] underline"
          >
            Close Case Study (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}
