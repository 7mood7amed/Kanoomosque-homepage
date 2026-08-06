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
      <About />
      <Stats />
      <Courses />
      <Camps />
      <Graduates />
      <Initiatives />
      <Contact />
    </>);

}
