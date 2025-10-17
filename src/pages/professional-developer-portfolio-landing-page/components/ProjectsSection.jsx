import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'react', label: 'React/Next.js' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'dashboard', label: 'Dashboards' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Plataforma E-commerce Avanzada',
      category: 'ecommerce',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel de administración.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/developer/ecommerce-platform',
      timeline: '3 meses',
      performance: '+40% conversión',
      impact: '€250K+ en ventas',
      testimonial: `"Increíble trabajo. La plataforma superó nuestras expectativas y las ventas aumentaron significativamente." - María González, CEO TechStore`,
      features: [
        'Carrito de compras en tiempo real',
        'Integración con múltiples pasarelas de pago',
        'Panel de administración completo',
        'Sistema de inventario automatizado',
        'Análisis de ventas y reportes'
      ]
    },
    {
      id: 2,
      title: 'Dashboard Analytics Empresarial',
      category: 'dashboard',
      description: 'Dashboard interactivo para análisis de datos empresariales con visualizaciones en tiempo real y reportes personalizados.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://analytics-dashboard-demo.com',
      githubUrl: 'https://github.com/developer/analytics-dashboard',
      timeline: '2 meses',
      performance: '+60% eficiencia',
      impact: '15h/semana ahorradas',
      testimonial: `"El dashboard transformó completamente nuestra toma de decisiones. Datos claros y actionables." - Carlos Ruiz, Director de Operaciones`,
      features: [
        'Visualizaciones interactivas con D3.js',
        'Reportes personalizables',
        'Alertas automáticas',
        'Exportación de datos',
        'Integración con múltiples fuentes'
      ]
    },
    {
      id: 3,
      title: 'App de Gestión de Proyectos',
      category: 'fullstack',
      description: 'Aplicación completa para gestión de proyectos con colaboración en tiempo real, seguimiento de tareas y reportes.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: 'https://project-manager-demo.com',
      githubUrl: 'https://github.com/developer/project-manager',
      timeline: '4 meses',
      performance: '+50% productividad',
      impact: '200+ usuarios activos',
      testimonial: `"Nuestra productividad se disparó. La colaboración en tiempo real es excepcional." - Ana Martín, Project Manager`,
      features: [
        'Colaboración en tiempo real',
        'Gestión de tareas con Kanban',
        'Chat integrado',
        'Seguimiento de tiempo',
        'Reportes de productividad'
      ]
    },
    {
      id: 4,
      title: 'Portal de Salud Digital',
      category: 'react',
      description: 'Portal web para gestión de citas médicas, historiales clínicos y telemedicina con alta seguridad.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React', 'Next.js', 'AWS', 'HIPAA Compliance', 'WebRTC'],
      liveUrl: 'https://health-portal-demo.com',
      githubUrl: 'https://github.com/developer/health-portal',
      timeline: '5 meses',
      performance: '+80% satisfacción',
      impact: '5000+ pacientes',
      testimonial: `"Revolucionó nuestra práctica médica. Los pacientes están encantados con la facilidad de uso." - Dr. Luis Fernández`,
      features: [
        'Gestión de citas online',
        'Videoconsultas integradas',
        'Historiales médicos seguros',
        'Recordatorios automáticos',
        'Cumplimiento HIPAA'
      ]
    },
    {
      id: 5,
      title: 'Plataforma de Aprendizaje Online',
      category: 'fullstack',
      description: 'LMS completo con cursos interactivos, evaluaciones automáticas y seguimiento de progreso estudiantil.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      liveUrl: 'https://learning-platform-demo.com',
      githubUrl: 'https://github.com/developer/learning-platform',
      timeline: '6 meses',
      performance: '+90% completación',
      impact: '10K+ estudiantes',
      testimonial: `"La plataforma más intuitiva que hemos usado. Los estudiantes aprenden más rápido." - Prof. Elena Vázquez`,
      features: [
        'Cursos multimedia interactivos',
        'Sistema de evaluaciones',
        'Foros de discusión',
        'Certificados automáticos',
        'Analytics de aprendizaje'
      ]
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects?.filter(project => project?.category === selectedFilter);

  return (
    <section id="proyectos" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Mis <span className="text-primary border-b-2 border-primary">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos de éxito que demuestran mi capacidad para entregar soluciones digitales excepcionales
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setSelectedFilter(filter?.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {filter?.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects?.map((project) => (
            <div
              key={project?.id}
              className="group bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        iconName="ExternalLink"
                        iconPosition="left"
                      >
                        Ver Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        iconName="Github"
                        iconPosition="left"
                      >
                        Código
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project?.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project?.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.technologies?.slice(0, 3)?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project?.technologies?.length > 3 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      +{project?.technologies?.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Metrics */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Duración</div>
                    <div className="font-medium text-foreground">{project?.timeline}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Impacto</div>
                    <div className="font-medium text-primary">{project?.performance}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-card-foreground">
                  {selectedProject?.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="X" size={24} className="text-muted-foreground" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject?.image}
                    alt={selectedProject?.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground mb-3">
                        Descripción del Proyecto
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject?.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground mb-3">
                        Características Principales
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject?.features?.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground mb-3">
                        Tecnologías Utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject?.technologies?.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {selectedProject?.timeline}
                        </div>
                        <div className="text-sm text-muted-foreground">Duración</div>
                      </div>
                      <div className="bg-background p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {selectedProject?.performance}
                        </div>
                        <div className="text-sm text-muted-foreground">Mejora</div>
                      </div>
                    </div>

                    <div className="bg-background p-4 rounded-lg">
                      <div className="text-lg font-bold text-primary mb-1">
                        {selectedProject?.impact}
                      </div>
                      <div className="text-sm text-muted-foreground">Impacto Empresarial</div>
                    </div>
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-card-foreground italic mb-3 leading-relaxed">
                        {selectedProject?.testimonial}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="default"
                    className="flex-1"
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    Ver Proyecto en Vivo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    iconName="Github"
                    iconPosition="left"
                  >
                    Ver Código Fuente
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;