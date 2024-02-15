//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
 
var hijos_recargo = 0.2 // 20%

//valor para recargo por propiedades
var propiedadesRecargo = 0.35 // 35%
//valor para recargo sobre salario
var SalarioRecargo = 0.05 // 5%




//Recargo
var recargo = 0
var recargo_total = 0
var recargo_hijos = 0
var recargoPropiedades = 0
var recargoSalario = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene?", "Ingrese solamente números ")
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
while (edad_numero < 18 ){
  alert ("La aseguradora no cubre a menores de 18 años")
  if (edad_numero < 18){
    prompt ("ingrese edad valida");
  } else {

  } var edad = prompt("¿Cuantos años tiene?", "Ingrese solamente números ")
} 

var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge

if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?" , "Ingrese solamente números ")
}

var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){ 
  cantidad_hijos = prompt("Cuantos hijos tiene")
}
var cantidad_hijos_numero = 0
/**
 * 1. convierta la cantidad de hijos a numero
 */
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}
//Comprobamos si se tienen propiedades
var propiedades = prompt("¿Tiene Propiedades?" , "si/no");
var cantidadPropiedades
if("SI" == propiedades.toUpperCase()){
//Confirmamos cuantas propiedades se tienen  
  cantidadPropiedades = prompt("¿Cuantas propiedades tiene?")
}
//Se convierte en numero la cantidad de propiedades 
var cantidadPropiedadesNumero = 0
if ("SI" == propiedades.toUpperCase()){
  cantidadPropiedadesNumero = parseInt(cantidadPropiedades)
}
//Comprobamos el salario mensual
var salario = prompt("¿Cual es su salario mensual?", "Ingrese solamente numeros")
var salarioNumero = 0
salarioNumero = parseInt(salario)

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} 
//aqui puede colocar un else if() con el siguiente rango
else if(edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
} else if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
} 


/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
} else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
} else if(edad_conyuge_numero>=50){
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo
}


/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if (cantidad_hijos_numero < 100){
  recargo_hijos = cantidad_hijos_numero * hijos_recargo
  recargo = precio_base * recargo_hijos
  recargo_total = recargo_total + recargo
}

// Se calcula recargo en base a la cantidad de pripiedades de que se tiene

if (cantidadPropiedadesNumero < 100){
  recargoPropiedades = cantidadPropiedadesNumero * propiedadesRecargo
  recargo = precio_base * recargoPropiedades
  recargo_total = recargo_total + recargo
}
//se calcula recargo en base al salario
if (salarioNumero < 100){
  recargoSalario = salarioNumero * SalarioRecargo
  recargo = precio_base * recargoSalario
  recargo_total = recargo_total + recargo
}


precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

