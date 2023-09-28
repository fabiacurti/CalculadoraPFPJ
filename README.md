# CalculadoraPFPJ
# Atividade de Orientação a Objetos em JavaScript

Este é um projeto simples criado como parte de uma atividade de Orientação a Objetos em JavaScript. O projeto consiste em três classes: `Contribuinte`, `PessoaFisica`, `PessoaJuridica`, e uma classe `Main` para gerenciar uma coleção de contribuintes.

## Classes

### Contribuinte

A classe `Contribuinte` representa um contribuinte com os seguintes atributos:
- `nome`: Nome do contribuinte.
- `documento`: CNPJ ou CPF do contribuinte.
- `rendaBruta`: Renda bruta do contribuinte.

### PessoaFisica

A classe `PessoaFisica` herda de `Contribuinte` e inclui o atributo adicional `sexo`. Ela também implementa o método `calcImposto()`, que calcula o imposto devido de acordo com a tabela de alíquotas definida.

### PessoaJuridica

A classe `PessoaJuridica` herda de `Contribuinte` e inclui o atributo adicional `anoDeFundacao`. Ela também implementa o método `calcImposto()`, que calcula o imposto como 10% da renda bruta da empresa.

### Main

A classe `Main` é responsável por gerenciar uma coleção de contribuintes. Ela inclui métodos para adicionar contribuintes, calcular o total de impostos devidos e obter a porcentagem de contribuintes do sexo feminino na coleção.

## Exemplo de Uso

Um exemplo de uso das classes está incluído no arquivo `main.js`, onde algumas instâncias de `PessoaFisica` e `PessoaJuridica` são criadas e adicionadas a uma instância de `Main` para calcular o total de impostos devidos e a porcentagem de contribuintes do sexo feminino.

## Como Executar

Para executar o projeto, siga estas etapas:

1. Certifique-se de que você possui o Node.js instalado em seu sistema.
2. Navegue até o diretório raiz do projeto onde o arquivo `main.js` está localizado.
3. No terminal, execute o seguinte comando:

   ```bash
   node main.js

