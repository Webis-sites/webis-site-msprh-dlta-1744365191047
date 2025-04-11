'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaStar } from 'react-icons/fa';
import { IoMdPause, IoMdPlay } from 'react-icons/io';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialsCarousel: React.FC = () => {
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      quote: 'מספרה דלתא היא המקום הטוב ביותר לתספורת. הצוות מקצועי ואדיב, והתוצאות תמיד מדהימות!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'יעל לוי',
      quote: 'אני מגיעה למספרה דלתא כבר שנתיים ותמיד יוצאת מרוצה. הסגנון המודרני והשירות האישי הם בדיוק מה שחיפשתי.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'אבי גולדשטיין',
      quote: 'הספרים במספרה דלתא הם אמנים אמיתיים. הם מבינים בדיוק מה אני רוצה גם כשאני לא יודע להסביר את זה בעצמי.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'מיכל אברהם',
      quote: 'האווירה במספרה דלתא נעימה ומזמינה. הצוות תמיד מקשיב לרצונות שלי ומייעץ בצורה מקצועית. ממליצה בחום!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotate functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`inline-block ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <div
      id="testimonials-carousel"
      dir="rtl"
      className="w-full max-w-6xl mx-auto px-4 py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-right mb-2 text-gray-800">לקוחות ממליצים</h2>
        <p className="text-gray-600 text-right">מה אומרים עלינו הלקוחות שלנו</p>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#588C7E]/20 to-white/30 backdrop-blur-sm z-0 rounded-xl"></div>
        
        {/* Carousel container */}
        <div className="relative z-10 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]"
            >
              {/* Profile image */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-[#588C7E]/30 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial content */}
              <div className="flex-1 text-right">
                <div className="mb-2 flex justify-end">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                <h3 className="font-bold text-xl text-[#588C7E]">
                  {testimonials[currentIndex].name}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 left-2 right-2 z-20">
            <button
              onClick={goToPrev}
              aria-label="הקודם"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#588C7E] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goToNext}
              aria-label="הבא"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#588C7E] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Indicator dots and autoplay control */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`עבור לחוות דעת ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#588C7E] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? 'השהה' : 'הפעל'}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#588C7E] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300"
        >
          {isAutoPlaying ? <IoMdPause /> : <IoMdPlay />}
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;