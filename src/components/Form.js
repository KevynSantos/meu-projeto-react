import {useState} from 'react'

function Form(){

    const [name,setName] = useState('Kevyn')

    function cadastro(e){
        e.preventDefault();
        console.log('Cadastro realizado');
        console.log(name);
    }

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastro}>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form