import styles from "../styles/Card.module.css"
import Link from "next/link"
import Botao from "./Botao"

export default function Card({id, imagem, titulo, descricao, inicio, termino, local}) {
    return(
        <>        
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.titulo}>Título:{titulo}</div>
                        <p>Descrição:{descricao}</p>

                        <img className={styles.img} src={imagem}/>

                        <p>Início:{inicio}</p>
                        <p>Término:{termino}</p>

                        <p>Local:{local}</p>
                        
                      <Link href={`/eventos/${id}`}>

                            <Botao  texto="Informações"/>
                        </Link>
                    </div>
                </div>
        </>
                    
                  
    );
    }
               
                
                
               
   
                       
        

    

