"use strict"

let a;
let b;
let operacion;
let resultado;

alert("bienvenido a la calculadora");

a=parseFloat(prompt("Introduzca un numero", a));
b=parseFloat(prompt("Introduzca otro numero", b));

operacion=prompt("Qué desea hacer con los números suma, resta, multiplicacion o division", operacion)

if(operacion==="suma"){
    function sum (a,b){
        resultado=a+b;
        alert(resultado);
    }
sum(a,b);
}else if(operacion === "resta"){
    function rest (a,b){
        resultado=a-b;
   alert(resultado);
    } 
    rest(a,b);
}else if(operacion === "multiplicacion"){
    function mult (a,b){
        resultado=a*b;
   alert(resultado);
    } 
    mult(a,b);
}else if(operacion === "division"){
    function divi (a,b){
        if(a==0){
            alert(0)
        }else if(b==0){
            alert("No se puede realizar la division");
        }else if(a&&b==0){
            alert("No se puede realizar la division");
        }else{
            resultado=a/b;
          alert(resultado);
        }  
    }
}divi(a,b);

