import React from "react";
import styles from "../styles/TextArea.module.css";

const TextArea = ({name, id}) => (
    <div>
        <textarea 
            className={styles.textarea}
            name={name} 
            id={id}
            cols={30} 
            rows={10}
            
            />
    </div>
)
export default TextArea;