const nome = "Marcelle";
const sobrenome = "Lima";
const idade = 22;
const peso = 100;
const altura = 1.64;
let imc; //peso / (altura * altura)

let anoNacimento = (2022 - idade);

let resultado = peso / (altura * altura);
console.log(nome + " " + sobrenome, "tem "+ idade+ " anos, nasceu em " +anoNacimento+ " e tem " + altura + " de altura, e seu IMC é de "+ resultado+".");
console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNacimento} e tem ${altura} de altura, e seu IMC é de ${resultado}.`);