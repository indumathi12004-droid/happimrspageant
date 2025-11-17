import { Handshake } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    { name: 'Photographers', logo: '/2f2df118-45ea-4fb6-b72b-a64edb1ccc84 copy.jpg' },
    { name: 'Makeup Artists', logo: '/unnamed.jpg' },
    { name: 'Boutiques', logo: '/61dc5917-f4bb-448f-b109-91cdc8ab9c86.jpg' },
    { name: 'Jewelry Brands', logo: '/c3cf24e0-f7d0-458d-94ea-7c8b72ef06e4.jpg' },
    { name: 'Fitness Centers', logo: '/61dbbfbe-1cd8-43a3-878a-61229f464282.jpg' },
    { name: 'Hotels & Resorts', logo: '/addc291c-dd2b-4e24-85e1-5e135b35d7bf.jpg' },
    { name: 'Media Partners', logo: '/9f999afb-32f0-47d0-8066-7976a02d1d25.jpg' },
    { name: 'Beauty Brands', logo: '/unnamed (2).jpg' },
  ];

  return (
    <section id="partners" className="py-24 gradient-bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="text-white mr-4" size={48} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Global Collaborators
          </h2>
          <p className="text-xl text-[#D1D5E0] max-w-3xl mx-auto italic font-serif">
            Empowering beauty with purpose through strategic alliances
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00B8E6]/30 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto object-contain mb-4 rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-white/80 font-medium text-lg group-hover:text-white transition-all duration-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-full gradient-brand text-white text-lg font-semibold hover:shadow-xl hover:shadow-[#00B8E6]/50 transition-all duration-300">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
