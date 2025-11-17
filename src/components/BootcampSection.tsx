const BootcampSection = () => {
  return (
    <section id="highlights" className="py-24 gradient-bg-deep">
      <div className="max-w-7xl mx-auto px-6">
        {/* Highlight Section Only */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
          <img
            src="/WhatsApp Image 2025-11-01 at 14.39.04_80060db5.jpg"
            alt="Finale Highlights"
            className="w-full h-[550px] object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center">
              Empower. Evolve. Excel.
            </h3>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300">
              View Finale Highlights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampSection;
