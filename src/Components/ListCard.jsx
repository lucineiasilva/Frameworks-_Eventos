import axios from "axios";
import { useEffect, useState } from "react";
import Card from './Card';
import styles from "../styles/ListCard.module.css";


const ListCard = () => {
    const [eventos, setEventos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3020/eventos")
        .then(resultado => {
            setEventos(resultado.data);
            setCarregando(false);
        })
        .catch(erro => {
            setErro(erro);
            setCarregando(false);
        });
    }, []);
    if (carregando) {
        return <p>carregando...</p>;
    }

    if (erro) {
        return <p>Erro ao carregar informações</p>
    }

    return (
    <div>
        <div  className={styles.card}>
        {eventos.map((evento => (
            
            <Card 
                key={evento.id}
                id={evento.id}
                titulo={evento.titulo}
                descricao={evento.descricao}
                inicio={evento.inicio}
                termino={evento.termino}
                local={evento.local}
                
              />  
            
        )))}
        </div>
        
    </div>

    )
 }
 
export default ListCard;
