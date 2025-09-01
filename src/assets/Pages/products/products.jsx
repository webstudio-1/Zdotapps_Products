import React from "react";
import styles from "./products.module.css"; // keep your colors + shadows

const productList = [
  {
    name: "giDER",
    desc: "Digital photo processing & editing",
    img: "https://zdotapps.com/gidER/images/gider%20white.png",
    btn: "Know More",
    link: "https://zdotapps.com/gidER/login.php",
  },
  {
    name: "Z.engage",
    desc: "Image editing and compositing",
    img: "http://13.234.41.119/devenv/FACT-Ops/assets/img/Carelon.Engage.webp",
    btn: "Know More",
  },
  {
    name: "Z.flow",
    desc: "Vector graphics and illustration",
    img: "http://13.234.41.119/devenv/FACT-Ops/assets/img/LifeCykul.webp",
    btn: "Know More",
    link: "/login",
  },
  {
    name: "Z.hire",
    desc: "Video production and editing",
    img: "http://13.234.41.119/devenv/FACT-Ops/assets/img/Zhire.png",
    btn: "Know More",
  },
  {
    name: "Z.merit",
    desc: "Cinematic visual effects & motion graphics",
    img: "http://13.234.41.119/devenv/FACT-Ops/assets/img/Zmerit.png", // VFX icon
    btn: "Know More",
  },
  {
    name: "Z.games",
    desc: "Game development",
    img: "http://13.234.41.119/devenv/FACT-Ops/assets/img/Zgames.png", // Game development icon
    btn: "Know More",
  },
  {
    name: "Z.auth",
    desc: "Authentication & security",
    img: "http://13.234.41.119/devenv/FACT-Ops/assets/img/Zauth.png", // Security icon
    btn: "Know More",
  },
];

const Products = () => {
  const handleClick = (p) => {
    if (p.link) {
      if (p.link.startsWith("http")) {
        window.open(p.link, "_blank"); // open external links in new tab
      } else {
        window.location.href = p.link; // handle internal routes
      }
    } else {
      alert(`${p.name} Coming Soon!`);
    }
  };

  return (
    <section className={styles.productsSection}>
      <div className="container">
        <h2 className={`${styles.title} mb-5`}>Our Products</h2>
        <div className="row g-4 justify-content-center">
          {productList.map((p, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <article
                className={`${styles.card} h-100 d-flex flex-column align-items-center text-center`}
              >
                {p.img && (
                  <img
                    src={p.img}
                    className={styles.productImage}
                    alt={p.name}
                    onError={(e) => {
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/1178/1178475.png"; // Fallback icon
                    }}
                  />
                )}
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.description}>{p.desc}</p>
                <div className="mt-auto">
                  <button
                    className={styles.cta}
                    onClick={() => handleClick(p)}
                  >
                    {p.btn}
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;