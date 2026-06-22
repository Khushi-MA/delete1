// navbar.jsx
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
    const links = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/awards", label: "Awards" },
        { to: "/books", label: "Books" },
        { to: "/education", label: "Education" },
        { to: "/family", label: "Family" },
        { to: "/work", label: "Work" },
        { to: "/contact", label: "Contact" },
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