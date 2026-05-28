import React from 'react';

export default function RegistrationCTA() {
  const steps = [
    { label: "Book a Demo", desc: "Reserve your slot using our interactive form." },
    { label: "Attend Demo Class", desc: "Experience our teaching methodologies live with your child." },
    { label: "Final Admission", desc: "Confirm registration and align your child's cohort schedule." }
  ];

  return (
    <section className="w-full bg-stone-50 py-20 px-6 md:px-16 border-t border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Simple Registration Process</h2>
        <p className="text-stone-600 max-w-lg mx-auto text-sm mb-12">Set your child on a transformational journey in three elementary steps.</p>

        {/* Process Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm mb-4 border border-orange-200">
                {idx + 1}
              </div>
              <h3 className="font-serif text-stone-900 font-medium mb-1">{step.label}</h3>
              <p className="text-stone-500 text-xs px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Conversion Box */}
        <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-sm max-w-xl mx-auto">
          <h3 className="text-xl font-serif text-stone-900 mb-2">Experience the Program First Hand</h3>
          <p className="text-stone-500 text-sm mb-6">Every admission includes orientation kits, baseline profiling, and digital content access.</p>
          
          <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-10 py-4 rounded-full shadow-md transition-colors tracking-wide">
            Book a free demo
          </button>
        </div>
      </div>
    </section>
  );
}