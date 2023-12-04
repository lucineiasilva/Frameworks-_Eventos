    import Link from "next/link";
   
    export default function Informacoes({descricao}) {
        return(
            
            <>
            
                    <Link href={"/"}>
                    
                    
                        
                        
                            <p>Descrição:{descricao}</p>
                          
                    </Link>
            </>
        )
            
    
    }