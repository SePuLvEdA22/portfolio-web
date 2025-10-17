import React, { useState } from 'react';

const SkipNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'inicio', label: 'Ir al inicio' },
    { id: 'sobre-mi', label: 'Ir a sobre mí' },
    { id: 'skills', label: 'Ir a habilidades' },
    { id: 'proyectos', label: 'Ir a proyectos' },
    { id: 'servicios', label: 'Ir a servicios' },
    { id: 'experiencia', label: 'Ir a experiencia' },
    { id: 'contacto', label: 'Ir a contacto' }
  ];

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  const skipToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.focus();
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`fixed top-4 left-4 z-1200 ${isVisible ? 'block' : 'sr-only'}`}>
      <div className="bg-card border border-border rounded-lg shadow-card p-4 space-y-2">
        <h2 className="text-sm font-semibold text-card-foreground mb-3">
          Navegación rápida
        </h2>
        {sections?.map((section) => (
          <button
            key={section?.id}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={() => skipToSection(section?.id)}
            className="block w-full text-left px-3 py-2 text-sm text-card-foreground hover:bg-muted hover:text-primary rounded-md transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
          >
            {section?.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkipNavigation;