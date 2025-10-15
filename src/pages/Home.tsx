import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Handshake, ShieldCheck, ArrowRight as LucideArrowRight } from 'lucide-react';
import Slider from '../components/Slider';
import sampleimg from '../assets/shirt-tags.webp'; // Assuming these assets exist
import brocher from '../assets/KALIMAH EXPORTS PROFILE.pdf'; // Assuming this asset exists
import sampleimg2 from '../assets/download (6).jpeg'; // Assuming this asset exists

// --- THEME DEFINITIONS (Matching Bright Yellow index.css) ---
const BRAND_TEXT_CLASS = 'text-brand';          // Core Color: #FFC43A
const BRAND_BG_CLASS = 'bg-brand';              // Core Color: #FFC43A
const BRAND_BG_HOVER_CLASS = 'hover:bg-brand-dark'; // Darker Yellow hover
const DARK_TEXT_CLASS = 'text-dark-neutral';    // Dark Neutral: #2D2D2D
const CTA_PRIMARY_CLASS = 'btn-primary';        // Yellow background button
const CTA_OUTLINE_CLASS = 'btn-outline';        // Yellow outline button
const CARD_CLASS = 'card';
const HOVER_LIFT_CLASS = 'hover-lift';
const SECTION_PADDING_CLASS = 'section-padding';

// Simple ArrowIcon component using Lucide ArrowRight
const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  // Color updated to Dark Neutral or Brand Yellow depending on context
  <LucideArrowRight className={className || `w-5 h-5 ${DARK_TEXT_CLASS}`} />
);

// Icons for Certifications (moved here to avoid repetition)
const CertificationCards = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 1. SEDEX Card */}
        <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
            {/* Icon uses the CORE BRAND YELLOW background and DARK TEXT for contrast */}
            <div className={`w-20 h-20 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Factory className={`w-10 h-10 ${DARK_TEXT_CLASS}`} />
            </div>
            <h3 className={`text-2xl font-serif font-bold ${DARK_TEXT_CLASS} mb-3`}>SEDEX Member</h3>
            <p className={`text-gray-600 text-base leading-relaxed mb-4`}>
                Supplier Ethical Data Exchange member, committed to responsible business practices and ethical supply chain auditing.
            </p>
            {/* Accent text uses the BRAND YELLOW color */}
            <div className={`${BRAND_TEXT_CLASS} text-sm font-bold tracking-wider uppercase`}>Supply Chain Visibility</div>
        </div>

        {/* 2. WRAP Card */}
        <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
            <div className={`w-20 h-20 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Handshake className={`w-10 h-10 ${DARK_TEXT_CLASS}`} />
            </div>
            <h3 className={`text-2xl font-serif font-bold ${DARK_TEXT_CLASS} mb-3`}>WRAP Certified</h3>
            <p className={`text-gray-600 text-base leading-relaxed mb-4`}>
                Worldwide Responsible Accredited Production ensures lawful, humane, and ethical manufacturing across the globe.
            </p>
            <div className={`${BRAND_TEXT_CLASS} text-sm font-bold tracking-wider uppercase`}>Global Compliance Assured</div>
        </div>

        {/* 3. SAAS Card */}
        <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
            <div className={`w-20 h-20 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <ShieldCheck className={`w-10 h-10 ${DARK_TEXT_CLASS}`} />
            </div>
            <h3 className={`text-2xl font-serif font-bold ${DARK_TEXT_CLASS} mb-3`}>SAAS Accredited</h3>
            <p className={`text-gray-600 text-base leading-relaxed mb-4`}>
                Accredited by the Social Accountability Accreditation Service, certifying our commitment to social standards like SA8000.
            </p>
            <div className={`${BRAND_TEXT_CLASS} text-sm font-bold tracking-wider uppercase`}>Social Standard Guarantee</div>
        </div>
    </div>
);


const Home: React.FC = () => {

  // Function to simplify the generic list items for Sample Section 02
  const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
      {/* Icon color uses the BRAND YELLOW for high energy */}
      <span className={`${BRAND_TEXT_CLASS} mr-2 mt-1`}>
        <CheckCircle className="h-5 w-5" />
      </span>
      {children}
    </li>
  );

  return (
    <div className="relative font-sans text-gray-800">
      {/* Hero Slider */}
      <Slider />

      {/* --- Hero Section: CRAFTING SUSTAINABLE APPAREL (Action-Oriented) --- */}
      <section className={SECTION_PADDING_CLASS}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Title is BOLD and uses Dark Neutral Text */}
                <h1 className={`text-5xl lg:text-6xl font-serif font-bold ${DARK_TEXT_CLASS} leading-tight`}>
                  CRAFTING SUSTAINABLE APPAREL WITH <span className={BRAND_TEXT_CLASS}>PRECISION</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                  A leading manufacturer committed to exceptional quality, ethical sourcing, and sustainable production. We partner with forward-thinking brands to bring their visions to life with **energy and integrity**.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Brochure Download Button - Uses btn-primary (Yellow) */}
                <a
                  href={brocher}
                  download
                  className={`${CTA_PRIMARY_CLASS} flex items-center justify-center`}
                >
                  DOWNLOAD BROCHURE
                  <ArrowRight className={`ml-2 w-4 h-4 ${DARK_TEXT_CLASS}`} />
                </a>
              </div>
            </div>

            {/* Right Image (Visual Dominance with Yellow Accent Background) */}
            <div className="relative">
              {/* Applying the CORE BRAND YELLOW for the decorative accent background */}
                {/* Note: Increased separation for a more dynamic look */}
                <div className={`absolute -top-6 -right-6 w-2/3 h-2/3 ${BRAND_BG_CLASS} rounded-lg transform translate-x-6 translate-y-6 -z-10 hidden lg:block`}></div>
                <div className={`${CARD_CLASS} overflow-hidden shadow-xl w-2/3 mx-auto`} style={{ height: '320px' }}>
                  <img
                  src={sampleimg}
                  alt="Textile worker checking fabric quality"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '2/4', height: '100%' }}
                  />
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Separator: Feature Block (Added a bright yellow banner for high contrast) --- */}
      <div className={`py-3 ${BRAND_BG_CLASS}`}>
          <div className="container mx-auto px-6 text-center text-lg font-bold uppercase tracking-widest text-black">
              YOUR PARTNER FOR ETHICAL & FAST PRODUCTION
          </div>
      </div>

      {/* --- Sample Section 02: Why Choose Us / Checklist --- */}
      <section className={`${SECTION_PADDING_CLASS} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT COLUMN: Large Image with Decorative Background - Accent is Yellow */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
              {/* Decorative background shape (BRAND YELLOW) */}
              <div
                className={`absolute top-4 left-4 w-1/2 h-[60%] ${BRAND_BG_CLASS} -translate-x-1/8 -translate-y-1/8 lg:w-2/3 lg:h-[70%] lg:-translate-x-1/10 lg:-translate-y-1/10 xl:w-1/2 xl:h-[60%] xl:-translate-x-1/12 xl:-translate-y-1/12 rounded-sm z-0 opacity-80`}
              />
              {/* Image container */}
              <div className="relative w-full h-[600px] z-10 p-4 shadow-2xl">
                <img
                  src={sampleimg2}
                  alt="Woman in a white hat and elegant blouse in a scenic setting"
                  className="w-full h-full object-cover rounded-sm"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Text Content and CTA */}
            <div className="lg:col-span-6 flex flex-col space-y-6 lg:pl-8">

              {/* Section Header and Title */}
              <div className="space-y-4">
                <p className={`text-sm tracking-widest uppercase ${BRAND_TEXT_CLASS} font-sans font-bold`}>
                  WHY CHOOSE US
                </p>
                {/* Title is BOLD and uses Dark Neutral Text, Yellow accent */}
                <h2 className={`text-4xl font-bold leading-tight ${DARK_TEXT_CLASS}`}>
                  Things You'll <span className={BRAND_TEXT_CLASS}>Love</span> About Our Partnership.
                </h2>
              </div>

              {/* Introductory Text */}
              <p className="text-base leading-relaxed text-gray-700 font-sans">
                We create each collection with a focus on speed, quality, and ethical practice. Your success is our mission.
              </p>

              {/* Brand Features List */}
              <div className="space-y-4">
                <p className={`font-bold text-lg flex items-center ${DARK_TEXT_CLASS}`}>
                  — Our commitments:
                  <span className="ml-2 w-16 h-px bg-gray-400"></span> {/* Horizontal line */}
                </p>
                <ul className="space-y-2 text-gray-700 font-sans">
                  {/* Check icons are now BRAND YELLOW */}
                  <CheckListItem>Fast lead times and reliable global logistics;</CheckListItem>
                  <CheckListItem>Only high quality and eco-friendly materials (GOTS, Organic Cotton);</CheckListItem>
                  <CheckListItem>Full ethical transparency and certified supply chain.</CheckListItem>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className={`${CTA_PRIMARY_CLASS} flex items-center justify-center`}>
                  VIEW OUR PROGRAMS
                  <span className={`ml-3 ${DARK_TEXT_CLASS}`}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Media & Brand Logos Section (Updated Styling) --- */}
      <section className={`${SECTION_PADDING_CLASS} bg-gray-50`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>TRUSTED BY <span className={BRAND_TEXT_CLASS}>LEADING BRANDS</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our commitment to sustainable and high-quality manufacturing has earned recognition from industry leaders and major publications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              'TEXWORLD', 'WWD', 'REVOLVE', 'FASHION BIZ', 'NYLON', 'APPAREL NEWS'
            ].map((logo, index) => (
              // Logo boxes use a high-contrast shadow and lift on hover
              <div key={index} className={`${CARD_CLASS} p-6 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300 ${HOVER_LIFT_CLASS}`}>
                <div className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} opacity-80`}>{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Our Certifications Section (Uses Refactored Cards) --- */}
      <section className={`${SECTION_PADDING_CLASS} bg-white`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>OUR GLOBAL CERTIFICATIONS</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We maintain the highest standards of quality, sustainability, and ethical practices through our industry-leading certifications and third-party verified accreditations.
            </p>
          </div>

          {/* Use the new Certification Cards component */}
          <CertificationCards />
        </div>
      </section>

      {/* --- Production Capabilities Section (Updated Styling) --- */}
      {/* <section className={`${SECTION_PADDING_CLASS} bg-gray-50`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>OUR <span className={BRAND_TEXT_CLASS}>PRODUCTION CAPABILITIES</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8"> */}
            {/* Capability Cards with Outline CTA */}
            {/* Note: Titles are now BOLD for energy */}
            {/* <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
              <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4038166/pexels-photo-4038166.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Cutting and Sample Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>FULL-SERVICE PRODUCTION</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                From initial design consultation, pattern making, and material sourcing to cutting, sewing, and final packaging—we manage the entire manufacturing process.
              </p> */}
              {/* Uses custom btn-outline class (Yellow outline) */}
              {/* <Link to="/full-service" className={CTA_OUTLINE_CLASS}>INQUIRE NOW</Link>
            </div>

            <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
              <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5657416/pexels-photo-5657416.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Textile Sourcing"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>SUSTAINABLE SOURCING</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Access to a global network of certified organic, recycled, and innovative eco-friendly textile suppliers, ensuring your line is responsibly produced.
              </p>
              <Link to="/sourcing" className={CTA_OUTLINE_CLASS}>EXPLORE MATERIALS</Link>
            </div>

            <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
              <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5980838/pexels-photo-5980838.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>QUALITY & LOGISTICS</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rigorous multi-stage quality control checks and a robust logistics network to ensure on-time, compliant, and reliable shipping worldwide.
              </p>
              <Link to="/logistics" className={CTA_OUTLINE_CLASS}>VIEW PROCESS</Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;