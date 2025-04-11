'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaScissors, FaStar, FaGift, FaUserGraduate } from 'react-icons/fa';

interface SpecialOffer {
  id: number;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  icon: React.ReactNode;
  bgImage: string;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Reset timer when it reaches zero
                days = 2;
                hours = 12;
                minutes = 30;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 my-6 text-center" dir="rtl">
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-filter backdrop-blur-md rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)]">
          <span className="text-2xl font-bold">{timeLeft.days}</span>
        </div>
        <span className="text-sm mt-1">ימים</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-filter backdrop-blur-md rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)]">
          <span className="text-2xl font-bold">{timeLeft.hours}</span>
        </div>
        <span className="text-sm mt-1">שעות</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-filter backdrop-blur-md rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)]">
          <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        </div>
        <span className="text-sm mt-1">דקות</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-filter backdrop-blur-md rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)]">
          <span className="text-2xl font-bold">{timeLeft.seconds}</span>
        </div>
        <span className="text-sm mt-1">שניות</span>
      </div>
    </div>
  );
};

const OfferCard: React.FC<{ offer: SpecialOffer; index: number }> = ({ offer, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -10,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      } 
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="relative overflow-hidden rounded-2xl backdrop-filter backdrop-blur-md bg-white/10 border border-white/20 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.05)] h-full"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(88, 140, 126, 0.85), rgba(88, 140, 126, 0.4)), url(${offer.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-full flex items-start justify-end p-3">
        <div className="text-white text-2xl">
          {offer.icon}
        </div>
      </div>
      <div className="p-6 text-right h-full flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
        <p className="text-white/90 mb-4 flex-grow">{offer.description}</p>
        <div className="mb-5">
          <div className="flex items-center justify-end gap-3">
            {offer.originalPrice && (
              <span className="text-white/70 line-through text-sm">{offer.originalPrice}</span>
            )}
            <span className="text-white text-2xl font-bold">{offer.price}</span>
          </div>
        </div>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="w-full py-3 px-6 bg-white text-[#588C7E] font-bold rounded-lg shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(255,255,255,0.1)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
        >
          הזמן עכשיו
        </motion.button>
      </div>
    </motion.div>
  );
};

const SpecialOffersSection: React.FC = () => {
  const offers: SpecialOffer[] = [
    {
      id: 1,
      title: "מבצע לסטודנטים",
      description: "תספורת מעוצבת + עיצוב זקן במחיר מיוחד לסטודנטים. הצג תעודת סטודנט בתוקף.",
      price: "₪79",
      originalPrice: "₪120",
      icon: <FaUserGraduate />,
      bgImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "חבילת VIP",
      description: "חוויית טיפוח מלאה הכוללת תספורת, עיצוב זקן, טיפול פנים ומסאז' ראש.",
      price: "₪249",
      originalPrice: "₪320",
      icon: <FaStar />,
      bgImage: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "הנחה לתספורת ראשונה",
      description: "לקוחות חדשים נהנים מ-30% הנחה על תספורת ראשונה. כולל ייעוץ סגנון אישי.",
      price: "₪69",
      originalPrice: "₪99",
      icon: <FaScissors />,
      bgImage: "https://images.unsplash.com/photo-1622288432450-277d0fef9f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "מבצע חבר מביא חבר",
      description: "הבא חבר חדש למספרה ושניכם תקבלו 20% הנחה על הטיפול הבא.",
      price: "20% הנחה",
      icon: <FaGift />,
      bgImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section id="special-offers" className="py-16 relative overflow-hidden" dir="rtl">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#588C7E]/30 to-[#588C7E]/10 backdrop-filter backdrop-blur-sm -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#588C7E]/20 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#588C7E]/20 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#588C7E] mb-4">מבצעים מיוחדים</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            אנחנו במספרה דלתא מציעים לכם מגוון מבצעים מיוחדים לחוויית טיפוח מושלמת. הזדרזו - המבצעים לזמן מוגבל בלבד!
          </p>
          
          {/* Countdown timer */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">המבצעים מסתיימים בעוד:</h3>
            <CountdownTimer />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;