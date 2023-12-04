import styles from "../styles/Menu.module.css"
import Link from "next/link"

const Menu = () => (
     <>
        <div className={styles.menu}>
            
                <Link href="/">
                    <li className={styles.li}>Início</li>
                </Link>

                <Link href="/sobre">
                    <li className={styles.li}>Sobre</li>
                </Link>

                <Link href="/eventos">
                    <li className={styles.li}>Cadastrar</li>
                </Link>        
            </div>
        
    </>

) 
export default Menu;