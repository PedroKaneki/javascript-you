/*problema

elabora um algoritmo para calcular o salario liquido de 5 pessoas Solicite que o usuario digite seu nome e o valor do seu salario bruto

o imposto de renda a ser descontado do salario bruto total deve se considerar as seguintes regras: *salario bruto (de 0,00 até 1.903,98):5% *salario bruto (de 1.903.99 até 2.826,65):7,5% *salario bruto (a partir de 2.826,66):15%

versao: 07-Comandos de Decisão
*/

const prompt = require("prompt-sync")();

for (var i = 1; i<= 5; i++){

  console.log('Pessoa' + i)
  var nome = prompt("Digite seu nome:");
  var salario_bruto = parseFloat(prompt("Digite seu salario bruto: R$"));
  var dependentes = parseInt(prompt("Digite o numero de dependentes: "));

  var renda_percapita = salario_bruto / (dependentes + 1);

  if (renda_percapita >= 500) {
    if (salario_bruto > 0.0 && salario_bruto <= 1903.98) {
      var ir = salario_bruto * 0.05;
    } else if (salario_bruto <= 2826.65) {
      var ir = salario_bruto * 0.075;
    } else {
      var ir = salario_bruto * 0.015;
    }
  } else {
    var ir = 0;
  }
  var salarioLiquido = salario_bruto - ir;
  console.log(`${nome} seu salario será de R$${salarioLiquido}`);
};