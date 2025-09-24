import React from 'react';
import {
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Palette,
  Code,
  Rocket,
  CreditCard,
  Zap,
  Wrench,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

// Embedded CSS styles
const styles = `
  :root {
    --font-size: 16px;
    --background: #ffffff;
    --foreground: #333333; /* Dark Grey */
    --card: #ffffff;
    --card-foreground: #333333;
    --popover: #ffffff;
    --popover-foreground: #333333;
    --primary: #333333;
    --primary-foreground: #ffffff;
    --secondary: #FFC94A; /* Yellow */
    --secondary-foreground: #ffffff;
    --muted: #F3F3F3; /* Extra Light Grey */
    --muted-foreground: #1C1A1A; /* Dark Grey (Text) */
    --accent: #F3F3F3; /* Use Extra Light Grey instead of lavender to avoid blue */
    --accent-foreground: #333333;
    --destructive: #d4183d;
    --destructive-foreground: #ffffff;
    --border: #CCCCCC; /* Light Grey */
    --input: transparent;
    --input-background: #F3F3F3; /* Extra Light Grey */
    --switch-background: #CCCCCC; /* Light Grey */
    --font-weight-medium: 500;
    --font-weight-normal: 400;
    --ring: #FFC94A;
    --radius: 0.625rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--foreground);
    background-color: var(--background);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: var(--radius);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 1rem;
  }

  .btn-primary {
    background-color: var(--secondary);
    color: var(--secondary-foreground);
  }

  .btn-primary:hover {
    background-color: #E6B842;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }

  .btn-secondary:hover {
    background-color: var(--primary);
    color: var(--primary-foreground);
    transform: translateY(-2px);
  }

  .btn-lg {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .card {
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
  .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }

  @media (max-width: 768px) {
    .grid-cols-2, .grid-cols-3 {
      grid-template-columns: 1fr;
    }
  }

  .text-center { text-align: center; }
  .text-left { text-align: left; }
  
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-4 { margin-bottom: 1rem; }
  .mb-6 { margin-bottom: 1.5rem; }
  .mb-8 { margin-bottom: 2rem; }
  .mb-12 { margin-bottom: 3rem; }
  .mb-16 { margin-bottom: 4rem; }
  
  .mt-4 { margin-top: 1rem; }
  .mt-8 { margin-top: 2rem; }
  .mt-16 { margin-top: 4rem; }
  
  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
  .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
  .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
  .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
  
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .p-6 { padding: 1.5rem; }
  
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .items-start { align-items: flex-start; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .gap-2 { gap: 0.5rem; }
  .gap-4 { gap: 1rem; }
  .gap-6 { gap: 1.5rem; }
  .gap-8 { gap: 2rem; }
  .gap-12 { gap: 3rem; }
  
  .w-full { width: 100%; }
  .w-12 { width: 3rem; }
  .w-16 { width: 4rem; }
  .h-12 { height: 3rem; }
  .h-16 { height: 4rem; }
  
  .rounded-full { border-radius: 9999px; }
  .rounded-lg { border-radius: var(--radius); }
  .rounded-xl { border-radius: 0.75rem; }
  
  .bg-secondary { background-color: var(--secondary); }
  /* Avoid Bootstrap's bg-primary by using a custom class */
  .bg-brand-primary { background-color: var(--primary); }
  .bg-accent { background-color: var(--accent); }
  .bg-muted { background-color: var(--muted); }
  
  .text-secondary-foreground { color: var(--secondary-foreground); }
  .text-primary-foreground { color: var(--primary-foreground); }
  .text-accent-foreground { color: var(--accent-foreground); }
  .text-muted-foreground { color: var(--muted-foreground); }
  
  .shadow-sm { box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }
  .shadow-md { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
  .shadow-lg { box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); }
  
  h1 { font-size: 3rem; font-weight: 700; line-height: 1.2; margin-bottom: 1rem; }
  h2 { font-size: 2.5rem; font-weight: 600; line-height: 1.3; margin-bottom: 1rem; }
  h3 { font-size: 2rem; font-weight: 600; line-height: 1.4; margin-bottom: 0.75rem; }
  h4 { font-size: 1.5rem; font-weight: 500; line-height: 1.4; margin-bottom: 0.5rem; }
  
  @media (max-width: 768px) {
    h1 { font-size: 2.25rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
    h4 { font-size: 1.25rem; }
  }

  .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .process-step {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .feature-list {
    list-style: none;
    padding: 0;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: var(--foreground);
  }

  .highlight-box {
    background: linear-gradient(135deg, var(--secondary) 0%, #E6B842 100%);
    color: var(--secondary-foreground);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    font-weight: var(--font-weight-medium);
    font-size: 0.875rem;
  }

  .section-bg {
    background-color: var(--muted);
  }

  .max-w-4xl { max-width: 56rem; margin: 0 auto; }
  .max-w-2xl { max-width: 42rem; margin: 0 auto; }
  .mx-auto { margin-left: auto; margin-right: auto; }
`;

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg,#333333 0%, #1C1A1A 100%)', color: '#FFFFFF' }}>
      <div className="container text-center">
        <h1 className="display-5 fw-bold mb-3">Three Studios, <span style={{ color: '#FFC94A' }}>Endless Possibilities</span></h1>
        <p className="lead mx-auto" style={{ maxWidth: '46rem', color: '#F3F3F3' }}>
          Choose from our specialized studios for Web Studio, Apps Studio, and Agent Studio. Get started with ready-to-use templates or build completely custom solutions.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <button className="btn btn-primary text-dark fw-semibold btn-lg px-4" style={{ backgroundColor: '#FFC94A', borderColor: '#FFC94A' }}>
             Explore Templates
          </button>
          <button className="btn btn-secondary btn-lg px-4" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>
            Custom Development
          </button>
        </div>
      </div>
    </section>
  );
};

// Studios Section Component
const StudiosSection = () => {
  const studios = [
    {
      id: 'web',
      title: 'Web Studio',
      description: 'Professional websites and web applications',
      icon: Globe,
      color: 'bg-black',
      services: ['Responsive Websites', 'E-commerce Platforms', 'Web Applications', 'Landing Pages'],
      templates: '50+ Templates',
      startingPrice: '$299'
    },
    {
      id: 'app',
      title: 'App Studio', 
      description: 'Mobile applications for iOS and Android',
      icon: Smartphone,
      color: 'bg-black',
      services: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Store Optimization', 'Mobile UI/UX'],
      templates: '30+ Templates',
      startingPrice: '$599'
    },
    {
      id: 'agent',
      title: 'Agent Studio',
      description: 'AI-powered agents and automation solutions',
      icon: Bot,
      color: 'bg-black',
      services: ['AI Chatbots', 'Process Automation', 'Custom AI Agents', 'Integration Solutions'],
      templates: '20+ Templates', 
      startingPrice: '$399'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Studios</h2>
          <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '42rem', color: '#1C1A1A' }}>
            Three specialized departments, each focused on delivering exceptional results in their domain.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {studios.map((studio) => {
            const IconComponent = studio.icon;
            return (
              <div key={studio.id} className="col">
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className={`icon-circle ${studio.color}`} style={{ width: 52, height: 52 }}>
                        <IconComponent
                          size={24}
                          color={studio.id === 'web' ? 'var(--secondary-foreground)' :
                                 studio.id === 'app' ? 'var(--primary-foreground)' :
                                 'var(--secondary-foreground)'}
                        />
                      </div>
                      <div>
                        <h3 className="h5 mb-1">{studio.title}</h3>
                        <p className="text-muted mb-0">{studio.description}</p>
                      </div>
                    </div>
                    <ul className="feature-list mb-4">
                      {studio.services.map((service, index) => (
                        <li key={index}>
                          <CheckCircle size={16} color="var(--secondary)" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex justify-content-between mb-3" style={{ color: '#1C1A1A' }}>
                      <span>{studio.templates}</span>
                      <span>From {studio.startingPrice}</span>
                    </div>
                    <button className="btn w-100 text-dark fw-semibold" style={{ backgroundColor: '#FFC94A' }}>
                      Explore {studio.title}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Service Types Section Component
const ServiceTypesSection = () => {
  const serviceTypes = [
    {
      id: 'ready-to-use',
      title: 'Ready to Use',
      subtitle: 'Pre-designed Templates',
      description: 'Choose from our collection of professionally designed templates, customize with your content, and launch quickly.',
      icon: Zap,
      color: 'bg-black',
      timeline: '1-3 days',
      features: [
        '50+ Professional Templates',
        'Easy Customization Form', 
        'Quick Setup Process',
        'Immediate Deployment',
        'Basic Support Included',
        'Mobile Responsive'
      ],
      process: [
        'Browse Templates',
        'Select Your Favorite', 
        'Fill Customization Form',
        'Make Payment',
        'Get Your Product'
      ],
      pricing: 'Fixed Price',
      highlight: 'Fast & Affordable'
    },
    {
      id: 'custom-build',
      title: 'Custom Build',
      subtitle: 'Tailored Solutions',
      description: 'Work with our expert team to create a completely custom solution designed specifically for your unique requirements.',
      icon: Wrench,
      color: 'bg-brand-primary', 
      timeline: '2-8 weeks',
      features: [
        '100% Custom Design',
        'Unlimited Revisions',
        'Personal Project Manager',
        'Advanced Functionality Solutions', 
        'Premium Support',
        'Full Source Code'
      ],
      process: [
        'Initial Consultation',
        'Requirements Gathering',
        'Design & Development',
        'Testing & Refinement', 
        'Delivery & Training'
      ],
      pricing: 'Quote-based',
      highlight: 'Fully Customized'
    }
  ];

  return (
    <section className="py-20 px-4 section-bg">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Choose Your Approach</h2>
          <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '42rem', color: '#1C1A1A' }}>
            We offer two distinct service models to match your timeline, budget, and customization needs.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {serviceTypes.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="col">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-4">
                      <div className={`icon-circle ${service.color}`} style={{ width: 64, height: 64 }}>
                        <IconComponent size={32} color={service.id === 'ready-to-use' ? 'var(--secondary-foreground)' : 'var(--primary-foreground)'} />
                      </div>
                      <div className="flex-1">
                        <div className="highlight-box mb-2">{service.highlight}</div>
                        <h3 className="h4 mb-1">{service.title}</h3>
                        <p className="text-muted mb-2">{service.subtitle}</p>
                        <p className="mb-0" style={{ color: 'var(--foreground)' }}>{service.description}</p>
                      </div>
                    </div>
                    <div className="row g-4 mb-4">
                      <div className="col-12 col-md-6">
                        <h4 className="h6 text-uppercase text-muted">Features</h4>
                        <ul className="feature-list mt-2">
                          {service.features.map((feature, index) => (
                            <li key={index}>
                              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--secondary)', borderRadius: '50%' }}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        <h4 className="h6 text-uppercase text-muted">Process</h4>
                        <ul className="feature-list mt-2">
                          {service.process.map((step, index) => (
                            <li key={index}>
                              <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--secondary-foreground)' }}>
                                {index + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-3 rounded mb-3" style={{ backgroundColor: '#F3F3F3', color: '#333333' }}>
                      <div className="d-flex align-items-center gap-2">
                        <Clock size={16} color="#1C1A1A" />
                        <span>Timeline: {service.timeline}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Star size={16} color="#1C1A1A" />
                        <span>{service.pricing}</span>
                      </div>
                </div>
                    <button className="btn w-100 btn-lg text-dark fw-semibold" style={{ backgroundColor: '#FFC94A' }}>
                      <CreditCard size={20} className="me-2" />
                      Get Started with {service.title}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process Flow Component
const ProcessFlow = () => {
  const readyToUseSteps = [
    {
      step: 1,
      title: 'Browse Templates',
      description: 'Explore our collection of professional templates',
      icon: Palette, 
    },
    {
      step: 2, 
      title: 'Customize Content',
      description: 'Fill out our simple form with your details',
      icon: Code
    },
    {
      step: 3,
      title: 'Make Payment', 
      description: 'Secure checkout with instant confirmation',
      icon: ShoppingCart
    },
    {
      step: 4,
      title: 'Launch Product',
      description: 'Get your ready-to-use solution deployed',
      icon: Rocket
    }
  ];

  const customBuildSteps = [
    {
      step: 1,
      title: 'Consultation Call',
      description: 'Discuss your requirements with our experts',
      icon: Palette
    },
    {
      step: 2,
      title: 'Project Planning',
      description: 'Detailed scope, timeline, and proposal',
      icon: Code
    },
    {
      step: 3,
      title: 'Payment & Kickoff',
      description: 'Secure payment and project initiation',
      icon: ShoppingCart
    },
    {
      step: 4,
      title: 'Development & Delivery',
      description: 'Custom development with regular updates',
      icon: Rocket
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">How It Works</h2>
          <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '42rem', color: '#1C1A1A' }}>
            Our streamlined process ensures you get exactly what you need, whether it's a template or custom solution.
          </p>
        </div>
        <div className="row g-5 align-items-start">
          {/* Ready to Use Process */}
          <div className="col-12 col-lg-6">
            <div className="text-start mb-3">
              <span className="badge mb-2">Ready to Use</span>
              <h3 className="h4">Quick Template Setup</h3>
            </div>
            <div>
              {readyToUseSteps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="process-step">
                    <div className="icon-circle w-12 h-12 bg-black">
                      <IconComponent size={24} color="var(--secondary-foreground)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 className="h5 mb-1">Step {item.step}: {item.title}</h4>
                      <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
                );
              })}
            </div>
          </div>
          {/* Custom Build Process */}
          <div className="col-12 col-lg-6">
            <div className="text-start mb-3">
              <span className="badge mb-2">Custom Build</span>
              <h3 className="h4">Tailored Development</h3>
            </div>
            <div>
              {customBuildSteps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="process-step">
                    <div className="icon-circle w-12 h-12 bg-brand-primary">
                      <IconComponent size={24} color="var(--primary-foreground)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 className="h5 mb-1">Step {item.step}: {item.title}</h4>
                      <p className="text-muted mb-0">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <div className="card mx-auto" style={{ padding: '2rem', maxWidth: '720px' }}>
            <h3 className="mb-2">Ready to Get Started?</h3>
            <p className="mb-4" style={{ color: '#1C1A1A' }}>Choose the approach that best fits your needs and timeline. Our team is ready to help you succeed.</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn text-dark fw-semibold btn-lg flex-fill" style={{ backgroundColor: '#FFC94A' }}>Browse Templates</button>
              <button className="btn btn-lg flex-fill" style={{ borderColor: '#333333', color: '#ffffff', backgroundColor: '#333333' }}>Schedule Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function ZappsLanding() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
        <HeroSection />
        <StudiosSection />
        <ServiceTypesSection />
        <ProcessFlow />
    </div>
    </>
  );
}