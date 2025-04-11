'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaBeard, FaPaintBrush, FaSprayCan, FaChild, FaUserTie } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl rtl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        background: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))"
      }}
      style={{
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 8px 32px 0 rgba(88, 140, 126, 0.1)"
      }}
    >
      <div className="flex flex-col items-end text-right">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#588C7E]/10 text-[#588C7E]">
          <div className="text-2xl">{icon}</div>
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="mt-auto">
          <span className="inline-block rounded-lg bg-[#588C7E] px-4 py-2 font-bold text-white">
            {price} ₪
          </span>
        </div>
      </div>
      <div className="absolute -bottom-2 -left-2 h-20 w-20 rounded-full bg-[#588C7E]/5"></div>
      <div className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-[#588C7E]/5"></div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: <FaCut />,
      title: 'תספורת גברים',
      description: 'תספורת מקצועית המותאמת אישית לסגנון ולמבנה הפנים שלך.',
      price: '80'
    },
    {
      icon: <FaBeard />,
      title: 'עיצוב זקן',
      description: 'עיצוב וטיפוח זקן מקצועי לקבלת מראה מושלם ומסודר.',
      price: '60'
    },
    {
      icon: <FaPaintBrush />,
      title: 'צביעת שיער',
      description: 'צביעה מקצועית בצבעים איכותיים לשיער בריא ומראה מרהיב.',
      price: '120'
    },
    {
      icon: <FaSprayCan />,
      title: 'סטיילינג מקצועי',
      description: 'עיצוב שיער מקצועי עם מוצרי סטיילינג איכותיים לכל אירוע.',
      price: '70'
    },
    {
      icon: <FaChild />,
      title: 'תספורת ילדים',
      description: 'תספורת עדינה ומקצועית לילדים בסביבה נעימה ומזמינה.',
      price: '50'
    },
    {
      icon: <FaUserTie />,
      title: 'חבילת חתן',
      description: 'טיפול מקיף לחתן הכולל תספורת, עיצוב זקן וטיפולי פנים.',
      price: '200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" dir="rtl" className="relative overflow-hidden bg-gray-50 py-16">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#588C7E]"></div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#588C7E]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2 
            className="mb-4 text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div
            className="mx-auto mb-6 h-1 w-24 bg-[#588C7E]"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            במספרה דלתא אנו מציעים מגוון רחב של שירותי ספרות מקצועיים ברמה הגבוהה ביותר. הספרים המנוסים שלנו משתמשים בטכניקות מתקדמות ובמוצרים איכותיים כדי להעניק לכם את המראה המושלם.
          </motion.p>
        </div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="group relative mx-auto inline-block overflow-hidden rounded-xl bg-white p-1"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.7)",
              boxShadow: "0 8px 32px 0 rgba(88, 140, 126, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.18)"
            }}
          >
            <motion.a
              href="#booking"
              className="relative block rounded-lg bg-[#588C7E] px-8 py-3 text-lg font-bold text-white transition-all duration-300"
              whileHover={{ 
                backgroundColor: "#4a7a6d",
                boxShadow: "0 4px 14px 0 rgba(88, 140, 126, 0.39)"
              }}
            >
              הזמן תור עכשיו
              <motion.span
                className="absolute bottom-0 left-0 h-full w-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0.2 }}
              ></motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;