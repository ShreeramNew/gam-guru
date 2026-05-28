import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-stone-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-orange-700 font-semibold tracking-wider uppercase text-xs">The Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mt-2">Why Choose Sanatan After School?</h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Feature Card (Double Width) */}
          <div className="md:col-span-2 bg-gradient-to-br from-orange-700 to-orange-800 text-white p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-md">
            <span className="text-3xl">🏡</span>
            <div className="mt-12">
              <h3 className="text-2xl font-serif mb-3">A Joint Family Atmosphere</h3>
              <p className="text-orange-100 text-sm max-w-xl leading-relaxed">
                Recreating the safety, wisdom, and comforting environment of traditional multi-generational households where values are caught, not just taught.
              </p>
            </div>
          </div>

          {/* Regular Card */}
          <div className="bg-white border border-stone-200 p-8 rounded-3xl flex flex-col justify-between">
            <span className="text-3xl">🤝</span>
            <div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">A Sangha of Like-Minded Kids</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Peer environments designed to celebrate and nourish good values naturally.</p>
            </div>
          </div>

          {/* Regular Card */}
          <div className="bg-white border border-stone-200 p-8 rounded-3xl flex flex-col justify-between">
            <span className="text-3xl">🌿</span>
            <div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">Nature Connect</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Regular structural engagement with earth, trees, and natural cycles.</p>
            </div>
          </div>

          {/* Feature Card (Double Width) */}
          <div className="md:col-span-2 bg-emerald-800 text-white p-8 md:p-10 rounded-3xl flex flex-col justify-between">
            <span className="text-3xl">👩‍🏫</span>
            <div className="mt-12">
              <h3 className="text-2xl font-serif mb-3">Mother Teachers Connect in Nurturing Kids</h3>
              <p className="text-emerald-100 text-sm max-w-xl leading-relaxed">
                Blending pedagogical precision with structural maternal empathy to treat every child with singular personal attention.
              </p>
            </div>
          </div>

          {/* Additional Minimal Grid Elements stacked vertically or inline */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <div className="bg-stone-100 p-6 rounded-2xl"><p className="font-serif text-stone-800">✨ Divine as a Living Presence</p></div>
            <div className="bg-stone-100 p-6 rounded-2xl"><p className="font-serif text-stone-800">🙏 Gratitude as an Attitude</p></div>
            <div className="bg-stone-100 p-6 rounded-2xl"><p className="font-serif text-stone-800">🎭 Enacting & Connecting with Deities</p></div>
          </div>

        </div>
      </div>
    </section>
  );
}