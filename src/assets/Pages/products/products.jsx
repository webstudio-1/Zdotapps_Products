import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import { useNavigate } from "react-router-dom";

// Import images correctly
import giderImage from "../../images/gider_black.png";
import zengageImage from "../../images/engage1.webp";
import zflowImage from "../../images/flow.png";
import zhireImage from "../../images/hire.png";
import zmeritImage from "../../images/merit.png";
import zgamesImage from "../../images/games.png";
import zauthImage from "../../images/auth.png";
import ziotImage from "../../images/IOT.png";
import quiImage from "../../images/qui.png";
import signImage from "../../images/sign.png";
import formsImage from "../../images/zforms.png";
import raiseImage from "../../images/raise.webp";
import zquiImage from "../../images/qui.png";

// Recommendation: For a polished UI, consider having unique and descriptive icons/images
// for each product (e.g., Z.engage for image editing might have a camera/brush icon).
const productList = [
  {
   
    desc: "Engagement app for everyone’s needs",
    img: zengageImage, // Placeholder, ideally a unique image for Z.engage
    btn: "Know More",
    link: "/z.engage",
    category: "Engagement"
  },
  {

    desc: "Streamlined workflow and project management solutions",
    img: zflowImage,
    btn: "Know More",
    link: "/login",
    category: "Productivity"
  },
  {
    desc: "Hiring platform for smarter recruitment",
    img: zhireImage,
    btn: "Know More",
    link: "/z.hire",
    category: "Business Services"
  },
  {
    desc: "Skill testing and evaluation made simple",
    img: zmeritImage,
    btn: "Know More",
    link: "/z.merit", // Empty link will trigger "Coming Soon!"
    category: "Rewards"
  },
  {
    desc: "Interactive social games for individuals and teams",
    img: zgamesImage,
    btn: "Know More",
    link: "/z.games",
    category: "Entertainment"
  },
  {
    desc: "Secure authentication for enterprises",
    img: zauthImage,
    btn: "Know More",
    link: "/z.auth",
    category: "Security"
  },
  {
    desc: "Sustainability for smart cities", // Unique description for Z.IOT
    img: ziotImage, // Placeholder, ideally a unique image for Z.IOT
    btn: "Know More",
    link: "/z.iot",
    category: "Technology"
  },
  {
    desc: "Project execution app for tangible results",
    img: giderImage,
    btn: "Know More",
    link: "/giDER", // External link
    category: "Creative Tools"
  },
  {
    desc: "Quizzes for instant engagement",
    img: quiImage,
    btn: "Know More",
    link: "/giDER", // External link
    category: "Creative Tools"
  },{
    desc: "Secure digital signatures on business documents",
    img: signImage,
    btn: "Know More",
    link: "/giDER", // External link
    category: "Creative Tools"
  },
  {
    desc: "Interactive online forms for businesses",
    img: formsImage,
    btn: "Know More",
    link: "/giDER", // External link
    category: "Creative Tools"
  },{
    desc: "Fueling ventures and supporting causes",
    img: raiseImage,
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
        {/* Heading */}
      <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                The AI suite that powers your <span className={styles.highlightText}>business</span>
              </h1>


        {/* Underline */}
        <div className={styles.underline}></div>

        {/* Search Box */}
       {/* Search + Filter Controls */}
<div className={`${styles.controlsContainer} d-flex justify-content-center`}>
  {/* Search Box */}
<div className={`${styles.controlsContainer} d-flex justify-content-center`}>
  {/* Search Box */}
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
</div>


  {/* Filter Dropdown */}
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


      <div className="container">

        {/* Search and Filter Section */}
        <div className="row g-4 align-items-center justify-content-end py-5">
<center>
       <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Explore our <span className={styles.highlightText}>products</span>
              </h1></center>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          {/* <select
            className={`${styles.filterSelect} form-select`}
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select> */}
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
                   <div className={`${styles.ctaWrapper}`}>
  <button
    className={styles.ctaCircle}
    onClick={() => handleClick(product)}
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
      handleClick(product.tryNowLink);
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
              <p className={styles.noResults}>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;