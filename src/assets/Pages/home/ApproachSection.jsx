import React from 'react';
import { Code, ShoppingCart, Wrench } from 'lucide-react';

const ApproachSection = () => {
  return (
    <section style={{
      padding: '4rem 0',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '3rem',
          color: '#333'
        }}>Choose Your Approach</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          {/* Build Your Own Card */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f4ff',
              borderRadius: '50%',
              color: '#4a6cf7'
            }}>
              <Code size={28} />
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#333'
            }}>Build Your Own</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Create custom applications tailored to your specific needs with our no-code platform.
            </p>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.625rem',
              fontWeight: '500',
              cursor: 'pointer',
              backgroundColor: '#4a6cf7',
              color: 'white',
              transition: 'all 0.2s ease'
            }}>
              Start Building
            </button>
          </div>

          {/* Pre-built Solutions Card */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f4ff',
              borderRadius: '50%',
              color: '#4a6cf7'
            }}>
              <ShoppingCart size={28} />
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#333'
            }}>Pre-built Solutions</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Choose from our library of ready-to-use applications and customize them as needed.
            </p>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.625rem',
              fontWeight: '500',
              cursor: 'pointer',
              backgroundColor: '#4a6cf7',
              color: 'white',
              transition: 'all 0.2s ease'
            }}>
              Explore Solutions
            </button>
          </div>

          {/* Custom Development Card */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
            }
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f4ff',
              borderRadius: '50%',
              color: '#4a6cf7'
            }}>
              <Wrench size={28} />
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#333'
            }}>Custom Development</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Let our experts build a custom solution specifically for your business requirements.
            </p>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.625rem',
              fontWeight: '500',
              cursor: 'pointer',
              backgroundColor: '#4a6cf7',
              color: 'white',
              transition: 'all 0.2s ease'
            }}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
