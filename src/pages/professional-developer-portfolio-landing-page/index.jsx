import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';
import SectionNavigationDots from '../../components/ui/SectionNavigationDots';
import ContactFloatingCTA from '../../components/ui/ContactFloatingCTA';
import SkipNavigation from '../../components/ui/SkipNavigation';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const ProfessionalDeveloperPortfolioLandingPage = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Portfolio Pro - Desarrollador React Especializado | Transformo Ideas en Experiencias Digitales';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 
        'Desarrollador React especializado con 2+ años de experiencia. Creo aplicaciones web excepcionales con React, TypeScript y Next.js. Consulta gratuita disponible.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Portfolio Pro",
      "jobTitle": "Desarrollador React Especializado",
      "description": "Desarrollador Full Stack especializado en React, TypeScript y Next.js",
      "url": window.location?.href,
      "sameAs": [
        "https://github.com/portfoliopro",
        "https://linkedin.com/in/portfoliopro",
        "https://twitter.com/portfoliopro"
      ],
      "knowsAbout": ["React", "TypeScript", "Next.js", "Node.js", "AWS", "JavaScript"],
      "offers": {
        "@type": "Service",
        "name": "Desarrollo de Aplicaciones Web",
        "description": "Desarrollo de aplicaciones React, consultoría técnica y soluciones full stack"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head?.appendChild(script);

    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.head?.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Accessibility Navigation */}
      <SkipNavigation />
      
      {/* Header Navigation */}
      <Header />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Navigation Aids */}
      <SectionNavigationDots />
      <ContactFloatingCTA />
    </div>
  );
};

export default ProfessionalDeveloperPortfolioLandingPage;