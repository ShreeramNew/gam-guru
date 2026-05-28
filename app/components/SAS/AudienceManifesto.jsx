import React from 'react';

export default function AudienceManifesto() {
  return (
    <section className="w-full bg-orange-700 text-white py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Eligibility Badge */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <span className="text-orange-200 tracking-wider font-semibold uppercase text-xs mb-2">Eligibility</span>
          <h2 className="text-3xl font-serif mb-4">Who is this for?</h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl">
            <p className="text-sm text-orange-100">Target Group:</p>
            <p className="text-2xl font-serif font-bold text-white mt-1">Ages 6 to 14 Years</p>
          </div>
        </div>

        {/* Right: Parent Guidelines / Manifesto */}
        <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-orange-600/60 pt-8 md:pt-0 md:pl-12">
          <span className="text-5xl text-orange-300/40 font-serif block h-4 -mt-4">“</span>
          <p className="text-xl md:text-2xl font-serif text-orange-50 italic leading-relaxed">
            If you are a parent who truly understands the profound significance of our ancient culture and wants to deliberately embed those values within your child's modern life—this space is built for you.
          </p>
        </div>

      </div>
    </section>
  );
}