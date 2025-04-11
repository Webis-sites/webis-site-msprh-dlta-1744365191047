'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaScissors, FaAward, FaUserFriends } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      role: 'מנהל ומעצב שיער ראשי',
      bio: 'עם ניסיון של 15 שנה בתחום, דניאל מביא חדשנות וסגנון לכל תספורת.',
      imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'מיכל לוי',
      role: 'מעצבת שיער בכירה',
      bio: 'מיכל מתמחה בצבעי שיער ייחודיים ותסרוקות מודרניות עם טאץ׳ אישי.',
      imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'יוסי אברהם',
      role: 'מומחה לעיצוב זקן',
      bio: 'יוסי הוא אמן בתחום עיצוב הזקן, עם עין חדה לפרטים ויכולת להתאים את הסגנון לכל פנים.',
      imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const values: Value[] = [
    {
      id: 1,
      title: 'איכות ללא פשרות',
      description: 'אנו משתמשים רק במוצרים הטובים ביותר ומתעדכנים בטכניקות החדשות ביותר.',
      icon: <FaScissors className="text-3xl text-[#588C7E]" />,
    },
    {
      id: 2,
      title: 'ניסיון מקצועי',
      description: 'הצוות שלנו כולל אנשי מקצוע עם שנים רבות של ניסיון בתעשייה.',
      icon: <FaAward className="text-3xl text-[#588C7E]" />,
    },
    {
      id: 3,
      title: 'שירות אישי',
      description: 'אנו מאמינים ביחס אישי ובהתאמת השירות לצרכים הייחודיים של כל לקוח.',
      icon: <FaUserFriends className="text-3xl text-[#588C7E]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" dir="rtl" className="py-16 bg-white relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#588C7E]/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#588C7E]/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">אודותינו</h2>
            <div className="w-24 h-1 bg-[#588C7E] mx-auto"></div>
          </motion.div>

          {/* Story Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.9)]">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">הסיפור שלנו</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-right mb-6">
                מספרה דלתא נוסדה לפני למעלה מעשור מתוך אהבה לאמנות עיצוב השיער והרצון להביא חדשנות לתחום. אנחנו מספרה מובילה בתחום האופנה עם ניסיון של שנים רבות, המשלבת טכניקות מסורתיות עם טרנדים עכשוויים.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-right">
                אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו, תוך שימת דגש על התאמה אישית לכל לקוח. הצוות המקצועי שלנו עובר הכשרות והשתלמויות באופן קבוע כדי להישאר בחזית הטכנולוגיה והאופנה בתחום עיצוב השיער.
              </p>
            </div>
          </motion.div>

          {/* Team Members */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-10 text-right">הצוות שלנו</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-white/20"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-1 text-right">{member.name}</h4>
                    <p className="text-[#588C7E] font-medium mb-3 text-right">{member.role}</p>
                    <p className="text-gray-600 text-right">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-10 text-right">הערכים שלנו</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <motion.div
                  key={value.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-white/20 flex flex-col items-end"
                >
                  <div className="bg-white/90 p-4 rounded-full mb-4 shadow-inner">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 text-right">{value.title}</h4>
                  <p className="text-gray-600 text-right">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;