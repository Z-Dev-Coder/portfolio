import React from 'react';

const CredentialStrip: React.FC = () => {
  const items = [
    'Higher National Diploma in Software Engineering – Merit',
    'BSc Computing – Candidate',
    '7+ Software & AI Projects',
    'Python / Django / Applied AI Focus',
  ];
  return (
    <section className="py-8 bg-[#0B0D12] text-[#A1A8B5]">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
        {items.map((it, i) => (
          <React.Fragment key={i}>
            <span>{it}</span>
            {i < items.length - 1 && <span className="text-[#262E3B]">|</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CredentialStrip;
