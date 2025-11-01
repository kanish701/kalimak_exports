import React, { useEffect, useRef } from 'react';
import { Heart, Award, Users, Target, Factory, Calendar, Globe, Zap, CheckCircle } from 'lucide-react'; // Added icons for new content
import Heroimage from '../assets/Left-pose-image.png'; // Assuming this asset exists

// --- THEME DEFINITIONS (Matching Bright Yellow index.css) ---
const BRAND_TEXT_CLASS = 'text-brand';          // Core Color: #FFC43A
const BRAND_BG_CLASS = 'bg-brand';              // Core Color: #FFC43A
const DARK_TEXT_CLASS = 'text-dark-neutral';    // Dark Neutral: #2D2D2D
const CTA_PRIMARY_CLASS = 'btn-primary';        // Yellow background button
const CARD_CLASS = 'card';
const HOVER_LIFT_CLASS = 'hover-lift';
const SECTION_PADDING_CLASS = 'section-padding';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection Observer for animation (Kept the original logic)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Action',
      description: 'We prioritize prompt, effective steps and accountability to drive real-world results and tangible change.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality across all services and ethical practices in our supply chain.'
    },
    {
      icon: Users,
      title: 'Impact',
      description: 'We focus on creating measurable, positive social and environmental impact through our partnerships.'
    },
    {
      icon: Target,
      title: 'Clarity',
      description: 'We ensure a clear vision and transparent communication, fostering trust and decisive execution.'
    }
  ];

  return (
    <div>
      {/* --- Merged Hero Section (Uncommented and Themed) --- */}
      {/* <section className={SECTION_PADDING_CLASS}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className={`text-5xl lg:text-6xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
              Our <span className={BRAND_TEXT_CLASS}>Action-Driven</span> Vision
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are a leading manufacturer committed to **exceptional quality, ethical sourcing, and sustainable production**. We partner with forward-thinking brands to bring their visions to life with speed and integrity.
            </p>
            <button className={`${CTA_PRIMARY_CLASS} text-lg mt-4`}>Start Your Project Today →</button>
          </div>
        </div>
      </section> */}

      {/* --- Main Story Section (No changes here, already themed) --- */}
      <section ref={sectionRef} className={`${SECTION_PADDING_CLASS} bg-gray-50 opacity-0`}>
        <div className="container mx-auto px-6 pt-12 lg:pt-16 pb-12 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl" style={{ height: '620px', maxHeight: '550px' }}>
                <img
                  src="https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/658acbf98f30c0f07e484562_img%209.jpg"
                  alt="Textile worker checking fabric quality"
                  className="w-full h-full object-cover"
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
              
              {/* Floating Stats Card - Uses Yellow/Dark Contrast */}
              <div className={`absolute -bottom-6 -right-6 ${BRAND_BG_CLASS} rounded-lg p-6 shadow-2xl border-4 border-white ${HOVER_LIFT_CLASS}`}>
                <div className="text-center">
                  <div className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-1`}>100K+</div>
                  <div className={`text-sm ${DARK_TEXT_CLASS} font-semibold`}>Pices Produced per month</div>
                </div>
              </div>
            </div>

            {/* Text Side (Content updated to reflect Kalimah Exports) */}
            <div className="space-y-6">
              <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
                Built on Trust, <span className={BRAND_TEXT_CLASS}>Driven by Ethics</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Kalimah Exports is a leading sourcing office with extensive experience across various supply chain segments, catering to the diverse needs of the fashion industry.
                  Over the years, we have collaborated with renowned global brands such as TJ Maxx, Funky Buddha, Kalimah Jeans, Mitsubishi Racing, Al-Nassr and Al Ahli Football Licensed Merchandise, among others.
                </p>
                
                <p>
                  Located in the knitwear manufacturing hub of Tirupur, South India, where some of the world’s most prominent fashion brands source their products, 
                  Kalimah Exports stands as a trusted supplier known for high-quality casual T-shirts, Polo shirts, Sweatwear and allied apparel products.
                </p>
                
                <p>
                  Our commitment to excellence, quick communication, sample development, production follow-up, timely delivery, and ethical practices has positioned us as one of the reliable sourcing in the global fashion supply chain.
                </p>
              </div>

              {/* Stats Bar - Uses Yellow Accent */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className={`text-3xl font-serif font-bold ${BRAND_TEXT_CLASS} mb-1`}>16+</div>
                  <div className="text-gray-600 text-sm font-semibold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-serif font-bold ${BRAND_TEXT_CLASS} mb-1`}>98%</div>
                  <div className="text-gray-600 text-sm font-semibold">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-serif font-bold ${BRAND_TEXT_CLASS} mb-1`}>GOTS</div>
                  <div className="text-gray-600 text-sm font-semibold">Certified Fabrics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Replaced "Passion & Purpose" with Themed Metric Section --- */}
      <section className={`${SECTION_PADDING_CLASS} bg-white`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>Our <span className={BRAND_TEXT_CLASS}>Expertise</span> Defined by Numbers</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our passion for textiles and a purpose-driven approach guide us to deliver exceptional results for our clients worldwide.
            </p>
          </div>

          {/* Metric Cards Grid - Themed with Yellow/Dark Contrast */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* 1. GLOBAL BRANDS */}
            <div className={`${CARD_CLASS} p-8 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-sm font-bold ${BRAND_TEXT_CLASS} mb-2 uppercase tracking-wider`}>GLOBAL BRANDS</div>
              <div className={`text-5xl font-extrabold mb-4 ${DARK_TEXT_CLASS}`}>15+</div>
              <div className="text-gray-600 text-sm">We are the trusted manufacturing partner for over 50 brands across the globe, from emerging labels to retail giants.</div>
            </div>

            {/* 2. YEARS OF EXPERIENCE */}
            <div className={`${CARD_CLASS} p-8 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-sm font-bold ${BRAND_TEXT_CLASS} mb-2 uppercase tracking-wider`}>YEARS OF EXPERIENCE</div>
              <div className={`text-5xl font-extrabold mb-4 ${DARK_TEXT_CLASS}`}>16+</div> 
              <div className="text-gray-600 text-sm">With over sixteen years in the industry, our expertise ensures a seamless and reliable production experience.</div>
            </div>

            {/* 3. QUICKEST LEAD TIME */}
            <div className={`${CARD_CLASS} p-8 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-sm font-bold ${BRAND_TEXT_CLASS} mb-2 uppercase tracking-wider`}>QUICKEST LEAD TIME</div>
              <div className={`text-5xl font-extrabold mb-4 ${DARK_TEXT_CLASS}`}>4-6 WEEKS</div>
              <div className="text-gray-600 text-sm">Our streamlined process allows us to deliver high-quality production runs in as little as 4-6 weeks.</div>
            </div>
            
            {/* 4. GLOBAL REACH */}
            <div className={`${CARD_CLASS} p-8 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-sm font-bold ${BRAND_TEXT_CLASS} mb-2 uppercase tracking-wider`}>GLOBAL REACH</div>
              <div className={`text-5xl font-extrabold mb-4 ${DARK_TEXT_CLASS}`}>10+</div>
              <div className="text-gray-600 text-sm">Our products are shipped to more than 10 countries, making us a truly global manufacturing partner.</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our 6-Step Process Section (Themed and Unified) --- */}
      <section className={`py-16 lg:py-24 bg-gray-50`}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${BRAND_TEXT_CLASS} mb-2`}>
              Our Core Methodology
            </p>
            <h2 className={`text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 ${DARK_TEXT_CLASS} leading-tight`}>
              The <span className={BRAND_TEXT_CLASS}>6-Step Process</span> to Creative Execution.
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We ensure quality and consistency by following a structured and detailed approach to every project, from concept to delivery.
            </p>
          </div>

          {/* Service Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Featured Visual/Icon Area */}
            <div className="flex items-center justify-center relative min-h-[300px] lg:min-h-[500px] order-1 lg:order-1">
              {/* Added yellow border for contrast */}
              <div className={`w-full h-full ${CARD_CLASS} rounded-lg flex items-center justify-center overflow-hidden shadow-2xl border-4 border-brand`}>
                <img
                  src={Heroimage}
                  alt="Creative Process Visual"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Column: Numbered List of Services */}
            <div className="space-y-8 order-2 lg:order-2">

              {/* Step Template (Themed with Yellow/Dark Contrast) */}
              {/* Note: Removed unused hover states from original list structure */}
              {[
                { num: '01', title: 'Prompt Communication', desc: 'We value transparent and timely communication, keeping you informed at every milestone. Our dedicated team ensures swift responses and smooth coordination, making collaboration effortless and efficient.' },
                { num: '02', title: 'PRODUCT SOURCING', desc: 'We leverage our global network to find the best fabrics, trims, and manufacturers, ensuring premium quality and ethical sourcing from the outset.' },
                { num: '03', title: 'SAMPLE DEVELOPMENT', desc: 'We meticulously create and refine samples for approval, ensuring every detail matches your vision before moving into mass production.' },
                { num: '04', title: 'MERCHANDISING', desc: 'Our Merchandising Team acts as your key project liaison, managing communication, deadlines, and the entire production timeline from start to finish.' },
                { num: '05', title: 'QUALITY ASSURANCE', desc: 'We implement rigorous quality checks at every stage, guaranteeing that every final product meets your specifications and global excellence standards.' },
                { num: '06', title: 'LOGISTIC SUPPORT', desc: 'Our professionals handle all shipping, customs, and documentation, ensuring timely and seamless delivery of your products to any destination worldwide.' }
              ].map((step) => (
                <div key={step.num} className={`flex group items-start border-b border-gray-200 pb-6`}>
                  <div className={`text-4xl font-extrabold ${BRAND_TEXT_CLASS} mr-6`}>{step.num}</div>
                  <div>
                    <h3 className={`text-2xl font-bold tracking-wide ${DARK_TEXT_CLASS} mb-2`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Values Section (No changes, already themed) --- */}
      {/* <section className={`${SECTION_PADDING_CLASS} bg-white`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>Our Core <span className={BRAND_TEXT_CLASS}>Driving Values</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These principles guide everything we do, ensuring every product and partnership meets the highest standard of ethics and quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}> */}
                {/* Icon block uses high-contrast yellow/dark */}
                {/* <div className={`w-16 h-16 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className={`w-8 h-8 ${DARK_TEXT_CLASS}`} />
                </div>
                <h3 className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- Client Logos Section --- */}
      {/* <section className={`${SECTION_PADDING_CLASS} bg-white`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>As Featured & <span className={BRAND_TEXT_CLASS}>Trusted By</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our quality and ethical commitment have earned recognition from industry leaders and major publications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mb-16"> */}
            {/* Media Logos use high-contrast shadow and lift */}
            {/* <div className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-100 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} opacity-80`}>VOGUE</div>
            </div>
            <div className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-100 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} opacity-80`}>ELLE</div>
            </div>
            <div className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-100 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} opacity-80`}>FORBES</div>
            </div>
            <div className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-100 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} opacity-80`}>HARPER'S</div>
            </div>
            <div className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-100 ${HOVER_LIFT_CLASS}`}>
              <div className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} opacity-80`}>OPRAH MAG</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- Team Section --- */}
      {/* <section className={`${SECTION_PADDING_CLASS} bg-gray-50`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS} mb-4`}>Meet Our <span className={BRAND_TEXT_CLASS}>Core Team</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our experienced specialists drive the quality and ethical standards for every garment produced.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
              <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Adeline Kalimah"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} mb-2`}>Adeline Kalimah</h3> */}
              {/* Accent color for title */}
              {/* <p className={`${BRAND_TEXT_CLASS} font-bold mb-4`}>Head of Ethical Production</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Certified auditor with 8+ years ensuring compliance with GOTS, WRAP, and SAAS standards across our facilities.
              </p>
            </div>
            
            <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
              <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} mb-2`}>Sarah Johnson</h3>
              <p className={`${BRAND_TEXT_CLASS} font-bold mb-4`}>Lead Quality Control</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Specializes in textile inspection and ensures every batch meets our rigorous quality benchmarks before shipping.
              </p>
            </div>
            
            <div className={`${CARD_CLASS} p-8 text-center ${HOVER_LIFT_CLASS}`}>
              <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Maria Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-serif font-bold ${DARK_TEXT_CLASS} mb-2`}>Maria Rodriguez</h3>
              <p className={`${BRAND_TEXT_CLASS} font-bold mb-4`}>Logistics & Compliance Manager</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Manages global shipping, customs compliance, and client communications to ensure reliable, on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;