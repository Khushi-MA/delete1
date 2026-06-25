// home.jsx
import { useEffect, useRef } from 'react';
import styles from '../styles-pages/home.module.css';
import contactImage from '../assets/image.jpg';

export default function Home() {
  const introRef = useRef(null);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    // trigger animation after mount
    requestAnimationFrame(() => el.classList.add(styles.visible));
  }, []);

  return (
    <div className={styles.home}>
      <main>

        {/* --- Intro --- */}
        <section className={`${styles.introSection} ${styles.fadeIn}`} ref={introRef}>

          {/* Desktop: normal image. Mobile: becomes CSS background via the wrapper */}
          <div className={styles.introImageWrapper}>
            <img src={contactImage} alt="Introduction photo" className={styles.introImage} />
            <div className={styles.mobileOverlay} />
          </div>

          <div className={styles.introContent}>
            <p className={styles.introEyebrow}>ಗಣಿತ ಪ್ರಾಧ್ಯಾಪಕ · ಕವಿ · ಸಾಹಿತಿ</p>
            <h1 className={styles.pageTitle}>ವಿರೂಪಾಕ್ಷಪ್ಪ ಕೊರ್ಗಲ್</h1>
            <p className={styles.intro}>
              ನಾನು ಗಣಿತ ಪ್ರಾಧ್ಯಾಪಕರಾಗಿ ಹಲವಾರು ವರ್ಷಗಳ ಕಾಲ ಶೈಕ್ಷಣಿಕ ಕ್ಷೇತ್ರದಲ್ಲಿ
              ಸೇವೆ ಸಲ್ಲಿಸಿದ್ದೇನೆ. ಇಲ್ಲಿ ನೀವು ನನ್ನ ಶಿಕ್ಷಣ, ಅನುಭವ ಮತ್ತು ಸೇವೆಯ ಕಥನವನ್ನು
              ಓದಬಹುದು.
            </p>
          </div>
        </section>

        {/* --- Education --- */}
        <section className={styles.education}>
          <h2>ಶೈಕ್ಷಣಿಕ ಪಠ್ಯಕ್ರಮ</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>ಪ್ರಾಥಮಿಕ ಹಾಗು ಮಾದ್ಯಮಿಕ</h3>
              <h4>ಗವಿಸಿದ್ದೇಶ್ವರ ಹೈಸ್ಕೂಲು, ಕೊಪ್ಪಳ</h4>
            </div>
            <div className={styles.card}>
              <h3>ಪದವಿ</h3>
              <h4>ಜೆ.ಟಿ.ಕಾಲೇಜ್, ಗದಗ</h4>
              <p>1965 · ಬಿ.ಎ. ಗಣಿತ</p>
            </div>
            <div className={styles.card}>
              <h3>ಸ್ನಾತಕೋತ್ತರ</h3>
              <h4>ಕರ್ನಾಟಕ ವಿಶ್ವ ವಿದ್ಯಾಲಯ, ಧಾರವಾಡ</h4>
              <p>1967 · ಎಂ.ಎ. ಗಣಿತ</p>
              <p>1975 · ಎಂ.ಎ. ಕನ್ನಡ</p>
            </div>
          </div>
        </section>

        {/* --- Career --- */}
        <section className={styles.career}>
          <h2>ವೃತ್ತಿ ಮತ್ತು ಸೇವೆ</h2>
          <h3>ಗಣಿತ ಪ್ರಾಧ್ಯಾಪಕರಾಗಿ ಸೇವೆ (32 Years)</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h4 className={styles.years}>1967 – 1983</h4>
              <h3 className={styles.college}>ಗುದ್ಲೆಪ್ಪ ಹಳ್ಳಿಕೇರಿ ಕಾಲೇಜ</h3>
              <p className={styles.place}>ಹಾವೇರಿ</p>
            </div>
            <div className={styles.card}>
              <h4 className={styles.years}>1983 – 1987</h4>
              <h3 className={styles.college}>ಗಣಪತೆಪ್ಪ ಬಾಗೇವಾಡಿ ಕಾಲೇಜ</h3>
              <p className={styles.place}>ನಿಪ್ಪಾಣಿ</p>
            </div>
            <div className={styles.card}>
              <h4 className={styles.years}>1987 – 1999</h4>
              <h3 className={styles.college}>ಗುದ್ಲೆಪ್ಪ ಹಳ್ಳಿಕೇರಿ ಕಾಲೇಜ</h3>
              <p className={styles.place}>ಹಾವೇರಿ</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}