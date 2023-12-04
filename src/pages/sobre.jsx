import Cabecalho from "@/Components/Cabecalho";
import Card from "@/Components/Card";
import Menu from "@/Components/Menu";
import Rodape from "@/Components/Rodape";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export	default function SobreId()
{
    const [evento, setEvento] = useState ([])
    const router = useRouter()

    useEffect(() =>{
        const id = router.query.id
        if(id) {
           console.log('executou')
           axios.get(`http://localhost:3020/eventos/sobre/${id}`, id)
            .then(resultado => setEvento(resultado.data))     
    }

}, [router])

return(
    
    <>  
    <Menu />
        <Card />
        <h1>Detalhes do evento</h1>
        <h2>{evento.titulo}</h2>
        <p>{evento.descricao}</p>
        <p>{evento.inicio}</p>
        <p>{evento.termino}</p>
        <p>{evento.local}</p>


       
       
       
    </>
   
    )

}