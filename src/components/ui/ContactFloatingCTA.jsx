import React, { useState, useEffect } from 'react';

import Button from './Button';

const ContactFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight;
      const scrollPercent = (scrollTop / (docHeight - window.innerHeight)) * 100;
      
      // Show after 30% scroll and hide when contact section is visible
      const contactSection = document.getElementById('contacto');
      const contactVisible = contactSection && contactSection?.getBoundingClientRect()?.top < window.innerHeight;
      
      setIsVisible(scrollPercent > 30 && !contactVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const offsetTop = element?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me interesa iniciar un proyecto. ¿Podemos hablar?');
    const phoneNumber = '1234567890'; // Replace with actual phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop - Bottom Right */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-900">
        <div className="flex flex-col space-y-3">
          <Button
            variant="default"
            onClick={scrollToContact}
            className="cta-shadow animate-pulse-slow"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Consulta Gratuita
          </Button>
          <Button
            variant="outline"
            onClick={openWhatsApp}
            className="bg-success hover:bg-success/90 text-success-foreground border-success"
            iconName="MessageSquare"
            iconPosition="left"
          >
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Mobile - Bottom Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-900 bg-card/95 backdrop-blur-sm border-t border-border p-4">
        <div className="flex space-x-3">
          <Button
            variant="default"
            fullWidth
            onClick={scrollToContact}
            className="cta-shadow"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Consulta Gratuita
          </Button>
          <Button
            variant="outline"
            onClick={openWhatsApp}
            className="bg-success hover:bg-success/90 text-success-foreground border-success px-4"
            iconName="MessageSquare"
          >
            <span className="sr-only">WhatsApp</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactFloatingCTA;