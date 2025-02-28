// 705.484.450-52 070.987.720-03
/*
7

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237
11 - (237 % 11) = 5 (Primeiro dígito)
se o número digito for maior que 9, consideramos 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5X
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
se o número digito for maior que 9, consideramos 0

/ 705.484.450-52 === 705.484.450-52 (cpf válido)

*/

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ''),
        });

    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;


    }

    // onserve que não usamos a palavra this nesse caso podemos converter em this
    // função do construtor

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);        
        return digito <= 9 ? String(digito) : '0';
        
    }

    valida() {
        
        if(!this.cpfLimpo) return false;        
        if(typeof this.cpfLimpo !== 'string') return false;        
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
          
        return this.novoCPF === this.cpfLimpo;

    }

    eSequencia() {
        
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;

    }
    
}

//const validacpf = new ValidaCPF('070.987.720-03');
//const validacpf = new validaCPF('000.000.000-00');

//if(validacpf.valida()){
    //console.log('CPF Válido!');
//} else {
    //console.log('CPF Inválido!')
//}