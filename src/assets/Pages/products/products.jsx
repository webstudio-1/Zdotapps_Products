import React from "react";
import styles from "./products.module.css"; // keep your colors + shadows

const productList = [
  {
    name: "giDER",
    desc: "Digital photo processing & editing",
    btn: "Know More",
  },
  {
    name: "Z.engage",
    desc: "Image editing and compositing",
    btn: "Know More",
  },
  {
    name: "Z.flow",
    desc: "Vector graphics and illustration",
    btn: "Know More",
    link: "/login", // 👈 direct link to login page
  },
  {
    name: "Z.hire",
    desc: "Video production and editing",
    btn: "Know More",
  },
  {
    name: "Z.merit",
    desc: "Cinematic visual effects & motion graphics",
    btn: "Know More",
  },
  {
    name: "Z.games",
    desc: "Digital photo processing & editing",
    btn: "Know More",
  },
  {
    name: "Z.auth",
    desc: "Digital photo processing & editing",
    btn: "Know More",
  },
];

const Products = () => {
  const handleClick = (p) => {
    if (p.link) {
      // Open in new tab
      window.open(p.link, '_blank');
    } else {
      alert(`${p.name} clicked!`); // or keep it simple
    }
  };

  return (
    <section className={`${styles.productsSection}`}>
      <div className="container">
        <h2 className={`${styles.title} mb-5`}>Our Products</h2>
        <div className="row g-4 justify-content-center">
          {productList.map((p, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <article className={`${styles.card} h-100 d-flex flex-column align-items-center text-center`}>
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
