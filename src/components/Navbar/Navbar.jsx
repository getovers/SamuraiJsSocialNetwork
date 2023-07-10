import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(){
    return (
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.item}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/dialogs" className={navData => navData.isActive ? styles.active : styles.item}>Messages</NavLink></div>
            <div className={styles.item}><NavLink to="/users" className={navData => navData.isActive ? styles.active : styles.item}>Users</NavLink></div>
            <div className={styles.item}><a href="">News</a></div>
            <div className={styles.item}><a href="">Music</a></div>
            <div className={styles.item}><a href="">Settings</a></div>
        </nav>
    );
}
export default Navbar;