// awards.jsx
import React from 'react';
import styles from '../styles-pages/awards.module.css';

const awards = [
  { year: 1977, description: "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ - 'ಶಿವಲಿಂಗ ಕಾವ್ಯ' ಕೃತಿಗೆ." },
  { year: 1978, description: "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ - 'ಶಿವಲಿಂಗ ಕಾವ್ಯ' ಕೃತಿಗೆ." },
  { year: 1983, description: "ರಾಜ್ಯೋತ್ಸವ ಪ್ರಶಸ್ತಿ - 'ಶಿವಲಿಂಗ ಕಾವ್ಯ' ಕೃತಿಗೆ." },
  { year: 1980, description: "ವರ್ಷದ ವ್ಯಕ್ತಿಯೆಂದು ಹಾವೇರಿ ರೋಟರಿ ಕ್ಲಬನಿಂದ ಸನ್ಮಾನ." },
  { year: 1992, description: "ತೋಟದಾರ್ಯ ಮಠ ಗದಗ ಅವರಿಂದ ವೀರಶೈವ ಪುಣ್ಯ ಪುರುಷ ಮಾಲಿಕೆಯ ಗ್ರಂಥ ರಚನೆಗಾಗಿ ಸನ್ಮಾನ." },
  { year: 2004, description: "ಶಿವಲಿಂಗ ಕಾವ್ಯಕ್ಕೆ ಹುಕ್ಕೇರಿಮಠ ಪ್ರಶಸ್ತಿ." },
  { year: 2008, description: "ಮಾದನ ಹಿಪ್ಪರಗಿಯ ಶಿವಲಿಂಗೇಶ್ವರ ಮಠದಲ್ಲಿ ಸನ್ಮಾನ." },
  { year: 2011, description: "ವಿದ್ಯಾವರ್ಧಕ ಸಂಘ ಧಾರವಾಡ ಅವರ 122 ನೇ ವರ್ಷಾಚರಣೆಯಲ್ಲಿ ಸನ್ಮಾನ." },
  { year: 2012, description: "ಕರ್ನಾಟಕ ರಾಜ್ಯ ವೀರಶೈವ ಮಹಾಸಭೆಯ 75ನೇ ವರ್ಷದ ಸನ್ಮಾನ." },
  { year: 2012, description: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಜರುಗಿದ 77ನೇ ಅಖಿಲ ಭಾರತ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದಲ್ಲಿ ಸನ್ಮಾನ." },
  { year: 2020, description: "ಜೈನ ಸಾಹಿತ್ಯ ಕೊಡುಗೆಗಾಗಿ ಹಾವೇರಿ ಸಂಭವ ನಂದಿ ಮುನಿಗಳಿಂದ ಸನ್ಮಾನ." },
  { year: 2021, description: "ಶ್ರೀ ಶಿವಬಲಿಂಗ ಕಾವ್ಯ ರಚನೆಗಾಗಿ ಶಿರಿಯಾಳಕೊಪ್ಪ ಸಾಹಿತ್ಯ ಸಂಘದಿಂದ ಸನ್ಮಾನ." },
];

const Awards = () => {
  return (
    <div className={styles.awards}>
      <main>
        <section>
          <h1>ಸನ್ಮಾನ ಮತ್ತು ಸತ್ಕಾರ</h1>
          <ul>
            {awards.map((award, index) => (
              <li key={index}>
                <span className={styles.year}>{award.year}</span>
                <div className={styles.description}>{award.description}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Awards;