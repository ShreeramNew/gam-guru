import React from 'react';

export default function AreasOfLearning() {
  const tools = [
    { name: "Yoga & Meditation", category: "Mind & Body" },
    { name: "Dinacharya - A Way of Life", category: "Habits" },
    { name: "Pooja Vidhan", category: "Ritual Science" },
    { name: "Power of Sounds - Shlokas", category: "Vibrations" },
    { name: "Living a Story - Puranas", category: "Wisdom" },
    { name: "Kalaripayattu (Martial Arts)", category: "Defense & Flow" },
    { name: "Basic Physical Vyayamam", category: "Fitness" },
    { name: "Indian Classical Music & Dance", category: "Arts" },
    { name: "Crafts of Culture", category: "Creativity" },
    { name: "Arts of Bharat", category: "Aesthetics" }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Ancient Tools & Techniques</h2>
          <p className="text-stone-500 mt-2 text-sm">A holistic curriculum addressing all developmental dimensions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-orange-300 transition-all duration-200 group flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 group-hover:text-orange-600 transition-colors">
                {item.category}
              </span>
              <h3 className="text-base font-serif text-stone-800 group-hover:text-stone-900 pt-4">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}