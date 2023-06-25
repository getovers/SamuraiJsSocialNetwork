import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""/>
        </header>
    );
}
export default Header;