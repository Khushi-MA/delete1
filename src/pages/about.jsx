// about.jsx
import React from 'react';
import styles from '../styles-pages/about.module.css';
import contactImage from '../assets/image.jpeg';

const sections = [
  {
    id: 1,
    image: contactImage,
    heading: "ನನ್ನ ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣ",
	paratext: `ನಮ್ಮ ಈ ಮಹಾನ್ ಭಾರತ ದೇಶದ ಗ್ರಾಮಗಳಲ್ಲಿ, ಕಪಟವೇ ಇಲ್ಲದ ಮುಗ್ಧ ಮನಸ್ಸುಗಳೇ ಇರುತ್ತಿದ್ದವೇ ಹೊರತು ಸಂಚುಕೋರ ವಂಚಕರಿರುತ್ತಿರಲಿಲ್ಲ. ಅದಕ್ಕೆ ಆ ಪ್ರಜಾ ಸಮೂಹದವರು ರಾಜತ್ವದ ಮುಂದೆ ಕೈಯೊಡ್ಡಿ ಏನನ್ನೂ ಬೇಡುವವರೇ ಅಲ್ಲ. ಅದಕ್ಕೆ ಏನೋ ಸ್ವಾತಂತ್ರ್ಯ ಸಿಕ್ಕ ಮೇಲೆಯೂ ಹತ್ತು ಹನ್ನೆರಡು ವರ್ಷಗಳ ವರೆಗೆ ನಮ್ಮ ಊರಿಗೊಂದು ಶಾಲೆಯೆಂಬುದು ಇರಲೇ ಇಲ್ಲ. ಶಾಲೆ ಹಾಕಿ ಮಕ್ಕಳಿಗೆ ಕಲಿಸುತ್ತಿದ್ದವರು ಒಂದು ರೂಪಾಯಿ ಸಂಬಳದ ಮೇಷ್ಟರುಗಳು. ನಮ್ಮ ಊರಿನ ಮಠದಮ ಅಯ್ಯನವರು ಗವಿಯಯ್ಯನವರು ಇಲ್ಲಿ ಗಾಂವಟಿ ಶಾಲೆ ನಡೆಸುತ್ತಿದ್ದರು.ನನಗೆ ನಾಲ್ಕಯದು ವರ್ಷಗಳ ವರೆಗೆ ಪೂರ್ಣಾವಧಿ ಮಾಸ್ತರಿಕೆ ಮಾಡಿದ ಗುರು ಅಂದರೆ ಕುಂಟ ರಾಮಪ್ಪ ಮಾಸ್ತರರು. ನಮ್ಮ家的前面的那个 मंदिर就是我们的学校。 ಆಗ ಸರಕಾರದಿಂದ ಮಾನ್ಯತೆ ಪಡೆದು ನಡೆಯುತ್ತಿದ್ದ ಶಾಲೆಗಳಾದರೂ ತರಬೇತು ಪಡೆದು ಕಲಿಸುತ್ತಿದ್ದ ಮಾಸ್ತರುಗಳ ಶಾಲೆಗಳಾಗಿರಲಿಲ್ಲ. ಆಗ ಏಳನೆಯ ಇಯತ್ತೆ ಕಲಿತರ ಸಾಕು ಆತ ಶಾಲಾ ಮಾಸ್ತರ ಆಗಲಿಕ್ಕೆ ಅರ್ಹತೆ ಪಡೆಯುತ್ತಿದ್ದ.`,
  },
  {
    id: 2,
    image: contactImage,
    heading: "ನನ್ನ ಪ್ರೌಢಶಾಲೆಯ ಶಿಕ್ಷಣ",
	paratext: `ನಾನು ಮೊಟ್ಟ ಮೊದಲು ಗವಿಸಿದ್ದೇಶ್ವರ ಹೈಸ್ಕೂಲಿಗೆ ಪ್ರವೇಶ ಪಡೆದಾಗ, ಮಠದಲ್ಲಿಯೇ ವಾಸ್ತವ್ಯ ಕಲ್ಪಿಸಿ, ಗವಿಮಠದ ಪ್ರಸಾದವನ್ನುಂಡು ಇರುವ ವ್ಯವಸ್ಥೆ ಮಾಡಿದ್ದರು. ಆದರೆ ಮಠದ ನೀಯಮಗಳು ನನಗೆ ಹೊಂದಾಣಿಕೆಯಾಗಲಿಲ್ಲ. ಏಕೆಂದರೆ ವಾರದಲ್ಲಿ ಎರಡು ಸಲ ಬುಟ್ಟಿ ಹೊತ್ತು ರೊಟ್ಟಿಯ ಭಿಕ್ಷೆಗೆ ಮನೆ ಮನೆಗೆ ಭಿಕ್ಷೆಗೆ ಹೋಗಬೇಕಾಗುತ್ತಿತ್ತು. ಅದು ನನಗೆ ಹಿಡಿಸಲಿಲ್ಲ. ಅದಕ್ಕೆ ಆ ಮಠದಿಂದ ಹೊರಗೆ ಬಂದೆ. ಹೊರಗೆ ಬಮದರೂ ಶಾಲೆಯನ್ನು ಬಿಡಲಿಲ್ಲ. ನಾನು ಕೊಪ್ಪಳದಲ್ಲಿರುವಷ್ಟು ಕಾಲ ಸ್ವಯಂಪಾಕ ಮಾಡಿಕೊಂಡು ಹೊಟ್ಟೆ ತುಂಬಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೆ. ಅನ್ನ ರುಚಿಸದಿದ್ದರೂ,ಶಾಲೆಯಲ್ಲಿ ಪರಿಣತ ಶಿಕ್ಷಕರಿಲ್ಲದಿದ್ದುದಕ್ಕೆ ಪಾಠ ರುಚಿಸದಿದ್ದರೂ, ಸ್ಟವಿನ ಮೇಲೆ ಅನ್ನ ಬೇಯಿಸಿಕೊಂಡು ಎರಡು ಬಿಲ್ಲಿಯ ಮೊಸರು ಕೊಂಡೋ, ಇಲ್ಲವೇ ಗಾರ್ಡನ್ ಹೋಟೇಲಿನ ಒಂದಾಣೆಯ ಸಾಂಬರು ತಂದೋ ಹುಣಸಿ ತೊಕ್ಕದ ಗೃಹೋತ್ಪನ್ನದ ಜೊತೆಗೆ ದಿವ್ಯ ರುಚಿಯನ್ನು ಅನುಭವಿಸಿ ಉಣ್ಣುತ್ತಾ ಆ ನಳಪಾಕದ ರುಚಿಯ ಆ ದುರ್ದಿನಗಳನ್ನು ಎಣಸುತ್ತಿದ್ದೆ.`,
  },
  {
    id: 3,
    image: contactImage,
    heading: "ನನ್ನ ಕಾಲೇಜು ಶಿಕ್ಷಣ",
	paratext: `ನಾನು ಶಾಲೆಗೆ ಸೇರಿದಾಗ ನನಗೆ ಕಾಲೇಜು ಅಂದರೇನೇ ಗೊತ್ತಿರಲಿಲ್ಲ. ನಾವೆಲ್ಲ ಗೊತ್ತು ಗುರಿ ಇಲ್ಲದ ಅಮಾಯಕ ಮಕ್ಕಳು, ಮೆಟ್ರಿಕ್ ಪಾಸಾಗಿದ್ದರೂ,ಮುಂದೆ ಏನು ಕಲಿಯಬೇಕೆಂಬುದನ್ನು ಅರಿಯಲಾರದವರು. ಗದುಗಿನ ಜೆ.ಟಿ.ಕಾಲೇಜಿಗೆ ಮೊದಲ ವರ್ಷದ ವಿಜ್ಞಾನಕ್ಕೆ ಸೇರಿಕೊಂಡಿದ್ದೆ. ಅಲ್ಲಿ ಕೆ.ಎಚ್.ಪಾಟೀಲರು ನಡೆಯಿಸುತ್ತಿದ್ದ ರಿಯಾಯತಿ ದರದ ಹಾಸ್ಟೇಲಿಗೆ ಸೇರಿಕೊಂಡಿದ್ದೆ. ವಿಜ್ಞಾನದ ವಿದ್ಯಾರ್ಥಿಯಾದರೂ ಸಾಹಿತ್ಯದ ಓದಿನ ಗೀಳು ಇದ್ದುದರಿಂದ ವಿಜ್ಞಾನವನ್ನು ಬಿಟ್ಟು ಅರ್ಟ್ಟ ಕೋರ್ಸಿಗೆ ಬದಲಾಯಿಸಿಕೊಂಡಿದ್ದೆ. ...`,
  },
];

export default function About() {
  return (
    <div className={styles.about}>
      <main>

        {/* --- Story Sections --- */}
        <h1 className={styles.pageTitle}>ಜೀವನ ಪಯಣ</h1>
        {sections.map((section, index) => (
          <section
            key={section.id}
            className={`${styles.storySection} ${index % 2 === 0 ? styles.odd : styles.even}`}
          >
            <div className={styles.imageContainer}>
              <img src={section.image} alt={section.heading} />
            </div>
            <div className={styles.contentContainer}>
              <h2>{section.heading}</h2>
              <p>{section.paratext}</p>
            </div>
          </section>
        ))}

        {/* --- Education --- */}
        <section className={styles.education}>
          <h1>ಶೈಕ್ಷಣಿಕ ಪಠ್ಯಕ್ರಮ</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>ಪ್ರಾಥಮಿಕ ಹಾಗು ಮಾದ್ಯಮಿಕ</h3>
              <h4>ಗವಿಸಿದ್ದೇಶ್ವರ ಹೈಸ್ಕೂಲು, ಕೊಪ್ಪಳ</h4>
            </div>
            <div className={styles.card}>
              <h3>ಪದವಿ</h3>
              <h4>ಜೆ.ಟಿ.ಕಾಲೇಜ್, ಗದಗ</h4>
              <p>Year: 1965 · ಬಿ.ಎ. ಗಣಿತ</p>
            </div>
            <div className={styles.card}>
              <h3>ಸ್ನಾತಕೋತ್ತರ</h3>
              <h4>ಕರ್ನಾಟಕ ವಿಶ್ವ ವಿದ್ಯಾಲಯ, ಧಾರವಾಡ</h4>
              <p>1967 · ಎಂ.ಎ. ಗಣಿತ</p>
              <p>1975 · ಎಂ.ಎ. ಕನ್ನಡ</p>
            </div>
          </div>
        </section>

        {/* --- Work --- */}
        <section className={styles.work}>
          <h1>ವೃತ್ತಿ ಮತ್ತು ಸೇವೆ</h1>
          <h3>ಗಣಿತ ಪ್ರಾಧ್ಯಾಪಕರಾಗಿ ಸೇವೆ (32 Years)</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.years}>1967 – 1983</div>
              <div className={styles.college}>ಗುದ್ಲೆಪ್ಪ ಹಳ್ಳಿಕೇರಿ ಕಾಲೇಜ</div>
              <div className={styles.place}>ಹಾವೇರಿ</div>
            </div>
            <div className={styles.card}>
              <div className={styles.years}>1983 – 1987</div>
              <div className={styles.college}>ಗಣಪತೆಪ್ಪ ಬಾಗೇವಾಡಿ ಕಾಲೇಜ</div>
              <div className={styles.place}>ನಿಪ್ಪಾಣಿ</div>
            </div>
            <div className={styles.card}>
              <div className={styles.years}>1987 – 1999</div>
              <div className={styles.college}>ಗುದ್ಲೆಪ್ಪ ಹಳ್ಳಿಕೇರಿ ಕಾಲೇಜ</div>
              <div className={styles.place}>ಹಾವೇರಿ</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}