'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaParking, FaBus, FaWalking, FaDirections } from 'react-icons/fa';

interface LocationInfo {
  address: string;
  landmarks: string[];
  transportation: string[];
  parking: string[];
  walkingDirections: string[];
  mapUrl: string;
  directionsUrl: string;
}

const LocationSection: React.FC = () => {
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const locationInfo: LocationInfo = {
    address: "רחוב הרצל 45, תל אביב, ישראל",
    landmarks: [
      "בניין המשרדים הכחול",
      "ליד קניון העיר",
      "מול פארק המרכזי"
    ],
    transportation: [
      "קו אוטובוס 18, 24, 47 - תחנה במרחק 100 מטר",
      "תחנת רכבת מרכז - 10 דקות הליכה",
      "תחנת מוניות בפינת הרחוב"
    ],
    parking: [
      "חניון ציבורי בבניין - שעתיים ראשונות חינם ללקוחות",
      "חניה ברחוב עם תשלום בימים א'-ה'",
      "חניון נוסף במרחק 200 מטר"
    ],
    walkingDirections: [
      "מתחנת הרכבת: צא מהתחנה לכיוון צפון, פנה ימינה ברחוב הרצל והמשך 400 מטר",
      "מהקניון: צא מהיציאה הראשית, חצה את הכביש ופנה שמאלה",
      "מהפארק: צא מהשער המזרחי, פנה ימינה ברמזור הראשון"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0981468214787!2d34.7805!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzA3LjEiTiAzNMKwNDYnNDkuOCJF!5e0!3m2!1sen!2sil!4v1623152433986!5m2!1sen!2sil",
    directionsUrl: "https://www.google.com/maps/dir//32.0853,34.7805"
  };

  const neumorphicStyle = {
    boxShadow: "8px 8px 16px #4a7569, -8px -8px 16px #66a393",
    backgroundColor: "#588C7E",
    borderRadius: "16px"
  };

  const glassmorphicStyle = {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
  };

  const InfoItem: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => {
    return (
      <div className="mb-6">
        <div className="flex items-center mb-2 text-right">
          <h3 className="text-lg font-bold ml-2">{title}</h3>
          <span className="text-[#588C7E]">{icon}</span>
        </div>
        <ul className="list-none p-0">
          {items.map((item, index) => (
            <li key={index} className="mb-2 pr-6 relative before:content-['•'] before:absolute before:right-0 before:text-[#588C7E]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="location-section" dir="rtl" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100 text-right">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#588C7E]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          איך להגיע אלינו
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          מספרה דלתא ממוקמת במרכז העיר, במיקום נוח ונגיש. אנו מציעים מגוון אפשרויות הגעה ומספר אפשרויות חניה לנוחיותכם.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map Section */}
          <motion.div 
            className="lg:w-1/2 h-[400px] md:h-[500px] overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={neumorphicStyle}
          >
            <iframe 
              src={locationInfo.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="מיקום מספרה דלתא"
              aria-label="מפת גוגל המציגה את מיקום מספרה דלתא"
              className="w-full h-full"
            ></iframe>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            className="lg:w-1/2 p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={glassmorphicStyle}
          >
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-2xl text-[#588C7E] ml-3" />
              <h3 className="text-xl font-bold">כתובת מלאה</h3>
            </div>
            <p className="text-lg mb-8 pr-8">{locationInfo.address}</p>

            <InfoItem 
              icon={<FaMapMarkerAlt className="text-xl" />} 
              title="נקודות ציון קרובות" 
              items={locationInfo.landmarks} 
            />

            <InfoItem 
              icon={<FaBus className="text-xl" />} 
              title="תחבורה ציבורית" 
              items={locationInfo.transportation} 
            />

            <InfoItem 
              icon={<FaParking className="text-xl" />} 
              title="אפשרויות חניה" 
              items={locationInfo.parking} 
            />

            <InfoItem 
              icon={<FaWalking className="text-xl" />} 
              title="הוראות הגעה ברגל" 
              items={locationInfo.walkingDirections} 
            />

            <motion.a
              href={locationInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 py-3 px-6 text-white font-bold rounded-full w-full md:w-auto text-center"
              style={{
                ...neumorphicStyle,
                boxShadow: isHovering === 'directions' 
                  ? "inset 8px 8px 16px #4a7569, inset -8px -8px 16px #66a393" 
                  : "8px 8px 16px #4a7569, -8px -8px 16px #66a393"
              }}
              onMouseEnter={() => setIsHovering('directions')}
              onMouseLeave={() => setIsHovering(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="קבל הוראות הגעה בגוגל מפות"
            >
              <FaDirections className="text-xl" />
              <span>קבל הוראות הגעה</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile-friendly image */}
        <div className="mt-16 lg:hidden">
          <motion.div 
            className="relative h-64 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={neumorphicStyle}
          >
            <img 
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="חזית מספרה דלתא" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;