import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO',
      company: 'TechStore Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      testimonial: `Trabajar con este desarrollador fue excepcional. Entregó nuestra plataforma e-commerce 
                   antes del plazo acordado y superó todas nuestras expectativas. Las ventas aumentaron un 40% 
                   en los primeros 3 meses. Su atención al detalle y comunicación constante hicieron que todo 
                   el proceso fuera muy fluido.`,
      project: 'Plataforma E-commerce',
      result: '+40% en ventas',
      timeline: '3 meses'
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      position: 'Director de Operaciones',
      company: 'DataCorp Analytics',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      testimonial: `El dashboard que desarrolló transformó completamente nuestra toma de decisiones. 
                   Los datos ahora son claros, actionables y están disponibles en tiempo real. 
                   Nuestro equipo ahorra 15 horas semanales en reportes manuales. Definitivamente 
                   recomendaría sus servicios.`,
      project: 'Dashboard Analytics',
      result: '15h/semana ahorradas',
      timeline: '2 meses'
    },
    {
      id: 3,
      name: 'Ana Martín',
      position: 'Project Manager',
      company: 'InnovateLab',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 5,
      testimonial: `Increíble profesional. Desarrolló nuestra app de gestión de proyectos con una 
                   funcionalidad de colaboración en tiempo real que superó nuestras expectativas. 
                   La productividad de nuestro equipo se disparó un 50%. Su código es limpio, 
                   bien documentado y fácil de mantener.`,
      project: 'App Gestión Proyectos',
      result: '+50% productividad',
      timeline: '4 meses'
    },
    {
      id: 4,
      name: 'Dr. Luis Fernández',
      position: 'Director Médico',
      company: 'HealthCare Plus',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      rating: 5,
      testimonial: `El portal de salud digital que creó revolucionó nuestra práctica médica. 
                   Los pacientes pueden agendar citas, acceder a sus historiales y tener 
                   videoconsultas de manera muy intuitiva. La satisfacción del paciente 
                   aumentó un 80% y optimizamos nuestros procesos internos significativamente.`,
      project: 'Portal Salud Digital',
      result: '+80% satisfacción',
      timeline: '5 meses'
    },
    {
      id: 5,
      name: 'Elena Vázquez',
      position: 'Directora Académica',
      company: 'EduTech Institute',
      avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
      rating: 5,
      testimonial: `La plataforma de aprendizaje online que desarrolló es simplemente excepcional. 
                   Los estudiantes aprenden más rápido y completan los cursos con una tasa del 90%. 
                   Las funcionalidades interactivas y el sistema de evaluaciones automáticas 
                   han transformado nuestra metodología de enseñanza.`,
      project: 'Plataforma E-learning',
      result: '90% tasa completación',
      timeline: '6 meses'
    },
    {
      id: 6,
      name: 'Roberto Silva',
      position: 'Founder & CTO',
      company: 'StartupHub',
      avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
      rating: 5,
      testimonial: `Desarrolló el MVP de nuestra startup que nos ayudó a conseguir €500K en 
                   financiación. Su capacidad para entender nuestras necesidades de negocio 
                   y traducirlas en código funcional es impresionante. Trabajar con él fue 
                   clave para nuestro éxito inicial.`,
      project: 'MVP Startup',
      result: '€500K financiación',
      timeline: '3 meses'
    }
  ];

  const clientLogos = [
    { name: 'TechStore', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'DataCorp', logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=120&h=60&fit=crop' },
    { name: 'InnovateLab', logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop' },
    { name: 'HealthCare Plus', logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=60&fit=crop' },
    { name: 'EduTech', logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=120&h=60&fit=crop' },
    { name: 'StartupHub', logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=120&h=60&fit=crop' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={20}
        className={index < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Mis <span className="text-primary border-b-2 border-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de clientes satisfechos que confiaron en mi experiencia
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative bg-card rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Client Avatar & Info */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="relative inline-block mb-4">
                <Image
                  src={testimonials?.[currentTestimonial]?.avatar}
                  alt={testimonials?.[currentTestimonial]?.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                  <Icon name="Quote" size={16} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-1">
                {testimonials?.[currentTestimonial]?.name}
              </h3>
              <p className="text-primary font-medium mb-1">
                {testimonials?.[currentTestimonial]?.position}
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                {testimonials?.[currentTestimonial]?.company}
              </p>
              <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                {renderStars(testimonials?.[currentTestimonial]?.rating)}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1">
              <blockquote className="text-lg md:text-xl text-card-foreground leading-relaxed mb-6 italic">
                "{testimonials?.[currentTestimonial]?.testimonial}"
              </blockquote>
              
              {/* Project Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground mb-1">Proyecto</div>
                  <div className="font-semibold text-card-foreground">
                    {testimonials?.[currentTestimonial]?.project}
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground mb-1">Resultado</div>
                  <div className="font-semibold text-primary">
                    {testimonials?.[currentTestimonial]?.result}
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                  <div className="font-semibold text-card-foreground">
                    {testimonials?.[currentTestimonial]?.timeline}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary scale-125' :'bg-muted-foreground hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="bg-card rounded-xl p-8">
          <h3 className="text-xl font-bold text-card-foreground text-center mb-8">
            Empresas que Confían en Mi Trabajo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos?.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-background rounded-lg hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0"
              >
                <div className="w-20 h-10 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">
                    {client?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">127+</div>
            <div className="text-muted-foreground">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Soporte Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;