function Motorista (){

    let name = String(prompt(`Insira seu nome:`));
    let age = Number(prompt(`Insira sua idade:`));
    let habilitation = String(prompt(`Voce tem carta de motorista? (sim/nao)`));
    let car = String(prompt(`Voce tem um carro? (sim/nao)`));

    if (age < 18 || habilitation == 'nao'){
        console.log(name +' Voce nao pode dirigir.');
    }
    else if (age > 18 || habilitation == 'sim' && car == 'nao'){
        console.log(name +' Pode dirigir, mas voce nao tem carro.');
    }
    if (age >18 || habilitation == 'sim' && car == 'sim'){
        console.log(name + ' Voce sera o motorista da rodada!');
    }

}

Motorista();