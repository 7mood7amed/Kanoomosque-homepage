import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Stats } from '../components/Stats';
import { Courses } from '../components/Courses';
import { Camps } from '../components/Camps';
import { Graduates } from '../components/Graduates';
import { Initiatives } from '../components/Initiatives';
import { Contact } from '../components/Contact';

export function Home() {
  useEffect(() => {
    document.title = 'مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <>
      <Hero />
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 py-12 sm:gap-16 sm:px-8 sm:py-20 lg:px-12">
        <About />
        <Stats />
        <Courses />
        <Camps />
        <Graduates />
        <Initiatives />
        <Contact />
      </div>
    </>);

}
