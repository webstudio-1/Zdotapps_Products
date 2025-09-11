import React from "react";
import styles from "./home.module.css";
import { FiCheck } from "react-icons/fi";

// Data-driven approach for easy management
const plans = [
  {
    name: "Starter",
    price: "₹1900",
    period: "/month",
    features: [
      "Access to all agents",
      "Basic analytics",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "₹4900",
    period: "/month",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "AI Assistant",
      "24/7 priority support",
    ],
    featured: true, // This plan will be highlighted
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Enterprise-grade security",
    ],
    featured: false,
  }
];


function Home5() {
  return (
    <section className={styles.pricingSection}>
      <div className="container text-center">
        <h2 className="fw-bold display-4 mb-3">Flexible Plans for Teams of All Sizes</h2>
        <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Choose the perfect plan to unlock your team's potential. No hidden fees, cancel anytime.
        </p>

        <div className="row g-4 justify-content-center align-items-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex">
              <div className={`${styles.pricingCard} ${plan.featured ? styles.featuredCard : ''} p-4 p-lg-5 w-100`}>
                {plan.featured && <div className={styles.popularBadge}>Most Popular</div>}

                <h3 className="fw-semibold text-white-50">{plan.name}</h3>
                <div className="my-4">
                  <span className="display-5 fw-bold text-white">{plan.price}</span>
                  <span className="text-white-50">{plan.period}</span>
                </div>

                <ul className="list-unstyled text-start mb-5">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="d-flex align-items-center mb-3">
                      <FiCheck className={styles.checkIcon} />
                      <span className="text-white-50">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`${styles.pricingCta} mt-auto`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home5;