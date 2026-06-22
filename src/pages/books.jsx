// books.jsx
import styles from '../styles-pages/books.module.css';
import bookImage from '../assets/image.jpeg';

const booklist = [
  { title: "ನ್ಯಾಯ ಮತ್ತು ಇತರ ಕತೆಗಳು", subtitle: "ಕಥಾ ಸಂಕಲನ", year: 1988, description: "" },
  { title: "ಬದುಕಿನ ಚಿತ್ರಗಳು", subtitle: "ಕಥಾ ಸಂಕಲನ", year: 1989, description: "" },
  { title: "ನೆಲವಿಗಿ ಮುರಿಗೆಪ್ಪನವರು", subtitle: "ಚರಿತ್ರೆ", year: 1991, description: "ತೋಂಟದಾರ್ಯಮಠ ಪ್ರಕಟಣೆ" },
  { title: "ಮಣ್ಣಿನ ಗುಣ", subtitle: "ಕಥಾ ಸಂಕಲನ", year: 1992, description: "ಮಣ್ಣಿನ ಗುಣ ಕಥೆ 1995 ದಲ್ಲಿ ಪ್ರಥಮ (ಐಚ್ಛಿಕ ಕನ್ನಡ) ಪಿ.ಯು.ಸಿ ಗೆ ಪಠ್ಯವಾಗಿತ್ತು." },
  { title: "ಕುರುಬಗೊಂಡ ಶೆಟ್ಟರು", subtitle: "ಚರಿತ್ರೆ", year: 1996, description: "ತೋಂಟದಾರ್ಯಮಠ ಪ್ರಕಟಣೆ" },
  { title: "ಸಿಂಬಳಬುರುಕನ ಕಥೆಗಳು", subtitle: "ಮಕ್ಕಳ ಕಥೆಗಳು", year: 1999, description: "" },
  { title: "ಪ್ರೀತಿಯಾಗಿ ಕಾಡಿತ್ತು ನೋಡ", subtitle: "ಒಂದು ನಾಯಿಯ ಸತ್ಯ ಕಥೆ", year: 2001, description: "" },
  { title: "ಚಕ್ಕಡಿಗೊಂದು ಮೋಟಾರು", subtitle: "ಮಕ್ಕಳ ಕಾವ್ಯ", year: 2002, description: "ಜ್ಞಾನ ವಿಜ್ಞಾನ ಪರಿಷತ್ತು ಪ್ರಕಟಣೆ" },
  { title: "ಲಲಿತ ಲಹರಿ", subtitle: "ಪ್ರಬಂಧ ಸಂಕಲನ", year: 2002, description: "" },
  { title: "ಶಬ್ದ ಸೋಪಾನ", subtitle: "ವಿಮರ್ಶೆ", year: 2003, description: "ಆ ವರ್ಷದ ಕನ್ನಡ ಮತ್ತು ಸಂಸ್ಕೃತ ಇಲಾಖೆಯ ಪುಸ್ತಕ ಬಹುಮಾನ ಪಡೆದ ಕೃತಿ." },
  { title: "ಶಿವಲಿಂಗ ಕಾವ್ಯ", subtitle: "ಭಾಮಿನಿ ಷಟ್ಪದಿಯಲ್ಲಿ ಪುರಾಣ", year: 2004, description: "" },
  { title: "ವಚನಾಂಜಲಿ", subtitle: "ವಚನಗಳ ಸಂಕಲನ", year: 2007, description: "" },
  { title: "ಗುಜುಮಾಪುರಿ", subtitle: "ಮಕ್ಕಳ ಕವಿತೆಗಳು", year: 2010, description: "" },
  { title: "ಮೀಸೆಯ ಜೋಕಾಲಿ", subtitle: "ಮಕ್ಕಳ ಕವಿತೆಗಳು", year: 2010, description: "" },
  { title: "ಹಮ್ಮಿಗೇಶ್ವರ ಚರಿತ್ರೆ", subtitle: "", year: 2010, description: "" },
  { title: "ನುಡಿ ತೋರಣ", subtitle: "ಅಂಕಣ ಬರಹಗಳು", year: 2016, description: "" },
  { title: "ಮುದೇನೂರು ಸಂಗಣ್ಣನವರು", subtitle: "ಚರಿತ್ರೆ", year: 2019, description: "ತೋಂಟದಾರ್ಯಮಠ ಪ್ರಕಟಣೆ" },
  { title: "ಗಣಿತ ವಿಳಾಸ ರಾಜಾದಿತ್ಯ", subtitle: "ಸಂಶೋಧನೆ", year: 2020, description: "" },
  { title: "ಕಾವೇರಿಯಿಂದ ಗೋದಾವರಿ", subtitle: "ಪ್ರವಾಸ ಕಥನ", year: 2021, description: "" },
  { title: "ತನಿಜೇನ ಸುಧೇ", subtitle: "ಅಂಕಣ ಬರಹಗಳು", year: 2021, description: "" },
  { title: "ಶಿವಲಿಂಗ ಪುರಾಣ", subtitle: "ಭಾಮಿನಿ ಷಟ್ಪದಿಯಲ್ಲಿ ಧಾರ್ಮಿಕ ಕಾವ್ಯ", year: 2022, description: "" },
  { title: "ಹಮ್ಮಿಗೇಶ್ವರ ಪುರಾಣ", subtitle: "ಭಾಮಿನಿ ಷಟ್ಪದಿಯಲ್ಲಿ ಧಾರ್ಮಿಕ ಕಾವ್ಯ", year: 2022, description: "" },
  { title: "ಕ್ಷೇತ್ರಗಣಿತ", subtitle: "ಹಳಗನ್ನಡ ಸಂಶೋಧನೆ", year: 2022, description: "" },
  { title: "ಮುತ್ತಿನ ಚಿಪ್ಪಿನ ಸೂತ್ರಗಳು", subtitle: "ಸಂಶೋಧನೆ", year: 2023, description: "" },
  { title: "ನುಡಿಯ ಎಡವಿತ್ತು ಕಲ್ಯಾಣ", subtitle: "ನಾಟಕ", year: 2023, description: "" },
  { title: "ಕಲ್ಯಾಣದ ಉಳಿವು", subtitle: "ಐತಿಹಾಸಿಕ ಕಾದಂಬರಿ", year: 2024, description: "" },
];

const periodicPublications = [
  'ಸಂಯುಕ್ತ ಕರ್ನಾಟಕದಲ್ಲಿ "ಕಾಮನ ಬಿಲ್ಲು" ಅಂಕಣ 15 ವಾರ ಪ್ರಕಟಣೆ (1989)',
  'ಕೌರವ ದಿನಪತ್ರಿಕೆ ಹಾವೇರಿ: ಸಿಂಬಳಬುರುಕನ ಕಥೆಗಳು (2011-2012)',
  'ಕೌರವ ದಿನಪತ್ರಿಕೆ ಹಾವೇರಿ: ಮೊಗಲಾಯಿಯಿಂದ ಯಾಲಕ್ಕಿ ನಗರಕ್ಕೆ (2013)',
  'ಆಕೃತಿ ಕನ್ನಡ.com ಅಂತರ್ಜಾಲ ಪತ್ರಿಕೆ: ಕೊಪ್ಪಳ ಹಾವೇರಿಯ ನೆನಪಿನಂಗಳದಿಂದ (2023)',
  'ಮೈಲ್ಯಾಂಗ್ ಆಡಿಯೋ ಸ್ಟೋರಿಯಲ್ಲಿ "ಜೀವದುಂಬಿದ ಗುಮ್ಮಟ - ಒಂದು ಪ್ರೇಮ್ ಕಹಾನಿ" ಕಥೆಯ ಪ್ರಸಾರ (2023)',
  'ಬುಕ್ ಬ್ರಹ್ಮ ಅಂತರ್ಜಾಲ ಮಾಧ್ಯಮದಲ್ಲಿ ಸಂದರ್ಶನ ಪ್ರಕಟ (2023)',
];

export default function Books() {
  return (
    <div className={styles.books}>
      <main>

        {/* --- Books Grid --- */}
        <section className={styles.booksSection}>
          <h1>ಸಾಹಿತ್ಯ ರಚನೆ</h1>
          <div className={styles.booksList}>
            {booklist.map((book, idx) => (
              <div className={styles.bookCard} key={idx}>
                <div className={styles.bookContent}>
                  {book.image
                    ? <img src={bookImage} alt={book.title} className={styles.bookImage} />
                    : <div className={`${styles.bookImage} ${styles.noBookImage}`}>{book.title}</div>
                  }
                  <div className={styles.bookDetails}>
                    <h4 className={styles.bookTitle}>{book.title}</h4>
                    <p className={styles.bookSubtitle}>{book.subtitle}</p>
                    <small className={styles.bookYear}>{book.year}</small>
                    {book.description && (
                      <p className={styles.bookDesc}>{book.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Periodic Publications --- */}
        <section className={styles.periodicSection}>
          <h1>ಅಂಕಣಗಳ ಪ್ರಕಟಣೆ</h1>
          <div className={styles.periodicGrid}>
            {periodicPublications.map((item, idx) => (
              <div className={styles.periodicCard} key={idx}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}