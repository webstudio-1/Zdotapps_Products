import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import { useNavigate } from "react-router-dom";

// Import images correctly
import giderImage from "../../images/gider_black.png";
import zengageImage from "../../images/Zengage.png"; // Using Zflow as placeholder, consider dedicated image
import zflowImage from "../../images/Zflow.png";
import zhireImage from "../../images/Zhire.png";
import zmeritImage from "../../images/Zmerit.png";
import zgamesImage from "../../images/Zgames.png";
import zauthImage from "../../images/Zauth.png";
import ziot from "../../images/Ziot.png";

// Recommendation: For a polished UI, consider having unique and descriptive icons/images
// for each product (e.g., Z.engage for image editing might have a camera/brush icon).
const productList = [
  {
    name: "Z.Engage",
    desc: "Holistic employee wellbeing and community engagement platform",
    img: zengageImage, // Placeholder, ideally a unique image for Z.engage
    btn: "Know More",
    link: "/z.engage",
    category: "Engagement"
  },
  {
    name: "Z.Flow",
    desc: "Streamlined workflow and project management solutions",
    img: zflowImage,
    btn: "Know More",
    link: "/login",
    category: "Productivity"
  },
  {
    name: "Z.Hire",
    desc: "Comprehensive startup studio, professional services, and app development",
    img: zhireImage,
    btn: "Know More",
    link: "/z.hire",
    category: "Business Services"
  },
  {
    name: "Z.Merit",
    desc: "Rewarding loyalty and recognition programs",
    img: zmeritImage,
    btn: "Know More",
    link: "/z.merit", // Empty link will trigger "Coming Soon!"
    category: "Rewards"
  },
  {
    name: "Z.Games",
    desc: "Interactive and engaging game development solutions",
    img: zgamesImage,
    btn: "Know More",
    link: "/z.games",
    category: "Entertainment"
  },
  {
    name: "Z.Auth",
    desc: "Secure authentication & authorization services",
    img: zauthImage,
    btn: "Know More",
    link: "/z.auth",
    category: "Security"
  },
  {
    name: "Z.IOT",
    desc: "Internet of Things solutions for smart environments", // Unique description for Z.IOT
    img: ziot, // Placeholder, ideally a unique image for Z.IOT
    btn: "Know More",
    link: "/z.iot",
    category: "Technology"
  },
  {
    name: "gidER",
    desc: "Advanced digital photo processing & editing software",
    img: giderImage,
    btn: "Know More",
    link: "/giDER", // External link
    category: "Creative Tools"
  }
];

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const navigate = useNavigate();
  // Get unique categories for filter dropdown
  const categories = ["All", ...new Set(productList.map((product) => product.category))];

  useEffect(() => {
    // Adding a slight delay to ensure CSS is loaded and initial render finishes
    // before animation starts, making the staggered reveal more reliable.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let currentProducts = productList;

    // Apply category filter
    if (filterCategory !== "All") {
      currentProducts = currentProducts.filter(
        (product) => product.category === filterCategory
      );
    }

    // Apply search term filter
    if (searchTerm) {
      currentProducts = currentProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(currentProducts);
  }, [searchTerm, filterCategory]);

  const handleClick = (product) => {
    if (!product.link) {
      alert(`${product.name} Coming Soon!`);
      return;
    }

    // Check if the link is external (starts with http)
    if (product.link.startsWith("http")) {
      // For external links, a full redirect is correct
      window.location.href = product.link;
    } else {
      // For internal links, use React Router's navigate function
      // It will automatically handle the basename.
      navigate(product.link);
    }
  };

  return (
    <section className={styles.productsSection}>
      {/* New Home Section for Products */}
      <section className={styles.homeSection}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Innovate. Create. Elevate. Explore Our <span className={styles.highlightText}>Products</span>.
              </h1>
              <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                A Diverse Suite of Solutions for Every Business Need and Creative Endeavor.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                At the heart of our innovation lies a commitment to developing cutting-edge products that empower individuals and organizations. From enhancing employee engagement to streamlining business operations, fostering creativity, and ensuring robust security, our carefully crafted applications are designed to drive efficiency, inspire progress, and deliver exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">

        {/* Search and Filter Section */}
        <div className="row g-4 align-items-center justify-content-end mb-3">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <input
            type="text"
            placeholder="Search products..."
            className={`${styles.searchInput} form-control flex-grow-1`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <select
            className={`${styles.filterSelect} form-select`}
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


        <div className="row g-4 justify-content-center">
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
                <article
                  className={`${styles.card} h-100 d-flex flex-column align-items-center text-center`}
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
                              "https://cdn-icons-png.flaticon.com/512/1178/1178475.png"; // Generic placeholder icon
                          }}
                        />
                      </div>
                    )}
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.description}>{product.desc}</p>
                    <div className="mt-auto">
                      <button
                        className={styles.cta}
                        onClick={() => handleClick(product)}
                      >
                        <span className={styles.btnText}>{product.btn}</span>
                        <span className={styles.btnIcon}>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className={styles.noResults}>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;