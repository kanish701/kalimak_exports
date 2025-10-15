import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// --- THEME DEFINITIONS (Matching Bright Yellow index.css) ---
const BRAND_TEXT_CLASS = 'text-brand';          // Core Color: #FFC43A
const BRAND_BG_CLASS = 'bg-brand';              // Core Color: #FFC43A
const DARK_TEXT_CLASS = 'text-dark-neutral';    // Dark Neutral: #2D2D2D
const BRAND_BG_HOVER_CLASS = 'hover:bg-brand-dark'; // Darker Yellow hover

const Footer: React.FC = () => {
  return (
    // Footer remains clean white, but border is stronger
    <footer className={`bg-white py-16 border-t-4 border-brand`}> 
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* 1. Brand & Description */}
          <div className="space-y-4">
            {/* Brand Name uses Serif and Dark Text */}
            <Link to="/" className={`text-3xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
              KALIMAH EXPORTS
            </Link>
            {/* Action-oriented secondary link using Brand color */}
            <Link 
                to="/services" 
                className={`block text-base font-semibold ${BRAND_TEXT_CLASS} hover:${DARK_TEXT_CLASS} transition-colors duration-300`}
            >
              VIEW OUR PROGRAMS →
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are committed to exceptional quality, ethical sourcing, and sustainable production to empower ambitious brands.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${DARK_TEXT_CLASS} uppercase tracking-widest`}>Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className={`block text-gray-600 hover:${BRAND_TEXT_CLASS} transition-colors duration-300 text-sm`}>
                Home
              </Link>
              <Link to="/about" className={`block text-gray-600 hover:${BRAND_TEXT_CLASS} transition-colors duration-300 text-sm`}>
                About Us
              </Link>
              <Link to="/products" className={`block text-gray-600 hover:${BRAND_TEXT_CLASS} transition-colors duration-300 text-sm`}>
                Products
              </Link>
              <Link to="/contact" className={`block text-gray-600 hover:${BRAND_TEXT_CLASS} transition-colors duration-300 text-sm`}>
                Contact
              </Link>
            </div>
          </div>

          {/* 3. Services/Accreditations */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${DARK_TEXT_CLASS} uppercase tracking-widest`}>Accreditations</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>SEDEX Member</p>
              <p>WRAP Certified</p>
              <p>SAAS Accredited</p>
              <p className="font-semibold pt-1">GOTS & Organic Fabrics</p>
            </div>
          </div>

          {/* 4. Contact Info & Social */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${DARK_TEXT_CLASS} uppercase tracking-widest`}>Contact</h3>
            <div className="space-y-3">
              
              {/* Added Address with MapPin icon */}
              <div className="flex items-start text-gray-700 text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0" />
                <address className="not-italic">
                  61/2 EB Colony,<br/>
                  {/* Gandhi nagar,<br/> */}
                  Tirupur, 641603, India
                </address>
              </div>

              <a href="tel:+9114214242849" className={`flex items-center text-gray-700 text-sm hover:${BRAND_TEXT_CLASS}`}>
                <Phone className="w-4 h-4 mr-2" />
                +91 14214242849
              </a>
              <a href="tel:+919677704849" className={`flex items-center text-gray-700 text-sm hover:${BRAND_TEXT_CLASS}`}>
                <Phone className="w-4 h-4 mr-2" />
                +91 96777 04849

              </a>
              <a href="mailto:kpb@kalimahexports.com" className={`flex items-center text-gray-700 text-sm hover:${BRAND_TEXT_CLASS}`}>
                <Mail className="w-4 h-4 mr-2" />
                kpb@kalimahexports.com
              </a>
              
              {/* Social Links: Yellow/Dark Contrast */}
              <div className="flex space-x-3 pt-4">
                <a
                  href="#"
                  className={`w-9 h-9 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center ${DARK_TEXT_CLASS} ${BRAND_BG_HOVER_CLASS} transition-all duration-300`}
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className={`w-9 h-9 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center ${DARK_TEXT_CLASS} ${BRAND_BG_HOVER_CLASS} transition-all duration-300`}
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 SUPREME. All Rights Reserved. | <span className={BRAND_TEXT_CLASS}>Actionable Ethics & Quality.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;