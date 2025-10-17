import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    terms: false
  });
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hola@portfoliopro.dev',
      description: 'Respuesta en 24 horas',
      action: 'mailto:hola@portfoliopro.dev'
    },
    {
      icon: 'Phone',
      title: 'Teléfono',
      value: '+34 612 345 678',
      description: 'Lun-Vie 9:00-18:00',
      action: 'tel:+34612345678'
    },
    {
      icon: 'MessageSquare',
      title: 'WhatsApp',
      value: 'Chat directo',
      description: 'Respuesta inmediata',
      action: 'https://wa.me/34612345678'
    },
    {
      icon: 'Calendar',
      title: 'Reunión',
      value: 'Agendar llamada',
      description: 'Consulta gratuita 30min',
      action: '#'
    }
  ];

  const projectTypes = [
    'Landing Page',
    'Aplicación Web',
    'E-commerce',
    'Dashboard/CRM',
    'API/Backend',
    'Consultoría Técnica',
    'Otro'
  ];

  const budgetRanges = [
    'Menos de €2,000',
    '€2,000 - €5,000',
    '€5,000 - €10,000',
    '€10,000 - €25,000',
    'Más de €25,000',
    'A discutir'
  ];

  const timelines = [
    'Urgente (< 1 mes)',
    'Normal (1-3 meses)',
    'Flexible (3+ meses)',
    'A definir'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.name?.trim()) newErrors.name = 'El nombre es requerido';
      if (!formData?.email?.trim()) newErrors.email = 'El email es requerido';
      else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Email inválido';
    }

    if (step === 2) {
      if (!formData?.projectType) newErrors.projectType = 'Selecciona el tipo de proyecto';
      if (!formData?.message?.trim()) newErrors.message = 'Describe tu proyecto';
    }

    if (step === 3) {
      if (!formData?.terms) newErrors.terms = 'Debes aceptar los términos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const nextStep = () => {
    if (validateStep(formStep)) {
      setFormStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateStep(formStep)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '', email: '', phone: '', company: '', projectType: '',
          budget: '', timeline: '', message: '', newsletter: false, terms: false
        });
        setFormStep(1);
        setSubmitSuccess(false);
      }, 3000);
    }, 2000);
  };

  if (submitSuccess) {
    return (
      <section id="contacto" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-success/10 border border-success/20 rounded-xl p-12">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={40} className="text-success-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-card-foreground mb-4">
              ¡Mensaje Enviado Exitosamente!
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Gracias por contactarme. Te responderé dentro de las próximas 24 horas.
            </p>
            <div className="bg-card p-6 rounded-lg">
              <p className="text-card-foreground mb-4">
                <strong>Próximos pasos:</strong>
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>✓ Revisaré tu solicitud en detalle</p>
                <p>✓ Te enviaré una propuesta personalizada</p>
                <p>✓ Agendaremos una llamada de consulta gratuita</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Iniciemos Tu <span className="text-primary border-b-2 border-primary">Proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuéntame sobre tu proyecto y te ayudo a convertir tu idea en realidad digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Formas de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods?.map((method, index) => (
                  <a
                    key={index}
                    href={method?.action}
                    className="group bg-background p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon name={method?.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {method?.title}
                        </h4>
                        <p className="text-primary font-medium">{method?.value}</p>
                        <p className="text-sm text-muted-foreground">{method?.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Map */}
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Ubicación
              </h3>
              <div className="bg-background rounded-xl p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Madrid, España</h4>
                    <p className="text-muted-foreground">Trabajo remoto y presencial</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Disponible para proyectos en toda España y Europa
                    </p>
                  </div>
                </div>
                <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Madrid, España"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=40.4168,-3.7038&z=12&output=embed"
                    className="border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Solicitar Consulta Gratuita
              </h3>
              <p className="text-muted-foreground">
                Completa el formulario y te contacto en 24 horas
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3]?.map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= formStep 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < formStep ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Info */}
              {formStep === 1 && (
                <div className="space-y-4">
                  <Input
                    label="Nombre completo *"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    error={errors?.name}
                    placeholder="Tu nombre"
                    required
                  />
                  <Input
                    label="Email *"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    error={errors?.email}
                    placeholder="tu@email.com"
                    required
                  />
                  <Input
                    label="Teléfono"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="+34 612 345 678"
                  />
                  <Input
                    label="Empresa"
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleInputChange}
                    placeholder="Nombre de tu empresa"
                  />
                  <div className="flex justify-end">
                    <Button type="button" onClick={nextStep} variant="default">
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {formStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-foreground font-medium mb-3">
                      Tipo de proyecto *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {projectTypes?.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                          className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                            formData?.projectType === type
                              ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    {errors?.projectType && (
                      <p className="text-error text-sm mt-1">{errors?.projectType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-3">
                      Presupuesto estimado
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {budgetRanges?.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, budget }))}
                          className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                            formData?.budget === budget
                              ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-3">
                      Timeline deseado
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timelines?.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, timeline }))}
                          className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                            formData?.timeline === timeline
                              ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2">
                      Describe tu proyecto *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData?.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                      placeholder="Cuéntame sobre tu proyecto, objetivos y cualquier detalle relevante..."
                      required
                    />
                    {errors?.message && (
                      <p className="text-error text-sm mt-1">{errors?.message}</p>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={prevStep} variant="outline">
                      Anterior
                    </Button>
                    <Button type="button" onClick={nextStep} variant="default">
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {formStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg">
                    <h4 className="font-semibold text-card-foreground mb-4">
                      Resumen de tu solicitud:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Nombre:</strong> {formData?.name}</p>
                      <p><strong>Email:</strong> {formData?.email}</p>
                      {formData?.company && <p><strong>Empresa:</strong> {formData?.company}</p>}
                      <p><strong>Proyecto:</strong> {formData?.projectType}</p>
                      {formData?.budget && <p><strong>Presupuesto:</strong> {formData?.budget}</p>}
                      {formData?.timeline && <p><strong>Timeline:</strong> {formData?.timeline}</p>}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Checkbox
                      name="newsletter"
                      checked={formData?.newsletter}
                      onChange={handleInputChange}
                      label="Quiero recibir consejos y actualizaciones sobre desarrollo web"
                    />
                    
                    <Checkbox
                      name="terms"
                      checked={formData?.terms}
                      onChange={handleInputChange}
                      error={errors?.terms}
                      label="Acepto los términos y condiciones y política de privacidad *"
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={prevStep} variant="outline">
                      Anterior
                    </Button>
                    <Button
                      type="submit"
                      variant="default"
                      loading={isSubmitting}
                      className="cta-shadow"
                      iconName="Send"
                      iconPosition="left"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;