const productos= [
    {nombre: "Laptop", precio:12000},
    {nombre: "Mouse",precio: 250},
    {nombre: "Teclado",precio: 750},
    {nombre: "Monitor",precio: 3000}
];
const caros= productos.filter(cosa=>cosa.precio>1000);
console.log(caros);
const nombres= caros.map(cosa => cosa.nombre);
console.log(nombres);
