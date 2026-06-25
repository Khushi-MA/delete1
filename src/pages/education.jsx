import React from "react";
import styles from "../styles-pages/education.module.css";
import educationlist from '../data/education.json';


export default function Education() {
    return (
        <div className={styles.education}>
            <main>
                <h1 className={styles.pageTitle}>ನನ್ನ ಶಿಕ್ಷಣ</h1>

                {educationlist.map((educationunit, index) => (
                    <section
                        key={index}
                        id={`educationlist-${educationunit.id}`}
                        className={`${styles.educationSection} ${
                            index % 2 === 0
                                ? styles.imageLeft
                                : styles.imageRight
                        }`}
                    >
                        <div className={styles.imageContainer}>
                            <img src={`${import.meta.env.BASE_URL}${educationunit.image}`} alt={educationunit.heading}/>
                        </div>

                        <div className={styles.contentContainer}>
                            <h2>{educationunit.heading}</h2>

                            <div className={styles.scrollableContent}>
                                <p>{educationunit.paratext}</p>

                                {educationunit.extras && (
                                    <div>{educationunit.extras}</div>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}