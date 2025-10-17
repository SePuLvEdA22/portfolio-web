import React, { useState, useEffect } from 'react';

const SectionNavigationDots = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'skills', label: 'Skills' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections?.map(section => ({
        ...section,
        element: document.getElementById(section?.id)
      }))?.filter(section => section?.element);

      for (let i = sectionElements?.length - 1; i >= 0; i--) {
        const section = sectionElements?.[i];
        const rect = section?.element?.getBoundingClientRect();
        if (rect?.top <= 200) {
          setActiveSection(section?.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop - Right Side */}
      <div className="hidden lg:fixed lg:right-6 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:z-900 lg:flex lg:flex-col lg:space-y-4">
        {sections?.map((section) => (
          <button
            key={section?.id}
            onClick={() => scrollToSection(section?.id)}
            className="group relative"
            aria-label={`Go to ${section?.label}`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-250 ${
                activeSection === section?.id
                  ? 'bg-primary border-primary scale-125' :'bg-transparent border-muted-foreground hover:border-primary hover:scale-110'
              }`}
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
              <div className="bg-card text-card-foreground px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap shadow-card">
                {section?.label}
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Mobile - Bottom Center */}
      <div className="lg:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 z-900 flex space-x-3 bg-card/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-card">
        {sections?.map((section) => (
          <button
            key={section?.id}
            onClick={() => scrollToSection(section?.id)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-250 ${
              activeSection === section?.id
                ? 'bg-primary border-primary scale-125' :'bg-transparent border-muted-foreground active:border-primary active:scale-110'
            }`}
            aria-label={`Go to ${section?.label}`}
          />
        ))}
      </div>
    </>
  );
};

export default SectionNavigationDots;