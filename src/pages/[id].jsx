import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export	default function EventoHome()
{
    const [evento, setEvento] = useState ([])
    const router = useRouter()

    useEffect(() =>{
        const id = router.query.id
        if(id) {
           console.log('executou')
           axios.get(`http://localhost:3020/eventos/${id}`)
            .then(resultado => setEvento(resultado.data))     
    }

}, [router])

return(

    <> 

            <h1>Detalhes do evento</h1>
            <Link href={`/eventos/:id`}/>
            
            <h2>{evento.titulo}</h2>
            <p>{evento.descricao}</p> 
    </>
    )

}