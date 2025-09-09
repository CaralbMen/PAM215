//Tipos de datos
"Hello World" //String
'Hello World' //String
837489279784 //entero
1.234 //Decimales
true, false //Boolean

//array
['jose', 'Ryan', 'Martha']
[1, 2, 3]
[true, false, true, false]

//Objeto
// {
//     "username": 'ryan',
//     "score": 70.4,
//     "hours": 14,
//     "proffesional":true,   
// }

// Imprimir un objeto en consola
console.log({"username":'Joe',
"Score": 70.4})

var nombre_user= "john"; //Variable
let lastname= "Carter";//Otro tipo de variable

nombre_user="Pepe"; //Se puede cambiar el valor

console.log(nombre_user);
const PI=3.14159265; //Una constante no cambia su valor
//Los nombres de variables solamente pueden comenzar con una letra, signo de dolar
//O el guión bajo
//No es necesario especificar qué tipo de variable es, 
//el nombre de la variable define el tipo
//Los nombres de las variables llevan la primera
//letra de cada palabra en mayúscula (CamelCase)
//Otra manera es con guión bajo, como user_name
//Es importante comentar el código para recordar lo que hace, se hace con dobe slash
/*
    Aquí se puede escribir un comentario de varias líneas
*/

//PROCESAR DATOS
let num1=60;
let num3= 100;
let res= num1+num2;
console.log(res);

//CONCATENACIÓN
let nombre= "Carlos";
let lastnamee="Alberto";
let nombreCompleto= nombre + ' '+ lastname;
console.log(nombreCompleto);

//COMPARACIONES
let comparacion= num1<num2;
console.log(comparacion); //Se escribe true o false, dependiendo de la comparación de ambos números

//Ejemplo de facebook (contraseñas)
let pwdDB= 'pepe123';
let input= 'pepe123';
let result= input==pwdDB;
console.log(result);

//CONDICIONALES
//Se usan para dar un control de flujo al programa
if(result===true){
    console.log("Login Correcto");
}else{
    console.log("Login incorrecto");
}
//La comparación con tres iguales es el "estrictamente igual", es una validación más fuerte que con solamente dos iguales

let score=70;
if(score>30){
    console.log("Necesitas practicar más");
}else if(score>15){
    console.log("Estás mejorando");
}else{
    console.log("Necesitas seguir un tutorial");
}

//USO DEL SWITCH
let typeCard= 'Debit Card';
switch(typeCard){
    case 'Debit Card':
        console.log("Esta es una tarjeta de débito");
        break;
    case 'Credit Card':
        console.log("Esta es una tarjeta de crédito");
        break;
    default:
        console.log("No tienes una tarjeta");
}

//BUCLES
let contador=50;
//Primero se hace la comparación y luego ejecuta o no el código
while(contador>0){
    //Todo se ejecuta mientras contador sea mayor a cero. Una vez que no se cumple, se sale del bucle
    console.log("HelloWorld");
    contador--;
}
//Hay qué tener cuidado de no crear bucles infinitos

let names=['Carlos', 'Alberto', 'Mendoza'];
console.log(names[1]); //esto imprime Alberto
console.log(names.length); //Esto imprime la cantidad de objetos que tiene un arreglo

//ITERATIVA FOR
for(let i=0; i< names.length; i++){
    console.log(names[i]);
}

//FUNCIONES
function saludar(nombre){
    //Aquí podemos desarrollar lógica de programación
    console.log("HOlaaa"+' '+ nombre);
}
saludar("Carlos"); //Manda llamar a la funcion para que se ejecute. Se puede ejecutar las veces que sean con diferentes parámetros

function add(num1, num2){
    console.log(num1+ num2);
}
add(3,2);