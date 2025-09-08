import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./assets/components/header/header";
import ScrollToTop from "./ScrollToTop";
import Home1 from "./assets/Pages/home/section1/home";
import Home2 from "./assets/Pages/home/section2/home";
import Home3 from "./assets/Pages/home/section3/home";
import Home4 from "./assets/Pages/home/section4/home";
import Home5 from "./assets/Pages/home/section5/home";
import Home6 from "./assets/Pages/home/section6/home";
import Features from "./assets/Pages/features/features";
import Footer from "./assets/components/footer/footer";
import Products from "./assets/Pages/products/products";
import Login from "./assets/Pages/login/login";
import ZFlow from "./assets/Pages/z.flow/z.flow";
import Zhire from "./assets/Pages/products/z.hire/hire";
import Pricing from "./assets/Pages/pricing/pricing";
import Resource from "./assets/Pages/resource/resource";
import Zengage from "./assets/Pages/products/z.engage/z.engage";
import Ziot from "./assets/Pages/products/z.iot/z.iot";
import Zmerit from "./assets/Pages/products/z.merit/z.merit";
import Zgames from "./assets/Pages/products/z.games/z.games";
import Zauth from "./assets/Pages/products/z.auth/z.auth";

// ✅ Wrapper to show header/footer everywhere except login page
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname.endsWith("/login");

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
    <Router basename="/dev/zdotapps_products/">
      <div className="App">
        <LayoutWrapper>
          <ScrollToTop />
          <Routes>
            {/* Home */}
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
                </>
              }
            />
            
            <Route path="features" element={<Features />} />
            <Route path="products" element={<Products />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="resource" element={<Resource />} />
            <Route path="login" element={<Login />} />
            <Route path="z.engage" element={<Zengage />} />
            <Route path="z.merit" element={<Zmerit />} />
            <Route path="z.iot" element={<Ziot />} />
            <Route path="z.flow" element={<ZFlow />} />
            <Route path="z.games" element={<Zgames />} />
            <Route path="z.auth" element={<Zauth />} />
            <Route path="z.hire" element={<Zhire />} />
          </Routes>
        </LayoutWrapper>
      </div>
    </Router>
  );
}

export default App;
