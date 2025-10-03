import React, { useState } from 'react';
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

  /* Hero Section Specific Styles */
  .hero-section {
    background-color: #1C1A1A; /* Dark background from image */
    color: #FFFFFF;
    padding: 10rem 1rem; /* Adjust padding for better visual match */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px; /* Ensure sufficient height */
  }

  .hero-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between; /* Space out title/description and products */
    align-items: flex-start; /* Align content to the top */
    gap: 4rem; /* Gap between left and right sections */
  }

  .hero-text-content {
    flex: 1; /* Take up available space */
    max-width: 600px; /* Limit width of text content */
    text-align: left;
    padding-top: 2rem; /* Align with products visually */
  }

  .hero-title {
    font-size: 3.5rem; /* Larger font size */
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #FFC94A; /* Yellow for the title */
  }

  .hero-subtitle {
    font-size: 1.5rem; /* Subtitle font size */
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #FFFFFF;
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #F3F3F3; /* Light grey for description */
  }

  .hero-button {
    background-color: #FFC94A;
    color: #1C1A1A; /* Dark text for button */
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 0.5rem; /* Slightly rounded corners */
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .hero-button:hover {
    background-color: #E6B842;
  }

  .featured-products {
    flex-shrink: 0; /* Don't allow this section to shrink */
    width: 380px; /* Fixed width for the products section */
    background-color: transparent; /* No background for this section */
    color: #FFFFFF;
    padding: 2rem 0; /* Padding for the product cards section */
  }

  .featured-products-title {
    font-size: 1.90rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    // padding-left: 1.5rem; 
  }

  .product-card {
    background-color: #333333; /* Darker grey for product cards */
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .product-card:hover {
    background-color: #444444;
  }

  .product-card-icon {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #FFC94A; /* Yellow background for icon */
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .product-card-icon svg {
    color: #1C1A1A; /* Dark icon color */
  }

  .product-card-title {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: #F3F3F3; /* Light text for title */
  }

  .product-card-description {
    font-size: 0.875rem;
    color: #CCCCCC; /* Lighter grey for description */
    line-height: 1.4;
  }

  /* Automatic Scrolling Styles */
  .scrollable-products-container {
    max-height: 400px; /* Adjust this value as needed to control visible area */
    overflow: hidden; /* Hide the default scrollbar, as we'll animate content */
    position: relative; /* Needed for positioning context for children */
  }

  .scrolling-content {
    display: flex;
    flex-direction: column;
    animation: scrollProducts linear infinite; 
    animation-duration: 20s; /* Adjust for desired speed */
  }

  @keyframes scrollProducts {
    0% {
      transform: translateY(0%);
    }
    100% {
      /* This value might need fine-tuning if card heights are very dynamic.
         For consistent card heights, -100% works well with duplicated content. */
      transform: translateY(-50%); /* Adjusted to scroll through one full set of duplicated cards */
    }
  }

  /* Pause animation on hover */
  .scrollable-products-container:hover .scrolling-content {
    animation-play-state: paused;
  }

  /* Responsive adjustments for Hero Section */
  @media (max-width: 1024px) {
    .hero-content {
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
    .hero-text-content {
      max-width: 100%;
      text-align: center;
      padding-top: 0;
    }
    .hero-title {
      font-size: 3rem;
    }
    .hero-subtitle {
      font-size: 1.3rem;
    }
    .featured-products {
      width: 100%;
      max-width: 450px; /* Limit width on smaller screens */
      padding: 0;
    }
    .featured-products-title {
      text-align: center;
      padding-left: 0;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 8rem 1rem;
      min-height: auto;
    }
    .hero-title {
      font-size: 2.5rem;
    }
    .hero-subtitle {
      font-size: 1.1rem;
    }
  }

  /* Studios Section Styles */
  .studios-header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }
  
  .studio-tab {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    color: #888888;
  }
  
  .studio-tab.active {
    color: #FFC94A;
    background-color: #333333;
    border: 1px solid #FFC94A;
  }
  
  .studio-card {
    background: linear-gradient(135deg, #1C1A1A 0%, #333333 100%);
    border: 1px solid #FFC94A;
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    box-shadow: 0 4px 20px rgba(255, 201, 74, 0.1);
  }
  
  .studio-content {
    flex: 1;
    max-width: 50%;
  }
  
  .studio-title {
    font-size: 2rem;
    font-weight: 700;
    color: #FFC94A;
    margin-bottom: 1rem;
  }
  
  .studio-description {
    font-size: 1rem;
    color: #F3F3F3;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .studio-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .studio-image {
    flex: 1;
    max-width: 40%;
    border-radius: 0.5rem;
    overflow: hidden;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .studio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .studio-button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .studio-button.primary {
    background-color: #FFC94A;
    color: #1C1A1A;
  }
  
  .studio-button.secondary {
    background-color: transparent;
    color: #FFFFFF;
    border: 1px solid #FFC94A;
  }
  
  .studio-button:hover {
    transform: translateY(-2px);
  }
  
  .studio-button.primary:hover {
    background-color: #E6B842;
  }
  
  .studio-button.secondary:hover {
    background-color: #333333;
  }
`;

// Define a reusable ProductCard component for cleanliness
const ProductCard = ({ title, description, opacity }) => (
  <div className="product-card" style={opacity ? { opacity } : {}}>
    <div className="product-card-icon">
      <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>z.</span>
    </div>
    <div>
      <p className="product-card-title">{title}</p>
      <p className="product-card-description">{description}</p>
    </div>
  </div>
);

// Hero Section Component
const HeroSection = () => {
  // Define product data once
  const products = [
    { title: 'z.Hhre', description: 'A smart hiring platform to simplify recruitment and connect the right candidates faster.' },
    { title: 'Campus.Life', description: 'A smart platform to enhance campus experience and streamline student services.' },
    { title: 'z.engage', description: 'An intelligent engagement tool to foster community and boost user interaction.' },
    { title: 'z.Assist', description: 'Your personal AI assistant for task management and productivity enhancement.' },
    { title: 'z.Analytics', description: 'Advanced analytics platform for deep insights into your business data.' },
    { title: 'z.Connect', description: 'Seamless communication and collaboration suite for modern teams.' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Side: Text Content */}
        <div className="hero-text-content">
          <h1 className="hero-title">Cutting-edge AI Products and Services.</h1>
          <h2 className="hero-subtitle">Built to understand and solve for YOU.</h2>
          <p className="hero-description">
            Whether it's a world-class web platform, a market-shaping app, or an intelligent agent, zdotApps makes it intelligent and insight-driven.
          </p>
          <a href="#" className="hero-button">
            Start Your Project ↗
          </a>
        </div>

        {/* Right Side: Featured Products */}
        <div className="featured-products">
          <h3 className="featured-products-title">Featured <span style={{ color: '#FFC94A' }}>Products</span></h3>
          <div className="scrollable-products-container">
            <div className="scrolling-content">
              {/* Render the products (original set) */}
              {products.map((product, index) => (
                <ProductCard
                  key={`original-${index}`}
                  title={product.title}
                  description={product.description}
                  opacity={product.opacity} // If you need a specific card to be faded
                />
              ))}

              {/* Duplicate the products for seamless scrolling */}
              {products.map((product, index) => (
                <ProductCard
                  key={`duplicate-${index}`} // Use a different key for duplicates
                  title={product.title}
                  description={product.description}
                  opacity={product.opacity}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Studios Section Component
const StudiosSection = () => {
  const [activeStudio, setActiveStudio] = useState('web');

  const studios = {
    web: {
      id: 'web',
      title: 'Web Studio',
      description: 'Create stunning, fully responsive websites with a wide range of ready-to-use templates. Effortlessly customize layouts, colors, and features to perfectly align with your brand’s identity, vision, and business goals.',
      imageUrl: 'https://placehold.co/400x300/FFC94A/1C1A1A?text=Web+Studio'
    },
    app: {
      id: 'app',
      title: 'App Studio',
      description: 'Develop innovative mobile applications for iOS and Android platforms, ensuring a seamless user experience. From concept to launch, we build high-performance apps that drive engagement and meet your specific business needs.',
      imageUrl: 'https://placehold.co/400x300/FFC94A/1C1A1A?text=App+Studio'
    },
    agent: {
      id: 'agent',
      title: 'Agent Studio',
      description: 'Leverage the power of AI with custom-built intelligent agents and automation solutions. Streamline operations, enhance customer service, and gain competitive advantage with our cutting-edge AI technologies.',
      imageUrl: 'https://placehold.co/400x300/FFC94A/1C1A1A?text=Agent+Studio'
    }
  };

  return (
    <section className="py-20 px-4" style={{backgroundColor: '#1C1A1A'}}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{color: '#FFFFFF'}}>Your problem-Our <span style={{color: '#FFC94A'}}>studios</span> for solutions.</h2>
          <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '42rem', color: '#888888' }}>
            Our three studios are designed to build and scale your businesses.
          </p>
        </div>
        
        {/* Studio Tabs */}
        <div className="studios-header">
          <div 
            className={`studio-tab ${activeStudio === 'web' ? 'active' : ''}`}
            onClick={() => setActiveStudio('web')}
          >
            Web Studio
          </div>
          <div 
            className={`studio-tab ${activeStudio === 'app' ? 'active' : ''}`}
            onClick={() => setActiveStudio('app')}
          >
            App Studio
          </div>
          <div 
            className={`studio-tab ${activeStudio === 'agent' ? 'active' : ''}`}
            onClick={() => setActiveStudio('agent')}
          >
            Agent Studio
          </div>
        </div>
        
        {/* Studio Card */}
        <div className="studio-card">
          <div className="studio-content">
            <h3 className="studio-title">{studios[activeStudio].title}</h3>
            <p className="studio-description">{studios[activeStudio].description}</p>
            <div className="studio-buttons">
              <a href="#" className="studio-button primary">
                Ready to use ↗
              </a>
              <a href="#" className="studio-button secondary">
                Customize ↗
              </a>
            </div>
          </div>
          <div className="studio-image">
            {studios[activeStudio].imageUrl && (
              <img
                src={studios[activeStudio].imageUrl}
                alt={`${studios[activeStudio].title} illustration`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Types Section Component
const ServiceTypesSection = () => {
  const serviceTypes = [
    {
      id: "ready-to-use",
      title: "Ready to Use",
      description:
        "Choose from our collection of professionally designed templates, customize with your content, and launch quickly.",
      icon: Zap,
    },
    {
      id: "custom-build",
      title: "Custom Build",
      description:
        "Work with our expert team to create a completely custom solution designed specifically for your unique requirements.",
      icon: Wrench,
    },
    {
      id: "fast-delivery",
      title: "Quick Turnaround",
      description:
        "We understand the importance of speed. Our projects move fast to ensure no hassle for you.",
      icon: Clock,
    },
    {
      id: "scalable",
      title: "Built for Scale",
      description:
        "Our solutions are designed to grow with your business—stable, secure, and scalable.",
      icon: Star,
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#1C1A1A" }}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#FFC94A" }}>
            ZdotApps
          </h2>
          <h3 className="fw-semibold text-light">
            Your partner in speed and scale.
          </h3>
          <p
            className="mx-auto"
            style={{
              fontSize: "1.125rem",
              maxWidth: "42rem",
              color: "#D1D1D1",
            }}
          >
            Our teams understand business, technology, and smart integration to
            succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {serviceTypes.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="col">
                <div
                  className="card h-100 text-center"
                  style={{
                    backgroundColor: "#0d0d0d",
                    border: "none",
                    borderRadius: "16px",
                    padding: "24px",
                  }}
                >
                  <div className="mb-3">
                    <IconComponent size={40} color="#facc15" />
                  </div>
                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "#ffffff", fontSize: "1.1rem" }}
                  >
                    {service.title}
                  </h5>
                  <p
                    style={{
                      color: "#d4d4d4",
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {service.description}
                  </p>
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