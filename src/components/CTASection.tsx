'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';

interface BarberCTAProps {}

const BarberCTA: React.FC<BarberCTAProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section 
      id="barber-cta-section" 
      dir="rtl" 
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="רקע מספרה" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#588C7E]/90 to-[#588C7E]/70 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-3xl mx-auto">
          {/* Glass Card */}
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            variants={itemVariants}
          >
            {/* Heading */}
            <motion.h2 
              className="text-right text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              מוכנים לשינוי? קבעו תור עוד היום!
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-right text-white/90 text-lg md:text-xl mb-8"
              variants={itemVariants}
            >
              במספרה דלתא אנחנו מתמחים במתן חווית תספורת מקצועית ואיכותית. הצוות המיומן שלנו ישמח להעניק לך את המראה המושלם שתמיד חלמת עליו. אל תחכה - מקומות מתמלאים במהירות!
            </motion.p>
            
            {/* Primary CTA Button */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 mb-8"
              variants={itemVariants}
            >
              <motion.button
                className="w-full md:w-auto bg-white text-[#588C7E] text-xl font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.1)]"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => window.location.href = '/book'}
              >
                <FaCalendarAlt />
                <span>קבע תור עכשיו</span>
              </motion.button>
            </motion.div>
            
            {/* Secondary CTA */}
            <motion.div 
              className="text-center md:text-right"
              variants={itemVariants}
            >
              <p className="text-white/80 text-lg mb-2">או התקשרו אלינו:</p>
              <a 
                href="tel:+972501234567" 
                className="inline-flex items-center gap-2 text-white text-xl font-semibold hover:text-white/80 transition-colors"
              >
                <FaPhone className="text-white/80" />
                <span>050-123-4567</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Floating Elements for Visual Interest */}
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1, rotate: 45 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1, rotate: -30 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default BarberCTA;