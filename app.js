const prompt = require("prompt-sync")();

var salarios = [];
var soma = 0;
var media;
var qtdMenor = 0;

for (var i = 1; i <= 5; i++) {
  console.log("Pessoa", i);
  var nome = prompt("Digite seu nome:");
  var salario_bruto = parseFloat(prompt("Digite seu salario bruto: R$"));
  var dependentes = parseInt(prompt("Digite o numero de dependentes: "));

  for (var d = 1; d <= dependentes; d++) {
    var salario_dependentes = parseFloat(
      prompt("Digite o salario dos dependentes: R$")
    );
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

  salarios.push(salarioLiquido);
  soma = soma + salarioLiquido;
}

media = soma / 5;
for (var p = 0; p <= 4; p++) {
  if (salarios[p] < media) {
    qtdMenor = qtdMenor + 1;
  }
}
console.log(`a Média dos salários líquidos são ${media} `);
console.log(`São no total de ${qtdMenor} pessoa que não estão na média`);
