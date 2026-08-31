import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Donate } from './pages/Donate';
import { Login } from './pages/Login';
import { CoursesList } from './pages/CoursesList';
import { CourseDetail } from './pages/CourseDetail';
import { CampDetail } from './pages/CampDetail';
import { GraduatesList } from './pages/GraduatesList';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { FaqPage } from './pages/FaqPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

export function App() {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-pattern" aria-hidden="true" />
      <div dir="rtl" lang="ar" className="relative z-10 min-h-screen w-full">
        <ScrollManager />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/camps/:id" element={<CampDetail />} />
            <Route path="/graduates" element={<GraduatesList />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>);

}
