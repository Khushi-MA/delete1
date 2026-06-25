import React from "react";
import styles from "../styles-pages/career.module.css";
import careerlist from '../data/career.json';

export default function Career() {
    return (
        <div className={styles.career}>
            <main>
                <h1 className={styles.pageTitle}>ನನ್ನ ಕೆಲಸ</h1>

                {careerlist.map((careerunit, index) => (
                    <section
                        key={index}
                        id={`careerlist-${careerunit.id}`}
                        className={`${styles.workSection} ${
                            index % 2 === 0
                                ? styles.imageLeft
                                : styles.imageRight
                        }`}
                    >
                        <div className={styles.imageContainer}>
                            <img src={`${import.meta.env.BASE_URL}${careerunit.image}`} alt={careerunit.heading} />
                        </div>

                        <div className={styles.contentContainer}>
                            <h2>{careerunit.heading}</h2>

                            <div className={styles.scrollableContent}>
                                <p>{careerunit.paratext}</p>

                                {careerunit.extras && (
                                    <div>{careerunit.extras}</div>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}