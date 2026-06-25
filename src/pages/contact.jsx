// contact.jsx
import styles from '../styles-pages/contact.module.css';
import { Phone, Mail, Instagram, Linkedin, Facebook, Link } from 'react-feather';
import contactlist from '../data/socials.json';

const icons = {
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
};

export default function Contact() {
  return (
    <div className={styles.contact}>
      <main>
        <section>
          <div className={styles.contactImage}>
            <img src={`${import.meta.env.BASE_URL}contact/image.jpg`} alt="background-image-contact" />
          </div>
          <div className={styles.contactDetails}>
            <h1 className={styles.contactHeading}>ಸಂಪರ್ಕ</h1>

            <div className={styles.contactTable}>
              {contactlist.map((item) => {
                const IconComponent = icons[item.icon] || Link;

                return (
                  <div key={item.name} className={styles.contactRow}>
                    <div className={styles.contactLabel}>
                      <span className={styles.contactIcon}>
                        <IconComponent size={20} />
                      </span>
                      <span className={styles.contactName}>{item.label}:</span>
                    </div>

                    <a
                      href={item.href}
                      className={styles.contactLink}
                      {...(item.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {item.value}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}