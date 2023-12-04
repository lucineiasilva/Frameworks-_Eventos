import styles from "../styles/Input.module.css"
import React from "react";

const Input = ({type, value, onChange, name}) => (
    
        
        <div>
            <input
                className={styles.input}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
            /> 

        </div>
   
   
)
export default Input;
