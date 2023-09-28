import { Contribuinte } from './Contribuinte.js';

class PessoaJuridica extends Contribuinte {
    constructor(nome, documento, rendaBruta, anoDeFundacao) {
        super(nome, documento, rendaBruta);
        this.anoDeFundacao = anoDeFundacao;
    }

    calcImposto() {
        return this.rendaBruta * 0.1;
    }
}

export { PessoaJuridica }
