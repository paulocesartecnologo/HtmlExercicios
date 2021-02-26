/*--------------SAIDAS / OUTPUT -------------------------------------------------------
document.getElementById("titulo").innerHTML="Opa, tudo bem ?";
document.write("Algum coisa");
window.alert("Mensagem de exemplo")
console.log("A mensagem que eu irei inserir aqui sera mostrado no console")
*/
/*-------------- VARIAVEIS ------------------------------------------------------------
var nome  = "Cesar";                        //Hoisting / variavel global
let nome  = "Cesar";                        //Hoisting / variavel local
const nome= "Cesar";                        //Hoisting / variavel de valor constante
var sobrenome = "Reis";                     //Hoisting / variavel global
var salvo   = true;                         //variavel booleana
var idade = 90;
var a = 10;
var b = 15;
var total = a + b; 
var nomecompleto = nome + " " + sobrenome;
//document.write(nomecompleto);
*/
/*-------------- CONDICIONAL ------------------------------------------------------------
var hora = 20;
    if(hora <= 12){
        window.alert("Bom Dia");
    }   else if(hora <= 18){
            window.alert("Boa Tarde");
        }elseif (hora <= 23){
            window.alert("Boa Noite");   
        }
*/
/*-------------- GetElementById InnerHTML------------------------------------------------
//document.getElementById("titulo").innerHTML = "Olá Mundo";
var titulo = document.getElementById("titulo");
titulo.innerHTML = "Segundo Titulo";
var campo = document.getElementById("campo");
campo.value = "Reis";
*/
/*-------------- Funções ----------------------------------------------------------------
function alterar(){
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;    
}//alterar();

function somar(x,y){
    let total = x + y;
    return total;
}
var resultado = somar(50,50);
console.log(resultado);
*/
//-------------- Evento de Clique ----------------------------------------------------------------
























