function jantarEspecial() {

    let dinheiro = String(prompt(`Voce tem dinheiro? (sim/nao)`));
    let fome = String(prompt(`Voce está com fome? (sim/nao)`));
    let disponibilidade = String(prompt(`O restaurante está aberto? (sim/nao)`));

    if (dinheiro == 'nao' && fome == 'nao' && disponibilidade == 'sim'){
        console.log(`A janta hoje será em casa.`);
    }
    else if (dinheiro == 'sim' && fome == 'sim' && disponibilidade == 'nao'){
        console.log(`Peça um Delivery!`);
    }
    else if (dinheiro == 'sim' && fome == 'sim' && disponibilidade == 'sim') {
        console.log(`Hoje o jantar será no seu restaurante preferido!`);
    }
}
jantarEspecial();