import {PessoaFisica} from './PessoaFisica.js';
import {PessoaJuridica} from './PessoaJuridica.js';

    class Main {
        constructor() {
            this.contribuintes = [];
        }

        addContribuinte(contribuinte) {
            this.contribuintes.push(contribuinte);
        }

        getTotalImposto() {
            let totalImposto = 0;
            for (const contribuinte of this.contribuintes) {
                totalImposto += contribuinte.calcImposto();
            }
            return totalImposto;
        }

        getPorcentagemContribuintesFeminino() {
            const totalFeminino = this.contribuintes.filter(contribuinte =>
                contribuinte instanceof PessoaFisica && contribuinte.sexo === "Feminino"
            ).length;
            return (totalFeminino / this.contribuintes.length) * 100;
        }
    }

export { Main }

const pessoaFisica1 = new PessoaFisica("Fábia", "123.456.789-00", 2500, "Feminino");
const pessoaFisica2 = new PessoaFisica("Fernando", "987.654.321-00", 1800, "Masculino");
const pessoaJuridica1 = new PessoaJuridica("Fábia Consultoria Ltda", "12.345.678/0001-99", 50000, 2000);

const grupo = new Main();
grupo.addContribuinte(pessoaFisica1);
grupo.addContribuinte(pessoaFisica2);
grupo.addContribuinte(pessoaJuridica1);

console.log(`Total de imposto devido: R$${grupo.getTotalImposto()}`);
console.log(`Porcentagem de contribuintes do sexo feminino: ${grupo.getPorcentagemContribuintesFeminino()}%`);