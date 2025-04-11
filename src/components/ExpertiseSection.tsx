'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaCut, FaBeard, FaPaintBrush, FaSpa, FaGem, FaUserTie } from 'react-icons/fa';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description, imageUrl }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="relative overflow-hidden rounded-2xl h-full"
    >
      <div className="relative h-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.1),inset_-5px_-5px_15px_rgba(255,255,255,0.1)] transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
          <img 
            src={imageUrl} 
            alt="" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-end mb-4">
            <div className="text-[#588C7E] text-3xl bg-white bg-opacity-20 p-3 rounded-full shadow-md">
              {icon}
            </div>
          </div>
          
          <h3 className="text-right text-xl font-bold mb-2 text-[#588C7E]">{title}</h3>
          <p className="text-right text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ExpertiseSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const expertiseData: ExpertiseCardProps[] = [
    {
      icon: <FaCut />,
      title: "תספורות מודרניות",
      description: "אנו מתמחים בסגנונות תספורת עדכניים ומודרניים המותאמים לצורת הפנים ולסגנון האישי של כל לקוח.",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaBeard />,
      title: "טיפולי זקן מתקדמים",
      description: "טיפולי זקן מקצועיים הכוללים עיצוב, גילוח מסורתי עם תער ושימוש במוצרים איכותיים לטיפוח הזקן.",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaPaintBrush />,
      title: "צביעת שיער מקצועית",
      description: "צוות הצבעים המומחה שלנו מציע פתרונות צבע מתקדמים, החל מצבעים קלאסיים ועד טכניקות חדשניות כמו בליאז' ואומברה.",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaSpa />,
      title: "טיפולי פנים",
      description: "טיפולי פנים מפנקים המשלבים טכניקות מסורתיות וחדשניות לניקוי עמוק, הרגעת העור והענקת מראה רענן וזוהר.",
      imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaGem />,
      title: "טיפולי פרימיום",
      description: "חוויית טיפוח יוקרתית הכוללת שילוב של מספר טיפולים, שימוש במוצרים בלעדיים ושירות VIP מותאם אישית.",
      imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaUserTie />,
      title: "סטיילינג אישי",
      description: "ייעוץ סטיילינג מקצועי המותאם לסגנון החיים, המראה והאישיות שלך, כולל המלצות על מוצרי טיפוח ביתיים.",
      imageUrl: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="expertise-section" dir="rtl" className="py-20 relative overflow-hidden">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 z-0"></div>
      <div className="absolute inset-0 bg-[#588C7E] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                duration: 0.8,
                staggerChildren: 0.2
              } 
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#588C7E]"
          >
            המומחיות שלנו
          </motion.h2>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              במספרה דלתא, אנו גאים להציע מגוון רחב של שירותים מקצועיים המבוססים על ניסיון של שנים רבות בתחום. הצוות המיומן שלנו מתמחה בטכניקות חדשניות ומסורתיות כאחד, תוך שימוש במוצרים איכותיים ביותר להשגת התוצאות המושלמות עבור כל לקוח.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((expertise, index) => (
            <ExpertiseCard
              key={index}
              icon={expertise.icon}
              title={expertise.title}
              description={expertise.description}
              imageUrl={expertise.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;