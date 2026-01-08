import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Youtube, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagramId: '',
    city: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Replace this URL with your Google Apps Script Web App URL after deployment
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNNWp5NgzimyDuukp_J7uwQQhBlJnhwxtM00k96_3E_zaYTRtg7sgVOaUf01Ym1LbbEQ/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const payload = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        instagram: formData.instagramId,
        city: formData.city,
        message: formData.message
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Application submitted successfully! We will get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          instagramId: '',
          city: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please check your connection and try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 gradient-bg-indigo relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path d="M0,500 Q250,300 500,500 T1000,500" stroke="#00B8E6" strokeWidth="2" fill="none" />
          <circle cx="200" cy="300" r="3" fill="#8B4DFF" />
          <circle cx="500" cy="500" r="3" fill="#00B8E6" />
          <circle cx="800" cy="400" r="3" fill="#8B4DFF" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-[#D1D5E0]">
            Begin your transformation journey today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#D1D5E0] mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00B8E6] focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-[#D1D5E0] mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00B8E6] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-[#D1D5E0] mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00B8E6] focus:outline-none transition-colors"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-[#D1D5E0] mb-2">Instagram ID</label>
                <input
                  type="text"
                  value={formData.instagramId}
                  onChange={(e) => setFormData({ ...formData, instagramId: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00B8E6] focus:outline-none transition-colors"
                  placeholder="Your Instagram ID"
                  required
                />
              </div>
              <div>
                <label className="block text-[#D1D5E0] mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00B8E6] focus:outline-none transition-colors"
                  placeholder="Your city"
                  required
                />
              </div>
              <div>
                <label className="block text-[#D1D5E0] mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00B8E6] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                  required
                />
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300">
                  {submitMessage}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
                  {submitMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-full gradient-brand text-white font-semibold hover:shadow-xl hover:shadow-[#00B8E6]/50 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Apply Now
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-[#D1D5E0]">The Beginning ,
Bengaluru, Karnataka</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:ea@happimisspagenat.com" className="text-[#D1D5E0] hover:text-[#00B8E6] transition-colors">
                      gautam@happimrsglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:+919880012482" className="text-[#D1D5E0] hover:text-[#00B8E6] transition-colors">
                      +91 98800 12482
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center hover:shadow-lg hover:shadow-[#00B8E6]/50 transition-all duration-300"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center hover:shadow-lg hover:shadow-[#00B8E6]/50 transition-all duration-300"
                >
                  <Youtube className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center hover:shadow-lg hover:shadow-[#00B8E6]/50 transition-all duration-300"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
