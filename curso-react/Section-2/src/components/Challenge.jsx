const Challenge = () => {

    const x = 4;
    const y = 2;
    const resultado = (x+y);

    const handleMostarOperacao = () => {
        console.log(resultado);
    }

    return(
        <div>
            <h1>Desafio</h1>
            <h3>Valor do 1 numero: {x}</h3>
            <h3>Valor do 2 numero: {y}</h3>
            <button onClick={handleMostarOperacao}> Resultado: {}</button>
        </div>
    )

}

export default Challenge;