import React from 'react';

export default function FourPillars() {
  const pillars = [
    { title: "A Flexible & Agile Body", icon: "🏃‍♂️", desc: "Building core strength, posture, and body awareness through physical discipline." },
    { title: "A Sharp, Clear & Joyful Mind", icon: "🧠", desc: "Enhancing memory retention, sharp focus, and long-term mental clarity." },
    { title: "Stable, Strong & Loving Emotions", icon: "❤️", desc: "Cultivating resilience, deep self-compassion, and emotional intelligence." },
    { title: "A High & Vibrant Energy System", icon: "⚡", desc: "Activating latent dynamic inner potential through deep sound science." }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 border-t border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Our Core Focus Areas</h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-stone-50 border border-stone-200/60 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl mb-6 group-hover:bg-orange-600 transition-colors duration-300 group-hover:scale-110 transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">{pillar.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}