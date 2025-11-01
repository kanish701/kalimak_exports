import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, Send, Clock, Factory } from 'lucide-react';

// --- THEME DEFINITIONS (Matching Bright Yellow index.css) ---
const BRAND_TEXT_CLASS = 'text-brand';          // Core Color: #FFC43A
const BRAND_BG_CLASS = 'bg-brand';              // Core Color: #FFC43A
const DARK_TEXT_CLASS = 'text-dark-neutral';    // Dark Neutral: #2D2D2D
const CTA_PRIMARY_CLASS = 'btn-primary';        // Yellow background button
const CTA_OUTLINE_CLASS = 'btn-outline';        // Yellow outline button
const CARD_CLASS = 'card';
const HOVER_LIFT_CLASS = 'hover-lift';
const SECTION_PADDING_CLASS = 'section-padding';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      {/* <section className={SECTION_PADDING_CLASS}>
        <div className="container mx-auto px-6 text-center pt-20 pb-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className={`text-5xl lg:text-6xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
              Ready to <span className={BRAND_TEXT_CLASS}>Start Production?</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Reach out to Kalimah Exports today. Whether you need a quote, want to discuss materials, or schedule a factory visit, our team is ready to assist your project.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Form & Info (Themed and Content Updated) */}
      <section className={`${SECTION_PADDING_CLASS} bg-gray-50`}>
        <div className="container mx-auto px-6 pt-12 pb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form (Themed Inputs) */}
            <div className={`${CARD_CLASS} p-8 shadow-2xl ${HOVER_LIFT_CLASS}`}>
              <h2 className={`text-3xl font-serif font-bold ${DARK_TEXT_CLASS} mb-8`}>Inquire for a Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium ${DARK_TEXT_CLASS} mb-2`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      // Yellow focus ring
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent focus:ring-4 ${BRAND_TEXT_CLASS}/50 focus:ring-opacity-50 transition-all duration-300`}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className={`block text-sm font-medium ${DARK_TEXT_CLASS} mb-2`}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      // Yellow focus ring
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent focus:ring-4 ${BRAND_TEXT_CLASS}/50 focus:ring-opacity-50 transition-all duration-300`}
                      placeholder="+91 96777 04849"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${DARK_TEXT_CLASS} mb-2`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    // Yellow focus ring
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent focus:ring-4 ${BRAND_TEXT_CLASS}/50 focus:ring-opacity-50 transition-all duration-300`}
                    placeholder="kpb@kalimahexports.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${DARK_TEXT_CLASS} mb-2`}>
                    Project Details / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    // Yellow focus ring
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent focus:ring-4 ${BRAND_TEXT_CLASS}/50 focus:ring-opacity-50 transition-all duration-300 resize-none`}
                    placeholder="e.g., I need a quote for 10,000 organic cotton t-shirts..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className={`${CTA_PRIMARY_CLASS} w-full flex items-center justify-center`}
                >
                  SEND REQUEST
                  <Send className={`ml-2 w-4 h-4 ${DARK_TEXT_CLASS}`} />
                </button>
              </form>
            </div>

            {/* Contact Info (Themed and Content Updated) */}
            <div className="space-y-8 lg:pt-16">
              <div className="space-y-4">
                <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS}`}>Get in Touch</h2>
                <p className="text-gray-700 leading-relaxed">
                  We are ready to discuss your high-volume manufacturing needs. Contact us directly via phone or email for fast responses and detailed project consultations.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                
                {/* Phone 1 */}
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${BRAND_BG_CLASS} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md`}>
                    <Phone className={`w-6 h-6 ${DARK_TEXT_CLASS}`} />
                  </div>
                  <div>
                    {/* <div className={`font-bold ${DARK_TEXT_CLASS} mb-1 uppercase tracking-wide`}>Sales Line (KPB)</div> */}
                    <a href="tel:+9114214242849" className="text-gray-700 hover:text-gray-900 transition-colors">+91 14214242849</a>
                    <div className="text-sm text-gray-500">Fastest response for new projects.</div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${BRAND_BG_CLASS} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md`}>
                    <Phone className={`w-6 h-6 ${DARK_TEXT_CLASS}`} />
                  </div>
                  <div>
                    {/* <div className={`font-bold ${DARK_TEXT_CLASS} mb-1 uppercase tracking-wide`}>Mobile (KPB)</div> */}
                    <a href="tel:+919677704849" className="text-gray-700 hover:text-gray-900 transition-colors">+91 98423 94444</a>
                    <div className="text-sm text-gray-500">Available via WhatsApp/Signal.</div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${BRAND_BG_CLASS} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md`}>
                    <Mail className={`w-6 h-6 ${DARK_TEXT_CLASS}`} />
                  </div>
                  <div>
                    {/* <div className={`font-bold ${DARK_TEXT_CLASS} mb-1 uppercase tracking-wide`}>Email Address</div> */}
                    <a href="mailto:kpb@kalimahexports.com" className="text-gray-700 hover:text-gray-900 transition-colors">kpb@kalimahexports.com</a>
                    <div className="text-sm text-gray-500">For general inquiries and documents.</div>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${BRAND_BG_CLASS} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md`}>
                    <MapPin className={`w-6 h-6 ${DARK_TEXT_CLASS}`} />
                  </div>
                  <div>
                    {/* <div className={`font-bold ${DARK_TEXT_CLASS} mb-1 uppercase tracking-wide`}>Factory Address</div> */}
                    <address className="not-italic text-gray-700">
                      Uthukuli Road,<br />
                      Tirupur, 641607, India
                    </address>
                    <div className="text-sm text-gray-500">Tirupur is the knitwear manufacturing hub.</div>
                  </div>
                </div>
                
              </div>

              {/* Social Media (Kept for style, links should be updated) */}
              <div className="pt-8">
                <h3 className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${BRAND_BG_CLASS} rounded-lg flex items-center justify-center ${DARK_TEXT_CLASS} ${BRAND_BG_CLASS} ${HOVER_LIFT_CLASS} transition-all duration-300 transform hover:scale-105 shadow-md`}
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${BRAND_BG_CLASS} rounded-lg flex items-center justify-center ${DARK_TEXT_CLASS} ${BRAND_BG_CLASS} ${HOVER_LIFT_CLASS} transition-all duration-300 transform hover:scale-105 shadow-md`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Themed) */}
      <section className={`${SECTION_PADDING_CLASS} bg-white`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>Find Our Factory</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We are located in the heart of Tirupur, India’s primary knitwear manufacturing hub, ready to serve global clients.
            </p>
          </div>
          
          {/* Map Container (Themed Placeholder) */}
          <div className={`${CARD_CLASS} overflow-hidden shadow-2xl`}>
            <div className="aspect-video bg-gray-200 relative">
              {/* Placeholder for Google Maps - Themed with Yellow/Dark */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">
                <div className="text-center text-gray-800">
                  <MapPin className={`w-16 h-16 mx-auto mb-4 ${BRAND_TEXT_CLASS}`} />
                  <h3 className={`text-2xl font-serif font-bold ${DARK_TEXT_CLASS} mb-2`}>Kalimah Exports Factory</h3>
                  <p className="text-lg text-gray-700 opacity-90">61/2 EB Colony, Gandhi nagar, Tirupur, 641603</p>
                  <p className={`text-sm ${BRAND_TEXT_CLASS} mt-2 font-bold`}>MAP AREA: KNITWEAR MANUFACTURING HUB</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location Details */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            
            {/* 1. Manufacturing Focus */}
            <div className="text-center">
              <div className={`w-16 h-16 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center mx-auto mb-4 ${HOVER_LIFT_CLASS}`}>
                <Factory className={`w-8 h-8 ${DARK_TEXT_CLASS}`} />
              </div>
              <h3 className={`text-lg font-bold ${DARK_TEXT_CLASS} mb-2`}>Strategic Location</h3>
              <p className="text-gray-700 text-sm">
                Located in Tirupur, ensuring direct access to the best raw materials and certified suppliers.
              </p>
            </div>
            
            {/* 2. Compliance/Ethics Focus */}
            <div className="text-center">
              <div className={`w-16 h-16 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center mx-auto mb-4 ${HOVER_LIFT_CLASS}`}>
                <Clock className={`w-8 h-8 ${DARK_TEXT_CLASS}`} />
              </div>
              <h3 className={`text-lg font-bold ${DARK_TEXT_CLASS} mb-2`}>Reliable Lead Times</h3>
              <p className="text-gray-700 text-sm">
                Our optimized supply chain management guarantees prompt production and on-time global shipping.
              </p>
            </div>
            
            {/* 3. Global Shipping Focus */}
            <div className="text-center">
              <div className={`w-16 h-16 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center mx-auto mb-4 ${HOVER_LIFT_CLASS}`}>
                <MapPin className={`w-8 h-8 ${DARK_TEXT_CLASS}`} />
              </div>
              <h3 className={`text-lg font-bold ${DARK_TEXT_CLASS} mb-2`}>Global Logistics</h3>
              <p className="text-gray-700 text-sm">
                We handle comprehensive logistics for seamless product delivery to any country worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Themed) */}
      <section className={`${SECTION_PADDING_CLASS} ${BRAND_BG_CLASS} text-white`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
              Let's Discuss Your Next <span className="text-white">Apparel Line.</span>
            </h2>
            <p className="text-xl text-gray-900 leading-relaxed opacity-90 font-medium">
              Take the first step towards ethical, high-quality, and reliable manufacturing. Contact us for a detailed project consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`${CTA_PRIMARY_CLASS} text-lg`}>
                REQUEST CONSULTATION
              </button>
              <button className={`${CTA_OUTLINE_CLASS} text-lg border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white`}>
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;