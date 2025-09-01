import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './assets/components/header/header';
import ScrollToTop from './ScrollToTop';
import Home1 from './assets/Pages/home/section1/home';
import Home2 from './assets/Pages/home/section2/home';
import Home3 from './assets/Pages/home/section3/home';
import Home4 from './assets/Pages/home/section4/home';
import Home5 from './assets/Pages/home/section5/home';
import Home6 from './assets/Pages/home/section6/home';
import Features from './assets/Pages/features/features';
import Footer from './assets/components/footer/footer';
import Products from './assets/Pages/products/products';
import Login from './assets/Pages/login/login';
import ZFlow from './assets/Pages/z.flow/z.flow';
import Pricing from './assets/Pages/pricing/pricing';
import Resource from './assets/Pages/resource/resource';

// Component to conditionally render header and footer
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  
  if (isLoginPage) {
    return <>{children}</>;
  }
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router basename="/dev/zdotapps_products">
      <div className="App">
        <LayoutWrapper>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home1 />
                  <Home2 />
                  <Home3 />
                  <Home4 />
                  <Home5 />
                  <Home6 />
                  <Features />
                </>
              }
            />
            <Route path="/features" element={<Features />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/login" element={<Login />} />
            <Route path="/z.flow" element={<ZFlow />} />
          </Routes>
        </LayoutWrapper>
      </div>
    </Router>
  );
}

export default App;

