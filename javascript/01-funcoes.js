// Crie uma função para verificar se um valor é Truthy  
function verificaSeTruthy(valor) {
    return !!valor;
}
verificaSeTruthy('oi')//true
verificaSeTruthy('')//false


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}
perimetroQuadrado(6)//24


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function digaMeuNome(nome, sobrenome) {
    return `Meu nome é ${nome} ${sobrenome}`;
}
digaMeuNome('Gabriela', 'Ono')//'Meu nome é Gabriela Ono'


// Crie uma função que verifica se um número é par
function verificaSePar(numero) {
    var modulo = numero % 2;
    if(modulo === 0) {
        return true;
    } else {
        return false;
    }
}
verificaSePar(2)//true


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return typeof dado;
}
tipoDeDado('oi')//'string'


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
    console.log('Gabriela Ono Brum');
})


// Corrija o erro abaixo:
/*function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);*/

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
