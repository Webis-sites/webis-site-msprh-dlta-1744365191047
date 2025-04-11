'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSystem from '@/components/BookingSystem';
import PortfolioGallery from '@/components/PortfolioGallery';
import AboutSection from '@/components/AboutSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NavigationHeader from '@/components/NavigationHeader';
import SpecialOffersSection from '@/components/SpecialOffersSection';
import InstagramFeed from '@/components/InstagramFeed';
import ExpertiseSection from '@/components/ExpertiseSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CTASection />
      
      <LocationSection />
      
      <ExpertiseSection />
      
      <InstagramFeed />
      
      <SpecialOffersSection />
      
      <NavigationHeader />
      
      <Footer />
      
      <ContactSection />
      
      <FAQSection />
      
      <TestimonialsCarousel />
      
      <AboutSection />
      
      <PortfolioGallery />
      
      <BookingSystem />
      
      <ServicesSection />
      
      <HeroSection />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
      </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מספרה דלתא. webis
        </div>
      </footer>
    </div>
  );
}