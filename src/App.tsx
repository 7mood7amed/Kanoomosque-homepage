import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Camps } from './components/Camps';
import { Initiatives } from './components/Initiatives';
import { Graduates } from './components/Graduates';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = 'مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <div dir="rtl" lang="ar" className="min-h-screen w-full bg-pearl">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Camps />
        <Initiatives />
        <Graduates />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>);

}