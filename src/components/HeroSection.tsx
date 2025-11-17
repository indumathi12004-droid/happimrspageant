import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/WhatsApp Image 2025-11-01 at 20.08.48_a4b3a528.jpg',
      title: 'Crowning Moment',
      description: 'Beneath aqua-lavender spotlights'
    },
    {
      image: '/IMG-20251101-WA0022.jpg',
      title: 'Ramp Elegance',
      description: 'Designer gowns on a reflective runway'
    },
    {
      image: '/WhatsApp Image 2025-11-01 at 14.18.50_cd3cfcf5.jpg',
      title: 'Mentorship & Confidence',
      description: 'Guidance through etiquette training'
    },
   
    {
      image: '/WhatsApp Image 2025-11-01 at 14.02.06_f26e39c5.jpg',
      title: 'Celebration & Unity',
      description: 'Finalists under aqua-lavender confetti'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#00B8E6]/20 via-transparent to-[#8B4DFF]/30 z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-110"
          />
        </div>
      ))}

   <div className="flex flex-col items-center justify-end text-center relative z-20 h-full pb-[6rem]">
  {/* Title */}
  <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-2 drop-shadow-lg">
    Happi Mrs Global
  </h1>

  {/* Caption */}
  <p className="text-lg md:text-2xl italic text-white/90 mb-6">
    Grace in Every Role. Power in Every Step.
  </p>

  {/* Apply Now Button - Above dots */}
  <button className="bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300">
    Apply Now
  </button>
</div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 gradient-brand'
                : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
