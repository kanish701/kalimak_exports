import React from 'react';
import { Factory, Shirt, Package, Layers, ArrowRight, CheckCircle } from 'lucide-react';

// --- THEME DEFINITIONS (Matching Bright Yellow index.css) ---
const BRAND_TEXT_CLASS = 'text-brand';          // Core Color: #FFC43A
const BRAND_BG_CLASS = 'bg-brand';              // Core Color: #FFC43A
const DARK_TEXT_CLASS = 'text-dark-neutral';    // Dark Neutral: #2D2D2D
const CTA_PRIMARY_CLASS = 'btn-primary';        // Yellow background button
const CTA_OUTLINE_CLASS = 'btn-outline';        // Yellow outline button
const CARD_CLASS = 'card';
const HOVER_LIFT_CLASS = 'hover-lift';
// Decreased top padding for mobile sections to be less aggressive
const SECTION_PADDING_CLASS = 'section-padding'; 

const Services: React.FC = () => {
    // Renamed for clarity and consistency. Use this single source of truth.
    const productLines = [
        {
            icon: Shirt,
            title: 'CASUAL APPAREL PRODUCTION',
            subtitle: 'T-Shirts & Essential Clothings',
            description: 'Our core service focusing on high-volume knitwear: Casual Men & Women T-Shirts and Essential Clothings. We ensure fast lead times and consistent quality with a daily capacity of 4,000 units for this line.',
            features: [
                'Daily Capacity: 4,000 units/day',
                'Product Lines: T-Shirts, Polos, Hoddies, Sweatwear, Knit Basics',
                'Finishing: Washing, Custom Tagging, Packing',
                'Quality: Multi-stage QC checks',
            ],
            image: 'https://i.pinimg.com/736x/44/21/56/4421568c46438f7a6045a50c7345248b.jpg',
            popular: true
        },
        // {
        //     icon: Layers,
        //     title: 'SPECIALTY UNDERGARMENT LINE',
        //     subtitle: 'High-Volume Underwear & Intimates',
        //     description: 'A dedicated, high-capacity line for Undergarments for men and women. Our focus on specialized machinery and compliance allows us to achieve superior volumes and quality for intimate apparel.',
        //     features: [
        //         'Daily Capacity: 100,000 units/day',
        //         'Products: Men’s & Women’s Underwear',
        //         'Material: Focus on Soft, Certified Knits',
        //         'Compliance: Strict Hygiene & Packaging QA',
        //     ],
        //     image: 'https://butterry.com/blog/wp-content/uploads/2023/06/best-underwear-brands-in-India-butterry-blogs.jpg'
        // },
        {
            icon: Package,
            title: 'KIDS & FAMILY NIGHTWEAR',
            subtitle: 'PJs, Nightwears & Licensed Goods',
            description: 'Comprehensive manufacturing for the Kids - PJs - Nightwears segment, alongside a versatile line for all Men & Women & Kids apparel. Compliance and safety are paramount in our children’s segments.',
            features: [
                'Daily Capacity: 12,000 Sets/day',
                'Products: Kids PJs, Family Sleepwear',
                'Finishing: Japanese Embroidery, Screen Printing',
                'Sourcing: GOTS/Certified Fabric Options',
            ],
            image: 'https://niteflite.in/cdn/shop/products/FAM4_1.jpg?v=1631597886'
        },
        {
            icon: Factory,
            title: 'FULL-SERVICE CUSTOMIZATION',
            subtitle: 'Processing & Value-Add Capabilities',
            description: 'Access to our full suite of in-house and outsourced Facilities including Yarn & Fabric Processing (via licensed suppliers), Imported Multicolour Screen Printing, and Washing for specialized finishes.',
            features: [
                'Processing: Fabric & Yarn Outsourcing',
                'Decoration: Japanese 20 Head Embroidery',
                'Printing: Imported Multicolour Screen Printing',
                'Finishing: Vintage & Soft-Touch Washing',
            ],
            image: 'https://media.istockphoto.com/id/1226094814/photo/writing-that-sells-creative-people-trying-on-stickers-with-text-while-discussing-logo-and.jpg?s=612x612&w=0&k=20&c=E7jnQDbeEPdJtZynatlNNW104H1Tb_8DKh2U0JxZ_LY='
        }
    ];

    const factoryProfileStats = [
        { icon: Shirt, title: 'Casual Line', description: '60,000 units per day capacity.' },
        { icon: Layers, title: 'Kids and Nightwear', description: '100,000 units per day capacity.' },
        { icon: Package, title: 'Kids PJ Sets', description: '12,000 sets per day capacity.' }
    ];

    // CheckList component for features list
    const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <li className="flex items-start text-gray-700 text-sm">
            <CheckCircle className={`w-4 h-4 ${BRAND_TEXT_CLASS} mr-2 flex-shrink-0 mt-0.5`} />
            {children}
        </li>
    );

    return (
        <div className="font-sans">

            {/* Hero Section: Main Service Title */}
            <section className={`${SECTION_PADDING_CLASS} bg-white pt-24 sm:pt-32`}>
              <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className={`text-sm font-bold tracking-[0.2em] uppercase ${BRAND_TEXT_CLASS} mt-16`}>O U R S E R V I C E S & P R O D U C T L I N E S</h1>
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold ${DARK_TEXT_CLASS} leading-tight`}>
                    End-to-End <span className={BRAND_TEXT_CLASS}>Apparel Manufacturing</span> Solutions
                  </h2>
                  <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                    We offer specialized, high-capacity production across key knitwear categories, backed by certified sourcing and advanced in-house capabilities.
                  </p>
                </div>
              </div>
            </section>

            {/* --- NEW SECTION: Transparency, Quality & Responsibility --- */}
            <section className={`${SECTION_PADDING_CLASS} bg-gray-100`}>
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center space-y-4 p-8 sm:p-10 rounded-xl shadow-lg border-t-4 border-brand bg-white">
                        <h2 className={`text-2xl sm:text-3xl font-serif font-extrabold ${DARK_TEXT_CLASS} mb-4`}>
                            Our Commitment to <span className={BRAND_TEXT_CLASS}>Transparency, Quality & Responsibility</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Kalimah Export Company, we believe that great partnerships are built on trust, transparency, and responsibility.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-6 text-left pt-4">
                            <li className="space-y-2">
                                <h3 className={`text-lg font-bold ${DARK_TEXT_CLASS}`}>Transparent Communication & Trust</h3>
                                <p className="text-gray-600">
                                    We prioritize prompt communication and provide detailed updates at every stage of your order, ensuring you’re always informed from sampling to shipment.
                                </p>
                            </li>
                            <li className="space-y-2">
                                <h3 className={`text-lg font-bold ${DARK_TEXT_CLASS}`}>Quality Assurance & Ethics</h3>
                                <p className="text-gray-600">
                                    Our team verifies and evaluates every production partner to maintain our high standards for quality, compliance, and ethical manufacturing.
                                </p>
                            </li>
                            <li className="space-y-2">
                                <h3 className={`text-lg font-bold ${DARK_TEXT_CLASS}`}>Safety & Sustainability</h3>
                                <p className="text-gray-600">
                                    We also follow strict safety measures, operate with advanced equipment, and use environment-friendly materials and sustainable practices across our production lines.
                                </p>
                            </li>
                            <li className="space-y-2">
                                <h3 className={`text-lg font-bold ${DARK_TEXT_CLASS}`}>Global Accountability</h3>
                                <p className="text-gray-600">
                                    Every step we take reflects our commitment to accountability, consistency, and global responsibility — ensuring you receive products that meet expectations in both performance and principles.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* --- END NEW SECTION --- */}

            {/* Main Services/Product Lines (The unified, corrected block) */}
            <section className="section-padding bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="space-y-20">
                  {productLines.map((service, index) => (
                    <div
                      key={index}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                        }`}
                    >
                      {/* Image (Styled for theme) */}
                      <div className={`relative shadow-2xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        {/* Reduced aspect ratio for shorter image height */}
                        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[70%] rounded-lg overflow-hidden border-4 border-white">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </div>
                        {service.popular && (
                          <div className={`absolute -top-3 -right-3 ${BRAND_BG_CLASS} ${DARK_TEXT_CLASS} px-4 py-2 rounded-lg text-sm font-bold uppercase shadow-lg`}>
                            CORE LINE
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 flex-shrink-0 ${BRAND_BG_CLASS} rounded-full flex items-center justify-center shadow-lg`}>
                            <service.icon className={`w-6 h-6 ${DARK_TEXT_CLASS}`} />
                          </div>
                          <div>
                            <h3 className={`text-2xl sm:text-3xl font-serif font-bold ${DARK_TEXT_CLASS}`}>
                              {service.title}
                            </h3>
                            <p className={`${BRAND_TEXT_CLASS} font-bold text-base uppercase tracking-wide`}>{service.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-base text-gray-700 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                          <div>
                            <h4 className={`font-bold ${DARK_TEXT_CLASS} mb-3 uppercase tracking-wider text-sm`}>Key Capacities & Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <CheckListItem key={idx}>{feature}</CheckListItem>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          {/* <button className={`${CTA_PRIMARY_CLASS} flex items-center justify-center w-full sm:w-auto`}>
                            REQUEST A QUOTE
                            <ArrowRight className={`ml-2 w-4 h-4 ${DARK_TEXT_CLASS}`} />
                          </button> */}
                          <button className={`${CTA_OUTLINE_CLASS} w-full sm:w-auto`}>
                            VIEW PRODUCT GALLERY
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- Factory Profile & Capacity (Repurposed for Stats) --- */}
            <section className={`${SECTION_PADDING_CLASS} ${BRAND_BG_CLASS}`}>
                <div className="container mx-auto px-6 text-center">
                    <h2 className={`text-sm font-bold tracking-[0.2em] uppercase ${DARK_TEXT_CLASS} mb-12`}>F A C T O R Y P R O F I L E / D A I L Y C A P A C I T Y</h2>

                    {/* Mobile: Stack cards. Desktop: 3 columns. */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {factoryProfileStats.map((stat, index) => (
                            <div key={index} className={`${CARD_CLASS} p-6 sm:p-8 ${HOVER_LIFT_CLASS} border-4 border-white bg-white/90 backdrop-blur-sm`}>
                                <stat.icon className={`w-8 h-8 ${BRAND_TEXT_CLASS} mx-auto mb-3`} />
                                <h3 className={`text-base font-bold ${DARK_TEXT_CLASS} mb-2 uppercase tracking-wide`}>{stat.title}</h3>
                                {/* Reduced font size slightly for better mobile display of large numbers */}
                                <p className={`text-3xl sm:text-5xl font-serif font-extrabold ${DARK_TEXT_CLASS} mb-1 leading-none`}>
                                    {stat.description.split(' ')[0]}
                                </p>
                                <p className={`text-base font-semibold text-gray-700`}>{stat.description.split(' ').slice(1).join(' ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;