import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Download, Factory, Handshake, ShieldCheck } from 'lucide-react';

// Component Imports
import Slider from '../components/Slider';
import ClientMap from '../components/ClientMap'; // <-- Correctly imported

// Asset Imports
import whyChooseUsImage from '../assets/kalimah-apparel.jpeg';
import brochurePdf from '../assets/KALIMAH EXPORTS PROFILE.pdf';
import sedexLogo from '../assets/sedex-.png';
import wrapLogo from '../assets/Warap-removebg-preview.png';
import oekoTexLogo from '../assets/oeko-tex-loog.png';
import organicLogo from '../assets/images-removebg-preview.png';
import kalimahhome from '../assets/kalimah-home.jpeg';

// A consistent header for each section
const SectionHeader: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  className?: string;
}> = ({ eyebrow, title, subtitle, className = '' }) => (
  <div className={`text-center max-w-3xl mx-auto ${className}`}>
    <p className="text-sm font-semibold text-brand uppercase tracking-wider">
      {eyebrow}
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
      {title}
    </h2>
    <p className="mt-4 text-lg text-slate-600">
      {subtitle}
    </p>
  </div>
);

// A card for showcasing features or capabilities
const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-brand">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </div>
    <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-base text-slate-600">{children}</p>
  </div>
);


// --- Main Home Page Component ---

const Home: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Optional Slider - Placed at the very top */}
      <Slider />

      {/* 1. Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Crafting Sustainable Apparel with <span className="text-brand">Precision</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                A leading manufacturer committed to exceptional quality, ethical sourcing, and sustainable production. We partner with forward-thinking brands to bring their visions to life.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={brochurePdf}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-700 transition-colors duration-300"
                >
                  Download Brochure
                  <Download className="ml-2 h-4 w-4" />
                </a>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-900 rounded-md hover:bg-slate-100 transition-colors duration-300 group"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <img
                src={kalimahhome}
                alt="Garment tags on display"
                className="rounded-xl shadow-lg object-cover w-full"
                style={{ height: '550px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Why Choose Us" Section */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="order-last lg:order-first">
              <img
                src={whyChooseUsImage}
                alt="Woman in elegant clothing"
                className="rounded-xl shadow-lg object-cover w-full"
                style={{ height: '550px' }}
              />
            </div>
            {/* Right Content */}
            <div>
              <p className="text-sm font-semibold text-brand uppercase tracking-wider">
                Why Choose Us
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Partners in Quality and Ethical Sourcing
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We believe in a partnership model where your success is our mission. Each collection is crafted with a focus on speed, quality, and ethical practice.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Fast lead times and reliable global logistics',
                  'High-quality, GOTS-certified eco-friendly materials',
                  'Full ethical transparency and a certified supply chain',
                  'Sustainable green manufacturing facilities committed to environmental responsibility',
                  'Carefully selected partners chosen through strict quality, compliance, and ethical standards',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 flex-shrink-0 text-amber-500 mr-3 mt-1" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. GLOBAL PRESENCE MAP SECTION */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Global Reach"
            title={
              <>
                Serving Clients{' '}
                <span className="text-brand">Around the World</span>
              </>
            }
            subtitle="Our commitment to quality and ethical sourcing has allowed us to partner with leading brands across continents."
          />
          
          <div className="mt-16">
            <ClientMap />
          </div>

          <div className="mt-12 text-center text-slate-600">
            <p className="inline-flex items-center text-lg font-medium">
              <span className="h-4 w-4 rounded-full bg-amber-500 mr-2 border border-amber-600 shadow-sm"></span> 
              Key Client Presence Countries
            </p>
          </div>
        </div>
      </section>
      {/* END GLOBAL PRESENCE MAP SECTION */}

      {/* 4. Certifications Section */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Globally Recognized Certifications"
            subtitle="We adhere to the highest standards of quality, sustainability, and ethical labor practices, verified by industry leaders."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { src: sedexLogo, alt: 'SEDEX Certified' },
              { src: wrapLogo, alt: 'WRAP Certified' },
              { src: oekoTexLogo, alt: 'OEKO-TEX Certified' },
              { src: organicLogo, alt: 'GOTS Certified Organic' },
            ].map((cert, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-20 object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;