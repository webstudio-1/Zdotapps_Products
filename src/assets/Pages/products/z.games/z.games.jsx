import React, { useState, useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import styles from './z.games.module.css';

// Assets
import TambolaImg from './images/Tambola.jpg';
import SudokuImg from './images/sudoku.jpg';
import SpellImg from './images/spell.jpg';
import SortonymImg from './images/sortonym.png';
import games_whiteImg from '../../../images/games_wlogo.png';

const Zgames = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeIndex, setActiveIndex] = useState(0);

  const games = useMemo(() => [
    {
      id: 'tambola',
      title: 'Tambola',
      image: TambolaImg,
      description: 'Experience the thrill of Tambola! Mark your numbers, and win with luck and strategy.'
    },
    {
      id: 'sudoku',
      title: 'Sudoku',
      image: SudokuImg,
      description: 'Sharpen your mind with classic Sudoku puzzles. Every grid is a new challenge for your logic and focus.'
    },
    {
      id: 'spell-bee',
      title: 'Spell Bee',
      image: SpellImg,
      description: 'Test your vocabulary and spelling under pressure. Can you master the toughest words?'
    },
    {
      id: 'sortonym',
      title: 'Sortonym',
      image: SortonymImg,
      description: 'Rearrange letters, discover synonyms, and unlock word magic in this brain-teasing word game.'
    }
  ], []);

  const toggleTag = useCallback((tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    alert('✨ Thank you! We’ll reach out soon.');
    setFormData({ name: '', email: '', message: '' });
    setSelectedTags([]);
  }, []);

  const currentGame = games[activeIndex];

  return (
    <div className={styles.engagePage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Play. Learn. <span className={styles.glowText}>Compete.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Welcome to <span className={styles.brand}>Z.games</span> where fun meets brainpower.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          {/* Swiper */}
          <div className={styles.carousel}>
            <Swiper
              effect="cards"
              grabCursor
              initialSlide={0}
              speed={600}
              loop
              modules={[EffectCards, Navigation]}
              navigation
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className={styles.swiper}
            >
           {games.map((game) => (
  <SwiperSlide key={game.id} className={styles.slide}>
    <div className={styles.slideInner}>
      <div className={styles.imageSection}>
        <img src={game.image} alt={game.title} className={styles.slideImage} />
      </div>
      <div className={styles.textSection}>
        <div className={styles.gameHeader}>
          <h2 className={styles.gameTitle}>{game.title}</h2>
        </div>
        <p className={styles.gameDesc}>{game.description}</p>

        {/* ✅ Login button below description */}
<div className={`d-flex justify-content-start ${styles.loginBtnWrap}`}>
  <a href="#" className={`btn btn-outline-warning ${styles.loginBtn}`}>
    Login to z.games
  </a>
</div>

      </div>
    </div>
  </SwiperSlide>
))}

            </Swiper>
            
          </div>
        

          {/* Form */}
          <div className={styles.formCard}>
            <div className={styles.logoWrap}>
              <img src={games_whiteImg} alt="Z.games" className={styles.logo} />
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
              />
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Animated Background Elements */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.particles}></div>
    </div>
  );
};

export default Zgames;