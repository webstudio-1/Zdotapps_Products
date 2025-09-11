import React from "react";
import styles from "./home.module.css";
import { FiStar } from "react-icons/fi";

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Expanded testimonial data for the carousel
const testimonials = [
  {
    name: "Mounika Gadiraju",
    role: "VP of Operations at TFT",
    feedback:
      "This platform transformed how our team works. We've reduced manual tasks by 80% and increased productivity dramatically.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jahnavi Gadiraju",
    role: "CTO at TFT",
    feedback:
      "The AI automation is incredible. What used to take hours now happens in minutes. It's like having a digital workforce.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Harika Gadiraju",
    role: "Project Manager at TFT",
    feedback:
      "Finally, all our tools work together seamlessly. The unified dashboard gives us insights we never had before.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
    {
    name: "Alex Johnson",
    role: "Lead Developer at Innovate Inc.",
    feedback:
      "The API integrations are robust and well-documented. We were able to connect our entire tech stack in just a couple of days.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director at Creative Co.",
    feedback:
      "Our campaign workflows are now completely automated, allowing my team to focus on strategy and creativity instead of repetitive tasks.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
];

function Home6() {
  return (
    <section className={styles.testimonialSection}>
      <div className="container text-center">
        <h2 className="fw-bold display-5 mb-3">Trusted by Teams Worldwide</h2>
        <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Join thousands of companies that have transformed their workflows with our platform.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className={styles.testimonialSwiper}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.testimonialCard} p-4 h-100`}>
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={styles.starIcon} />
                  ))}
                </div>
                <p className="text-white-50 text-start mb-4">"{t.feedback}"</p>
                <div className="d-flex align-items-center text-start mt-auto">
                  <img src={t.img} alt={t.name} className={styles.avatar} />
                  <div className="ms-3">
                    <h4 className="fw-bold fs-6 mb-0 text-white">{t.name}</h4>
                    <p className="text-white-50 mb-0 small">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Home6;