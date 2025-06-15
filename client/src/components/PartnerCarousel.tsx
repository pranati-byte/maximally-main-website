
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface PartnerLogo {
  id: string;
  name: string;
  initials?: string;
  logoUrl?: string;
}

const partnerLogos: PartnerLogo[] = [
  { id: '1', name: 'NexFellow', logoUrl: '/nexfellow-logo.png' },
  { id: '2', name: 'Not Building Alone', logoUrl: '/not-building-alone-logo.png' },
  { id: '3', name: 'Serentia.org', logoUrl: '/serentia-logo.png' },
  { id: '4', name: 'E-Cell IIT Delhi', initials: 'ED' },
  { id: '5', name: 'MUN Society SRCC', initials: 'MS' },
  { id: '6', name: 'Entrepreneurship Cell BITS', initials: 'EB' },
  { id: '7', name: 'Content Creators Club DU', initials: 'CC' },
  { id: '8', name: 'Youth NGO Mumbai', initials: 'YM' },
  { id: '9', name: 'Startup Society NIT', initials: 'SN' },
  { id: '10', name: 'Innovation Hub IIIT', initials: 'IH' },
  { id: '11', name: 'Tech Club VIT', initials: 'TV' },
  { id: '12', name: 'Business Society NMIMS', initials: 'BN' },
  { id: '13', name: 'Creative Collective NIFT', initials: 'CN' },
  { id: '14', name: 'Debate Society LSR', initials: 'DL' },
  { id: '15', name: 'Coding Club DTU', initials: 'CD' },
  { id: '16', name: 'Design Think IIT-B', initials: 'DT' },
  { id: '17', name: 'Maker Space IISC', initials: 'MI' },
  { id: '18', name: 'AI Club BITS Goa', initials: 'AB' },
];

// Duplicate logos for infinite scroll effect
const extendedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

const PartnerCarousel: React.FC = () => {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll for desktop
  useEffect(() => {
    if (isMobile || isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition(prev => prev + 1);
    }, 30); // Smooth scrolling speed

    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  // Reset scroll position for infinite loop
  useEffect(() => {
    if (scrollPosition >= (partnerLogos.length * 140)) {
      setScrollPosition(0);
    }
  }, [scrollPosition]);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-red-950 to-black relative overflow-hidden">
      {/* Grid texture background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-press-start text-2xl sm:text-3xl md:text-4xl mb-4 text-white glitch-effect">
            Our Allies
          </h2>
          <p className="font-jetbrains text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From IIT hack clubs to MUNs and small-town content collectives — these orgs are building with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className={cn(
              "flex gap-6 sm:gap-8",
              isMobile ? "overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4" : "overflow-hidden"
            )}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={!isMobile ? {
              transform: `translateX(-${scrollPosition}px)`,
              transition: 'transform 0.1s linear'
            } : {}}
          >
            {(isMobile ? partnerLogos : extendedLogos).map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className={cn(
                  "flex-shrink-0 snap-center group cursor-pointer",
                  "min-w-fit"
                )}
              >
                {/* Text-based organization name */}
                <div className="relative">
                  <div className={cn(
                    "px-4 py-3 rounded-lg border-2 border-white/20",
                    "bg-gradient-to-br from-red-900/50 to-black/50",
                    "backdrop-blur-sm",
                    "transform transition-all duration-300",
                    "shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]",
                    "group-hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.5)]",
                    "group-hover:-translate-y-1 group-hover:scale-105",
                    "group-hover:border-maximally-red/50"
                  )}>
                    <span className="font-jetbrains text-white text-sm sm:text-base font-medium whitespace-nowrap">
                      {partner.name}
                    </span>
                    
                    {/* Glitch effect overlay */}
                    <div className={cn(
                      "absolute inset-0 rounded-lg",
                      "bg-gradient-to-r from-cyan-500/10 to-purple-500/10",
                      "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      "mix-blend-overlay"
                    )} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicators */}
          {isMobile && (
            <div className="flex justify-center mt-6 gap-1">
              {Array.from({ length: Math.min(partnerLogos.length, 8) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/30"
                />
              ))}
            </div>
          )}
        </div>

        {/* Gradient fade edges for desktop */}
        {!isMobile && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-red-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-red-950 to-transparent z-20 pointer-events-none" />
          </>
        )}
      </div>
    </section>
  );
};

export default PartnerCarousel;
