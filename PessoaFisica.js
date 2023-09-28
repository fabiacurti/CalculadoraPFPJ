
import { Contribuinte } from './Contribuinte.js';

class PessoaFisica extends Contribuinte {
    constructor(nome, documento, rendaBruta, sexo) {
        super(nome, documento, rendaBruta);
        this.sexo = sexo;
    }

    calcImposto() {
        if (this.rendaBruta <= 1400) {
            return 0;
        } else if (this.rendaBruta <= 2100) {
            return (this.rendaBruta * 0.1) - 100;
        } else if (this.rendaBruta <= 2800) {
            return (this.rendaBruta * 0.15) - 270;
        } else if (this.rendaBruta <= 3600) {
            return (this.rendaBruta * 0.25) - 500;
        } else {
            return (this.rendaBruta * 0.3) - 700;
        }
    }

}
export { PessoaFisica }