const FinaleSection = () => {
  const images = [
    '/WhatsApp Image 2025-11-01 at 14.18.50_cd3cfcf5.jpg',
    '/WhatsApp Image 2025-11-01 at 20.08.48_a4b3a528.jpg',
    '/IMG-20251101-WA0021.jpg',
  ];

  return (
    <section id="finale" className="py-24 bg-[#0A0F2E]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Finale Experience
        </h2>
        <p className="text-2xl text-[#D1D5E0] italic font-serif mb-16">
          Every Crown Tells a Story of Grace and Grit
        </p>

        {/* Image Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={src}
                alt={`Finale Experience ${index + 1}`}
                className="w-full h-[450px] object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinaleSection;
