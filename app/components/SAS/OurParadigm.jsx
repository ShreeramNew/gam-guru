import React from 'react';

export default function OurParadigm() {
  return (
    <section className="w-full bg-stone-50 py-24 px-6 md:px-16 border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Step 1: The Misconception Clear-out */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 opacity-60">
          <span className="text-sm md:text-base font-serif text-stone-400 line-through decoration-stone-400 decoration-2 tracking-wide bg-stone-200/50 px-4 py-2 rounded-full">
            Not just a regular course
          </span>
          <span className="text-sm md:text-base font-serif text-stone-400 line-through decoration-stone-400 decoration-2 tracking-wide bg-stone-200/50 px-4 py-2 rounded-full">
            Not just rote-learning shlokas or arts
          </span>
          <span className="text-sm md:text-base font-serif text-stone-400 line-through decoration-stone-400 decoration-2 tracking-wide bg-stone-200/50 px-4 py-2 rounded-full">
            Not just accumulating dead information
          </span>
        </div>

        {/* Step 2: The Core Declaration */}
        <div className="text-center space-y-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif text-stone-900 leading-relaxed">
            We are <span className="text-orange-600 font-semibold underline decoration-orange-200 decoration-4 underline-offset-4">nurturing & protecting</span> the natural joy that your child was born with, keeping it alive throughout their entire life.
          </h2>

          <div className="w-12 h-1 bg-stone-300 mx-auto rounded-full"></div>

          {/* Core Pillars / Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-4">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:border-orange-200">
              <span className="text-2xl block mb-3">🎨</span>
              <h3 className="text-lg font-serif text-stone-900 mb-2">The Sweetness & Freedom</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Experiencing the depth and absolute freedom inside our timeless culture by presenting it in a vibrant, naturally relatable, and modern way.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:border-emerald-200">
              <span className="text-2xl block mb-3">🛡️</span>
              <h3 className="text-lg font-serif text-stone-900 mb-2">The Ultimate Life Anchor</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Building an internal resilience system they can intuitively fall back on to gracefully encounter and conquer any life situation.
              </p>
            </div>
          </div>

          {/* Section Integrated Call to Action Context */}
          <div className="pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-700">Rooted in Joy. Built for Resilience.</p>
          </div>

        </div>
      </div>
    </section>
  );
}