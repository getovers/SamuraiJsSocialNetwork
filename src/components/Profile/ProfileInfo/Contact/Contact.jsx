import styles from './Contact.module.css'
function Contact({ contactTitle, contactValue }) {
    if(contactValue) return <div className={styles.contact}><a href={contactValue} target='_blank' className={styles.bold}>{contactTitle}</a></div>
}
export default Contact;