import { useState } from 'react';

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    '/8a2c3d1b-2a68-4314-9732-e10dbb693277.jpg',
    '/3cd9eb9b-8481-4766-bc32-daca2e8d3d58.jpg',
    '/c14acca9-54c4-4404-a8d4-9f2fc691c98a.jpg',
    '/a4e75349-c7ca-4d21-9e3d-8b9fb0c9da60.jpg',
    '/5b5b6749-bf5e-46f4-8e8b-f261823eb6b4.jpg',
    '/08deea43-01c5-4541-b22c-e1aa664fe187.png',
    '/0608e288-d6c4-43b4-82d6-f19529dff9cf.jpg',
    '/cd55f0aa-1341-4baf-bdc7-5fef4e27b8b6.png',
    '/d82f142e-cf51-4318-af75-3c900444ffc4.jpg',
  
  ];

  return (
    <section id="gallery" className="py-24 gradient-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gallery
          </h2>
          <p className="text-2xl text-[#D1D5E0] italic font-serif">
            Moments of Grace and Empowerment
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#00B8E6]/50 via-transparent to-[#8B4DFF]/30 rounded-xl transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div
                className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 ${
                  hoveredIndex === index ? 'border-[#00B8E6] shadow-lg shadow-[#00B8E6]/50' : ''
                }`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-full gradient-brand text-white text-lg font-semibold hover:shadow-xl hover:shadow-[#00B8E6]/50 transition-all duration-300">
            Explore Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
