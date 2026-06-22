// contact.jsx

import React from 'react';
import styles from '../styles-pages/contact.module.css';
import { Phone, Mail, Instagram, Linkedin } from 'react-feather';
import contactImage from '../assets/image.jpeg';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <main>
        <section>
          <div className={styles.contactImage}>
            <img src={contactImage} alt="Contact" />
          </div>

          <div className={styles.contactDetails}>
            <h1 className={styles.contactHeading}>ಸಂಪರ್ಕ</h1>

            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>
                <span className={styles.contactIcon}>
                  <Phone size={20} />
                </span>
                <span className={styles.contactName}>Phone:</span>
              </div>
              <a
                href="tel:+919448236141"
                className={styles.contactLink}
              >
                +91 94482 36141
              </a>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>
                <span className={styles.contactIcon}>
                  <Mail size={20} />
                </span>
                <span className={styles.contactName}>Email:</span>
              </div>
              <a
                href="mailto:korgal123@gmail.com"
                className={styles.contactLink}
              >
                korgal123@gmail.com
              </a>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>
                <span className={styles.contactIcon}>
                  <Instagram size={20} />
                </span>
                <span className={styles.contactName}>Instagram:</span>
              </div>
              <a
                href="https://instagram.com/abcd-123"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @abcd-123
              </a>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>
                <span className={styles.contactIcon}>
                  <Linkedin size={20} />
                </span>
                <span className={styles.contactName}>LinkedIn:</span>
              </div>
              <a
                href="https://www.linkedin.com/in/virupaxappa-korgal-6a380535/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Virupaxappa Korgal
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}