#  TEST-ROTATION

Este projeto foi gerado com [ CLI Angular ](https://github.com/angular/angular-cli) versão 13.3.0.

##  Rodando local

Execute `ng serve` ou `npm start` para um servidor dev. Navegue até `http://localhost:4200/` . O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

##  Build

Execute `ng build` para compilar o projeto. Os artefatos de construção serão armazenados no diretório `dist/` .

##  Executando testes unitarios

Execute `ng test` ou `npm test` para executar os testes de unidade via [ Karma ](https://karma-runner.github.io).

  ### Visualizando a cobertura de teste (coverage)

  Depois de executar o comando `npm test` , um arquivo chamado "coverage" será criado.

  Neste arquivo abra a pasta index.html

##  Dicas de preenchimento

Digite os números separados por vírgula.
exemplo: 1,2,3,4

###  Casos não suportados
  1,2 <br />
  1,2,3<br />
  1,2,3,4,5<br />
  1,2,3,4,5,6,7<br />
  1,2,3,4,5,6,7,8,9,10....<br />

### Observações finais

Aqui, responderei algumas perguntas do teste:

* O programa roda? <br />
R: sim

* A entrada e saida de dados é conforme o esperado?<br />
R: sim

* Esta formatado adequadamente? <br />
R: sim

* O programa resolve todos os casos, incluindo diferentes numeros de colunas e linhas, tabela grande ou pequena? <br />
R: Sim, a tabala foi pensada para suportar 1 numero, ou 04 á 09. Gerando uma tabela automatica de 1x1, 2x2 á 2x4, ou 3x3.<br />
Lembrando que, os casos de erros, sao tratados com mensagens de erros respectivas.

* Para casos tratados, estão sendo tradados corretamente? Como sabe disso? <br />
R: Sim, para os casos tratados, estão com mensagens respectivamente.

* Você fez teste usando algum exemplo de dado?<br />
R: Sim, utilizei esses dados abaixo:<br />
1 <br />
1,2 <br />
1,2,3 <br />
1,2,3,4 <br />
1,2,3,4,5... seguindo ate 0,1,2,3,4,5,6,7,8,9,10 <br />
555 <br />
555,24 <br />
26,333,999 <br />
85,99,125,12548 <br />

* Você escreveu teste unitário?<br />
R: Sim. realizei a criação dos testes unitarios. descrição de como obter o "coverage" mais acima, intitulada como: Executando testes unitarios

