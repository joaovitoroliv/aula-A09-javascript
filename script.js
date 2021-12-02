/////////////////// Algumas informações importantes:///////////////////////
// - Execução de código Javascript é feita do lado do cliente;
// - Não existe um método MAIN;
// - Não é uma linguagem compilada, como a linguagem C;
// - Não é uma linguagem interpretada, como o Java;
// - Javascript é JUST IN TIME Compilation (JIT) - Quase uma linguagem interpretada;
///////////////////////////////////////////////////////////////////////////
console.log('Hello World!');
//Exemplo de função no Javascript
function saudaçoes(){
    console.log('Ola!');
    console.log('Bom dia, como vai você?');
}
saudaçoes();
saudaçoes();

// Posso usar uma função antes de declará-la!
// Declaração são carregadas antes das chamadas de função!

programacao();
programacao();
function programacao(){
    console.log('Programação é muito legal!');
}
////////////////////////////////////////////////////////////////////////////////////////////
// Mas isso pode gerar problemas, vejamos:
console.log(num); // Retorno é indefinido pois a variável nao foi inicializada
var num; // Declarações - são carregadas antes do console.log
num = 6; // Inicialização - não são carregadas antes do console.log
// Não confie no hoisting, declarar variável, inicializar e depois utilizar! SEMPRE!
///////////////////////////////////////////////////////////////////////////////////////
// Variables: var, let, const
// Variáveis no JS não são 'Fortemente Tipadas', veja:
// Function Scope Variable - Variável so vai existir dentro do 'escopo' da FUNÇÃO
var x = 15;
// Block Scope Variable - Escopo da variável seria o escopo da função FOR, por exemplo, bloco ao qual ele está inserido
let fruit = 'banana';
// Block Scope Constant - Semelhante ao let, mas não consigo modificá-lo
const isHungry = true;
//////////////////////////////////////////////////////////
//Function parameters
// Entendendo o 'var' - Resumo: se ta dentro da função é possivel de ser utilizado
function printMessage (message, times){
    for (var i = 0; i < times; i++){
        console.log(message);
    }
    console.log('Value of i is '+i);
}
printMessage('Hello João',3);

function meaningless(){
    var x = 10;
    if (x > 0){
        var y = 10;
    }
    console.log ('y is ' +y);
}
meaningless();
// console.log('y is '+y); //error
/////////////////////////////////////////////////////////////////////////////
// Entendendo o 'let' e 'const'
function Mensagem(message, times){
    for (let i = 0; i < times; i++){
        console.log(message);
        //'i' - Só vale dentro do for para CONST e LET
    }
    // console.log('Value of i is '+i); Error
}
Mensagem('Hello',5);
//////////////////////////////////////////////// COISAS ESTRANHAS ///////////////////////////////////////////
const y = 10;
// y = 0; //Error
// y++; // Error
const list = [1, 2, 3, 4];
list.push(4); //OK
x = list.length;
console.log(list); 
console.log(x); 
// Esquisito pois não é constante em arranjos
/////////////////////////////////////////////////////////////////////////////////////////////
// Variables best practices
// - Use const sempre que possível (quando não for mudar)
// - Se voce precisar que essa variável seja alterada ao decorrer do código, use 'let'
// - NÃO USE O VAR!!!!!!!!!!!!!!!!!!!!!!!! PODE DAR MUITOS ERROS USANDO VAR
// - Cuidado com conteúdo na internet que utilizam muito 'VAR' - NÃO É A MELHOR PRÁTICA!
/////////////////////////////////////////////////////////////////////////////////////////////////
// Tipos de Variáveis - 'As variáveis não tem tipos, mas os valores sim!'
//- Boolean: true and false
//- Number: todos os numeros são double, nao tem int
//- String: dentro de 'aspas simples' ou "aspas duplas"
//- Symbol: (valores unicos como chave)
//- Null: valor que significa que não tem valor (nao quero atribuir um valor agora por exemplo)
//- Undefined: valor da variável quando não foi definido um valor para ela
//Tipos objetos: Array, Date, String...etc
////////////////////////////// Operações aritméticas ///////////////////////////
const homework = 0.45;
const midterm = 0.2;
const final = 0.35;
const score = homework*87 + midterm*90 + final*95;
console.log(score); //90.4
// Sempre valores flutuantes, nao tem int
// Operadores e precendia são como em Java ou C++
// Alguns valores especiais: NaN(not a number), +Infinity, -Infinity
//Biblioteca Math que podem ser utilizadas: Math.floor, Math.ceil ... etc
////////////////////////////////////////////////////////
//Strings:
let snack = 'coo';
snack += 'kies';
console.log("I want " + snack);
snack = snack.toUpperCase();
console.log("I want " + snack);
//Definidas com aspas simples ou duplas, preferencial por SIMPLES
//Tipo de variável IMUTÁVEL - nao consigo pegar a posicao 0 da String (partes da string) e modificar 
//Nao tenho elementos do tipo char: letras sao string de tamanho 1
//Posso usar o sinal de + para concatenação
//Posso checkar o tamanho da string usando propriedade 'length'
console.log(snack.length);
//////////////////////////// VALORES BOOLEANOS //////////////////////
//Podem ser true e false
//Podem usar operadores booleanos: &&, || e !
//Exemplo:
let Fome = true;
age = 15;
pizza = 0;
let Adolescente = age > 12 && age < 20;
if (Fome && Adolescente){
    pizza++;
    console.log('Tem quantas pizzas? ' +pizza);
}
//Non-boolean values podem ser convertidos para true ou false
// - Null, undefined, 0, NaN, '', "" são iguais a FALSO
// - Qualquer outra coisa diferente disso é igual a TRUE
username = 0;
if (username){ //Se username for um valor true, entre no IF
   console.log('Username é true'); // username is defined
}
console.log(username);
//////////////////////////// IGUALDADE (ESTRANHO) //////////////////
//Javascript '==' e '!=' são esquisitos
//Exemplo:
if(null === undefined){
    console.log('True');
}
else {
    console.log('False');
}
'' == 0 //true
0 == '0' //true
'' == '0' //false - BIZARRO! 

NaN == NaN //false - BIZARRO!

[''] == '' //true

false == undefined //false
false == null //false
null == undefined //true - ATÉ QUE TA OK!
///////////////// PORTANTO, USAMOS === OU !== AO INVES DE == E != /////////
'' === '0' //false
'' === 0 //false
0 === '0' //false
NaN === NaN // estranhamente, da falso
[''] === '' //false
false === undefined //false
false === null //false
null === undefined //false
/////////// SEMPRE USE === E !=== E NÃO USE == OU != /////////////////
// NULL E UNDEFINED:
// NULL representa a falta de um valor
// UNDEFINED representa que criei a variável mas que nao foi inicializada
// É possível definir x = undefined, MAS NUNCA FAÇA ISSO!
///////////////////////////////////////////////////////////////////////
//ARRAYS são tipos de objeto usados para criar uma lista de dados
//Create an empty list
let list2 = [];
//0-based indexing - começa pelo 0
//Listas são mutáveis
//Pode ser usado propriedade length
let groceries = ['milk', 'cocoa puffs'];
groceries[1] = 'kix';
console.log(groceries);

/////////////////////////////// EVENTOS ///////////////////////////////
////////////////////////////// MUITO IMPORTANTE ///////////////////////
// Eventos são partes de código que só serão executados depois que um evento seja acionado, disparado.
// Exemplos de Eventos: Ao apertar um botão, Ao passar o mouse em cima de um botão, apertar uma tecla no teclado - Isso dispara um evento!
// Por exemplo:
function onClick(){
    // Função é chamada de 'Event Handler'
}
//////////////////// RECAPITULANDO ELEMENTOS HTML ////////////
// <button> Click me </button> - Buttons
// <input type="text" /> - Single line input
// <textarea></textarea> - Multi-line text input
///////////////////////////////////////////////////////////////

//Como fazer os elementos HTML conversarem com o Javascript?
//Introduzimos o conceito de DOM - Document Object Model
//The DOM: Arvore de nós que correspondem a estrutura de uma página HTML
//Sendo possível modificar, adicionar e remover nós do DOM, como html, head, title, body, h1, div, p e etc.
//Como acessar os elementos do DOM no Javascript? querySelector
// - document.querySelector('CSS SELECTOR');
// - Isso retorna o PRIMEIRO elemento que é semelhante ao CSS Selector
// Exemplo:
//Returns the element with id="button" - element retorna o objeto button
let element = document.querySelector('#button');
/////////// ADICIONAR UM 'OUVIDOR DE EVENTOS' ////////////////////////
///////////// EVENT LISTENERS //////////////////////////////////////
// addEventListener(event name, function name);
// - event name é o nome do evento, pode ser: click, focus, blur, etc
// - function name é a funçao que será disparada assim que o usuário clicar no botao
//Exemplo:
function onClick (){
    console.log('Clicked');
}
//Acessar DOM no Elemento 'button'
const button = document.querySelector('button');
button.addEventListener('click', onClick);
//'click' - é um tipo de ação que o usuário pode realizar
//DEU ERRO! PQ? AULA A09 - MINUTO 42:38
//Basicamente pq o browser nao pegou o botao - atributo defer
/////////////////// COMO INTERAGIMOS COM A PÁGINA ///////////////
//Voce consegue acessar atributos HTML via propriedade do DOM
//Exemplo:
//Acessando o objeto que representa a imagem
//const image = document.querySelector('img');
//Acessando o atributo SRC do objeto - Ou seja, modificar a img
//image.src = 'new-picture.png';
//Algumas exceções: não consigo acessar um atributo class via object.class
//Para isso usamos o classList:
// - Voce consegue controlar classes aplicada em um elemento HTML via classList.add e classList.remove.
// - Exemplo:
const image = document.querySelector('img');
image.src = 'exemplo1.jpg';
//Adds a CSS class called "active".
image.classList.add('active');
//Removes a CSS class called "hidden".
image.classList.remove('hidden');


