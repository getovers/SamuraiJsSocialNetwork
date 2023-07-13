import preloader from '../../../photos/preloader.gif'
import styles from './Preloader.module.css'

function Preloader(){
    return(
        <div className={styles.preloaderWrapper}>
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export default Preloader;