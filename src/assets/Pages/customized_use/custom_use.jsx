import React, { useMemo, useState } from "react";
import styles from "./custom_use.module.css";
import hero1 from "../../images/HomeBanner.jpg"; // Step 1 - hero visual
import hero2 from "../../images/engage1.webp";   // Step 2 - design/style moodboard
import hero3 from "../../images/ecomerce.png";   // Step 3 - pages/products context
import hero4 from "../../images/custom_build.png"; // Step 4 - custom build/contact

function RadioOption({ id, name, label, value, selected, onChange }) {
  return (
    <label className={styles.optionRow} htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
      />
      <span className={styles.customRadio} />
      <span className={styles.optionLabel}>{label}</span>
    </label>
  );
}

function CheckboxOption({ id, label, checked, onChange }) {
  return (
    <label className={styles.optionRow} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.customCheckbox} />
      <span className={styles.optionLabel}>{label}</span>
    </label>
  );
}

const STEP = {
  TYPE: 0,
  STYLE: 1,
  PAGES: 2,
  CONTACT: 3,
};

export default function CustomUse() {
  const [step, setStep] = useState(STEP.TYPE);

  // Step 1
  const [websiteType, setWebsiteType] = useState("");

  // Step 2
  const [websiteStyle, setWebsiteStyle] = useState("");

  // Step 3
  const [selectedPages, setSelectedPages] = useState({
    home: false,
    products: false,
    login: false,
    wishlist: false,
    about: false,
    contact: false,
    trackOrder: false,
    refund: false,
    reviews: false,
    other: false,
  });

  // Step 4
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const canGoNext = useMemo(() => {
    if (step === STEP.TYPE) return Boolean(websiteType);
    if (step === STEP.STYLE) return Boolean(websiteStyle);
    if (step === STEP.PAGES) return Object.values(selectedPages).some(Boolean);
    if (step === STEP.CONTACT)
      return Boolean(form.name && form.email && form.message);
    return false;
  }, [step, websiteType, websiteStyle, selectedPages, form]);

  function next() {
    if (!canGoNext) return;
    if (step < STEP.CONTACT) setStep((s) => s + 1);
    else handleSubmit();
  }

  function back() {
    if (step > STEP.TYPE) setStep((s) => s - 1);
  }

  function handleSubmit() {
    // Pretend to submit; in a real app we'd call an API here
    setSubmitted(true);
  }

  function togglePage(key, value) {
    setSelectedPages((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section className={`mt-5 ${styles.pageWrap}`}>
      <div className={styles.container}>
        <h1 className={`mt-4 ${styles.title}`}>
          Your idea, <span className={styles.accent}>our expertise</span> build
          your site now.
        </h1>

        <div className={styles.card}>
          <div className={styles.mediaWrap}>
            {/* swap images per step for visual parity with reference */}
            <img
              src={step === 0 ? hero1 : step === 1 ? hero2 : step === 2 ? hero3 : hero4}
              alt="preview"
            />
            {step > STEP.TYPE && (
              <button className={styles.backCircle} onClick={back}>
                ←
              </button>
            )}
          </div>

          <div className={styles.formWrap}>
            {step === STEP.TYPE && (
              <>
                <h2 className={styles.question}>What type of website do you want to build?</h2>
                <div className={styles.options}>
                  <RadioOption
                    id="type-personal"
                    name="type"
                    label="Personal / Portfolio"
                    value="personal"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-business"
                    name="type"
                    label="Business / Corporate"
                    value="business"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-ecom"
                    name="type"
                    label="E-commerce / Online Store"
                    value="ecommerce"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-blog"
                    name="type"
                    label="Blog / Content Website"
                    value="blog"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-other"
                    name="type"
                    label="Other (Please specify)"
                    value="other"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                </div>
              </>
            )}

            {step === STEP.STYLE && (
              <>
                <h2 className={styles.question}>What is your preferred website style</h2>
                <div className={styles.options}>
                  <RadioOption
                    id="style-modern"
                    name="style"
                    label="Modern / Minimalist"
                    value="modern"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-corporate"
                    name="style"
                    label="Professional / Corporate"
                    value="corporate"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-creative"
                    name="style"
                    label="Creative / Artistic"
                    value="creative"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-bold"
                    name="style"
                    label="Bold / Vibrant"
                    value="bold"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-other"
                    name="style"
                    label="Other (Please specify)"
                    value="other"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                </div>
              </>
            )}

            {step === STEP.PAGES && (
              <>
                <h2 className={styles.question}>Pick the pages you'd like on your site</h2>
                <div className={styles.gridTwo}>
                  <CheckboxOption
                    id="pg-home"
                    label="Home Page"
                    checked={selectedPages.home}
                    onChange={(v) => togglePage("home", v)}
                  />
                  <CheckboxOption
                    id="pg-products"
                    label="Products Page"
                    checked={selectedPages.products}
                    onChange={(v) => togglePage("products", v)}
                  />
                  <CheckboxOption
                    id="pg-login"
                    label="Login / Sign Up"
                    checked={selectedPages.login}
                    onChange={(v) => togglePage("login", v)}
                  />
                  <CheckboxOption
                    id="pg-wishlist"
                    label="Wishlist Page"
                    checked={selectedPages.wishlist}
                    onChange={(v) => togglePage("wishlist", v)}
                  />
                  <CheckboxOption
                    id="pg-about"
                    label="About Us"
                    checked={selectedPages.about}
                    onChange={(v) => togglePage("about", v)}
                  />
                  <CheckboxOption
                    id="pg-contact"
                    label="Contact Us"
                    checked={selectedPages.contact}
                    onChange={(v) => togglePage("contact", v)}
                  />
                  <CheckboxOption
                    id="pg-track"
                    label="Track Order Page"
                    checked={selectedPages.trackOrder}
                    onChange={(v) => togglePage("trackOrder", v)}
                  />
                  <CheckboxOption
                    id="pg-refund"
                    label="Refund Policy"
                    checked={selectedPages.refund}
                    onChange={(v) => togglePage("refund", v)}
                  />
                  <CheckboxOption
                    id="pg-reviews"
                    label="Reviews Page"
                    checked={selectedPages.reviews}
                    onChange={(v) => togglePage("reviews", v)}
                  />
                  <CheckboxOption
                    id="pg-other"
                    label="Other (Please specify)"
                    checked={selectedPages.other}
                    onChange={(v) => togglePage("other", v)}
                  />
                </div>
              </>
            )}

            {step === STEP.CONTACT && (
              <>
                <h2 className={styles.question}>Station-S</h2>
                {!submitted ? (
                  <form
                    className={styles.contactForm}
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <input
                      className={styles.input}
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      className={styles.input}
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <textarea
                      className={styles.textarea}
                      placeholder="Message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    <button type="submit" className={styles.primaryBtn}>
                      I'm Interested
                    </button>
                  </form>
                ) : (
                  <div className={styles.successBox}>
                    <p>Thanks! We received your preferences and will reach out soon.</p>
                  </div>
                )}
              </>
            )}

            {/* Footer controls */}
            <div className={styles.controls}>
              <div className={styles.progressDots}>
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className={i <= step ? styles.dotActive : styles.dot} />
                ))}
              </div>
              <div className={styles.buttonRow}>
                <button className={styles.secondaryBtn} disabled={step === STEP.TYPE} onClick={back}>
                  Back
                </button>
                <button
                  className={styles.nextBtn}
                  onClick={next}
                  disabled={!canGoNext}
                >
                  {step === STEP.CONTACT ? "Submit" : "Next →"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.helperText}>
          {step < STEP.CONTACT
            ? step === STEP.PAGES
              ? "Almost There — Let's Finish Your Website!"
              : "A Few More Steps to Launch Your Website"
            : "You're all set!"}
        </p>
      </div>
    </section>
  );
}


