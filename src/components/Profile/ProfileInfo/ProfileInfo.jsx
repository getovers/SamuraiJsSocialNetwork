import styles from './ProfileInfo.module.css'

function ProfileInfo(){
    return (
        <div>
            <div>
                <img src='https://t4.ftcdn.net/jpg/02/12/41/71/360_F_212417151_hyKX9yamqlBlOEYeS1eKWtD6WJSx0YGY.jpg' alt=""/>
            </div>
            <div className={styles.descriptionBlock}>ava + description</div>
        </div>
    );
}
export default ProfileInfo;