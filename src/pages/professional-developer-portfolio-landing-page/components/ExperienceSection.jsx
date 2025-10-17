import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior React Developer',
      period: '2022 - Presente',
      duration: '2 años',
      location: 'Madrid, España',
      type: 'Tiempo Completo',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      description: `Lidero el desarrollo de aplicaciones React complejas para clientes enterprise, 
                   implementando arquitecturas escalables y mejores prácticas de desarrollo.`,
      achievements: [
        'Reduje el tiempo de carga de aplicaciones en un 40% mediante optimización de código',
        'Implementé sistema de testing automatizado que redujo bugs en producción en 60%',
        'Lideré equipo de 4 desarrolladores en proyecto de migración a TypeScript',
        'Desarrollé librería de componentes reutilizables adoptada por toda la empresa'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Docker'],
      projects: [
        'Dashboard de Analytics Empresarial',
        'Plataforma de E-learning',
        'Sistema de Gestión de Inventario'
      ]
    },
    {
      id: 2,
      company: 'StartupHub Digital',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      duration: '2 años',
      location: 'Barcelona, España',
      type: 'Tiempo Completo',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
      description: `Desarrollé aplicaciones web completas desde cero para startups en crecimiento, 
                   trabajando en equipos ágiles y entornos de rápida iteración.`,
      achievements: [
        'Desarrollé MVP que ayudó a startup a conseguir €500K en financiación',
        'Implementé arquitectura microservicios que soportó crecimiento de 10x usuarios',
        'Reduje costos de infraestructura en 30% mediante optimización de AWS',
        'Mentoré a 3 desarrolladores junior en mejores prácticas de React'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'Redis'],
      projects: [
        'Plataforma de Marketplace B2B',
        'App de Gestión de Proyectos',
        'Sistema de Pagos Integrado'
      ]
    },
    {
      id: 3,
      company: 'WebAgency Pro',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      duration: '1 año',
      location: 'Valencia, España',
      type: 'Tiempo Completo',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop',
      description: `Especializado en desarrollo frontend para sitios web corporativos y e-commerce, 
                   enfocándome en performance y experiencia de usuario.`,
      achievements: [
        'Mejoré Core Web Vitals de sitios web en promedio 50%',
        'Implementé sistema de diseño que aceleró desarrollo en 40%',
        'Desarrollé 15+ sitios web responsive con puntuación perfecta en Lighthouse',
        'Establecí workflow de Git que mejoró colaboración del equipo'
      ],
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Figma', 'WordPress'],
      projects: [
        'Sitio Web Corporativo Multinacional',
        'E-commerce de Moda',
        'Portal de Noticias'
      ]
    },
    {
      id: 4,
      company: 'Freelance Developer',
      position: 'Desarrollador Independiente',
      period: '2018 - 2019',
      duration: '1 año',
      location: 'Remoto',
      type: 'Freelance',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop',
      description: `Trabajé como desarrollador freelance creando soluciones web personalizadas 
                   para pequeñas y medianas empresas.`,
      achievements: [
        'Completé 25+ proyectos con 100% satisfacción del cliente',
        'Generé €45K+ en ingresos anuales como freelancer',
        'Desarrollé relaciones a largo plazo con 8 clientes recurrentes',
        'Establecí procesos de trabajo que optimizaron entrega de proyectos'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      projects: [
        'Landing Pages Corporativas',
        'Sitios Web de Restaurantes',
        'Portfolios Profesionales'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: 'Award'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2022',
      icon: 'Certificate'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      icon: 'Cloud'
    },
    {
      name: 'Scrum Master Certified',
      issuer: 'Scrum Alliance',
      date: '2021',
      icon: 'Users'
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Mi <span className="text-primary border-b-2 border-primary">Experiencia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trayectoria profesional construyendo soluciones digitales innovadoras
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences?.map((exp, index) => (
                  <div
                    key={exp?.id}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedExperience?.id === exp?.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setSelectedExperience(selectedExperience?.id === exp?.id ? null : exp)}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-card z-10"></div>

                    {/* Experience Card */}
                    <div className={`ml-16 bg-background rounded-xl p-6 border-2 transition-all duration-300 ${
                      selectedExperience?.id === exp?.id 
                        ? 'border-primary shadow-lg shadow-primary/20' 
                        : 'border-transparent hover:border-primary/50'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                            <Icon name="Building" size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{exp?.position}</h3>
                            <p className="text-primary font-medium">{exp?.company}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center space-x-1">
                                <Icon name="Calendar" size={14} />
                                <span>{exp?.period}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Icon name="MapPin" size={14} />
                                <span>{exp?.location}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Icon name="Clock" size={14} />
                                <span>{exp?.type}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <Icon 
                          name={selectedExperience?.id === exp?.id ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          className="text-muted-foreground" 
                        />
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp?.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp?.technologies?.slice(0, 4)?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp?.technologies?.length > 4 && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                            +{exp?.technologies?.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Expanded Content */}
                      {selectedExperience?.id === exp?.id && (
                        <div className="border-t border-border pt-6 mt-6 space-y-6">
                          {/* Key Achievements */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">
                              Logros Principales
                            </h4>
                            <div className="space-y-2">
                              {exp?.achievements?.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start space-x-3">
                                  <Icon name="TrendingUp" size={16} className="text-primary mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Projects */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">
                              Proyectos Destacados
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {exp?.projects?.map((project, projIndex) => (
                                <div key={projIndex} className="flex items-center space-x-3 bg-card p-3 rounded-lg">
                                  <Icon name="Folder" size={16} className="text-primary flex-shrink-0" />
                                  <span className="text-card-foreground">{project}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* All Technologies */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">
                              Stack Tecnológico Completo
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp?.technologies?.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Skills Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="bg-background rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Award" size={24} className="text-primary" />
                <span>Certificaciones</span>
              </h3>
              <div className="space-y-4">
                {certifications?.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-card rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon name={cert?.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-card-foreground">{cert?.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert?.issuer}</p>
                      <p className="text-xs text-primary font-medium">{cert?.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Stats */}
            <div className="bg-background rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="BarChart3" size={24} className="text-primary" />
                <span>Estadísticas</span>
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">127+</div>
                  <div className="text-sm text-muted-foreground">Proyectos Completados</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Tecnologías Dominadas</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;