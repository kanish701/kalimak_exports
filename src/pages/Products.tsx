import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Factory } from 'lucide-react'; // Added Factory icon for new CTA content

const Products: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // --- THEME DEFINITIONS (Matching Bright Yellow index.css) ---
  const BRAND_TEXT_CLASS = 'text-brand';          // Core Color: #FFC43A
  const BRAND_BG_CLASS = 'bg-brand';              // Core Color: #FFC43A
  const DARK_TEXT_CLASS = 'text-dark-neutral';    // Dark Neutral: #2D2D2D
  const CTA_PRIMARY_CLASS = 'btn-primary';        // Yellow background button
  const CTA_OUTLINE_CLASS = 'btn-outline';        // Yellow outline button
  const HOVER_LIFT_CLASS = 'hover-lift';
  const SECTION_PADDING_CLASS = 'section-padding';

  // --- DATA RE-ALIGNED TO MANUFACTURER THEME ---
  const products = [
    { id: 1, name: 'Casual T-Shirt Range', description: 'High-volume knitwear production, specializing in cotton and poly-blends.', image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Knitwear' },
    { id: 2, name: 'Women\'s Underwear', description: 'Certified production of soft, compliant undergarments (100k units/day capacity).', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Underwear' },
    { id: 3, name: 'Kids\' PJ Sets', description: 'Safe, durable sleepwear featuring Japanese embroidery and custom printing.', image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Kids' },
    { id: 4, name: 'Essential Knit Basics', description: 'Full range of basic tops and bottoms for cost-effective bulk orders.', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Knitwear' },
    { id: 5, name: 'Screen Printed Apparel', description: 'Featuring imported multicolour screen printing capability (up to 12 colors).', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Custom' },
    { id: 6, name: 'Custom Embroidered Pieces', description: 'Precision finishing with 20-head Japanese embroidery machinery.', image: 'https://images.pexels.com/photos/5657416/pexels-photo-5657416.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Custom' },
    { id: 7, name: 'Washed Denim & Apparel', description: 'Specialized washing for vintage effects, soft finishes, and pre-shrunk compliance.', image: 'https://images.pexels.com/photos/5980838/pexels-photo-5980838.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Finishing' },
    { id: 8, name: 'Organic Certified Fabrics', description: 'Sourced via licensed suppliers for GOTS, organic, and recycled materials.', image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Sourcing' },
    { id: 9, name: 'Licensed Merchandise', description: 'Apparel production for sports teams and brand-licensed corporate merchandise.', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Knitwear' },
    { id: 10, name: 'Men\'s Underwear', description: 'Robust, compliant production line for men’s essential undergarments.', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Underwear' },
  ];

  const categories = ['All', 'Knitwear', 'Underwear', 'Kids', 'Custom', 'Finishing', 'Sourcing'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  return (
    <div>
      {/* Hero Section (Themed) */}
      <section className={`${SECTION_PADDING_CLASS} pt-20 bg-white`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className={`text-5xl lg:text-6xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
              Our <span className={BRAND_TEXT_CLASS}>Production Gallery</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore our core product lines and visualize the quality and expertise we bring to every bulk order.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section (Themed and Mobile Optimized) */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          {/* Flex-wrap ensures buttons move to new line on small screens */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    // Active: Yellow background, Dark text (High Contrast)
                    ? `${BRAND_BG_CLASS} ${DARK_TEXT_CLASS} ${HOVER_LIFT_CLASS}`
                    // Inactive: White background, Dark text, Yellow border on hover
                    : `bg-white text-gray-600 border border-gray-300 hover:border-transparent hover:${BRAND_BG_CLASS} hover:${DARK_TEXT_CLASS}`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery (Mobile Optimized Grid) */}
      <section className={`${SECTION_PADDING_CLASS} bg-white`}>
        <div className="container mx-auto px-6">
          {/* FIX: Grid starts at 2 columns on mobile (sm:grid-cols-2) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group relative aspect-portrait overflow-hidden rounded-lg cursor-pointer shadow-lg ${HOVER_LIFT_CLASS}`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay (Themed for High Contrast) */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-base md:text-xl font-serif font-bold mb-1 leading-tight">{product.name}</h3>
                    <p className="text-xs opacity-90">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox (Themed Arrows) */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className={`absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:${BRAND_BG_CLASS} transition-all duration-300 z-10`}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows (Themed for visibility) */}
          <button
            onClick={prevImage}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center ${DARK_TEXT_CLASS} hover:${BRAND_BG_CLASS}/80 transition-all duration-300 z-10`}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextImage}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center ${DARK_TEXT_CLASS} hover:${BRAND_BG_CLASS}/80 transition-all duration-300 z-10`}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-full p-10 md:p-0">
            <img
              src={filteredProducts[currentImage]?.image}
              alt={filteredProducts[currentImage]?.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image Info (Mobile-friendly positioning) */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 p-2 md:p-4">
            <h3 className="text-lg md:text-2xl font-serif font-bold mb-1">
              {filteredProducts[currentImage]?.name}
            </h3>
            <p className="text-sm opacity-90 hidden md:block">
              {filteredProducts[currentImage]?.description}
            </p>
            <p className="text-xs opacity-75 mt-1">
              {currentImage + 1} of {filteredProducts.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section (Themed for Manufacturer) */}
      <section className={`${SECTION_PADDING_CLASS} ${BRAND_BG_CLASS} text-white`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className={`text-4xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
              Ready to <span className="text-white">Request a Bulk Quote?</span>
            </h2>
            <p className="text-xl text-gray-900 leading-relaxed opacity-90 font-medium">
              Discuss pricing and customization options for your next high-volume apparel order directly with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`${CTA_PRIMARY_CLASS} flex items-center justify-center text-lg`}>
                <Factory className={`w-5 h-5 mr-2 ${DARK_TEXT_CLASS}`} />
                GET A FREE QUOTE
              </button>
              <button className={`${CTA_OUTLINE_CLASS} text-lg border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white`}>
                VIEW ALL PRODUCT CAPABILITIES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;