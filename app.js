/*********************************************************
 * Obejtivo: criar um app que tenha como entrada 02 valores
 *      e realize as quatro operações matemáticas:
 *     -somar
 *     -subtrair
 *     -multiplicar
 *     -dividir    
 * Data:30/01/2023
 * Data de modificação:03/02/2023
 * Autor(a): Layla Giovanna
 * Versão: 1.0
**********************************************************/

console.log('Sistema de Cálculo');

var readline = require('readline');
const { stdin, stdout } = require('process');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite a operação: ', function(operador) {
    let operacao = operador;

    entradaDados.question('Digite o número 1: ', function(num1) {
        let primeiroNum = Number(num1);

        entradaDados.question('Digite número 2: ', function(num2) {
            let segundoNum = Number(num2);

            let resultado = 0;

            if (operador == '+') {
                resultado = primeiroNum + segundoNum;
            } else if (operador == '-') {
                resultado = num1 - num2;
            } else if (operador == '*') {
                resultado = num1 * num2;
            } else {
                resultado = num1 / num2;
            }
            console.log(num1 + operador + num2 + '=' + resultado);
        });
    });
});