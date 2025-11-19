import React from 'react';
import Header from '@/components/shared/header'; 
import Footer from '@/components/shared/footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}