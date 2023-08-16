import { Field } from 'redux-form';
import styles from './FormsControls.module.css'

export function Textarea ({input, meta, ...props}) {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <textarea {...input} {...props}/>
           {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export function Input ({input, meta, ...props}) {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
            {text}
        </div>
    )
        
    
}