/*
Métodos que pode sem utilizar a classe sem a necessidade de instacia-lá
*/

function teste() {
    console.log('Este é meu teste!!!!!' + ' ' + this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        console.log(this);
        teste();
    }
    // Método de instância controle1.nomedometodo refere-se a instancia e seus dados

    aumentarVolume() {
        this.volume += 2;        
    }

    diminuirVolume() {
        this.volume -= 2;
    }
    // Método de etático quando não usamos a palavra new o construtor não é chamado
    // não tem acesso a dados da instancia.
    static trocaPilha(){
        console.log('ok vou trocar');

    }

    static soma(){
        console.log(this);
       

    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
ControleRemoto.soma();
console.log(controle1);

