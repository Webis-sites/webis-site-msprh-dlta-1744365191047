'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'מהן שעות הפעילות של המספרה?',
      answer: 'המספרה פתוחה בימים א׳-ה׳ בין השעות 09:00-20:00, בימי שישי בין השעות 09:00-14:00, ובשבת אנחנו סגורים. בחגים יתכנו שינויים בשעות הפעילות, אנא עקבו אחר העדכונים בדף הפייסבוק שלנו.'
    },
    {
      id: 'faq-2',
      question: 'האם צריך לקבוע תור מראש?',
      answer: 'כן, אנו ממליצים לקבוע תור מראש כדי להבטיח את זמינות הספר המועדף עליכם. ניתן לקבוע תור דרך האתר שלנו, באפליקציה או בשיחת טלפון למספר 03-1234567. במקרים של הגעה ללא תור, ייתכן זמן המתנה בהתאם לעומס במספרה.'
    },
    {
      id: 'faq-3',
      question: 'אילו שירותים אתם מציעים?',
      answer: 'אנו מציעים מגוון רחב של שירותים כולל תספורות גברים, עיצוב זקן, גילוח מסורתי, צביעת שיער, טיפולי פנים, ועיצוב שיער בסגנונות מודרניים. כל השירותים מבוצעים על ידי צוות מקצועי ומנוסה שעובר הכשרות תקופתיות בטכניקות החדשות ביותר.'
    },
    {
      id: 'faq-4',
      question: 'מה מדיניות הביטולים שלכם?',
      answer: 'אנו מבקשים להודיע על ביטול תור לפחות 24 שעות מראש. ביטול בהתראה קצרה יותר או אי-הגעה לתור עלולים לגרור חיוב של 50% מעלות השירות בהזמנה הבאה. אנו מבינים שדברים בלתי צפויים קורים, אז במקרים חריגים נפעיל שיקול דעת.'
    },
    {
      id: 'faq-5',
      question: 'האם אתם מקבלים לקוחות ללא תור?',
      answer: 'כן, אנו מקבלים לקוחות ללא תור על בסיס מקום פנוי. עם זאת, לקוחות עם תורים מתוזמנים יקבלו עדיפות. בימים עמוסים במיוחד, ייתכן שלא נוכל לקבל לקוחות ללא תור, לכן תמיד מומלץ לקבוע תור מראש.'
    },
    {
      id: 'faq-6',
      question: 'האם יש הנחות למנויים קבועים?',
      answer: 'בהחלט! אנו מציעים תוכנית נאמנות ללקוחות קבועים. לאחר 5 ביקורים, תקבלו 15% הנחה על השירות השישי. בנוסף, אנו מציעים כרטיסיות במחיר מוזל למספר תספורות מראש. שאלו את הצוות שלנו על המבצעים הנוכחיים בביקורכם הבא.'
    },
    {
      id: 'faq-7',
      question: 'האם אתם מוכרים מוצרי טיפוח?',
      answer: 'כן, אנו מוכרים מגוון מוצרי טיפוח איכותיים לשיער ולזקן מהמותגים המובילים בשוק. הספרים שלנו ישמחו להמליץ על המוצרים המתאימים ביותר לסוג השיער שלכם ולסגנון שאתם מעדיפים. אנו מאמינים שטיפוח נכון בבית הוא חלק חשוב בשמירה על מראה התספורת לאורך זמן.'
    },
    {
      id: 'faq-8',
      question: 'האם יש חניה בקרבת המספרה?',
      answer: 'יש חניון ציבורי במרחק של 50 מטר מהמספרה. בנוסף, ישנם מספר מקומות חניה ברחוב, אך הם מוגבלים בשעות העומס. אנו ממליצים להגיע 10 דקות לפני התור שלכם כדי למצוא חניה בנוחות. לקוחות קבועים יכולים לשאול על הסדרי החניה המיוחדים שלנו.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div id="faq-section" dir="rtl" className="w-full max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">שאלות נפוצות</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר על השירותים שלנו במספרה דלתא. אם לא מצאתם את התשובה שחיפשתם, אל תהססו ליצור איתנו קשר.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div 
            key={faq.id}
            className="bg-white rounded-xl overflow-hidden"
            style={{
              boxShadow: activeIndex === faq.id 
                ? '0 10px 15px -3px rgba(88, 140, 126, 0.1), 0 4px 6px -2px rgba(88, 140, 126, 0.05), inset 0 -2px 5px rgba(88, 140, 126, 0.2)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
            }}
          >
            <button
              id={faq.id}
              aria-expanded={activeIndex === faq.id}
              aria-controls={`${faq.id}-content`}
              className="w-full text-right p-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#588C7E] transition-all duration-300"
              onClick={() => toggleAccordion(faq.id)}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: activeIndex === faq.id ? '1px solid rgba(88, 140, 126, 0.3)' : 'none',
                borderRadius: '0.75rem'
              }}
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-2 bg-[#588C7E] text-white p-1 rounded-full"
                style={{
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                <FiChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {activeIndex === faq.id && (
                <motion.div
                  id={`${faq.id}-content`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(5px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <div className="p-5 text-gray-700 text-right">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl text-right" style={{
        background: 'linear-gradient(145deg, rgba(88, 140, 126, 0.1), rgba(88, 140, 126, 0.2))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)'
      }}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="מספרה דלתא" 
              className="rounded-lg w-full h-auto object-cover shadow-lg"
              style={{ maxHeight: '200px' }}
            />
          </div>
          <div className="md:w-2/3 md:pr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">יש לכם שאלה נוספת?</h3>
            <p className="text-gray-700 mb-4">
              אנחנו כאן כדי לעזור! צרו איתנו קשר באחת מהדרכים הבאות ונשמח לענות על כל שאלה.
            </p>
            <div className="flex flex-wrap gap-3">
              <button 
                className="px-4 py-2 bg-[#588C7E] text-white rounded-lg transition-all hover:bg-[#4a7a6d] focus:outline-none focus:ring-2 focus:ring-[#588C7E] focus:ring-opacity-50"
                style={{
                  boxShadow: '0 4px 6px rgba(88, 140, 126, 0.25)',
                }}
              >
                צרו קשר
              </button>
              <button 
                className="px-4 py-2 bg-white text-[#588C7E] border border-[#588C7E] rounded-lg transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#588C7E] focus:ring-opacity-50"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                }}
              >
                קבעו תור
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;