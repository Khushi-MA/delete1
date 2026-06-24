// books.jsx
import styles from '../styles-pages/books.module.css';
import bookImage from '../assets/image.jpeg';
import booklist from '../data/booklist.json';
import periodicPublications from '../data/periodicPublications.json';

export default function Books() {
  return (
    <div className={styles.books}>
      <main>

        {/* --- Books Grid --- */}
        <h1>ರಚನೆ</h1>

        <h2>ಸಾಹಿತ್ಯ ರಚನೆ</h2>
        <section className={styles.booksSection}>
        {/* <h2>ಸಾಹಿತ್ಯ ರಚನೆ</h2> */}

          <div className={styles.booksList}>
            {booklist.map((book, idx) => (
              <div className={styles.bookCard} key={idx}>
                <div className={styles.bookContent}>
                  {book.image
                    ? <img src={book.image} alt={book.title} className={styles.bookImage} />
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
        <h2>ಅಂಕಣಗಳ ಪ್ರಕಟಣೆ</h2>
        <section className={styles.periodicSection}>
          <div className={styles.periodicGrid}>
            {periodicPublications.map((publication, idx) => (
              <div className={styles.periodicCard} key={idx}>
                <p>{publication.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}