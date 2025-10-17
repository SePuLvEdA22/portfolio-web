import React from 'react';
import Icon from '../../../components/AppIcon';

const AboutSection = () => {
  const achievements = [
    "2+ años desarrollando aplicaciones React de alto rendimiento",
    "Especialista en JavaScript, Node.js y arquitecturas escalables",
    "Experiencia en equipos ágiles y metodologías DevOps",
    "Certificaciones en AWS y Google Cloud Platform"
  ];

  const skillsData = [
    { skill: 'React/Next.js', level: 95 },
    { skill: 'TypeScript', level: 90 },
    { skill: 'Node.js', level: 85 },
    { skill: 'AWS/Cloud', level: 80 },
    { skill: 'UI/UX Design', level: 75 }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Sobre <span className="text-primary border-b-2 border-primary">Mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollador Full Stack especializado en crear experiencias digitales excepcionales 
            que impulsan el crecimiento empresarial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Professional Summary */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-card-foreground">
                Transformando Ideas en Realidad Digital
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Con más de 5 años de experiencia en desarrollo web, me especializo en crear 
                aplicaciones React modernas, escalables y de alto rendimiento. Mi enfoque se 
                centra en entregar soluciones técnicas que no solo cumplen con los requisitos, 
                sino que superan las expectativas del cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He trabajado con startups emergentes y empresas establecidas, ayudándoles a 
                digitalizar sus procesos, mejorar su presencia online y optimizar sus operaciones 
                a través de tecnología de vanguardia.
              </p>
            </div>

            {/* Achievements List */}
            <div className="space-y-3">
              {achievements?.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                  <span className="text-card-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills Radar Chart */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-card-foreground text-center">
              Nivel de Expertise
            </h3>
            
            {/* Skills Progress Bars */}
            <div className="space-y-6">
              {skillsData?.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-card-foreground font-medium">{item?.skill}</span>
                    <span className="text-primary font-semibold">{item?.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item?.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Tecnologías Dominadas</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;