import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import { useNavigate } from "react-router-dom";

// Import images
import giderImage from "../../images/gider_black.png";
import zengageImage from "../../images/engage1.webp";
import zflowImage from "../../images/flow.png";
import zhireImage from "../../images/hire.png";
import zmeritImage from "../../images/merit.png";
import zgamesImage from "../../images/games.png";
import zauthImage from "../../images/auth.png";
import kiraazee from "../../images/kirazee_new.png";
import quiImage from "../../images/qui.png";
import signImage from "../../images/sign.png";
import formsImage from "../../images/zforms.png";
// import raiseImage from "../../images/raise.webp"; // not used

// ✅ Added `name` field to each product
const productList = [
{
  // name: "Z.Engage",
  desc: "Engagement app for everyone’s needs",
  img: zengageImage,

// increase size as needed
  btn: "Know More",
  link: "/z.engage",
  category: "Engagement",
}
,
  {
    // name: "Z.Flow",
    desc: "Streamlined workflow and project management solutions",
    img: zflowImage,
    btn: "Know More",
    link: "/z.flow",
    category: "Productivity",
  },
  {
    // name: "Z.Hire",
    desc: "Hiring platform for smarter recruitment",
    img: zhireImage,
    btn: "Know More",
    link: "/z.hire",
    category: "Business Services",
  },
  {
    // name: "Z.Merit",
    desc: "Skill testing and evaluation made simple",
    img: zmeritImage,
    btn: "Know More",
    link: "/z.merit",
    category: "Rewards",
  },
  {
    // name: "Z.Games",
    desc: "Interactive social games for individuals and teams",
    img: zgamesImage,
    btn: "Know More",
    link: "/z.games",
    category: "Entertainment",
  },
  {
    // name: "Z.Auth",
    desc: "Secure authentication for enterprises",
    img: zauthImage,
    btn: "Know More",
    link: "/z.auth",
    category: "Security",
  },
  {
    // name: "Z.IOT",
    desc: "Sustainability for smart cities",
    img: kiraazee,
    btn: "Know More",
    link: "/z.iot",
    category: "Technology",
  },
  {
    // name: "giDER",
    desc: "Project execution app for tangible results",
    img: giderImage,
    btn: "Know More",
    link: "/giDER",
    category: "Creative Tools",
  },
  {
    // name: "Z.Quiz",
    desc: "Quizzes for instant engagement",
    img: quiImage,
    btn: "Know More",
    link: "/z.qui",
    category: "Creative Tools",
  },
  {
    // name: "Z.Sign",
    desc: "Secure digital signatures on business documents",
    img: signImage,
    btn: "Know More",
    link: "/z.sign",
    category: "Creative Tools",
  },
  {
    // name: "Z.Forms",
    desc: "Interactive online forms for businesses",
    img: formsImage,
    btn: "Know More",
    link: "/z.form",
    category: "Creative Tools",
  },
];

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const navigate = useNavigate();

  const categories = ["All", ...new Set(productList.map((p) => p.category))];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let current = productList;

    if (filterCategory !== "All") {
      current = current.filter((p) => p.category === filterCategory);
    }

    if (searchTerm) {
      current = current.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(current);
  }, [searchTerm, filterCategory]);

  const handleClick = (product) => {
    if (!product.link) {
      alert(`${product.name} Coming Soon!`);
      return;
    }

    if (product.link.startsWith("http")) {
      window.location.href = product.link;
    } else {
      navigate(product.link);
    }
  };

  return (
    <section className={styles.productsSection}>
      {/* Hero Section */}
      <section className={styles.homeSection}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                The AI suite that powers your{" "}
                <span className={styles.highlightText}>business</span>
              </h1>
              <div className={styles.underline}></div>

              {/* Search + Filter */}
              <div className={`${styles.controlsContainer} d-flex justify-content-center`}>
                <div className={styles.searchBox}>
                  <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden="true"></i>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <select
                  className={styles.filterSelect}
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="container">
        <div className="row g-4 justify-content-center py-5">
          <center>
            <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
              Explore our <span className={styles.highlightText}>products</span>
            </h1>
          </center>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={product.name}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                {/* ✅ Whole card clickable */}
                <article
                  className={`${styles.card} h-100 d-flex flex-column align-items-center text-center`}
                  onClick={() => handleClick(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleClick(product)}
                >
                  <div className={styles.cardInner}>
                    {product.img && (
                      <div className={styles.imageContainer}>
                        <img
                          src={product.img}
                          className={styles.productImage}
                          alt={product.name}
                     
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://cdn-icons-png.flaticon.com/512/1178/1178475.png";
                          }}
                        />

                        
                      </div>
                    )}
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.description}>{product.desc}</p>

                    <div className={styles.ctaWrapper}>
                      <button
                        className={styles.ctaCircle}
                        onClick={(e) => {
                          e.stopPropagation(); // avoid double navigation
                          handleClick(product);
                        }}
                      >
                        <span
                          style={{ color: "#EFC426" }}
                          className={`${styles.icon} ${styles.arrow}`}
                        ></span>
                      </button>

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleClick(product);
                        }}
                        className={styles.tryNowTextLink}
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className={styles.noResults}>
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
