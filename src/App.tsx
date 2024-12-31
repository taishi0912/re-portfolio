import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import AboutSection from './components/sections/AboutSection';
import CareerSection from './components/sections/CareerSection';
import WorkSection from './components/sections/WorkSection';
import SkillSection from './components/sections/SkillSection';
import ContactSection from './components/sections/ContactSection';
import Logo from './components/common/Logo';

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="fixed top-0 left-0 p-6 z-50">
        <Logo imageUrl="https://avatars.githubusercontent.com/u/ponta10" />
      </div>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AboutSection />
        <CareerSection />
        <WorkSection />
        <SkillSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;