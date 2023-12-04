import { useState } from "react"
import api from "../config/configApi"

export default function App() {
    
    const [imagem, setImagem] = useState('');
    const uploadImagem = async e => {
        e.preventDefault();
        console.log("Upload Imagem");
        const formData = new FormData();
        formData.append('imagem', imagem);

        const headers = {
            'headers': {
                'Content-Type': 'aplication/json'
            }
        }

        await api.post("/upload-imagem", formData, headers)
        .then((response) => {
            console.log(response);
        }).catch((err) =>{
            if(err.response){
                if(err.response){
                    console.log(err.response);
                }else{
                    console.log("Erro: Tente mais tarde!")

                }
                
            }
        });
    }
    return(
        <>
            <h1>Upload</h1>
            <form onSubmit={uploadImagem}>
                <label>Imagem</label>
                <input type="file" name="imagem" onChange={e => setImagem(e.target.files[0])}/><br />

                <button type="submit">Salvar</button>
            </form>
        
        
        </>
    )
}