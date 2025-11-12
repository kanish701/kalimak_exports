import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sliderimg1 from '../assets/1.png';
import sliderimg2 from '../assets/3.png';
import sliderimg3 from '../assets/5.png';
import sliderimg4 from '../assets/6.png';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- THEME DEFINITIONS (Assumed based on index.css) ---
  const BRAND_BG_CLASS = 'bg-brand';       // Core Color: #f2c252ff
  const BRAND_BG_HOVER_CLASS = 'hover:bg-brand-dark'; 
  const DARK_TEXT_CLASS = 'text-dark-neutral'; // Dark Text on Yellow

  const slides = [
    {
      id: 1,
      image: sliderimg1,
      title: 'Global Manufacturing Partner',
      subtitle: 'High-Volume Production Sourcing Solutions',
      description: 'Your trusted partner for large-scale knitwear production. We deliver superior quality garments with speed and unmatched reliability for global brands.',
      buttonText: 'Request a Quote',
      buttonLink: '/contact'
    },
    {
      id: 2,
      image: sliderimg2,
      title: 'Certified Ethical Sourcing',
      subtitle: 'Transparent Supply Chain',
      description: 'From GOTS organic cotton to WRAP certified factories, we ensure every thread meets the highest standards of social and environmental compliance.',
      buttonText: 'View Certifications',
      buttonLink: '/about'
    },
    {
      id: 3,
      image: sliderimg3,
      title: 'Seamless B2B Partnership',
      subtitle: 'Integrated Buying House Services',
      description: 'We act as your dedicated buying house, managing merchandising, R&D, and logistics to streamline your entire apparel development cycle.',
      buttonText: 'Explore Services',
      buttonLink: '/services'
    },
    {
      id: 4,
      image: sliderimg4,
      title: 'Advanced In-House Customization',
      subtitle: 'Printing, Embroidery, and Washing',
      description: 'Leverage our state-of-the-art facilities, including Japanese embroidery and imported screen printing, for perfect value-added garment finishing.',
      buttonText: 'View Capabilities',
      buttonLink: '/services'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    // Increased height for visual dominance
    <div className="relative h-[80vh] lg:h-screen overflow-hidden"> 
      {/* Slides Container - FIX: Map function moved inside this wrapper */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay to aid readability without obscuring image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> 
            </div>

            {/* Content Box - FIX: max-width reduced to max-w-md (512px) */}
            <div className="relative h-full flex items-end pb-16 lg:pb-32">
              <div className="container mx-auto px-6">
                <div className="max-w-md p-6 lg:p-8 bg-black/50 backdrop-blur-sm shadow-xl animate-fade-in"> 
                  <div className="space-y-3 lg:space-y-4">
                    <div className={`text-xs font-medium tracking-widest text-white uppercase`}>
                      {slide.subtitle} 
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-serif font-light leading-tight text-white"> 
                      {slide.title}
                    </h1>
                    <p className="text-sm leading-relaxed text-white/90">
                      {slide.description}
                    </p>
                    <div className="pt-3">
                      <a
                        href={slide.buttonLink}
                        className={`btn-primary inline-block transform hover-lift`} 
                      >
                        {slide.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Subtle, Themed Dark/Transparent) */}
      <button
        onClick={goToPrevious}
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 ${BRAND_BG_CLASS}/10 rounded-full flex items-center justify-center ${DARK_TEXT_CLASS} hover:${BRAND_BG_CLASS}/30 transition-all duration-300 focus:outline-none`}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={goToNext}
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 ${BRAND_BG_CLASS}/10 rounded-full flex items-center justify-center ${DARK_TEXT_CLASS} hover:${BRAND_BG_CLASS}/30 transition-all duration-300 focus:outline-none`}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots Indicator (Subtle, Themed) */}
      <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? `bg-white scale-150` // Active dot is stark white for visibility
                : `bg-white/50 hover:bg-white/75` // Inactive dots are translucent white
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;