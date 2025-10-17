import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [calculatorInputs, setCalculatorInputs] = useState({
    projectType: '',
    complexity: '',
    timeline: '',
    features: []
  });
  const [estimatedCost, setEstimatedCost] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Consulta Técnica',
      subtitle: 'Análisis y Estrategia',
      price: 'Gratuita',
      duration: '1 hora',
      icon: 'MessageCircle',
      popular: false,
      features: [
        'Análisis de requerimientos técnicos',
        'Recomendaciones de arquitectura',
        'Estimación de tiempos y costos',
        'Roadmap de desarrollo',
        'Identificación de riesgos técnicos'
      ],
      deliverables: [
        'Documento de análisis técnico',
        'Propuesta de solución',
        'Timeline detallado',
        'Presupuesto personalizado'
      ]
    },
    {
      id: 2,
      title: 'Desarrollo Completo',
      subtitle: 'Proyecto Full Stack',
      price: 'Desde €3,500',
      duration: '2-6 meses',
      icon: 'Code2',
      popular: true,
      features: [
        'Desarrollo frontend y backend',
        'Base de datos optimizada',
        'API RESTful o GraphQL',
        'Diseño responsive',
        'Testing automatizado',
        'Despliegue en producción',
        'Documentación completa',
        '3 meses de soporte gratuito'
      ],
      deliverables: [
        'Aplicación web completa',
        'Panel de administración',
        'Documentación técnica',
        'Código fuente',
        'Capacitación del equipo'
      ]
    },
    {
      id: 3,
      title: 'Soporte Continuo',
      subtitle: 'Mantenimiento y Evolución',
      price: 'Desde €800/mes',
      duration: 'Mensual',
      icon: 'Settings',
      popular: false,
      features: [
        'Monitoreo 24/7',
        'Actualizaciones de seguridad',
        'Optimización de rendimiento',
        'Nuevas funcionalidades',
        'Backup automático',
        'Soporte técnico prioritario',
        'Reportes mensuales',
        'SLA garantizado'
      ],
      deliverables: [
        'Aplicación siempre actualizada',
        'Reportes de rendimiento',
        'Nuevas funcionalidades',
        'Soporte técnico 24/7'
      ]
    }
  ];

  const calculatorOptions = {
    projectType: [
      { value: 'landing', label: 'Landing Page', basePrice: 1500 },
      { value: 'webapp', label: 'Aplicación Web', basePrice: 3500 },
      { value: 'ecommerce', label: 'E-commerce', basePrice: 5000 },
      { value: 'dashboard', label: 'Dashboard/CRM', basePrice: 4000 },
      { value: 'api', label: 'API/Backend', basePrice: 2500 }
    ],
    complexity: [
      { value: 'simple', label: 'Simple', multiplier: 1 },
      { value: 'medium', label: 'Medio', multiplier: 1.5 },
      { value: 'complex', label: 'Complejo', multiplier: 2.2 }
    ],
    timeline: [
      { value: 'rush', label: 'Urgente (< 1 mes)', multiplier: 1.5 },
      { value: 'normal', label: 'Normal (1-3 meses)', multiplier: 1 },
      { value: 'flexible', label: 'Flexible (3+ meses)', multiplier: 0.9 }
    ],
    features: [
      { value: 'auth', label: 'Sistema de autenticación', price: 500 },
      { value: 'payments', label: 'Pagos online', price: 800 },
      { value: 'admin', label: 'Panel de administración', price: 1200 },
      { value: 'api', label: 'API personalizada', price: 1000 },
      { value: 'mobile', label: 'Versión móvil', price: 1500 },
      { value: 'analytics', label: 'Analytics avanzado', price: 600 }
    ]
  };

  const calculateEstimate = () => {
    const projectType = calculatorOptions?.projectType?.find(p => p?.value === calculatorInputs?.projectType);
    const complexity = calculatorOptions?.complexity?.find(c => c?.value === calculatorInputs?.complexity);
    const timeline = calculatorOptions?.timeline?.find(t => t?.value === calculatorInputs?.timeline);
    
    if (!projectType || !complexity || !timeline) return;

    let basePrice = projectType?.basePrice;
    basePrice *= complexity?.multiplier;
    basePrice *= timeline?.multiplier;

    const featuresPrice = calculatorInputs?.features?.reduce((total, featureValue) => {
      const feature = calculatorOptions?.features?.find(f => f?.value === featureValue);
      return total + (feature ? feature?.price : 0);
    }, 0);

    const totalPrice = basePrice + featuresPrice;
    setEstimatedCost({
      base: Math.round(basePrice),
      features: featuresPrice,
      total: Math.round(totalPrice),
      range: {
        min: Math.round(totalPrice * 0.8),
        max: Math.round(totalPrice * 1.2)
      }
    });
  };

  const handleFeatureToggle = (featureValue) => {
    setCalculatorInputs(prev => ({
      ...prev,
      features: prev?.features?.includes(featureValue)
        ? prev?.features?.filter(f => f !== featureValue)
        : [...prev?.features, featureValue]
    }));
  };

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mis <span className="text-primary border-b-2 border-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones personalizadas para impulsar tu negocio con tecnología de vanguardia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`relative bg-card rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border-2 ${
                service?.popular 
                  ? 'border-primary shadow-lg shadow-primary/20' 
                  : 'border-transparent hover:border-primary/50'
              }`}
              onClick={() => setSelectedService(selectedService?.id === service?.id ? null : service)}
            >
              {/* Popular Badge */}
              {service?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Icon name={service?.icon} size={32} className="text-primary" />
              </div>

              {/* Service Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {service?.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service?.subtitle}</p>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">{service?.price}</div>
                  <div className="text-sm text-muted-foreground">{service?.duration}</div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-card-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={service?.popular ? "default" : "outline"}
                fullWidth
                className={service?.popular ? "cta-shadow" : ""}
              >
                {service?.id === 1 ? 'Agendar Consulta' : 'Solicitar Cotización'}
              </Button>

              {/* Expand Indicator */}
              <div className="absolute top-4 right-4">
                <Icon 
                  name={selectedService?.id === service?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-muted-foreground" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Service Details */}
        {selectedService && (
          <div className="bg-card rounded-xl p-8 border border-primary/20 shadow-lg mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {selectedService?.title} - Entregables
                </h3>
                <div className="space-y-3">
                  {selectedService?.deliverables?.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Package" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="cta-shadow"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Agendar Reunión
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Project Cost Calculator */}
        <div className="bg-card rounded-xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Calculadora de Proyectos
            </h3>
            <p className="text-muted-foreground">
              Obtén una estimación instantánea para tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-card-foreground font-medium mb-3">
                  Tipo de Proyecto
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {calculatorOptions?.projectType?.map((option) => (
                    <button
                      key={option?.value}
                      onClick={() => setCalculatorInputs(prev => ({ ...prev, projectType: option?.value }))}
                      className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                        calculatorInputs?.projectType === option?.value
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-card-foreground'
                      }`}
                    >
                      {option?.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity */}
              <div>
                <label className="block text-card-foreground font-medium mb-3">
                  Complejidad
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {calculatorOptions?.complexity?.map((option) => (
                    <button
                      key={option?.value}
                      onClick={() => setCalculatorInputs(prev => ({ ...prev, complexity: option?.value }))}
                      className={`p-3 text-center rounded-lg border transition-all duration-200 ${
                        calculatorInputs?.complexity === option?.value
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-card-foreground'
                      }`}
                    >
                      {option?.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-card-foreground font-medium mb-3">
                  Timeline
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {calculatorOptions?.timeline?.map((option) => (
                    <button
                      key={option?.value}
                      onClick={() => setCalculatorInputs(prev => ({ ...prev, timeline: option?.value }))}
                      className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                        calculatorInputs?.timeline === option?.value
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-card-foreground'
                      }`}
                    >
                      {option?.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-card-foreground font-medium mb-3">
                  Funcionalidades Adicionales
                </label>
                <div className="space-y-2">
                  {calculatorOptions?.features?.map((feature) => (
                    <button
                      key={feature?.value}
                      onClick={() => handleFeatureToggle(feature?.value)}
                      className={`w-full p-3 text-left rounded-lg border transition-all duration-200 flex justify-between items-center ${
                        calculatorInputs?.features?.includes(feature?.value)
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-card-foreground'
                      }`}
                    >
                      <span>{feature?.label}</span>
                      <span className="text-sm">+€{feature?.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={calculateEstimate}
                disabled={!calculatorInputs?.projectType || !calculatorInputs?.complexity || !calculatorInputs?.timeline}
                className="cta-shadow"
              >
                Calcular Estimación
              </Button>
            </div>

            {/* Results */}
            <div className="flex items-center justify-center">
              {estimatedCost ? (
                <div className="bg-background rounded-xl p-8 w-full">
                  <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                    Estimación de Proyecto
                  </h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Proyecto base:</span>
                      <span className="font-medium text-foreground">€{estimatedCost?.base?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Funcionalidades:</span>
                      <span className="font-medium text-foreground">€{estimatedCost?.features?.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-foreground">Total estimado:</span>
                        <span className="text-2xl font-bold text-primary">
                          €{estimatedCost?.range?.min?.toLocaleString()} - €{estimatedCost?.range?.max?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                      *Estimación aproximada. El precio final puede variar según requerimientos específicos.
                    </p>
                    <Button
                      variant="default"
                      fullWidth
                      className="cta-shadow"
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Solicitar Cotización Detallada
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Icon name="Calculator" size={64} className="mx-auto mb-4 opacity-50" />
                  <p>Completa los campos para ver tu estimación</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;