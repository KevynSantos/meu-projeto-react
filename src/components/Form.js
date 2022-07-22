function Form(){

    function cadastro(e){
        e.preventDefault();
        console.log('Cadastro realizado');
    }

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastro}>
                <input type="text" placeholder="Digite seu nome"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form