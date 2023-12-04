import styles from "../styles/Label.module.css"

const Label = ({htmlFor}) => (
    <div>
        <label className={styles.label} htmlFor={htmlFor}>{htmlFor}</label>

    </div>


)
export default Label;
    
  
       
    
