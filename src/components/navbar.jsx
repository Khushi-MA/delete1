// navbar.jsx
import { NavLink } from "react-router-dom";
import styles from "../styles-components/navbar.module.css";


export default function Navbar() {
    const links = [
        { to: "/", label: "ಮುಖಪುಟ" },
        // { to: "/about", label: "About" },
        { to: "/awards", label: "ಅಭಿನಂದನೆ" },
        { to: "/books", label: "ರಚನೆಗಳು" },
        { to: "/education", label: "ಶಿಕ್ಷಣ" },
        { to: "/family", label: "ಕುಟುಂಬ" },
        { to: "/career", label: "ವೃತ್ತಿ - ಸೇವೆ" },
        { to: "/contact", label: "ಸಂಪರ್ಕ" },
    ];

    return (
        <aside className={styles.navbar} aria-label="Primary navigation">
            {/* <nav className={styles.navInner}> */}
            <nav>
                <ul className={styles.navList}>
                    {links.map((link) => (
                        <li key={link.to} className={styles.navItem}>
                            <NavLink
                                to={link.to}
                                end={link.to === "/"}
                                className={({ isActive }) =>
                                    `${styles.navLink}${isActive ? ` ${styles.active}` : ""}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}