import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Desarrollo React/Next.js',
    'Aplicaciones Full Stack',
    'E-commerce Solutions',
    'Dashboards & Analytics',
    'APIs & Backend',
    'Consultoría Técnica'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/portfoliopro' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/portfoliopro' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/portfoliopro' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/portfoliopro' }
  ];

  const contactInfo = [
    { icon: 'Mail', text: 'hola@portfoliopro.dev', href: 'mailto:hola@portfoliopro.dev' },
    { icon: 'Phone', text: '+34 612 345 678', href: 'tel:+34612345678' },
    { icon: 'MapPin', text: 'Madrid, España', href: '#' },
    { icon: 'Clock', text: 'Lun-Vie 9:00-18:00', href: '#' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl text-foreground">Portfolio Pro</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desarrollador React especializado en crear experiencias digitales excepcionales 
              que impulsan el crecimiento empresarial.
            </p>
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.name}>
                  <button
                    onClick={() => scrollToSection(link?.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link?.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services?.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              {contactInfo?.map((contact, index) => (
                <li key={index}>
                  {contact?.href !== '#' ? (
                    <a
                      href={contact?.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Icon name={contact?.icon} size={16} />
                      <span>{contact?.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Icon name={contact?.icon} size={16} />
                      <span>{contact?.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-12 mt-12">
          <div className="bg-card rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              ¿Listo para tu próximo proyecto?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Obtén una consulta gratuita y descubre cómo puedo ayudarte a llevar tu idea al siguiente nivel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                variant="default"
                onClick={() => scrollToSection('#contacto')}
                className="cta-shadow"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Consulta Gratuita
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://wa.me/34612345678', '_blank')}
                iconName="MessageSquare"
                iconPosition="left"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Portfolio Pro. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                Términos de Servicio
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Volver arriba"
              >
                <Icon name="ArrowUp" size={20} className="text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;