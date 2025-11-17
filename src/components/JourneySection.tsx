import { Crown, Laptop, Calendar, GraduationCap } from 'lucide-react';

const JourneySection = () => {
  const steps = [
    {
      icon: Laptop,
      title: 'Apply Online',
      subtitle: 'Your journey begins here',
      image: '/unnamed (12).jpg',
    },
    {
      icon: Calendar,
      title: 'Weekly Challenges',
      subtitle: 'Evolve through exciting tasks',
      image: '/unnamed (8).jpg',
    },
    {
      icon: GraduationCap,
      title: 'Bootcamp Training',
      subtitle: 'Transform with expert guidance',
      image: '/unnamed (13).jpg',
    },
    {
      icon: Crown,
      title: 'Grand Finale',
      subtitle: 'Shine on the global stage',
      image: '/Gemini_Generated_Image_v8ezvsv8ezvsv8ez.png',
    },
  ];

  return (
    <section id="journey" className="py-24 gradient-bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">The Journey</h2>
          <p className="text-xl text-[#D1D5E0] italic font-serif">90 Days of Elegant Transformation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:scale-[1.02] transition-all duration-500"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF]">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-[#D1D5E0] text-sm">{step.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-4 rounded-full gradient-brand text-white text-lg font-semibold hover:shadow-xl hover:shadow-[#00B8E6]/50 transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
