import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
function Header(props){
    
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;