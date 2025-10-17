import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: 1,
      name: 'React.js',
      icon: 'Code2',
      proficiency: 95,
      description: 'Desarrollo de aplicaciones SPA complejas con hooks, context y optimización de rendimiento.',
      projects: ['E-commerce Platform', 'Dashboard Analytics', 'Social Media App']
    },
    {
      id: 2,
      name: 'TypeScript',
      icon: 'FileCode',
      proficiency: 90,
      description: 'Tipado estático para aplicaciones escalables y mantenibles con interfaces robustas.',
      projects: ['Enterprise CRM', 'Banking System', 'Healthcare Portal']
    },
    {
      id: 3,
      name: 'Next.js',
      icon: 'Zap',
      proficiency: 88,
      description: 'SSR, SSG y optimización SEO para aplicaciones React de alto rendimiento.',
      projects: ['Corporate Website', 'Blog Platform', 'Portfolio Sites']
    },
    {
      id: 4,
      name: 'Node.js',
      icon: 'Server',
      proficiency: 85,
      description: 'APIs RESTful y GraphQL, microservicios y arquitecturas serverless.',
      projects: ['API Gateway', 'Microservices', 'Real-time Chat']
    },
    {
      id: 5,
      name: 'AWS Cloud',
      icon: 'Cloud',
      proficiency: 80,
      description: 'Despliegue, escalado y monitoreo de aplicaciones en infraestructura cloud.',
      projects: ['Auto-scaling Apps', 'Serverless Functions', 'CI/CD Pipelines']
    },
    {
      id: 6,
      name: 'MongoDB',
      icon: 'Database',
      proficiency: 82,
      description: 'Diseño de esquemas NoSQL, agregaciones complejas y optimización de consultas.',
      projects: ['Content Management', 'Analytics Platform', 'User Management']
    },
    {
      id: 7,
      name: 'Docker',
      icon: 'Container',
      proficiency: 78,
      description: 'Containerización de aplicaciones y orquestación con Kubernetes.',
      projects: ['Microservices Deploy', 'Development Environment', 'Production Scaling']
    },
    {
      id: 8,
      name: 'GraphQL',
      icon: 'Network',
      proficiency: 75,
      description: 'APIs eficientes con Apollo Server/Client y optimización de queries.',
      projects: ['Data Federation', 'Mobile Backend', 'Real-time Updates']
    },
    {
      id: 9,
      name: 'Redux/Zustand',
      icon: 'Settings',
      proficiency: 88,
      description: 'Gestión de estado global compleja con patrones escalables y middleware.',
      projects: ['Complex Dashboards', 'Multi-tenant Apps', 'State Synchronization']
    },
    {
      id: 10,
      name: 'Tailwind CSS',
      icon: 'Palette',
      proficiency: 92,
      description: 'Diseño responsive y sistemas de diseño consistentes con utility-first CSS.',
      projects: ['Design Systems', 'Responsive Layouts', 'Component Libraries']
    },
    {
      id: 11,
      name: 'Jest/Testing',
      icon: 'CheckCircle',
      proficiency: 80,
      description: 'Testing unitario, integración y E2E con Jest, RTL y Cypress.',
      projects: ['Test Automation', 'Quality Assurance', 'CI/CD Testing']
    },
    {
      id: 12,
      name: 'Git/GitHub',
      icon: 'GitBranch',
      proficiency: 90,
      description: 'Control de versiones avanzado, workflows y colaboración en equipo.',
      projects: ['Team Collaboration', 'Code Reviews', 'Release Management']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mis <span className="text-primary border-b-2 border-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones digitales excepcionales
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {skills?.map((skill) => (
            <div
              key={skill?.id}
              className={`group relative bg-card rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${
                selectedSkill?.id === skill?.id 
                  ? 'border-primary shadow-lg shadow-primary/20' 
                  : 'border-transparent hover:border-primary/50'
              }`}
              onClick={() => setSelectedSkill(selectedSkill?.id === skill?.id ? null : skill)}
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon 
                  name={skill?.icon} 
                  size={32} 
                  className="text-primary group-hover:scale-110 transition-transform duration-300" 
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {skill?.name}
              </h3>

              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Proficiencia</span>
                  <span className="text-sm font-medium text-primary">{skill?.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill?.proficiency}%` }}
                  ></div>
                </div>
              </div>

              {/* Expand Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon 
                  name={selectedSkill?.id === skill?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-primary" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Skill Details */}
        {selectedSkill && (
          <div className="bg-card rounded-xl p-8 border border-primary/20 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Icon name={selectedSkill?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">{selectedSkill?.name}</h3>
                    <div className="text-primary font-medium">{selectedSkill?.proficiency}% Proficiencia</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedSkill?.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-4">
                  Proyectos Aplicados
                </h4>
                <div className="space-y-3">
                  {selectedSkill?.projects?.map((project, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;