const TemplateExpressions = () => {

    const name = "Gabriel Siqueira";
    const pessoa = {
        age: 23,
        work: "programmer",
        company: "Globant",
    };
    return (
        <div className="TestTemplate"> 
            <h1> Olá, meu nome é {name}</h1>
            <h3>E minhas informaçoes sao:</h3>
            <p>Idade: {pessoa.age}</p>
            <p>Work: {pessoa.work}</p>
            <p>Company: {pessoa.company}</p>
        </div>
    )
};

export default TemplateExpressions;