'use client';

import React, { useState, useEffect } from 'react';
import { FaInstagram, FaHeart, FaComment, FaChevronLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching Instagram posts
    const mockPosts: InstagramPost[] = [
      {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c',
        likes: 124,
        comments: 18,
        caption: 'תספורת קלאסית עם פן מודרני'
      },
      {
        id: '2',
        imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
        likes: 98,
        comments: 12,
        caption: 'עיצוב זקן מקצועי'
      },
      {
        id: '3',
        imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
        likes: 156,
        comments: 24,
        caption: 'אווירה מיוחדת במספרה'
      },
      {
        id: '4',
        imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
        likes: 87,
        comments: 9,
        caption: 'תספורת טרנדית לקיץ'
      },
      {
        id: '5',
        imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
        likes: 201,
        comments: 32,
        caption: 'סטיילינג שיער מקצועי'
      },
      {
        id: '6',
        imageUrl: 'https://images.unsplash.com/photo-1519500099198-fd81846b8f03',
        likes: 145,
        comments: 21,
        caption: 'מוצרי טיפוח איכותיים'
      },
      {
        id: '7',
        imageUrl: 'https://images.unsplash.com/photo-1634302086887-13b5281d0eee',
        likes: 112,
        comments: 15,
        caption: 'עמדת עבודה מקצועית'
      },
      {
        id: '8',
        imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70',
        likes: 178,
        comments: 27,
        caption: 'צוות המספרה המקצועי שלנו'
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 800);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="instagram-feed" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#588C7E]">אינסטגרם</h2>
          <p className="text-lg text-gray-700 mb-6">
            עקבו אחרינו באינסטגרם לעדכונים, השראה ומבצעים מיוחדים. אנחנו מעלים תמונות של העבודות האחרונות שלנו ומשתפים טיפים לטיפוח השיער.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="neumorphic-loader w-16 h-16 rounded-full border-4 border-[#588C7E] border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="relative group overflow-hidden rounded-xl neumorphic-card"
                  style={{ aspectRatio: '1/1' }}
                >
                  <img
                    src={`${post.imageUrl}?w=600&h=600&fit=crop&crop=faces&auto=format`}
                    alt={post.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Instagram-like overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-between p-4">
                    <div className="glassmorphism-badge opacity-0 group-hover:opacity-100 self-start px-2 py-1 rounded-full transition-opacity duration-300">
                      <FaInstagram className="inline-block mr-1" /> מספרה דלתא
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium mb-2 line-clamp-2">{post.caption}</p>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="flex items-center">
                          <FaHeart className="text-white ml-1" />
                          <span className="text-white text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <FaComment className="text-white ml-1" />
                          <span className="text-white text-sm">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <motion.a
                href="https://www.instagram.com/delta_barber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center glassmorphism-button px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="ml-2 text-xl" />
                עקבו אחרינו באינסטגרם
                <FaChevronLeft className="mr-2" />
              </motion.a>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .neumorphic-card {
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), 
                     -8px -8px 16px rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        
        .neumorphic-card:hover {
          box-shadow: 12px 12px 20px rgba(0, 0, 0, 0.15), 
                     -12px -12px 20px rgba(255, 255, 255, 0.9);
        }
        
        .glassmorphism-button {
          background: rgba(88, 140, 126, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(88, 140, 126, 0.3);
        }
        
        .glassmorphism-button:hover {
          background: rgba(88, 140, 126, 0.9);
          box-shadow: 0 8px 32px rgba(88, 140, 126, 0.5);
        }
        
        .glassmorphism-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.75rem;
        }
        
        .neumorphic-loader {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), 
                     -6px -6px 12px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </section>
  );
};

export default InstagramFeed;