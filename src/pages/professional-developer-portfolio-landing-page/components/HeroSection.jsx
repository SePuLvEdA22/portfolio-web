import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import profileImage from '../../../assets/profile.jpg';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [yearsExperience] = useState(2);
  const [projectsCompleted] = useState(18);
  const [clientSatisfaction] = useState(98);
  const [animatedYears, setAnimatedYears] = useState(0);
  const [animatedProjects, setAnimatedProjects] = useState(0);
  const [animatedSatisfaction, setAnimatedSatisfaction] = useState(0);

  const fullText = 'Desarrollador React Especializado';

  useEffect(() => {
    if (currentIndex < fullText?.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText?.[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedYears(Math.floor(yearsExperience * progress));
        setAnimatedProjects(Math.floor(projectsCompleted * progress));
        setAnimatedSatisfaction(Math.floor(clientSatisfaction * progress));

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedYears(yearsExperience);
          setAnimatedProjects(projectsCompleted);
          setAnimatedSatisfaction(clientSatisfaction);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timeout = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timeout);
  }, [yearsExperience, projectsCompleted, clientSatisfaction]);

  const scrollToProjects = () => {
    const element = document.getElementById('proyectos');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {typedText}
                <span className="animate-pulse text-primary">|</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Transformo ideas en experiencias digitales excepcionales con React y JavaScript.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={scrollToContact}
                className="cta-shadow"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Solicitar Consulta Gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                iconName="Eye"
                iconPosition="left"
              >
                Ver Mis Proyectos
              </Button>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {animatedYears}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {animatedProjects}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Proyectos Completados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {animatedSatisfaction}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Satisfacción del Cliente
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                <Image
                  src={profileImage}
                  alt="Desarrollador React Profesional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Disponible para proyectos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;