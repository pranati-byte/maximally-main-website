import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BenefitCard {
  emoji: string;
  title: string;
  subtitle: string;
}

const benefits: BenefitCard[] = [
  {
    emoji: '🎖',
    title: 'Powered by Maximally',
    subtitle: 'Official partnership badge & recognition across all channels'
  },
  {
    emoji: '📸',
    title: 'Content Creation Support',
    subtitle: 'Professional content & marketing assets for your events'
  },
  {
    emoji: '💸',
    title: 'Event Funding',
    subtitle: '₹1K–₹15K direct funding for your hackathons & competitions'
  },
  {
    emoji: '🧠',
    title: 'Mentorship Access',
    subtitle: 'Direct access to industry experts & Maximally community leaders'
  },
  {
    emoji: '🚀',
    title: 'Network Growth',
    subtitle: 'Connect with 50+ partner organizations & expand your reach'
  },
  {
    emoji: '🏆',
    title: 'Free Judge Slots',
    subtitle: 'Premium judges & industry experts for your competitions'
  }
];

export default function BenefitCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    updateCurrentIndex();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const x = e.touches[0].pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    updateCurrentIndex();
  };

  const updateCurrentIndex = () => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.offsetWidth * 0.8;
    const newIndex = Math.round(containerRef.current.scrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(newIndex, benefits.length - 1)));
  };

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.offsetWidth * 0.8;
    containerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateCurrentIndex();
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-mono tracking-wider">
          WHY JOIN THE COLLECTIVE?
        </h2>

        {/* Pixel divider */}
        <div className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-8 pixel-border"></div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-4 pb-4 cursor-grab active:cursor-grabbing scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 w-[80vw] md:w-[300px] h-[200px] bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:rotate-1",
                "shadow-lg hover:shadow-yellow-400/20",
                index === currentIndex && "ring-2 ring-yellow-400 scale-105"
              )}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="h-full flex flex-col justify-between">
                <div className="text-4xl mb-3">{benefit.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-mono text-yellow-400">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-yellow-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      </div>


    </div>
  );
}