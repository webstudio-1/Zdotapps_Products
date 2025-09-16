import React, { useState, useEffect, useRef } from 'react';
import styles from './z.games.module.css';
import gamesImg from './images/Tambola.jpg'; // Replace with actual games image
import spellbeeImg from './images/spell_bee.jpg'; // Replace with actual games image
import sudokoImg from './images/sudoko.png'; // Replace with actual games image
import crosswordImg from './images/crossword.jpg'; // Replace with actual games image
import sortonymImg from './images/sortonym.png'; // Replace with actual games image
import games from '../../../images/games.png';

const engageData = [
  // {
  //   id: 1,
    
  //   subtitle: 'Z.games – Interactive fun and learning through games at Station-S.',
  //   description:
  //    'Z.games is an interactive Station-S platform that blends fun and learning through classic games, quizzes, and puzzles, promoting engagement and mental agility.',
  //   features: [
  //     'Tambola – A fun community number game',
  //     'Crossword – Boost vocabulary & problem solving',
  //     'Treasure Hunt – Team-based exploration challenges',
 
  //     'MySQL Quiz – Test and improve your database skills'
  //   ],
  //   image: gamesImg,
  //   ctaText: 'Play Now',
  //   downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  // },
  {
    id: 1,
   title: 'Yelling Bee',
    subtitle: 'Z.Yelling Bee – Fun yelling contests that boost vocabulary and learning.',
    description:
      'Z.Yelling Bee is a fun, interactive Station-S platform that improves vocabulary, yelling skills, and quick thinking through practice rounds and competitive spelling challenges.',
    features: [
      
      'Rapid Fire – Quick yelling rounds to test speed',
 
      'Team Battles – Compete in groups for added fun',
      'Leaderboards – Track progress and celebrate winners'
    ],
    image: spellbeeImg, // Replace with your SpellBee image
    ctaText: 'Start Yelling',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  },
  {
    id: 2,
    title: 'Sudoku',
    subtitle: 'Z.Sudoku – Classic number puzzle to boost logic and focus.',
    description:
      'Z.Sudoku offers classic Sudoku puzzles in varying levels to sharpen focus, logic, and problem-solving while keeping the mind entertained.',
    features: [
     
      'Daily Challenges – Keep your mind active every day',
      'Hints & Notes – Learn strategies while solving',
      'Timer Mode – Test speed and accuracy under pressure',
      'Progress Tracker – Monitor improvement and achievements' 
    ],
    image: sudokoImg, // Replace with your Sudoku image
    ctaText: 'Play Sudoku',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  },
  {
    id: 3,
    title: 'Tambola',
    subtitle: 'Z.Crossword – Classic word puzzles to boost vocabulary and learning.',
    description:
      'Z.Crossword offers engaging crossword puzzles that challenge your vocabulary, general knowledge, and problem-solving skills in a fun, interactive way.',
    features: [
      'Daily Puzzles – Fresh challenges every day',
      'Hint System – Get help when stuck',
      'Difficulty Levels – From beginner to expert',
      'Progress Tracking – Monitor your improvement'
    ],
    image: gamesImg, // Replace with your Crossword image
    ctaText: 'Play Crossword',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  },
  // {
  //   id: 4,
  //   title: 'Z.Treasure Hunt',
  //   subtitle: 'Z.Treasure Hunt – Exciting team-based exploration challenges.',
  //   description:
  //     'Z.Treasure Hunt transforms your environment into an adventure playground with team-based challenges, clues, and exciting discoveries.',
  //   features: [
  //     'Team Challenges – Collaborate with friends',
  //     'Interactive Clues – Solve puzzles to progress',
  //     'Real-time Tracking – Monitor team progress',
  //     'Rewards System – Earn points and achievements'
  //   ],
  //   image: treasureImg, 
  //   ctaText: 'Start Hunt',
  //   downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share'
  // },
   {
    id: 5,
    title: 'Sortonyms',
    subtitle: 'Z.Treasure Hunt – Exciting team-based exploration challenges.',
    description:
      'Z.Treasure Hunt transforms your environment into an adventure playground with team-based challenges, clues, and exciting discoveries.',
    features: [
      'Team Challenges – Collaborate with friends',
      'Interactive Clues – Solve puzzles to progress',
      'Real-time Tracking – Monitor team progress',
      'Rewards System – Earn points and achievements'
    ],
    image: sortonymImg, // Replace with your Treasure Hunt image
    ctaText: 'Start Hunt',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  }
];

const Zgames = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupGame, setPopupGame] = useState(null);
  const carouselRef = useRef(null);
  
  // Form state
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const chipOptions = [
    'Sudoku',
    'Yelling Bee',
    'Sortonyms',
    'Tambola',
   
  ];

  const handleImageError = (id) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true
    }));
  };

  const handleShowPopup = (game) => {
    setPopupGame(game);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupGame(null);
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create form submission data
    const submissionData = {
      ...formData,
      interests: selectedTags,
      timestamp: new Date().toISOString()
    };
    
    // Log the submission data (in a real app, you'd send this to a server)
    console.log('Form submitted:', submissionData);
    
    // Show success message (you could replace this with a toast notification)
    alert('Thank you for your interest! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setSelectedTags([]);
  };

  const getFallbackImage = (title, color) => {
    return `https://via.placeholder.com/300x400/${color}/FFFFFF?text=${encodeURIComponent(
      title
    )}`;
  };

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((newIndex + engageData.length) % engageData.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const getCardClass = (index) => {
    const offset = (index - currentIndex + engageData.length) % engageData.length;
    
    if (offset === 0) return 'center';
    if (offset === 1) return 'right-1';
    if (offset === 2) return 'right-2';
    if (offset === engageData.length - 1) return 'left-1';
    if (offset === engageData.length - 2) return 'left-2';
    return 'hidden';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      updateCarousel(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateCarousel(currentIndex + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const currentGame = engageData[currentIndex];

  return (
    <div className={styles.engagePage}>
      {/* Z.games Home Section */}
      <section className={styles.homeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Play. Learn. Compete. <span className={styles.highlightText}>Z.games</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Games Carousel and Form Section */}
      <section className={`${styles.carouselFormSection} py-5`}>
        <div className="container-fluid">
          <div className="row">
            {/* Carousel Column */}
            <div className="col-lg-9 col-md-12 mb-4 carouselColumn">
              <div className={styles.carouselContainer}>
                <button 
                  className={`${styles.navArrow} ${styles.left}`}
                  onClick={() => updateCarousel(currentIndex - 1)}
                >
                  ‹
                </button>
                
                <div className={styles.carouselTrack} ref={carouselRef}>
                  {engageData.map((item, index) => {
                    const cardClass = getCardClass(index);
                    const color = index === 0 ? '4F46E5' : 
                                 index === 1 ? '10B981' : 
                                 index === 2 ? 'F59E0B' : 
                                 index === 3 ? 'EF4444' : '8B5CF6';
                    
                    return (
                      <div 
                        key={item.id} 
                        className={`${styles.card} ${styles[cardClass]}`}
                        onClick={() => handleShowPopup(item)}
                      >
                        <img
                          src={
                            imageErrors[item.id]
                              ? getFallbackImage(item.title, color)
                              : item.image
                          }
                          alt={item.title}
                          className={styles.cardImage}
                          onError={() => handleImageError(item.id)}
                        />
                        <div className={styles.cardContent}>
                          <h3 className={styles.cardTitle}>{item.title}</h3>
                          <p className={styles.cardSubtitle}>{item.subtitle}</p>
                          <a
                            href={item.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardButton}
                          >
                            {item.ctaText}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <button 
                  className={`${styles.navArrow} ${styles.right}`}
                  onClick={() => updateCarousel(currentIndex + 1)}
                >
                  ›
                </button>
              </div>
              {/* Dots Navigation */}
          
            </div>
            
            {/* Form Column */}
            <div className="col-lg-3 col-md-12 formColumn">
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                 <img src={games} alt="Z.Engage Logo" className={styles.logo} />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                />
                
               <p className="text-sm text-gray-200 font-medium mt-2 text-right">
                Select your interests:
              </p>
                
                <div className={styles.chipContainer}>
                  {chipOptions.map((option) => (
                    <span
                      key={option}
                      className={`${styles.chip} ${
                        selectedTags.includes(option) ? styles.chipActive : ''
                      }`}
                      onClick={() => toggleTag(option)}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              <button
                type="submit"
                className={`${styles['btn-primary']} mt-0`}
              >
                Submit
              </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Component */}
      {showPopup && popupGame && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <button 
              className={styles.popupClose}
              onClick={handleClosePopup}
            >
              ×
            </button>
            <div className={styles.popupContent}>
              <div className={styles.popupImageContainer}>
                <img
                  src={
                    imageErrors[popupGame.id]
                      ? getFallbackImage(popupGame.title, '4F46E5')
                      : popupGame.image
                  }
                  alt={popupGame.title}
                  className={styles.popupImage}
                  onError={() => handleImageError(popupGame.id)}
                />
              </div>
              <div className={styles.popupTextContent}>
                <h3 className={styles.popupTitle}>{popupGame.title}</h3>
                <p className={styles.popupSubtitle}>{popupGame.subtitle}</p>
                <p className={styles.popupDescription}>{popupGame.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Zgames;