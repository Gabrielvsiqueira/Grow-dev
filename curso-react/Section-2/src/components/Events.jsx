const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento");
    }

    const renderSomething = (x) => {
        if(x){
           return <h1>Renderizar esse elemento</h1>
        }else{
            return <h1>Renderize isso também!</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;