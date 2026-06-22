import React from "react";
import styles from "./footer.module.css";
import { Twitter, GitHub, Linkedin, Instagram, Facebook, Mail } from "react-feather";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.icons}>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<Twitter size={32} />
				</a>
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<GitHub size={32} />
				</a>
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
					<Facebook size={32} />
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<Linkedin size={32} />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					<Instagram size={32} />
				</a>
			</div>

			{/* NAVIGATION LINKS SECTION */}
			<div className={styles.footerNavSections}>
				<div className={styles.footerNavGroup}>
					<a href="/" className={styles.footerNavTitle}>ಮುಖಪುಟ</a>
				</div>
				<div className={styles.footerNavGroup}>
					<a href="/family" className={styles.footerNavTitle}>ಕುಟುಂಬ</a>
				</div>

				<div className={styles.footerNavGroup}>
					<a href="/awards" className={styles.footerNavTitle}>ಸನ್ಮಾನ ಮತ್ತು ಸತ್ಕಾರ</a>
				</div>
				<div className={styles.footerNavGroup}>
					<a href="/contact" className={styles.footerNavTitle}>ಸಂಪರ್ಕ</a>
				</div>
			</div>
			<div className={styles.footerNavSections}>
				{/* <div className={styles.footerNavGroup}>
					<a href="/" className={styles.footerNavTitle}>ಮುಖಪುಟ</a>
					<a href="/family" className={styles.footerNavTitle}>ಕುಟುಂಬ</a>
					<a href="/awards" className={styles.footerNavTitle}>ಸನ್ಮಾನ ಮತ್ತು ಸತ್ಕಾರ</a>
					<a href="/contact" className={styles.footerNavTitle}>ಸಂಪರ್ಕ</a>
				</div> */}
				<div className={styles.footerNavGroup}>
					<a href="/about"><span className={styles.footerNavTitle}>ನನ್ನ ಬಗ್ಗೆ</span></a>
					{/* <a href="/about#page-hero" className={styles.footerSublink}>ನನ್ನ ಪರಿಚಯ</a>
					<a href="/about#my-place" className={styles.footerSublink}>ನಮ್ಮ ಊರು</a>
					<a href="/about#my-childhood" className={styles.footerSublink}>ನನ್ನ ಬಾಲ್ಯ</a>
					<a href="/about#education" className={styles.footerSublink}>ಶೈಕ್ಷಣಿಕ ಪಠ್ಯಕ್ರಮ</a>
					<a href="/about#work-service" className={styles.footerSublink}>ವೃತ್ತಿ ಮತ್ತು ಸೇವೆ</a> */}
				</div>
				<div className={styles.footerNavGroup}>
					<a href="/education"><span className={styles.footerNavTitle}>ಶಿಕ್ಷಣ</span></a>
					{/* <a href="/education#section-1" className={styles.footerSublink}>ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣ</a>
					<a href="/education#section-2" className={styles.footerSublink}>ಪ್ರೌಢಶಾಲೆಯ ಶಿಕ್ಷಣ</a>
					<a href="/education#section-3" className={styles.footerSublink}>ಕಾಲೇಜು ಶಿಕ್ಷಣ</a>
					<a href="/education#section-4" className={styles.footerSublink}>ಸ್ನಾತಕೋತ್ತರ ಶಿಕ್ಷಣ</a> */}
				</div>
				<div className={styles.footerNavGroup}>
					<a href="/work"><span className={styles.footerNavTitle}>ವೃತ್ತಿ - ಸೇವೆ</span></a>
					{/* <a href="/work#section-1" className={styles.footerSublink}>ನನ್ನ ಉದ್ಯೋಗಾನ್ವೇಷಣೆ</a>
					<a href="/work#section-2" className={styles.footerSublink}>ಕಾಲೇಜಿನ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ</a>
					<a href="/work#section-3" className={styles.footerSublink}>ನಿಪ್ಪಾಣಿ ದಿನಗಳು</a>
					<a href="/work#section-4" className={styles.footerSublink}>ಹಾವೇರಿ ದಿನಗಳು</a> */}
				</div>
				{/* <div className={styles.footerNavGroup}>
					<a href="/family" className={styles.footerLink}>ಕುಟುಂಬ</a>
				</div> */}
				<div className={styles.footerNavGroup}>
					<a href="/books"><span className={styles.footerNavTitle}>ರಚನೆಗಳು</span></a>
					{/* <a href="/books#books-section2" className={styles.footerSublink}>ಸಾಹಿತ್ಯ ರಚನೆ</a>
					<a href="/books#periodic-section" className={styles.footerSublink}>ಅಂಕಣಗಳ ಪ್ರಕಟಣೆ</a> */}
				</div>
				{/* <div className={styles.footerNavGroup}>
					<a href="/awards" className={styles.footerLink}>ಸನ್ಮಾನ ಮತ್ತು ಸತ್ಕಾರ</a>
				</div> */}
				{/* <div className={styles.footerNavGroup}>
					<a href="/contact" className={styles.footerLink}>ಸಂಪರ್ಕ</a>
				</div> */}
			</div>


			{/* DEVELOPER SECTION */}
			<div className={styles.developerSection}>
				{/* <span style={{ marginLeft: "0.5rem" }}>ವಿನ್ಯಾಸ ಮತ್ತು ಅಭಿವೃದ್ಧಿ : <strong>ಖುಷಿ</strong></span> */}
				
				<span>
					<a href="https://www.linkedin.com/in/vijaykumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.developerIcon}>
						<Linkedin size={20} />
					</a>
					<a href="mailto:vijaykumar@email.com" aria-label="Email" className={styles.developerIcon}>
						<Mail size={20} />
					</a>
					<a href="https://github.com/vijaykumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.developerIcon}>
						<GitHub size={20} />
					</a>
					<span style={{ marginLeft: "0.5rem" }}>ವಿನ್ಯಾಸ ಮತ್ತು ಅಭಿವೃದ್ಧಿ : <strong>ಖುಷಿ</strong></span>
				</span>
			</div>

			<div className={styles.copyright}>
				&copy; {new Date().getFullYear()} ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.
			</div>
		</footer>
	);
}