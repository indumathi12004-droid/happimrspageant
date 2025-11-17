import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import FinaleSection from './components/FinaleSection';
import BootcampSection from './components/BootcampSection';
import GallerySection from './components/GallerySection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#060B2A]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <FinaleSection />
      <BootcampSection />
      <GallerySection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
