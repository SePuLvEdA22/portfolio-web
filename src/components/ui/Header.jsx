import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'inicio', label: 'Inicio', offset: 80 },
    { id: 'sobre-mi', label: 'Sobre Mí', offset: 80 },
    { id: 'skills', label: 'Skills', offset: 80 },
    { id: 'proyectos', label: 'Proyectos', offset: 80 },
    { id: 'servicios', label: 'Servicios', offset: 80 },
    { id: 'experiencia', label: 'Experiencia', offset: 80 },
    { id: 'contacto', label: 'Contacto', offset: 80 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sectionElements = sections?.map(section => ({
        ...section,
        element: document.getElementById(section?.id)
      }))?.filter(section => section?.element);

      for (let i = sectionElements?.length - 1; i >= 0; i--) {
        const section = sectionElements?.[i];
        const rect = section?.element?.getBoundingClientRect();
        if (rect?.top <= 100) {
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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-nav bg-background/90' : 'bg-transparent'
      }`}>
        <div className="max-w-1200 mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-250"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl">Helger.Code</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`text-sm font-medium transition-colors duration-250 hover:text-primary ${
                  activeSection === section?.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section?.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Button
              variant="default"
              onClick={() => scrollToSection('contacto')}
              className="cta-shadow"
            >
              Iniciar Proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-250"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-1100 lg:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm" onClick={toggleMenu} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-card shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">P</span>
                  </div>
                  <span className="font-bold text-xl text-card-foreground">Portfolio Pro</span>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-card-foreground hover:text-primary transition-colors duration-250"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {sections?.map((section) => (
                    <button
                      key={section?.id}
                      onClick={() => scrollToSection(section?.id)}
                      className={`block w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-all duration-250 ${
                        activeSection === section?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-card-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      {section?.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => scrollToSection('contacto')}
                  className="cta-shadow"
                >
                  Iniciar Proyecto
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;