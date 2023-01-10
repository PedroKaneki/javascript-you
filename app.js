/*problema

elabora um algoritmo para calcular o salario liquido de uma pessoas Solicite que o usuario digite seu nome e o valor do seu salario bruto

o imposto de renda a ser descontado do salario bruto total deve se considerar as seguintes regras: *salario bruto (de 0,00 até 1.903,98):5% *salario bruto (de 1.903.99 até 2.826,65):7,5% *salario bruto (a partir de 2.826,66):15%

versao: 07-Comandos de Decisão
*/




const prompt = require('prompt-sync')();


var nome = prompt('Digite seu nome:');
var salario_bruto = parseFloat(prompt('Digite seu salario bruto: R$'));

if (salario_bruto > 0.00 && salario_bruto <= 1903.98) {
  var ir = salario_bruto * 0.05;
  var salarioLiquido = salario_bruto - ir;
  console.log(`seu salario liquido será R$${salarioLiquido}`);
}else if (salario_bruto <= 2826.65){
    var ir = salario_bruto * 0.075;
    var salarioLiquido = salario_bruto - ir
    console.log(`${nome} seu salario será de R$${salarioLiquido.toFixed(3)}`);
}else{
    var ir = salario_bruto * 0.015;
    var salarioLiquido = salario_bruto - ir
    console.log(`${nome} seu salario sera de R$${salarioLiquido}`);

};