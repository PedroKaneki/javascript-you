const prompt = require("prompt-sync")();

for (var i = 1; i <= 5; i++) {
  console.log("Pessoa" + i);
  var nome = prompt("Digite seu nome:");
  var salario_bruto = parseFloat(prompt("Digite seu salario bruto: R$"));
  var dependentes = parseInt(prompt("Digite o numero de dependentes: "));

  for (var i = 1; i <= dependentes; i++) {
    var salario_dependentes = parseFloat(prompt("Digite o salario dos dependentes: R$"));
      salario_bruto = salario_bruto + salario_dependentes;
  }
  var renda_percapita = salario_bruto / (dependentes + 1);

  if (renda_percapita >= 500) {
    if (salario_bruto > 0.0 && salario_bruto <= 1903.98) {
      var ir = salario_bruto * 0.05;
    } else if (salario_bruto <= 2826.65) {
      var ir = salario_bruto * 0.075;
    } else {
      var ir = salario_bruto * 0.15;
    }
  } else {
    var ir = 0;
  }
  var salarioLiquido = salario_bruto - ir;
  console.log(`${nome} seu salario será de R$${salarioLiquido}`);
}
