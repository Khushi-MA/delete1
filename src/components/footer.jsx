// footer.jsx
import styles from "../styles-components/footer.module.css";
import { NavLink } from "react-router-dom";
import { Twitter, GitHub, Linkedin, Instagram, Facebook, Mail, Link } from "react-feather";
import contactlist from "../data/socials.json";

const icons = { Phone: null, Mail, Instagram, Linkedin, Facebook, Twitter, GitHub };

const simpleLinks = [
  { to: "/", label: "ಮುಖಪುಟ" },
  { to: "/family", label: "ಕುಟುಂಬ" },
  { to: "/awards", label: "ಸನ್ಮಾನ ಮತ್ತು ಸತ್ಕಾರ" },
  { to: "/contact", label: "ಸಂಪರ್ಕ" },
];

const subLinks = [
  {
    to: "/about", label: "ನನ್ನ ಬಗ್ಗೆ",
    sub: [
      { to: "/about#page-hero", label: "ನನ್ನ ಪರಿಚಯ" },
      { to: "/about#my-place", label: "ನಮ್ಮ ಊರು" },
      { to: "/about#my-childhood", label: "ನನ್ನ ಬಾಲ್ಯ" },
      { to: "/about#education", label: "ಶೈಕ್ಷಣಿಕ ಪಠ್ಯಕ್ರಮ" },
    ]
  },
  {
    to: "/education", label: "ಶಿಕ್ಷಣ",
    sub: [
      { to: "/education#section-1", label: "ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣ" },
      { to: "/education#section-2", label: "ಪ್ರೌಢಶಾಲೆಯ ಶಿಕ್ಷಣ" },
      { to: "/education#section-3", label: "ಕಾಲೇಜು ಶಿಕ್ಷಣ" },
      { to: "/education#section-4", label: "ಸ್ನಾತಕೋತ್ತರ ಶಿಕ್ಷಣ" },
    ]
  },
  {
    to: "/work", label: "ವೃತ್ತಿ - ಸೇವೆ",
    sub: [
      { to: "/work#section-1", label: "ನನ್ನ ಉದ್ಯೋಗಾನ್ವೇಷಣೆ" },
      { to: "/work#section-2", label: "ಕಾಲೇಜಿನ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ" },
      { to: "/work#section-3", label: "ನಿಪ್ಪಾಣಿ ದಿನಗಳು" },
      { to: "/work#section-4", label: "ಹಾವೇರಿ ದಿನಗಳು" },
    ]
  },
  {
    to: "/books", label: "ರಚನೆಗಳು",
    sub: [
      { to: "/books#books-section2", label: "ಸಾಹಿತ್ಯ ರಚನೆ" },
      { to: "/books#periodic-section", label: "ಅಂಕಣಗಳ ಪ್ರಕಟಣೆ" },
    ]
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Social icons from JSON */}
      <div className={styles.icons}>
        {contactlist
          .filter(item => item.external)
          .map(item => {
            const IconComponent = icons[item.icon] || Link;
            return (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                <IconComponent size={28} />
              </a>
            );
          })}
      </div>

      {/* Simple links row */}
      <div className={styles.simpleRow}>
        {simpleLinks.map(link => (
          <div key={link.to} className={styles.simpleGroup}>
            <NavLink to={link.to} className={styles.footerNavTitle}>{link.label}</NavLink>
          </div>
        ))}
      </div>

      {/* Sublinks row */}
      <div className={styles.subRow}>
        {subLinks.map(link => (
          <div key={link.to} className={styles.footerNavGroup}>
            <NavLink to={link.to} className={styles.footerNavTitle}>{link.label}</NavLink>
            {link.sub.map(s => (
              <a key={s.to} href={s.to} className={styles.footerSublink}>{s.label}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Developer section */}
      <div className={styles.developerSection}>
        <a href="https://www.linkedin.com/in/vijaykumar" target="_blank" rel="noopener noreferrer" className={styles.developerIcon}><Linkedin size={20} /></a>
        <a href="mailto:vijaykumar@email.com" className={styles.developerIcon}><Mail size={20} /></a>
        <a href="https://github.com/vijaykumar" target="_blank" rel="noopener noreferrer" className={styles.developerIcon}><GitHub size={20} /></a>
        <span>ವಿನ್ಯಾಸ ಮತ್ತು ಅಭಿವೃದ್ಧಿ : <strong>ಖುಷಿ</strong></span>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.
      </div>
    </footer>
  );
}