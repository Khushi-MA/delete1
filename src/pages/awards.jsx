// awards.jsx
import React from 'react';
import styles from '../styles-pages/awards.module.css';
import awards from '../data/awards.json';


const Awards = () => {
  return (
    <div className={styles.awards}>
      <main>
        <h1>ಸನ್ಮಾನ ಮತ್ತು ಸತ್ಕಾರ</h1>
        <section>
          <ul>
            {awards.map((award, index) => (
              <li key={index}>
                <span className={styles.year}>{award.year}</span>
                <p className={styles.description}>{award.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Awards;

// to make:
// book appearance feature