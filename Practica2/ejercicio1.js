const persona={
    nombre:"Carlos Mendoza",
    edad: 19,
    direccion:{
        ciudad:"Queretaro",
        pais: "Mexico"
    }
};
//Destructuración
const {nombre, edad, direccion}= persona;
console.log("Hola, me llamo "+ nombre, ", tengo ",edad, " años y vivo en ", direccion.ciudad);

