// footer.jsx
import styles from "../styles-components/footer.module.css";
import { NavLink } from "react-router-dom";
import { Twitter, GitHub, Linkedin, Instagram, Facebook, Mail, Link } from "react-feather";

import contactlist from "../data/socials.json";
import simpleLinks from "../data/footer-simpleLinks.json"
import subLinks from "../data/footer-subLinks.json"

const icons = { Phone: null, Mail, Instagram, Linkedin, Facebook, Twitter, GitHub };

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