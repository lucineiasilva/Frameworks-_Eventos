import styles from "../styles/Botao.module.css"
const Botao = ({ texto}) => (
    <div>

        <button className={styles.btn} type="submit">{texto}</button>

    </div>
)
 export default Botao; 
        
        

