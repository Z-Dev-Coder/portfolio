import { useState, useEffect } from 'react';
import { WORKFLOW_STEPS } from '../data/workflow';
import { CheckCircle2 } from 'lucide-react';

export default function EngineeringWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Auto-track steps as they cross viewport threshold
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = WORKFLOW_STEPS.map((step) =>
        document.getElementById(`workflow-${step.id}`)
      );
      const viewportMid = window.innerHeight * 0.45;

      for (let i = 0; i < stepElements.length; i++) {
        const el = stepElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            setActiveStepIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeStep = WORKFLOW_STEPS[activeStepIndex] || WORKFLOW_STEPS[0];

  return (
    <section id="workflow" className="py-24 border-b border-white/10 bg-[#080A0A] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
            <span>02/ DEVELOPMENT METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F4EF]">
            How I Approach Building Software.
          </h2>
          <p className="text-sm text-[#A3AAA3] leading-relaxed">
            From understanding the core friction to delivering a robust, grounded, and well-documented solution.
          </p>
        </div>

        {/* Desktop 2-Column Sequential Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT SIDE: Sticky Interactive Visual Context (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-6">
            <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 relative overflow-hidden">
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#B8F36B]" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-2xl font-bold text-[#B8F36B]">
                  STEP {activeStep.stepNumber}
                </span>
                <span className="text-xs font-mono text-[#737D75] uppercase tracking-wider">
                  {activeStep.focusArea}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#F2F4EF] tracking-tight">
                  {activeStep.title}
                </h3>
                <p className="text-xs text-[#A3AAA3] mt-2 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Dynamic Step Architecture Visual */}
              <div className="p-4 rounded-xl bg-[#080A0A] border border-white/10 font-mono text-xs text-[#A3AAA3] space-y-3">
                {activeStep.visualType === 'problem' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#737D75]">
                      <span>PROBLEM SPECIFICATION</span>
                      <span className="text-[#B8F36B]">PHASE 1</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#121714] border border-white/5 space-y-1">
                      <p className="text-[#F2F4EF] text-xs">Target Pain Point:</p>
                      <p className="text-[#A3AAA3] text-[11px]">Unstructured manual workflows &amp; repetitive processing</p>
                    </div>
                    <div className="p-2.5 rounded bg-[#121714] border border-white/5 space-y-1">
                      <p className="text-[#B8F36B] text-xs">Success Metric:</p>
                      <p className="text-[#A3AAA3] text-[11px]">Deterministic data contracts, privacy &amp; low latency</p>
                    </div>
                  </div>
                )}

                {activeStep.visualType === 'architecture' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-[#737D75]">
                      <span>ARCHITECTURE TOPOLOGY</span>
                      <span className="text-[#B8F36B]">SYSTEM MAP</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="p-2 rounded bg-[#171C19] border border-white/10 text-[#F2F4EF]">
                        Client UI (React/Electron)
                      </div>
                      <div className="p-2 rounded bg-[#171C19] border border-[#B8F36B]/40 text-[#B8F36B]">
                        REST &amp; WS Gateway
                      </div>
                      <div className="p-2 rounded bg-[#171C19] border border-white/10 text-[#F2F4EF]">
                        PostgreSQL &amp; Vector Store
                      </div>
                    </div>
                    <div className="p-2 rounded bg-[#121714] text-[11px] text-[#A3AAA3]">
                      Data flow: Client ──► Gateway ──► Service Logic ──► DB
                    </div>
                  </div>
                )}

                {activeStep.visualType === 'backend' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#737D75]">
                      <span>BACKEND PIPELINE</span>
                      <span className="text-[#B8F36B]">PYTHON &amp; DJANGO</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#121714]">
                        <span>[1] Serializer Validation</span>
                        <span className="text-[#B8F36B]">PASS</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#121714]">
                        <span>[2] Business Logic Services</span>
                        <span className="text-[#B8F36B]">CLEAN</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#121714]">
                        <span>[3] Relational DB Transactions</span>
                        <span className="text-[#B8F36B]">COMMITTED</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep.visualType === 'ai' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#737D75]">
                      <span>AGENTIC REASONING</span>
                      <span className="text-[#B8F36B]">LANGGRAPH &amp; RAG</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#121714] space-y-1.5 text-[10px]">
                      <div className="flex items-center gap-1.5 text-[#F2F4EF]">
                        <span className="text-[#B8F36B]">User Prompt</span>
                        <span>──►</span>
                        <span>pgvector Cosine Search</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#F2F4EF]">
                        <span>──►</span>
                        <span className="text-[#B8F36B]">LangGraph Evaluator</span>
                        <span>──►</span>
                        <span>Local Model</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#737D75]">Zero cloud API cost via Ollama / Faster-Whisper</p>
                  </div>
                )}

                {activeStep.visualType === 'testing' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#737D75]">
                      <span>VERIFICATION CHECKPOINTS</span>
                      <span className="text-[#B8F36B]">READY</span>
                    </div>
                    <div className="space-y-1 text-[11px]">
                      <div className="flex items-center gap-2 text-[#A3AAA3]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8F36B]" />
                        <span>Schema Validation &amp; Payload Checks</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A3AAA3]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8F36B]" />
                        <span>Network Timeout &amp; Fallback Handlers</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A3AAA3]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8F36B]" />
                        <span>Edge Case Boundary Profiling</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep.visualType === 'delivery' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#737D75]">
                      <span>DELIVERY &amp; DOCUMENTATION</span>
                      <span className="text-[#B8F36B]">RELEASE</span>
                    </div>
                    <div className="p-2 rounded bg-[#121714] text-[11px] space-y-1">
                      <p className="text-[#F2F4EF]">Git Commit: feat(core): complete workflow</p>
                      <p className="text-[#737D75]">README.md, Architecture diagrams, API specs</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Step Dots */}
              <div className="flex items-center gap-1.5 pt-2">
                {WORKFLOW_STEPS.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      const el = document.getElementById(`workflow-${s.id}`);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeStepIndex
                        ? 'w-8 bg-[#B8F36B]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Jump to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Scrolling Workflow Steps */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 relative text-left">
            {/* Continuous vertical timeline guide line */}
            <div className="absolute top-8 bottom-8 left-4 sm:left-6 w-[2px] bg-white/10 hidden sm:block" />

            {WORKFLOW_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <div
                  key={step.id}
                  id={`workflow-${step.id}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`surface-card rounded-2xl p-6 sm:p-8 space-y-4 transition-all duration-300 relative cursor-pointer sm:pl-16 ${
                    isActive
                      ? 'border-[#B8F36B]/60 shadow-lg shadow-[#B8F36B]/5 bg-[#171C19]'
                      : 'border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Step Milestone Marker */}
                  <div
                    className={`absolute left-3.5 sm:left-4 top-8 -translate-x-1/2 w-6 h-6 rounded-full border-2 hidden sm:flex items-center justify-center transition-all ${
                      isActive
                        ? 'border-[#B8F36B] bg-[#080A0A] text-[#B8F36B] scale-110'
                        : 'border-white/20 bg-[#121714] text-[#737D75]'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold">{step.stepNumber}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-[#B8F36B]/20 text-[#B8F36B] border border-[#B8F36B]/40'
                            : 'bg-white/5 text-[#A3AAA3]'
                        }`}
                      >
                        PHASE {step.stepNumber}
                      </span>
                      <span className="text-xs font-mono text-[#737D75]">
                        {step.focusArea}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F2F4EF] tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#A3AAA3] leading-relaxed font-normal">
                    {step.description}
                  </p>

                  <div className="pt-2 border-t border-white/5 space-y-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#737D75]">
                      Engineering Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#F2F4EF]">
                      {step.keyChecks.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isActive ? 'text-[#B8F36B]' : 'text-[#737D75]'
                            }`}
                          />
                          <span className={isActive ? 'text-[#F2F4EF]' : 'text-[#A3AAA3]'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
