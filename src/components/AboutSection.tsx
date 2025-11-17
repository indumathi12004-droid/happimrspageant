const AboutSection = () => {
  return (
    <section id="about" className="py-24 gradient-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 gradient-brand opacity-20 blur-3xl rounded-full" />
            <img
              src="/f25ce4e5-ee59-4129-b1f4-000a1129530c.jpg"
              alt="HAPPI MRS GLOBAL Contestant"
              className="relative rounded-2xl shadow-2xl shadow-[#00B8E6]/30 w-full h-[600px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-lg text-[#D1D5E0] leading-relaxed">
              Happi Mrs Global celebrates the strength and grace of modern women. Through mentorship, training, and global exposure, we empower participants to balance elegance with purpose — defining a new standard for leadership and confidence.
            </p>
            <p className="text-lg text-[#D1D5E0] leading-relaxed">
              Our platform recognizes married women who embody the perfect fusion of traditional grace and contemporary empowerment, creating inspiring role models for future generations.
            </p>
            <button className="mt-8 px-8 py-3.5 rounded-full gradient-brand text-white font-semibold hover:shadow-xl hover:shadow-[#00B8E6]/50 transition-all duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
