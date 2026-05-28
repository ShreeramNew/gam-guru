import React from 'react';

export default function SchoolVsSanatan() {
  const conventionalPoints = [
    "Information accumulation & memory testing",
    "Rigid metrics and comparative grading systems",
    "Primarily static indoor environments",
    "Preparation for economic survival"
  ];

  const sanatanPoints = [
    "Experiential transformation & character building",
    "Nurturing individual innate traits and potential",
    "Deep nature immersion and physical agility",
    "Building an unshakeable existential anchor for life"
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-700 font-semibold tracking-wider uppercase text-xs">The Distinction</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mt-2">A Complementary Dimension to Regular School</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Conventional Schooling Column */}
          <div className="border border-stone-200 bg-stone-50/40 p-8 md:p-10 rounded-3xl flex flex-col justify-between opacity-75">
            <div>
              <h3 className="text-xl font-serif text-stone-500 mb-6 flex items-center gap-2">
                <span>🏫</span> Conventional Schooling
              </h3>
              <ul className="space-y-4">
                {conventionalPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start text-stone-600 text-sm gap-3">
                    <span className="text-stone-400 mt-0.5">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-stone-400 text-xs font-medium uppercase tracking-wider mt-8">Focus: External Execution</p>
          </div>

          {/* Sanatan After School Column */}
          <div className="border-2 border-orange-600/20 bg-gradient-to-b from-amber-50/40 to-orange-50/20 p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/40 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <h3 className="text-xl font-serif text-orange-800 mb-6 flex items-center gap-2">
                <span>🕉️</span> Sanatan After School
              </h3>
              <ul className="space-y-4">
                {sanatanPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start text-stone-800 text-sm font-medium gap-3">
                    <span className="text-orange-600 mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-orange-700 text-xs font-semibold uppercase tracking-wider mt-8">Focus: Core Human Unfolding</p>
          </div>
        </div>
      </div>
    </section>
  );
}