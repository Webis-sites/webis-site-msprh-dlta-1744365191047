'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaScissors } from 'react-icons/fa';
import Image from 'next/image';

interface HeroProps {}

const BarberHero: React.FC<HeroProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section 
      id="barber-hero" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="מספרה מודרנית"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Glassmorphism Container */}
      <motion.div
        className="relative z-10 flex h-full w-full items-center justify-center px-4 md:px-8"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="w-full max-w-4xl rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 p-8 md:p-12 shadow-2xl">
          <div className="text-right">
            {/* Logo/Icon */}
            <motion.div 
              className="mb-6 inline-block"
              variants={itemVariants}
            >
              <div className="flex items-center justify-end gap-3">
                <h2 className="text-2xl font-bold text-white">דלתא</h2>
                <div className="rounded-full bg-[#588C7E] p-3 text-white">
                  <FaScissors size={24} />
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              variants={itemVariants}
            >
              מספרה מובילה בישראל
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="mb-8 text-xl md:text-2xl text-white/90"
              variants={itemVariants}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* Additional Description */}
            <motion.p 
              className="mb-10 text-lg text-white/80"
              variants={itemVariants}
            >
              אנחנו מספרה מובילה בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="flex items-center gap-2 rounded-full bg-[#588C7E] px-8 py-4 text-lg font-bold text-white shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.2)] transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => console.log('קביעת תור')}
            >
              <FaCalendarAlt />
              <span>קבע תור עכשיו</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Neumorphic Floating Elements (Decorative) */}
      <motion.div
        className="absolute bottom-10 left-10 z-20 hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="h-16 w-16 rounded-2xl bg-[#588C7E]/20 backdrop-blur-md shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.1)]"></div>
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-10 z-20 hidden md:block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-md shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.1)]"></div>
      </motion.div>
    </section>
  );
};

export default BarberHero;