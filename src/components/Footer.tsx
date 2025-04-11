'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    { icon: <FaFacebookF />, label: 'פייסבוק', href: '#' },
    { icon: <FaInstagram />, label: 'אינסטגרם', href: '#' },
    { icon: <FaTwitter />, label: 'טוויטר', href: '#' },
    { icon: <FaWhatsapp />, label: 'וואטסאפ', href: '#' },
  ];

  const quickLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'שירותים', href: '/services' },
    { name: 'גלריה', href: '/gallery' },
    { name: 'הזמנת תור', href: '/booking' },
    { name: 'אודות', href: '/about' },
    { name: 'צור קשר', href: '/contact' },
  ];

  const businessHours = [
    { day: 'ראשון - חמישי', hours: '09:00 - 20:00' },
    { day: 'שישי', hours: '09:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } }
  };

  return (
    <footer id="footer" dir="rtl" className="bg-gray-800 text-white relative overflow-hidden">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <div className="flex justify-end items-center">
              <div className="w-40 h-40 relative">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="מספרה דלתא לוגו"
                  width={160}
                  height={160}
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#588C7E]">מספרה דלתא</h2>
            <p className="text-gray-300">
              אנחנו מספרה מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#588C7E] border-b-2 border-[#588C7E] pb-2 inline-block">ניווט מהיר</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="block text-gray-300 hover:text-[#588C7E] transition-colors duration-300 py-1 neumorphic-link"
                    aria-label={`נווט ל${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info and Business Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#588C7E] border-b-2 border-[#588C7E] pb-2 inline-block">שעות פעילות</h3>
            <ul className="space-y-2">
              {businessHours.map((schedule, index) => (
                <li key={index} className="flex justify-end items-center gap-2 text-gray-300">
                  <span>{schedule.hours}</span>
                  <span className="font-medium">{schedule.day}:</span>
                  <FaClock className="text-[#588C7E]" />
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-[#588C7E] border-b-2 border-[#588C7E] pb-2 inline-block mt-6">צור קשר</h3>
            <div className="space-y-2">
              <div className="flex justify-end items-center gap-2 text-gray-300">
                <span>רחוב הברוש 123, תל אביב</span>
                <FaMapMarkerAlt className="text-[#588C7E]" />
              </div>
              <div className="flex justify-end items-center gap-2 text-gray-300">
                <span dir="ltr">03-1234567</span>
                <FaPhone className="text-[#588C7E]" />
              </div>
              <div className="flex justify-end items-center gap-2 text-gray-300">
                <span>info@delta-barber.co.il</span>
                <FaEnvelope className="text-[#588C7E]" />
              </div>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#588C7E] border-b-2 border-[#588C7E] pb-2 inline-block">עקבו אחרינו</h3>
            <div className="flex justify-end gap-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-[#588C7E] transition-colors duration-300 backdrop-blur-sm bg-opacity-70 border border-gray-600 shadow-neumorphic"
                  initial="initial"
                  whileHover="hover"
                  variants={iconVariants}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#588C7E] mb-4">הצטרפו לניוזלטר</h3>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="הזינו את האימייל שלכם"
                  className="px-4 py-2 rounded-lg bg-gray-700 bg-opacity-70 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#588C7E] text-right"
                  aria-label="הזינו את האימייל שלכם"
                />
                <button
                  className="px-4 py-2 rounded-lg bg-[#588C7E] hover:bg-[#4a7a6d] transition-colors duration-300 font-medium shadow-neumorphic"
                  aria-label="הרשמה לניוזלטר"
                >
                  הרשמה
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} מספרה דלתא. כל הזכויות שמורות.</p>
        </div>
      </div>

      {/* CSS for neumorphic effects */}
      <style jsx>{`
        .shadow-neumorphic {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), 
                     -5px -5px 10px rgba(255, 255, 255, 0.05);
        }
        
        .neumorphic-link {
          position: relative;
        }
        
        .neumorphic-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          right: 0;
          background-color: #588C7E;
          transition: width 0.3s ease;
        }
        
        .neumorphic-link:hover:after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;