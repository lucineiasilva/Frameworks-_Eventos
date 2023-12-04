import { useState } from "react"
import axios from "axios";
import styles from "../styles/Eventos.module.css"
import Cabecalho from "@/Components/Cabecalho";
import Rodape from "@/Components/Rodape";
import Label from "@/Components/Label";
import Menu from "@/Components/Menu";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import Botao from "@/Components/Botao";



function InserirTodasInformações(evento) {
    const { titulo, descricao, inicio, termino, local} = evento;
    return titulo.trim() !=="" && descricao.trim() !=="" && inicio.trim() !=="" && termino.trim() !=="" && local.trim() !=="" && descricao.trim() !=="";
}

export default function Cadastrar() {
    const [imagem, setImagem] = useState('');
    const uploadImagem = async e => {
        e.preventDefault();
        console.log("Upload Imagem");
        console.log("Imagem");
    }
    const [evento, setEvento] = useState({
        titulo:" ",
        descricao: "",
        imagem: "",
        inicio: "",
        termino: "",
        local:"",

    })
    const [mensagem, setMensagem] = useState("");
    const [mostrarMensagem, setMostrarMensagem] = useState(false);


    function limpar()  {
        setEvento({
            titulo: "",
            descricao: "",
            inicio: "",
            termino: "",
            local: "",
            imagem: "",

        });
    }

    const handleChange =(e) => {
        const {name, value} = e.target;
        setEvento((prevEvento) => ({...prevEvento, [name]:value}));
   
    
    };
       async function Cadastrar(e) {
            e.preventDefault();
            setMensagem("Por favor, preencha todos os  campos");
            if(InserirTodasInformações(evento)) {
            setMostrarMensagem(true);
            return;
            }
            
        

        try {
            const resultado = axios.post('http://localhost:3020/eventos', evento)
            setMensagem("Cadastrado com sucesso!");
            console.log(resultado.data);
            limpar();
            setMostrarMensagem(true);
            
        } catch (erro) {
            console.log(erro);
            setMensagem("Erro ao cadastrar o evento. Verifique e tente novamente");
            setMostrarMensagem(true);
            
            
        }     
    }
    

    return(
        <>
        
            <Cabecalho />
            <Menu />
        {mostrarMensagem && <p>{mensagem}</p>}
            <form onSubmit={e => Cadastrar(e)}> 
            
                
        
            <div className={styles.container}>
                <div>
                    <Label  htmlFor="Título"/>
                    <Input
                        name="titulo"
                        type="text"
                        value={evento.titulo}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label  htmlFor="Início"/>
                    <Input
                        name="inicio"
                        type="datetime-local" 
                        value={evento.inicio}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label  htmlFor="Término"/>
                    <Input
                        name="termino"
                        type="datetime-local" 
                        value={evento.termino}
                        onChange={handleChange}
                    />
                    
                </div>

                <div>
                    <Label  htmlFor="Local"/>
                    <Input
                        name="local"
                        type="text"
                        value={evento.local}
                        onChange={handleChange}
                         
                    />
                </div>

                <div>
                    <Label  htmlFor="Descrição"/>
                    <TextArea
                        name="descricao"
                        id="descricao"
                        value={evento.descricao}
                        onChange={handleChange}
                    />
                    
                </div>

                <div >
                    
                    <form onSubmit={uploadImagem}>
                        <Label htmlFor="Imagem"/>
                        <Input type="file" name="imagem" onChange={e => setImagem(e.target.files[0])}/>

                    </form>
                    
                </div>
                <Botao type="submit" texto="Enviar" />
                
            </div>
            
            </form>
            
            <Rodape />
        
        </>
    );
}

