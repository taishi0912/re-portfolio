import { useState, useEffect } from 'react';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'CAREER', href: '#career' },
  { label: 'WORK', href: '#work' },
  { label: 'SKILL', href: '#skill' },
  { label: 'CONTACT', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.label.toLowerCase(),
        element: document.getElementById(item.label.toLowerCase())
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`text-sm transition-colors ${
                activeSection === item.label.toLowerCase()
                  ? 'text-[#C5A572]'
                  : 'text-white hover:text-[#C5A572]'
              }`}
              onClick={() => setActiveSection(item.label.toLowerCase())}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}