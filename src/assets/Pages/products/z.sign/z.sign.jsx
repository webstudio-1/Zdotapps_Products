import { PenTool, Type, Scan, FileText, FolderOpen, Grid3X3, ArrowLeft, Calendar, Download, Share2, Mail, User, Phone } from 'lucide-react';
import signLogo from "../../../images/sign.png";
import signLogo1 from "../../../images/sign_wlogo.png";


export default function App() {
  return (
    <>
      {/* Bootstrap 5 CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossOrigin="anonymous"
      />
      
      <style>{`
        :root {
        --yellow-400: #000000;
          --primary-color: #ffc107;
          --primary-foreground: #ffffff;
        }
        
        .bg-yellow-400 {
          background-color: var(--yellow-400) !important;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .glass-input {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .glass-input:focus {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.2);
          outline: none;
          box-shadow: none;
        }
        
        .phone-container {
          width: 280px;
          height: 560px;
        }
        
        .phone-border {
          border-radius: 3rem;
          background-color: black ;
        }
        
        .phone-screen {
          border-radius: 2.25rem;
          height: 100%;
          border: 4px solid black;
          overflow: hidden;
          position: relative;
        }
        
        .phone-content {
          height: calc(100% - 50px);
          padding: 8px;
          background: rgba(255, 255, 255, 0.95);
          margin: 8px;
          border-radius: 16px;
        }
        
        .bg-primary-custom {
          background-color: var(--primary-color) !important;
        }
        
        .text-primary-foreground {
          color: var(--primary-foreground) !important;
        }
        
        .icon-container {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background-color: #f8f9fa;
          border: none;
          transition: background-color 0.2s;
        }
        
        .icon-container:hover {
          background-color: #e9ecef;
        }
        
        .form-container {
          max-width: 960px;
          padding: 1.25rem;
        }
        
        .custom-input {
          padding: 0.6rem 0.9rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: black;
        }
        
        .custom-input::placeholder {
          color: #6c757d;
        }
        
        .btn-black {
          background-color: #ffc107;
          color: white;
          border-radius: 9999px;
          padding: 0.6rem 1rem;
          font-size: 0.95rem;
        }
        
        .btn-black:hover {
          background-color: #ffc107;
          border-color: #333;
          color: white;
        }

        .description-banner {
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.3;
        }
        
        .text-tiny {
          font-size: 10px;
        }
        
        .w-1 {
          width: 4px;
        }
        
        .h-1 {
          height: 4px;
        }
        
        .w-4 {
          width: 16px;
        }
        
        .h-2 {
          height: 8px;
        }
        
        .w-5 {
          width: 20px;
        }
        
        .h-3 {
          height: 12px;
        }
        
        .document-line {
          height: 8px;
          border-radius: 4px;
        }
        
        .signature-area {
          border: 2px dashed #93c5fd;
          background-color: #dbeafe;
          border-radius: 8px;
          padding: 12px;
        }
        
        .drawing-area {
          border: 2px dashed #d1d5db;
          background-color: #f3f4f6;
          border-radius: 8px;
          flex: 1;
          position: relative;
        }
        
        .badge-custom {
          background-color: var(--primary-color);
          color: var(--primary-foreground);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
        }
      `}</style>
      
      <div className="min-vh-100 bg-yellow-400 d-flex align-items-center justify-content-center">
        <div className="container-fluid mb-5 mt-5 py-5" style={{ maxWidth: '1452px' }}>
          {/* Single centered heading */}
          <div className="text-center">
            <img src={signLogo1} alt="z.sign" style={{ height: '100px' }} />
          </div>
          {/* Centered description above images */}
          <div className="text-center mb-4 description-banner">
            <p className="text-white mb-3 mt-0 fs-3">Complete electronic signature solution with draw, type, and document signing capabilities</p>
          </div>
          
          <div className="d-flex">
            {/* Phones Section */}
            <div className="d-flex flex-column flex-lg-row gap-4 flex-shrink-0 pe-4">
              {/* First Phone - Electronic Signature Maker */}
              <div className="d-flex flex-column align-items-center">
                <div className="mb-3">
                  <span className="badge-custom">Electronic Signature Maker</span>
                </div>
                <div className="phone-container mx-auto">
                  <div className="phone-border h-100">
                    <div 
                      className="phone-screen"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }}
                    >
                      {/* Status Bar */}
                      <div className="p-2 d-flex align-items-center justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                        <div className="d-flex align-items-center gap-1">
                          <div className="bg-dark rounded-circle w-1 h-1"></div>
                          <div className="bg-dark rounded-circle w-1 h-1"></div>
                          <div className="bg-dark rounded-circle w-1 h-1"></div>
                        </div>
                        <small className="fw-medium">9:41</small>
                        <div className="d-flex align-items-center gap-1">
                          <div className="bg-dark w-4 h-2 rounded-1"></div>
                          <div className="border border-dark w-5 h-3 rounded-1"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="phone-content d-flex flex-column">
                        <h5 className="mb-2">Electronic Signature Maker</h5>
                        <p className="text-muted small mb-3">📱 Scan, draw, type signatures and sign documents</p>
                        
                        {/* Top Row Icons */}
                        <div className="row g-2 mb-3">
                          <div className="col-4">
                            <div className="text-center p-2 bg-light rounded">
                              <div className="bg-primary-custom text-primary-foreground rounded p-2 mb-1 d-inline-block">
                                <Type size={16} />
                              </div>
                              <div className="text-tiny">Type Signature</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className="text-center p-2" style={{ backgroundColor: '#fef3c7' }}>
                              <div className="bg-warning text-white rounded p-2 mb-1 d-inline-block">
                                <PenTool size={16} />
                              </div>
                              <div className="text-tiny">Draw Signature</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className="text-center p-2" style={{ backgroundColor: '#dbeafe' }}>
                              <div className="bg-primary text-white rounded p-2 mb-1 d-inline-block">
                                <Scan size={16} />
                              </div>
                              <div className="text-tiny">Scan Signature</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Row Icons */}
                        <div className="row g-2">
                          <div className="col-4">
                            <div className="text-center p-2" style={{ backgroundColor: '#dcfce7' }}>
                              <div className="bg-success text-white rounded p-2 mb-1 d-inline-block">
                                <FileText size={16} />
                              </div>
                              <div className="text-tiny">Sign Document</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className="text-center p-2" style={{ backgroundColor: '#dbeafe' }}>
                              <div className="bg-info text-white rounded p-2 mb-1 d-inline-block">
                                <FolderOpen size={16} />
                              </div>
                              <div className="text-tiny">Gallery</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className="text-center p-2 bg-light rounded">
                              <div className="bg-secondary text-white rounded p-2 mb-1 d-inline-block">
                                <Grid3X3 size={16} />
                              </div>
                              <div className="text-tiny">View All</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone - Draw Signature */}
              <div className="d-flex flex-column align-items-center">
                <div className="mb-3">
                  <span className="badge-custom">Draw Signature</span>
                </div>
                <div className="phone-container mx-auto">
                  <div className="phone-border h-100">
                    <div 
                      className="phone-screen"
                      style={{
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                      }}
                    >
                      {/* Header */}
                      <div className="p-2 d-flex align-items-center justify-content-between border-bottom" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                        <ArrowLeft size={16} />
                        <small className="fw-medium">Draw Signature</small>
                        <div className="bg-primary-custom text-primary-foreground rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                          <span style={{ fontSize: '10px' }}>✓</span>
                        </div>
                      </div>
                      
                      {/* Drawing Area */}
                      <div className="phone-content d-flex flex-column">
                        <div className="drawing-area mb-3">
                          {/* Signature Drawing */}
                          <svg className="position-absolute w-100 h-100" viewBox="0 0 300 200" style={{ top: '20px' }}>
                            <path
                              d="M30 100 Q60 60 100 80 Q140 100 180 70 Q200 60 230 75"
                              stroke="#1e40af"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                            />
                            <path
                              d="M160 90 Q180 110 200 95 Q220 80 240 100 Q250 110 260 95"
                              stroke="#1e40af"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        
                        {/* Tool Bar */}
                        <div className="d-flex justify-content-center gap-2">
                          <button className="icon-container">
                            <PenTool size={16} />
                          </button>
                          <button className="icon-container">
                            <span className="bg-dark rounded-circle" style={{ width: '10px', height: '10px' }}></span>
                          </button>
                          <button className="icon-container">
                            <span>↻</span>
                          </button>
                          <button className="icon-container">
                            <span>🗑</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Phone - Sign on Document */}
              <div className="d-flex flex-column align-items-center">
                <div className="mb-3">
                  <span className="badge-custom">Sign on Document</span>
                </div>
                <div className="phone-container mx-auto">
                  <div className="phone-border h-100">
                    <div 
                      className="phone-screen"
                      style={{
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                      }}
                    >
                      {/* Header */}
                      <div className="p-2 d-flex align-items-center justify-content-between border-bottom" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                        <ArrowLeft size={16} />
                        <small className="fw-medium">Sign Document</small>
                        <Share2 size={16} />
                      </div>
                      
                      {/* Document Area */}
                      <div className="phone-content d-flex flex-column">
                        {/* Document Preview */}
                        <div className="bg-white rounded border-2 flex-fill mb-3 p-3">
                          <div className="text-center mb-3">
                            <h6 className="mb-2">Contract Agreement</h6>
                            <hr className="mb-3" />
                          </div>
                          
                          {/* Document Lines */}
                          <div className="mb-4">
                            <div className="document-line bg-light mb-2 w-100"></div>
                            <div className="document-line bg-light mb-2" style={{ width: '80%' }}></div>
                            <div className="document-line bg-light mb-2 w-100"></div>
                            <div className="document-line bg-light mb-2" style={{ width: '75%' }}></div>
                          </div>
                          
                          {/* Signature Area */}
                          <div className="signature-area">
                            <div className="text-center small text-muted mb-2">Signature Required</div>
                            <svg className="w-100" viewBox="0 0 200 40" style={{ height: '32px' }}>
                              <path
                                d="M20 20 Q40 10 60 15 Q80 20 100 12 Q120 8 140 15"
                                stroke="#1e40af"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="d-flex gap-2">
                          <button className="btn bg-primary-custom text-primary-foreground flex-fill small">
                            Sign & Save
                          </button>
                          <button className="btn btn-light small">
                            <Download size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           {/* Contact Form with Glass Effect - Increased Width */}
            <div className="d-flex flex-column align-items-end flex-fill w-100 mt-3">
              <div className="form-container glass-effect rounded-4 shadow mt-4">
                <div className="text-center mb-0">
                  <img src={signLogo1} alt="z.sign" style={{ width: '151px' }} />
                </div>
                <div className="text-center mb-4">
                  <p className="mb-0 text-white">Start Your Secure digital signatures</p>
                  <p className="mb-0 text-white">on business documents</p>
                </div>

                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="form-control custom-input glass-input"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Company name"
                      className="form-control custom-input glass-input"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="form-control custom-input glass-input"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="e.g. +91 555 123 4567"
                      className="form-control custom-input glass-input"
                    />
                  </div>

                  <div className="d-flex align-items-start gap-3 py-2 mb-4">
                    <input type="checkbox" id="terms" className="form-check-input mt-1" />
                    <label htmlFor="terms" className="text-white small">
                      I agree to the{' '}
                      <a href="#" className="text-warning text-decoration-underline">
                        Terms
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-warning text-decoration-underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>


                  {/* Center aligned button */}
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-black rounded-3 fw-lg text-center"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}