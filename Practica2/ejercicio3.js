const personas=[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28},
];
const luis= personas.find(persona=> persona.nombre=="Luis");
console.log(luis);
console.log();
personas.forEach(personaa=>console.log(personaa));
console.log();
const suma= personas.reduce((i,persona)=> i+persona.edad,0);
console.log(suma);