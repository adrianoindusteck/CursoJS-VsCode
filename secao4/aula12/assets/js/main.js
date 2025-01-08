function Calculadora() {

    // atributos 
    
    // //métodos privados

    // atributos públicos
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');


    // métodos públicos

    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();
    
    };

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
        this.display.focus();
    };

    this.btnClearDisplay = function() {
        this.display.value = '';
    }

    this.btnApagaUm = function() {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = function() {
        let conta = this.display.value;
        try {

            conta = eval(conta);
            if (!conta) {
                alert('Conta Inválida!');
                return;
            }
            this.display.value = String(conta);

        } catch(e) {
            alert('Conta Inválida!');
            return;
        }
    }


   


    this.cliqueBotoes = function() {
        document.addEventListener('click', (e) => {
            const el = e.target;           
            if (el.classList.contains('btn-num')) {
               this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.btnClearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.btnApagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }

        });
    }

    this.pressionaEnter = function() {
        
        this.display.addEventListener('keyup', (e) => {
            
            if (e.keyCode === 13) {
                
                this.realizaConta();
            }
        });
    }

   
}



const calculadora = new Calculadora;
calculadora.inicia();

